import { catalogProducts, site } from "../content/site";
import { ProductNetflixRail } from "./ProductNetflixRail";

export function ProductsSection() {
  const h = site.productsHead;
  return (
    <section className="products products--light" id="produtos" aria-labelledby="products-heading">
      <div className="products__head-wrap">
        <div className="lp-head lp-head--split lp-head--tight">
          <div>
            <p className="lp-kicker">{h.kicker}</p>
            <h2 id="products-heading" className="section-title section-title--left">
              {h.title}
            </h2>
          </div>
          <p className="lp-head__lead">{h.lead}</p>
        </div>
      </div>
      <ProductNetflixRail items={catalogProducts} />
    </section>
  );
}
