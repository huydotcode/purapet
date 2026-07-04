import Image from "next/image";
import { aboutLinks, supportLinks, contactInfo, socialLinks } from "@/constants/footer";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-custom py-8 lg:py-16 text-text-muted text-[0.9rem]">
      <div className="w-full max-w-275 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="flex flex-col">
            <a href="#" className="inline-flex items-center mb-6">
              <Image src="/logo.png" alt="PuraPet Logo" width={38} height={38} className="h-[38px] w-[38px] object-contain" />
              <span className="text-[1.35rem] font-extrabold font-display ml-2.5 text-text-primary">PuraPet</span>
            </a>
            <p className="max-w-70 leading-relaxed">
              PuraPet là thương hiệu công nghệ thú cưng thông minh hàng đầu, cung cấp các giải pháp chăm sóc sức khỏe và dinh dưỡng tự động
              chuẩn khoa học cho thú cưng của bạn.
            </p>
          </div>

          <div>
            <h4 className="font-display text-[0.95rem] font-bold text-text-primary mb-6 uppercase tracking-wider">Về PuraPet</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {aboutLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="transition-all duration-200 hover:text-accent-sage hover:pl-0.5">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[0.95rem] font-bold text-text-primary mb-6 uppercase tracking-wider">Hỗ Trợ Khách Hàng</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="transition-all duration-200 hover:text-accent-sage hover:pl-0.5">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[0.95rem] font-bold text-text-primary mb-6 uppercase tracking-wider">Liên Hệ</h4>

            <div className="flex flex-col gap-4">
              <div className="flex gap-2.5 items-start">
                <svg
                  className="w-[18px] h-[18px] text-accent-sage shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-snug">{contactInfo.address}</span>
              </div>

              <div className="flex gap-2.5 items-start">
                <svg
                  className="w-[18px] h-[18px] text-accent-sage shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="leading-snug">{contactInfo.phone}</span>
              </div>

              <div className="flex gap-2.5 items-start">
                <svg
                  className="w-[18px] h-[18px] text-accent-sage shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="leading-snug">{contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border-custom pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="m-0">&copy; {new Date().getFullYear()} PuraPet Corporation. All Rights Reserved.</p>
          <div className="flex gap-4.5">
            {socialLinks.map((social, idx) => (
              <a key={idx} href={social.href} className="transition-colors hover:text-accent-sage">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
