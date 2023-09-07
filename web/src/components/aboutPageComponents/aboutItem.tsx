type AboutComponentProps = {
  //children: React.ReactNode;
  title: string;
  cover_url: string;
  alt: string;
  description: string;
};

export function AboutComponent({
  cover_url,
  title,
  alt,
  description,
}: AboutComponentProps) {
  return (
    <>
      <div
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: "32px",
          margin: "32px 0",
          display: "grid",
          gridTemplateColumns: "2fr 6fr",
          gap: "32px",
        }}
      >
        <img
          src={cover_url}
          alt={alt}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <div style={{ maxWidth: "500px" }}>
          <h2 style={{ fontWeight: 500, marginBottom: "12px" }}>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
