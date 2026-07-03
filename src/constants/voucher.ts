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
