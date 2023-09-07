import { Link } from "react-router-dom";

type AsideItemProps ={
  children: React.ReactNode,
  classname: string,
  to: string
}

export function AsideItem({ to, children,classname}: AsideItemProps){
  return(
    <div className={classname} style={{}}>
      <Link 
      to={to}
      style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:'6px',
        padding:'10px',
        textDecoration:'none',
        color:'#fff'

      }}>
        {children}
      </Link>
    </div>
  )
}