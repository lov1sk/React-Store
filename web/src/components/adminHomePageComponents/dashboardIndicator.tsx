type DashboardIndicatorType = {
  children: React.ReactNode;
  title: string;
  value: string | number;
};

export function DashboardIndicator({
  title,
  value,
  children,
}: DashboardIndicatorType) {
  return (
    <div
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        padding: "32px 24px",
        maxWidth: "350px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <p>{title}</p>
      <p>{value}</p>
      {children}
    </div>
  );
}
