export interface ProductSpec {
  val: string;
  lbl: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  priceOriginal: string;
  description: string;
  image: string;
  badge: string;
  badgeClass: string;
  isFeatured: boolean;
  specs?: ProductSpec[];
}

export const products: Product[] = [
  {
    id: "p1",
    name: "PurraFeed Solo (Camera AI)",
    price: "3.450.000đ",
    priceOriginal: "4.190.000đ",
    description: "🛡️ Thiết bị tối ưu cho thú cưng có camera AI 1080P thông minh.",
    image: "/assets/images/purra_feed_hero.webp",
    badge: "Bán chạy nhất",
    badgeClass: "bg-accent-gold-light text-[#C87E28] border border-accent-gold/30",
    isFeatured: true,
    specs: [
      { val: "1080P HD", lbl: "Camera AI" },
      { val: "3.0 Lít", lbl: "Dung tích" },
      { val: "App WiFi", lbl: "Kết nối" },
    ],
  },
  {
    id: "p2",
    name: "PurraFeed Lite (Tiết kiệm)",
    price: "2.450.000đ",
    priceOriginal: "2.990.000đ",
    description: "⚙️ Cho ăn hẹn giờ tự động qua nút bấm cơ học bền bỉ.",
    image: "/assets/images/purra_feed_fresh_solo.webp",
    badge: "Giá hợp lý",
    badgeClass: "bg-accent-sage-light text-[#3B574C] border border-accent-sage/25",
    isFeatured: false,
  },
  {
    id: "p3",
    name: "PurraFeed Dual (Ngăn kép)",
    price: "4.450.000đ",
    priceOriginal: "5.290.000đ",
    description: "🌾 Hai ngăn chứa độc lập, tự động trộn thức ăn khô và sấy thăng hoa.",
    image: "/assets/images/purra_feed_dual_hopper.webp",
    badge: "Ngăn chứa kép",
    badgeClass: "bg-accent-coral-light text-[#C93E2B] border border-accent-coral/25",
    isFeatured: false,
  },
];
