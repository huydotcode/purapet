import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-dvh flex items-center pt-25 pb-xl bg-bg-primary relative overflow-hidden transition-all duration-400"
    >
      <Image
        src="/hero_bg.webp"
        alt="PuraPet Hero Background"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#121e1c]/95 via-[#121e1c]/80 to-[#121e1c]/15 z-10 pointer-events-none" />

      <div className="w-full max-w-275 mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center relative z-20">
        {/* Khối nội dung bên trái */}
        <div className="animate-slide-left-fade text-left z-30">
          <p className="font-display text-[0.85rem] font-extrabold text-accent-gold uppercase tracking-[0.22em] mb-sm">
            Dinh dưỡng tự động & Khoa học
          </p>

          <h1 className="text-[clamp(2.4rem,4.8vw,3.6rem)] text-white font-display font-bold leading-[1.1] mb-md text-left [text-shadow:0_2px_10px_rgba(0,0,0,0.35)]">
            PuraPet PurraFeed Solo <span className="text-accent-coral [text-shadow:0_2px_10px_rgba(0,0,0,0.2)]">Chuẩn Giờ Tròn Bữa</span>
          </h1>

          <p className="text-[1.05rem] text-[#C5D7D1] mb-lg max-w-150 text-left leading-[1.6]">
            Trải nghiệm chăm sóc thú cưng thông minh với camera HD góc rộng, đàm thoại 2 chiều và công nghệ chống kẹt hạt độc quyền. Đảm bảo
            bữa ăn tươi ngon, chuẩn giờ cho thú cưng của bạn. Nhập khẩu và bảo hành chính hãng 12 tháng bởi <strong>PuraPet Corp</strong>.
          </p>

          {/* Nút CTA */}
          <div className="flex gap-sm mb-lg justify-start flex-col sm:flex-row">
            <a
              href="#nhan-tin"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 font-display font-bold text-[0.95rem] rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap
                bg-accent-coral text-white shadow-[0_8px_24px_var(--accent-coral-light)] hover:bg-accent-coral-hover hover:-translate-y-0.5 hover:shadow-(--glow-coral)"
            >
              Đặt Trước Ngay
            </a>

            <a
              href="#dac-diem"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 font-display font-bold text-[0.95rem] rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap
                border-2 border-white/40 text-white hover:bg-white hover:text-text-primary hover:border-white hover:-translate-y-0.5"
            >
              Khám Phá Lịch Trình
            </a>
          </div>

          {/* Các cam kết nổi bật */}
          <div className="flex gap-lg justify-start flex-wrap">
            <div className="flex items-center gap-2.5 text-[0.9rem] font-semibold text-[#C5D7D1]">
              <svg className="text-accent-coral w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>Phân phối chính hãng 100%</span>
            </div>

            <div className="flex items-center gap-2.5 text-[0.9rem] font-semibold text-[#C5D7D1]">
              <svg className="text-accent-coral w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Bảo hành 1 đổi 1 trong 30 ngày</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block h-100"></div>
      </div>
    </section>
  );
}
