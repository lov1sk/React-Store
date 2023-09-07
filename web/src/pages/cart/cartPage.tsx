import { useEffect, useState } from "react";
import { CartItem } from "../../components/cartPageComponents/CartItem";
import { CartSection } from "../../components/cartPageComponents/CartSection";
import { NoCartProducts } from "../../components/cartPageComponents/NoCartProducts";

type Product = {
  id: string;
  name: string;
  category: string;
  cover_url: string;
  price: number;
};

export function CartPage() {
  document.title = "React Store - Carrinho";
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    const itensStored =
      JSON.parse(sessionStorage.getItem("cartProducts")!) ?? [];
    if (!itensStored || itensStored.length == 0) return;

    setCartProducts(itensStored);
  }, []);
  return (
    <>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <h2
          style={{
            fontWeight: "500",
            padding: "10px 0",
          }}
        >
          Meu Carrinho
        </h2>
        <h4
          style={{
            color: "rgb(113 113 122)",
            fontWeight: "400",
            fontSize: "0.9em",
          }}
        >
          Produtos que você armazenou no carrinho!
        </h4>
      </header>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "48px",
        }}
      >
        <CartSection>
          {!cartProducts || cartProducts.length == 0 ? (
            <NoCartProducts />
          ) : (
            cartProducts.map((product) => (
              <CartItem
                key={product.id}
                imageUrl={product.cover_url}
                name={product.name}
                category={product.category}
                price={product.price.toString()}
              />
            ))
          )}
        </CartSection>

        {!cartProducts || cartProducts.length == 0 ? null : (
          <section
            style={{
              marginTop: "14px",
              width: " 22em",
              height: "15em",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              gap: "24px",
            }}
          >
            <h3>Total dos pedidos</h3>
            <div
              style={{
                marginTop: "24px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>Subtotal</p>
              <p style={{ display: "block" }}>
                R$:
                {cartProducts
                  .reduce((acc, product) => acc + product.price, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>Qtd. Items</p>
              <p>{cartProducts.length}</p>
            </div>
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h4>Total Price</h4>
              <p>
                R$:{" "}
                {cartProducts
                  .reduce((acc, product) => acc + product.price, 0)
                  .toFixed(2)}
              </p>
            </div>
          </section>
        )}
      </section>
    </>
  );
}
