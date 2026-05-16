import { catalogProducts } from "../content/site";
import { ProductNetflixRail } from "./ProductNetflixRail";

export function ProductsSection() {
  return (
    <section className="products products--band" id="produtos" aria-labelledby="products-heading">
      <div className="products__head-wrap">
        <div className="products__head-inner">
          <h2 id="products-heading" className="section-title section-title--light">
            Nossos produtos e Serviços
          </h2>
          <p className="section-lead section-lead--light products__lead-nf">
          Cuidar da sua mente e das suas emoções é o primeiro passo para uma vida plena. Oferecemos um espaço seguro, acolhedor e humanizado para apoiar você em sua jornada de autoconhecimento, cura e bem-estar integral.
            
          </p>
        </div>
      </div>
      <ProductNetflixRail items={catalogProducts} />
    </section>
  );
}
