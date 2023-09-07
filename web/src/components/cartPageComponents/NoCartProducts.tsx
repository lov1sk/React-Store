export function NoCartProducts() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "50%",
        paddingTop: "32px",
      }}
    >
      <h1
        style={{ fontSize: "1.5em", fontWeight: 400, color: "rgb(55 65 81)" }}
      >
        Voce não possui itens no carrinho!
      </h1>
    </section>
  );
}
