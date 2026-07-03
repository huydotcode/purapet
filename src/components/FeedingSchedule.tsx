"use client";
import { scheduleTabs } from "@/constants/schedule-task";
import Image from "next/image";
import { useState } from "react";

export default function FeedingSchedule() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="dac-diem" className="py-24 bg-bg-primary overflow-hidden">
      <div className="w-full max-w-275 mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-162.5 mx-auto">
          <span className="inline-block px-3.5 py-1.5 text-[0.72rem] font-bold tracking-wider uppercase text-text-muted bg-bg-secondary rounded-full mb-3.5">
            Một ngày của bé cưng
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-text-primary mb-4">Lịch Trình Cho Ăn Khoa Học</h2>
          <p className="text-[1rem] text-text-muted leading-relaxed">
            Hãy cùng xem chu kỳ hoạt động chính xác theo thời gian thực của máy cho ăn camera thông minh PurraFeed.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="flex flex-col lg:flex-row gap-16 mt-10">
          <div
            className="relative flex flex-row lg:flex-col lg:w-60 gap-2 lg:gap-6 justify-between lg:justify-start
                overflow-x-auto lg:overflow-x-visible whitespace-nowrap lg:whitespace-normal scrollbar-none
                border-b border-border-custom lg:border-b-0 lg:border-l-0 pb-3 lg:pb-0 z-10
                lg:before:content-[''] lg:before:absolute lg:before:left-4.75 lg:before:top-3.5 lg:before:bottom-3.5 lg:before:w-0.5 lg:before:bg-border-custom lg:before:-z-1"
          >
            {scheduleTabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex flex-row lg:flex-col items-center lg:items-start gap-2 lg:gap-1 shrink-0 
                    px-2.5 lg:pl-10 lg:pr-2.5 py-2.5 lg:py-2.5 cursor-pointer text-left border-b-2 lg:border-b-0 transition-all duration-300 hover:translate-x-0 lg:hover:translate-x-1.5 focus:outline-none
                    ${isActive ? `${tab.activeColor} lg:border-transparent` : "border-transparent"}`}
                >
                  <span
                    className={`hidden lg:block absolute left-[14px] top-[18px] w-2.5 h-2.5 rounded-full border-2 border-bg-primary z-10 transition-all duration-300
                      ${isActive ? tab.activeDot : "bg-border-custom"}`}
                  />

                  <span className={`font-mono text-xl font-bold transition-colors duration-200 ${isActive ? "" : "text-text-muted"}`}>
                    {tab.time}
                  </span>
                  <span
                    className={`hidden lg:block font-display text-[0.9rem] font-semibold transition-colors duration-200 ${isActive ? "text-text-primary" : "text-text-muted"}`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex-1 min-h-110 lg:min-h-auto relative">
            {scheduleTabs.map((tab, index) => {
              const isActive = activeTab === index;
              if (!isActive) return null;
              return (
                <div key={tab.id} className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center h-full">
                  <div className="animate-parallax-text-in flex flex-col items-start">
                    <span
                      className={`inline-block px-3.5 py-1.5 text-[0.72rem] font-bold tracking-wider uppercase rounded-full mb-3.5 ${tab.badgeColor}`}
                    >
                      {tab.badge}
                    </span>
                    <h3 className="font-display text-2xl font-bold leading-tight text-text-primary mb-3.5">{tab.title}</h3>
                    <p className="font-body text-[0.98rem] leading-relaxed text-text-muted">{tab.desc}</p>
                  </div>

                  <div className="animate-parallax-media-in rounded-2xl overflow-hidden shadow-custom-sm border border-border-custom aspect-4/3 bg-bg-secondary flex items-center justify-center group">
                    <Image
                      src={tab.image}
                      alt={tab.title}
                      width={500}
                      height={375}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
