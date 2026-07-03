export const navLinks = [
  { href: "#hero", label: "Trang Chủ", id: "hero" },
  { href: "#dac-diem", label: "Lịch Trình Ăn", id: "dac-diem" },
  { href: "#thong-so", label: "Thông Số", id: "thong-so" },
  { href: "#cua-hang", label: "Sản Phẩm", id: "cua-hang" },
  { href: "#nhan-tin", label: "Nhận Ưu Đãi", id: "nhan-tin" },
];

export const sections = navLinks.map((link) => ({ id: link.id, label: link.label }));
