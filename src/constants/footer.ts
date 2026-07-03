export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export const aboutLinks: FooterLink[] = [
  { label: "Trang chủ thương hiệu", href: "#" },
  { label: "Lịch trình cho ăn", href: "#dac-diem" },
  { label: "Cơ chế chống nghẽn", href: "#an-toan" },
  { label: "Bảng so sánh kỹ thuật", href: "#thong-so" },
];

export const supportLinks: FooterLink[] = [
  { label: "Trung tâm bảo hành PuraPet", href: "#" },
  { label: "Chính sách đổi trả hàng", href: "#" },
  { label: "Hướng dẫn cài đặt App", href: "#" },
  { label: "Đối tác KOC/KOL liên kết", href: "#" },
];

export const contactInfo: ContactInfo = {
  address: "Chi nhánh chính: Quận 1, Thành phố Hồ Chí Minh",
  phone: "Hotline tư vấn: +84 (0) 862 258 929",
  email: "info@purapet.vn",
};

export const socialLinks: FooterLink[] = [
  { label: "Facebook", href: "#" },
  { label: "Youtube", href: "#" },
  { label: "Tiktok", href: "#" },
];
