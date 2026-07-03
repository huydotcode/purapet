# PuraPet PurraFeed - Landing Page Máy Cho Ăn Tự Động Kèm Camera

Dự án Landing Page giới thiệu dòng sản phẩm máy cho ăn tự động cao cấp **PuraPet PurraFeed** dành cho thú cưng. Trang web được thiết kế theo phong cách hiện đại, trực quan, phản hồi nhanh (fully responsive) và tối ưu hóa tối đa trải nghiệm người dùng cùng hiệu năng tải trang.

## 🚀 Công Nghệ Sử Dụng (Tech Stack)

Dự án được xây dựng trên nền tảng Next.js hiện đại:

- **Framework**: [Next.js 16.2](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Kèm `@tailwindcss/postcss`)
- **Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Tiêu đề), [Be Vietnam Pro](https://fonts.google.com/specimen/Be+Vietnam+Pro) (Nội dung), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Thông số kỹ thuật/Thời gian) được tối ưu tải thông qua `next/font`.
- **Form & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Hosting**: Tối ưu sẵn sàng deploy lên Vercel / Netlify / Cloudflare Pages.

---

## ✨ Tính Năng Nổi Bật

1. **Giao Diện Hiện Đại & Cao Cấp (Premium UI/UX)**:
   - Phối màu chủ đạo Sage Green (Xanh xô thơm), Coral (San hô) cùng tone nền tối giản tạo cảm giác tinh tế, phù hợp với dòng sản phẩm thú cưng thông minh cao cấp.
   - Bố cục bất đối xứng, khoảng trống (padding/margin) được tính toán tỉ mỉ tạo trải nghiệm chuẩn nghệ thuật editorial.

2. **Lịch Trình Cho Ăn Khoa Học (Feeding Schedule)**:
   - Timeline tương tác trực quan cho phép người dùng theo dõi chu trình hoạt động của thiết bị và thói quen sinh hoạt của thú cưng theo thời gian thực (Sáng, Trưa, Tối, Đêm).
   - Tích hợp hiệu ứng chuyển đổi mượt mà với các hiệu ứng hoạt cảnh (`animate-parallax-text-in`, `animate-parallax-media-in`).

3. **So Sánh Thông Số Kỹ Thuật (Specs Comparison)**:
   - Bảng so sánh chi tiết giữa: *PurraFeed (Camera)*, *PuraPet Solo (Không camera)* và *Bát ăn truyền thống*.
   - Hỗ trợ giao diện Responsive nâng cao: Tự động chuyển đổi từ dạng bảng (Desktop) sang cấu trúc Tab-switcher lựa chọn sản phẩm (Mobile) để đảm bảo không vỡ khung hình trên các màn hình nhỏ.

4. **Biểu Mẫu Nhận Voucher Linh Hoạt (Voucher Registration)**:
   - Form đăng ký nhận cẩm nang dinh dưỡng và mã coupon giảm giá 10% (`PURRAFEED10`).
   - Kiểm tra tính hợp lệ dữ liệu nhập (Validation) chặt chẽ bằng Zod ở Client.
   - Gửi dữ liệu về webhook thực tế (mock qua `https://httpbin.org/post`).
   - Xử lý trạng thái tải (Loading Skeleton) và thông báo Toast thành công/thất bại sinh động.

5. **Tối Ưu SEO & Tốc Độ Tải Trang**:
   - Sử dụng thẻ ngữ nghĩa HTML5 (Semantic HTML).
   - Tải font tối ưu, nén ảnh tự động qua `next/image` với cơ chế Lazy Loading.
   - Khai báo đầy đủ SEO Metadata, Open Graph tags trong [layout.tsx](file:///d:/Projects/purapet/code/src/app/layout.tsx) phục vụ việc hiển thị tối ưu khi chia sẻ liên kết.

---

## 📂 Cấu Trúc Thư Mục Dự Án

Cấu trúc thư mục được thiết kế theo tiêu chuẩn sạch sẽ, tách biệt rõ ràng giữa logic giao diện, hằng số dữ liệu và cấu hình:

```text
code/
├── public/                  # Chứa hình ảnh tĩnh, logo, assets của sản phẩm
└── src/
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css      # Cấu hình Tailwind v4 Theme Tokens & Animations
    │   ├── layout.tsx       # Khởi tạo Fonts, SEO Metadata và cấu trúc khung HTML
    │   └── page.tsx         # Trang chủ lắp ráp các Section Components
    ├── components/          # Các component giao diện độc lập (Header, Hero, Specs...)
    ├── constants/           # Tách biệt hoàn toàn dữ liệu tĩnh (nav, product, specs...)
    └── hooks/               # Các custom hooks bổ trợ (useScroll, useScrollSpy)
```

---

## 🛠️ Hướng Dẫn Chạy Dự Án Dưới Local

Để khởi chạy dự án tại máy cá nhân, hãy thực hiện theo các bước sau:

### 1. Yêu cầu hệ thống
- Máy tính đã cài đặt **Node.js** (Khuyên dùng v20 trở lên)
- Trình quản lý gói **pnpm** (Khuyên dùng) hoặc **npm** / **yarn**

### 2. Cài đặt các thư viện phụ thuộc
Chạy lệnh sau tại thư mục chứa mã nguồn (`code/`):
```bash
pnpm install
# hoặc
npm install
```

### 3. Khởi chạy máy chủ phát triển (Development Server)
```bash
pnpm dev
# hoặc
npm run dev
```
Sau đó truy cập địa chỉ [http://localhost:3000](http://localhost:3000) trên trình duyệt của bạn.

### 4. Xây dựng bản Production (Build)
Kiểm tra tính đúng đắn của TypeScript và đóng gói ứng dụng:
```bash
pnpm build
```
