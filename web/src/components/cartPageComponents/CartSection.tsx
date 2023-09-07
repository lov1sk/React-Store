type cartSectionType = {
  children: React.ReactNode
}
export function CartSection({children}: cartSectionType){
  return(
    <section style={{
      display:'flex',
      flexDirection:'column',
      width:'60%',
      gap:'16px',
    }}>
      {children}
    </section>
  )
}