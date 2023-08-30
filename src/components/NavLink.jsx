import { NavLink as NavLinkReactRouter } from 'react-router-dom'

export function NavLink ({ to, children, style, ...props }) {
  const navStyle = style || 'text-base md:text-md md:hover:text-orange-500 text-slate-200 transition-colors font-medium'

  return (
    <NavLinkReactRouter
      {...props}
      className={navStyle}
      to={to}
    >
      {children}
    </NavLinkReactRouter>
  )
}
