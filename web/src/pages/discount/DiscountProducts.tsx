import { Product } from "../../components/homePageComponents/Product";
import { ProductSection } from "../../components/homePageComponents/ProductSection";
import { useFetch } from "../../hooks/useFetch";

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  cover_url: string;
  item_set: string;
  price: number;
};
export function DiscountProductsPage() {
  document.title = "React Store - Promoções";
  const { data: products } = useFetch<Product[]>("products");
  const discountProducts = products?.filter(
    (product) => product.item_set == "Produtos obsoletos"
  );

  return (
    <div>
      {!discountProducts || discountProducts.length === 0 ? (
        <h2>Nada a mostrar</h2>
      ) : (
        <ProductSection
          title="Produtos com preços imperdiveis"
          subtitle="Nesta seção você encontra tudo em liquidação, alguns produtos podem estar com preços ineditos"
        >
          {discountProducts?.map((product) => (
            <div key={product.id}>
              <Product
                id={product.id}
                name={product.name.substring(0, 25).concat(" ...")}
                price={product.price}
                cover_url={product.cover_url}
              />
            </div>
          ))}
        </ProductSection>
      )}
    </div>
  );
}
