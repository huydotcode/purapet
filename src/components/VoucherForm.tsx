"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { voucherSchema, VoucherFormData, deviceOptions, promoChecklist } from "@/constants/voucher";

interface Toast {
  id: number;
  message: string;
  type: "success" | "error";
}

export default function VoucherForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<VoucherFormData>({
    resolver: zodResolver(voucherSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      device: "solo",
      agree: false,
    },
  });

  const agreeValue = watch("agree");

  const showToast = (message: string, type: "success" | "error") => {
    const newToast: Toast = { id: Date.now(), message, type };
    setToasts((prev) => [...prev, newToast]);
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((prev) => prev.slice(1));
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const onSubmit = async (data: VoucherFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (response.ok) {
        setIsSuccess(true);
        showToast("Đăng ký thành công! Đã gửi cẩm nang qua Email.", "success");
      } else {
        throw new Error();
      }
    } catch {
      showToast("Không thể gửi đăng ký. Vui lòng thử lại sau.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    reset();
    setIsSuccess(false);
  };

  return (
    <section id="nhan-tin" className="py-24 bg-bg-secondary border-t border-border-custom overflow-hidden relative">
      <div className="w-full max-w-275 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[0.68rem] font-mono font-bold tracking-[0.2em] uppercase text-accent-sage mb-4 block">
              COLLABORATION & GIFT
            </span>
            <h2 className="text-3xl lg:text-[2.5rem] font-display font-extrabold text-text-primary mb-6 leading-[1.15] tracking-tight">
              Nhận thực đơn dinh dưỡng & Voucher 10%
            </h2>
            <p className="text-[0.95rem] text-text-muted leading-relaxed mb-10 max-w-[48ch]">
              Đăng ký nhận cẩm nang phân bổ bữa ăn chuẩn khoa học từ đội ngũ chuyên gia của PuraPet và nhận ngay mã Voucher giảm giá 10% cho
              dòng sản phẩm PurraFeed.
            </p>

            <div className="flex flex-col border-b border-border-custom max-w-125">
              {promoChecklist.map((item, idx) => (
                <div key={idx} className="flex gap-6 py-4.5 border-t border-border-custom text-[0.92rem] text-text-primary items-center">
                  <span className="font-mono font-bold text-accent-sage tracking-wider text-[0.85rem]">0{idx + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 w-full bg-white p-8 lg:p-10 rounded-3xl border border-border-custom shadow-xs relative min-h-120 flex flex-col">
            {isLoading && (
              <div className="absolute inset-0 bg-white p-8 lg:p-10 rounded-3xl flex flex-col gap-6 animate-pulse z-10">
                <div className="h-5 bg-bg-secondary rounded w-2/5"></div>
                <div className="h-12 bg-bg-secondary rounded-xl"></div>
                <div className="h-12 bg-bg-secondary rounded-xl"></div>
                <div className="h-12 bg-bg-secondary rounded-xl"></div>
                <div className="h-12 bg-bg-secondary rounded-full mt-auto"></div>
              </div>
            )}

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-10 grow">
                <div className="w-14 h-14 bg-accent-sage-light text-accent-sage border border-accent-sage/15 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <svg className="w-6 h-6 stroke-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="font-display font-extrabold text-xl text-text-primary mb-2">Đăng Ký Thành Công!</h3>
                <p className="text-[0.9rem] text-text-muted mb-6 leading-relaxed">
                  Chúng tôi đã gửi cẩm nang dinh dưỡng cùng mã giảm giá vào email của bạn.
                </p>
                <div className="bg-accent-sage-light text-accent-sage font-mono font-bold text-lg px-6 py-3 rounded-lg border border-accent-sage/15 mb-8">
                  PURRAFEED10
                </div>
                <button
                  onClick={handleReset}
                  className="w-full h-11 font-display font-bold text-[0.88rem] rounded-full border border-border-custom bg-bg-secondary text-text-primary hover:bg-bg-tertiary transition-colors duration-200 cursor-pointer"
                >
                  Đăng ký email khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col grow justify-between">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[0.78rem] font-display font-semibold tracking-wider uppercase text-text-muted"
                      htmlFor="user-name"
                    >
                      Họ và tên của &quot;Sen&quot; <span className="text-accent-coral">*</span>
                    </label>
                    <input
                      type="text"
                      id="user-name"
                      {...register("name")}
                      placeholder="Nhập họ và tên..."
                      className={`w-full px-4.5 py-3 border bg-bg-primary rounded-xl text-[0.92rem] font-medium text-text-primary outline-none transition-all duration-300 focus:border-accent-sage focus:bg-white focus:ring-4 focus:ring-accent-sage-light/60 placeholder:text-text-muted/40
                        ${errors.name ? "border-accent-coral" : "border-border-custom"}`}
                    />
                    {errors.name && <span className="text-accent-coral text-xs mt-1">{errors.name.message}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[0.78rem] font-display font-semibold tracking-wider uppercase text-text-muted"
                      htmlFor="user-email"
                    >
                      Địa chỉ Email <span className="text-accent-coral">*</span>
                    </label>
                    <input
                      type="email"
                      id="user-email"
                      {...register("email")}
                      placeholder="example@gmail.com"
                      className={`w-full px-4.5 py-3 border bg-bg-primary rounded-xl text-[0.92rem] font-medium text-text-primary outline-none transition-all duration-300 focus:border-accent-sage focus:bg-white focus:ring-4 focus:ring-accent-sage-light/60 placeholder:text-text-muted/40
                        ${errors.email ? "border-accent-coral" : "border-border-custom"}`}
                    />
                    {errors.email && <span className="text-accent-coral text-xs mt-1">{errors.email.message}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[0.78rem] font-display font-semibold tracking-wider uppercase text-text-muted"
                      htmlFor="user-phone"
                    >
                      Số điện thoại liên hệ
                    </label>
                    <input
                      type="tel"
                      id="user-phone"
                      {...register("phone")}
                      placeholder="Nhập số điện thoại (Không bắt buộc)..."
                      className={`w-full px-4.5 py-3 border bg-bg-primary rounded-xl text-[0.92rem] font-medium text-text-primary outline-none transition-all duration-300 focus:border-accent-sage focus:bg-white focus:ring-4 focus:ring-accent-sage-light/60 placeholder:text-text-muted/40
                        ${errors.phone ? "border-accent-coral" : "border-border-custom"}`}
                    />
                    {errors.phone && <span className="text-accent-coral text-xs mt-1">{errors.phone.message}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5 relative">
                    <label
                      className="text-[0.78rem] font-display font-semibold tracking-wider uppercase text-text-muted"
                      htmlFor="device-version"
                    >
                      Phiên bản bạn quan tâm <span className="text-accent-coral">*</span>
                    </label>
                    <div className="relative w-full">
                      <select
                        id="device-version"
                        {...register("device")}
                        className="w-full px-4.5 py-3 border border-border-custom bg-bg-primary rounded-xl text-[0.92rem] font-medium text-text-primary outline-none transition-all duration-300 focus:border-accent-sage focus:bg-white focus:ring-4 focus:ring-accent-sage-light/60 cursor-pointer appearance-none pr-10"
                      >
                        {deviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-white text-text-primary">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-4.5 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex flex-col gap-1">
                    <label
                      className="flex items-start gap-3 cursor-pointer text-[0.85rem] text-text-muted select-none"
                      htmlFor="user-agree"
                    >
                      <input type="checkbox" id="user-agree" {...register("agree")} className="absolute opacity-0 pointer-events-none" />
                      <span
                        className={`w-4.5 h-4.5 border rounded-md shrink-0 flex items-center justify-center transition-all duration-200 mt-0.5
                        ${
                          agreeValue
                            ? "bg-accent-sage border-accent-sage text-white"
                            : errors.agree
                              ? "border-accent-coral bg-accent-coral/5"
                              : "bg-bg-primary border-border-custom hover:border-accent-sage hover:bg-accent-sage-light"
                        }`}
                      >
                        <svg
                          className={`w-2.5 h-2.5 stroke-[4px] text-white transition-opacity duration-200 ${agreeValue ? "opacity-100" : "opacity-0"}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span className="leading-snug">Tôi muốn nhận cẩm nang nuôi dưỡng và các chương trình ưu đãi của PuraPet.</span>
                    </label>
                    {errors.agree && <span className="text-accent-coral text-xs mt-1">{errors.agree.message}</span>}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  <button
                    type="submit"
                    className="w-full h-12 font-display font-bold text-[0.95rem] rounded-full bg-accent-coral text-white shadow-[0_8px_24px_var(--accent-coral-light)] transition-all duration-200 hover:bg-accent-coral-hover hover:shadow-(--glow-coral) active:scale-[0.98] active:translate-y-px cursor-pointer"
                  >
                    Đăng ký ngay
                  </button>
                  <div className="text-[0.78rem] text-text-muted text-center leading-normal">
                    <span>* Số lượng ưu đãi có hạn. Chỉ còn 15 suất quà cẩm nang vật lý. </span>
                    <p className="mt-1.5">
                      Bằng việc đăng ký, bạn đồng ý với{" "}
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="underline text-accent-coral font-semibold hover:text-accent-coral-hover cursor-pointer bg-transparent border-none p-0 inline"
                      >
                        Chính sách bảo mật thông tin
                      </button>{" "}
                      của PuraPet.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-text-primary/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-card-bg border border-border-custom rounded-2xl w-[90%] max-w-125 p-8 shadow-lg relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-transparent border-none cursor-pointer text-text-muted hover:bg-bg-secondary p-1.5 rounded-full flex items-center justify-center transition-colors"
              aria-label="Đóng chính sách bảo mật"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="font-display text-xl font-extrabold text-text-primary mb-6">Chính Sách Bảo Mật Thông Tin</h3>
            <div className="text-[0.9rem] text-text-muted leading-relaxed flex flex-col gap-4">
              <p>
                Chào mừng bạn đến với PuraPet. Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn một cách tuyệt đối khi bạn đăng ký nhận
                cẩm nang và voucher tại website của chúng tôi.
              </p>
              <div>
                <h4 className="text-text-primary font-bold mb-1">1. Thông tin thu thập</h4>
                <p>
                  Chúng tôi chỉ thu thập Họ tên và Địa chỉ Email nhằm mục đích gửi cẩm nang dinh dưỡng và mã giảm giá 10% dòng sản phẩm
                  PurraFeed. Số điện thoại (nếu có cung cấp) chỉ dùng để gọi xác nhận hoặc tư vấn hỗ trợ, hoàn toàn không bắt buộc.
                </p>
              </div>
              <div>
                <h4 className="text-text-primary font-bold mb-1">2. Cam kết bảo mật dữ liệu</h4>
                <p>
                  PuraPet cam kết không chia sẻ, bán hay chuyển giao dữ liệu cá nhân của bạn cho bất kỳ bên thứ ba nào khác. Hệ thống lưu
                  trữ dữ liệu tuyệt đối bảo mật và tuân thủ các quy định an toàn.
                </p>
              </div>
              <div>
                <h4 className="text-text-primary font-bold mb-1">3. Hủy đăng ký</h4>
                <p>
                  Bạn có thể yêu cầu chúng tôi xóa bỏ thông tin cá nhân khỏi danh sách nhận tin bất kỳ lúc nào bằng cách gửi yêu cầu qua
                  email hỗ trợ <strong className="text-text-primary">info@purapet.vn</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed top-24 right-6 z-2000 flex flex-col gap-2.5 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto bg-card-bg text-text-primary shadow-lg border-y border-r border-border-custom p-4.5 rounded-sm flex items-center gap-3 min-w-70 max-w-95 transition-all duration-300 animate-specs-fade-in
              ${toast.type === "success" ? "border-l-4 border-l-[#10b981]" : "border-l-4 border-l-[#ef4444]"}`}
          >
            <span className={`text-[1.2rem] ${toast.type === "success" ? "text-[#10b981]" : "text-[#ef4444]"}`}>
              {toast.type === "success" ? "✓" : "✗"}
            </span>
            <span className="text-[0.88rem] font-semibold">{toast.message}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
