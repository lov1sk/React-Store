type productSectionType = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
};
export function ProductSection({
  children,
  title,
  subtitle,
}: productSectionType) {
  return (
    <section>
      <div
        style={{
          margin: "32px 0",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          paddingLeft: "32px",
        }}
      >
        <h1 style={{ fontWeight: "600" }}>{title}</h1>
        <h4
          style={{
            color: "rgb(113 113 122)",
            fontWeight: "400",
            fontSize: "0.9em",
          }}
        >
          {subtitle}
        </h4>
      </div>
      <div
        style={{
          margin: "32px 0px 32px 32px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: "48px",
        }}
      >
        {children}
      </div>
    </section>
  );
}
