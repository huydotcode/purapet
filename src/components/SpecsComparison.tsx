"use client";

import { specsData, SpecValue } from "@/constants/specs-data";
import { useState } from "react";

export default function SpecsComparison() {
  const [activeMobileTab, setActiveMobileTab] = useState<"purrafeed" | "solo" | "traditional">("purrafeed");

  const renderStatusIcon = (type: string, isHighlighted: boolean) => {
    if (type === "check") {
      return (
        <div
          className={`inline-flex items-center justify-center w-7 h-7 rounded-full border shadow-sm transition-transform duration-200 hover:scale-110
          ${isHighlighted ? "bg-accent-sage-light text-accent-sage border-accent-sage/15" : "bg-bg-secondary text-text-muted border-border-custom"}`}
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      );
    }
    return (
      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-accent-coral/15 bg-accent-coral-light text-accent-coral opacity-75 transition-transform duration-200 hover:scale-110">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    );
  };

  const renderValueCell = (val: SpecValue) => {
    if (val.type) {
      return renderStatusIcon(val.type, val.highlight);
    }

    const weightClass = val.highlight ? "font-bold" : val.empty ? "font-normal" : "font-medium";
    const colorClass = val.highlight ? "text-accent-sage" : val.empty ? "text-text-muted/60" : "text-text-muted";

    return (
      <>
        <span className={`font-display text-[0.95rem] block ${weightClass} ${colorClass}`}>{val.main}</span>
        {val.sub && (
          <span className={`font-body text-[0.76rem] font-medium block mt-1 ${val.highlight ? "text-text-muted" : "text-text-muted/80"}`}>
            {val.sub}
          </span>
        )}
      </>
    );
  };

  return (
    <section id="thong-so" className="py-24 bg-bg-primary overflow-hidden">
      <div className="w-full max-w-275 mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-162.5 mx-auto">
          <span className="inline-block px-3.5 py-1.5 text-[0.72rem] font-bold tracking-wider uppercase text-text-muted bg-bg-secondary rounded-full mb-3.5">
            So sánh tính năng
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-text-primary mb-4">Thông Số Kỹ Thuật Chi Tiết</h2>
          <p className="text-[1rem] text-text-muted leading-relaxed">
            Hãy so sánh PuraPet PurraFeed với các phương thức cho ăn khác để chọn giải pháp tối ưu nhất cho bé cưng.
          </p>
        </div>

        {/* 1. Giao diện Desktop (Bảng So Sánh) */}
        <div className="hidden lg:block w-full overflow-hidden border border-border-custom bg-card-bg rounded-2xl">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="border-b border-border-custom">
                <th className="w-[30%] px-6 py-6 text-left font-display font-bold text-text-primary text-[0.95rem]">Tính Năng So Sánh</th>

                {/* Cột sản phẩm PuraFeed (Nổi bật) */}
                <th className="w-[25%] px-6 py-6 bg-white border-b border-border-custom rounded-t-2xl shadow-[0_-10px_25px_rgba(74,107,94,0.03)] relative z-10">
                  <div className="inline-block px-3 py-1 mb-2 bg-linear-to-r from-accent-gold to-[#E89A3E] text-white text-[0.62rem] font-extrabold rounded-full tracking-wider uppercase shadow-[0_4px_10px_rgba(242,169,80,0.25)] border border-white/20">
                    KHUYÊN DÙNG
                  </div>
                  <span className="block font-display font-extrabold text-[1.05rem] text-accent-sage">PuraPet PurraFeed</span>
                </th>

                <th className="w-[22%] px-6 py-6 font-display font-semibold text-text-primary text-[0.95rem]">PuraPet Solo</th>

                <th className="w-[23%] px-6 py-6 font-display font-semibold text-text-primary text-[0.95rem]">Bát Cho Ăn Truyền Thống</th>
              </tr>
            </thead>
            <tbody>
              {specsData.map((row, idx) => (
                <tr key={idx} className="border-b border-border-custom last:border-b-0 group">
                  <td className="px-6 py-5 text-left transition-colors duration-200 group-hover:bg-white/70">
                    <span className="font-display font-bold text-[0.9rem] text-text-primary block">{row.name}</span>
                    <span className="font-body text-[0.78rem] text-text-muted leading-relaxed block mt-1">{row.desc}</span>
                  </td>

                  <td
                    className={`px-6 py-5 bg-white relative z-10 transition-colors duration-200 group-hover:bg-accent-sage/1 border-b border-border-custom
                        ${idx === specsData.length - 1 ? "rounded-b-2xl shadow-[0_15px_30px_rgba(74,107,94,0.06)]" : ""}`}
                  >
                    {renderValueCell(row.purrafeed)}
                  </td>

                  <td className="px-6 py-5 transition-colors duration-200 group-hover:bg-white/70">
                    <div className={row.solo.empty ? "opacity-70 font-normal" : ""}>{renderValueCell(row.solo)}</div>
                  </td>

                  <td className="px-6 py-5 transition-colors duration-200 group-hover:bg-white/70">
                    <div className={row.traditional.empty ? "opacity-70 font-normal" : ""}>{renderValueCell(row.traditional)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile (Tabbed Cards) */}
        <div className="block lg:hidden w-full">
          {/* Menu Tab */}
          <div className="flex bg-bg-secondary p-1.5 rounded-full mb-10 gap-1 border border-border-custom max-w-100 mx-auto">
            <button
              onClick={() => setActiveMobileTab("purrafeed")}
              className={`flex-1 py-2.5 font-display font-bold text-[0.88rem] rounded-full transition-all duration-300 cursor-pointer
                ${activeMobileTab === "purrafeed" ? "bg-white text-accent-sage shadow-md" : "text-text-muted"}`}
            >
              PurraFeed
            </button>
            <button
              onClick={() => setActiveMobileTab("solo")}
              className={`flex-1 py-2.5 font-display font-bold text-[0.88rem] rounded-full transition-all duration-300 cursor-pointer
                ${activeMobileTab === "solo" ? "bg-white text-accent-sage shadow-md" : "text-text-muted"}`}
            >
              Solo
            </button>
            <button
              onClick={() => setActiveMobileTab("traditional")}
              className={`flex-1 py-2.5 font-display font-bold text-[0.88rem] rounded-full transition-all duration-300 cursor-pointer
                ${activeMobileTab === "traditional" ? "bg-white text-accent-sage shadow-md" : "text-text-muted"}`}
            >
              Bát Ăn
            </button>
          </div>

          <div className="w-full">
            {/* Card 1: PurraFeed */}
            {activeMobileTab === "purrafeed" && (
              <div className="animate-specs-fade-in bg-white border border-border-custom rounded-2xl px-6 py-8 shadow-lg">
                <div className="border-b border-border-custom pb-6 mb-6 text-center">
                  <span className="inline-block px-3 py-1 mb-2 bg-accent-gold-light text-accent-gold text-[0.62rem] font-bold rounded-full uppercase tracking-wider">
                    Khuyên Dùng
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-accent-sage">PuraPet PurraFeed</h3>
                  <p className="font-display text-lg font-extrabold text-accent-coral mt-1.5">3.450.000đ</p>
                </div>
                <ul className="list-none p-0 m-0">
                  {specsData.map((row, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center py-4 border-b border-dashed border-border-custom last:border-b-0"
                    >
                      <span className="font-display font-bold text-[0.88rem] text-text-primary text-left pr-4">{row.name}</span>
                      <div className="text-right flex flex-col items-end text-[0.88rem] font-bold text-accent-sage">
                        {renderValueCell(row.purrafeed)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Card 2: Solo */}
            {activeMobileTab === "solo" && (
              <div className="animate-specs-fade-in bg-white border border-border-custom rounded-2xl px-6 py-8 shadow-md">
                <div className="border-b border-border-custom pb-6 mb-6 text-center">
                  <h3 className="font-display text-xl font-extrabold text-text-primary">PuraPet Solo</h3>
                  <p className="font-display text-lg font-extrabold text-accent-coral mt-1.5">2.450.000đ</p>
                </div>
                <ul className="list-none p-0 m-0">
                  {specsData.map((row, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center py-4 border-b border-dashed border-border-custom last:border-b-0"
                    >
                      <span className="font-display font-bold text-[0.88rem] text-text-primary text-left pr-4">{row.name}</span>
                      <div
                        className={`text-right flex flex-col items-end text-[0.88rem] font-medium text-text-primary ${row.solo.empty ? "opacity-75 font-normal" : ""}`}
                      >
                        {renderValueCell(row.solo)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Card 3: Bát Ăn */}
            {activeMobileTab === "traditional" && (
              <div className="animate-specs-fade-in bg-white border border-border-custom rounded-2xl px-6 py-8 shadow-md">
                <div className="border-b border-border-custom pb-6 mb-6 text-center">
                  <h3 className="font-display text-xl font-extrabold text-text-primary">Bát Ăn Truyền Thống</h3>
                  <p className="font-display text-lg font-extrabold text-text-muted mt-1.5">Giá rẻ / Tự làm</p>
                </div>
                <ul className="list-none p-0 m-0">
                  {specsData.map((row, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center py-4 border-b border-dashed border-border-custom last:border-b-0"
                    >
                      <span className="font-display font-bold text-[0.88rem] text-text-primary text-left pr-4">{row.name}</span>
                      <div
                        className={`text-right flex flex-col items-end text-[0.88rem] font-medium text-text-primary ${row.traditional.empty ? "opacity-75 font-normal" : ""}`}
                      >
                        {renderValueCell(row.traditional)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
