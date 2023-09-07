type ContactComponentProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export function ContactComponent({
  children,
  title,
  description,
}: ContactComponentProps) {
  return (
    <>
      <div
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: "28px",
          maxWidth: "280px",
          borderRadius: "10px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <h4>{title}</h4>
        {children}
        <p>{description}</p>
      </div>
    </>
  );
}
