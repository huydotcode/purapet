import { z } from "zod";

export interface DeviceOption {
  value: string;
  label: string;
}

export const PHONE_REGEX = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;

export const promoChecklist: string[] = [
  "Cẩm nang thiết kế thực đơn phù hợp với từng giống mèo.",
  "Nhận mã giảm giá tức thì qua hòm thư điện tử.",
  "Cam kết không gửi thư rác quảng cáo gây phiền toái.",
];

export const deviceOptions: DeviceOption[] = [
  { value: "solo", label: "PurraFeed Solo (Camera AI) - 3.450.000đ" },
  { value: "lite", label: "PurraFeed Lite (Tiết kiệm) - 2.450.000đ" },
  { value: "dual", label: "PurraFeed Dual (Ngăn kép) - 4.450.000đ" },
];

export const voucherSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ tên thú chủ"),
  email: z.string().min(1, "Vui lòng nhập địa chỉ email").email("Địa chỉ email không đúng định dạng"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || PHONE_REGEX.test(val), "Số điện thoại Việt Nam không đúng định dạng"),
  device: z.string(),
  agree: z.boolean().refine((val) => val === true, {
    message: "Bạn cần đồng ý với điều khoản nhận cẩm nang",
  }),
});

export type VoucherFormData = z.infer<typeof voucherSchema>;
