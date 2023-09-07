type userRequest = {
  name: string;
  category: string;
  coverUrl?: string;
  price: number;
  buyedAt: string;
};

export function UserRequestProduct({
  name,
  category,
  price,
  buyedAt,
  coverUrl,
}: userRequest) {
  return (
    <>
      <div
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          margin: "16px 0",
          padding: "16px",
          display: "flex",
          flexDirection: "row",
          gap: "16px",
        }}
      >
        <img
          src={coverUrl}
          alt="cover_product_url"
          style={{
            objectFit: "scale-down",
            height: "120px",
            width: "150px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>{name}</p>
          <small style={{ marginTop: "12px" }}>Categoria: {category} </small>
          <small>Valor: R${price} </small>
          <small>Comprado em: {buyedAt}</small>
        </div>
      </div>
    </>
  );
}
