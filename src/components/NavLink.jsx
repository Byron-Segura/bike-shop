import { NavLink as NavLinkReactRouter } from 'react-router-dom'

export function NavLink ({ to, children, style, ...props }) {
  const navStyle = style || 'text-medium md:text-lg md:hover:text-pink-600 text-slate-200 transition-colors font-medium'

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
