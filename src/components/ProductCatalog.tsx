import { products } from "@/constants/product";
import Image from "next/image";

export default function ProductCatalog() {
  const featuredProduct = products.find((p) => p.isFeatured)!;
  const smallProducts = products.filter((p) => !p.isFeatured);

  return (
    <section id="cua-hang" className="py-24 bg-bg-secondary border-y border-border-custom overflow-hidden">
      <div className="w-full max-w-275 mx-auto px-6">
        <div className="text-center mb-16 max-w-162.5 mx-auto">
          <span className="inline-block px-3.5 py-1.5 text-[0.72rem] font-bold tracking-wider uppercase text-text-muted bg-bg-primary rounded-full mb-3.5 border border-border-custom">
            Hệ sinh thái PuraPet
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-text-primary mb-4">Các Phiên Bản PurraFeed</h2>
          <p className="text-[1rem] text-text-muted leading-relaxed">
            Lựa chọn phiên bản phù hợp nhất với nhu cầu dinh dưỡng và lối sống của bé cưng nhà bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">
          <div className="group flex flex-col h-full bg-card-bg border border-border-custom rounded-2xl p-6 lg:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-accent-coral/25 relative overflow-hidden">
            <div className="relative bg-bg-secondary rounded-xl overflow-hidden aspect-square">
              <Image
                src={featuredProduct.image}
                alt={featuredProduct.name}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col grow pt-6">
              <span
                className={`inline-block px-2.5 py-1 text-[0.72rem] font-bold uppercase tracking-wider rounded-md mb-2.5 w-fit ${featuredProduct.badgeClass}`}
              >
                {featuredProduct.badge}
              </span>

              <h3 className="font-display font-extrabold text-xl lg:text-2xl text-text-primary mb-2 transition-colors duration-300 group-hover:text-accent-coral">
                {featuredProduct.name}
              </h3>

              <div className="text-[0.85rem] text-text-muted mb-2">{featuredProduct.description}</div>

              <div className="text-2xl font-extrabold text-accent-coral mb-3.5 font-display flex items-baseline gap-2">
                {featuredProduct.price}
                <span className="text-[0.95rem] font-medium text-text-muted line-through ml-0.5">{featuredProduct.priceOriginal}</span>
              </div>

              <div className="grid grid-cols-3 gap-3 my-3.5 border-y border-dashed border-border-custom py-3">
                {featuredProduct.specs?.map((spec, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <span className="font-display font-bold text-[0.85rem] text-text-primary">{spec.val}</span>
                    <span className="text-[0.68rem] text-text-muted uppercase tracking-wider mt-0.5">{spec.lbl}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-3.5">
                <a
                  href="#nhan-tin"
                  className="inline-flex items-center justify-center w-full h-12 font-display font-bold text-[0.95rem] rounded-full bg-accent-coral text-white shadow-[0_8px_24px_var(--accent-coral-light)] transition-all duration-200 hover:bg-accent-coral-hover hover:shadow-(--glow-coral)"
                >
                  Đặt Trước Ngay
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:flex lg:flex-col lg:gap-10">
            {smallProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col md:flex-col lg:flex-row h-full lg:h-[calc(50%-20px)] bg-card-bg border border-border-custom rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-accent-coral/25 relative overflow-hidden"
              >
                <div className="relative w-full lg:w-[38%] bg-bg-secondary rounded-xl overflow-hidden aspect-square lg:aspect-auto shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col grow pt-4 lg:pt-0 lg:pl-6 justify-center">
                  <span
                    className={`inline-block px-2.5 py-1 text-[0.72rem] font-bold uppercase tracking-wider rounded-md mb-2 w-fit ${product.badgeClass}`}
                  >
                    {product.badge}
                  </span>

                  <h3 className="font-display font-bold text-[1.05rem] text-text-primary mb-1 transition-colors duration-300 group-hover:text-accent-coral">
                    {product.name}
                  </h3>

                  <div className="text-[0.8rem] text-text-muted mb-2 leading-relaxed">{product.description}</div>

                  <div className="text-[1.15rem] font-extrabold text-accent-coral mb-3.5 font-display flex items-baseline gap-1.5">
                    {product.price}
                    <span className="text-[0.85rem] font-medium text-text-muted line-through ml-0.5">{product.priceOriginal}</span>
                  </div>

                  <div className="mt-auto">
                    <a
                      href="#nhan-tin"
                      className="inline-flex items-center justify-center w-full h-10 font-display font-bold text-[0.85rem] rounded-full border-2 border-accent-coral text-accent-coral bg-transparent transition-all duration-200 hover:bg-accent-coral hover:text-white hover:shadow-(--glow-coral)"
                    >
                      Đặt Trước Ngay
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
