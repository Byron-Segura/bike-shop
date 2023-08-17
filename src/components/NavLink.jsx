import { NavLink as NavLinkReactRouter } from 'react-router-dom'

export function NavLink ({ to, children, style, ...props }) {
  const navStyle = style || 'text-base p-2 sm:text-lg md:text-xl md:p-6 px-6 bg-gray-100 md:hover:bg-gray-200 min-w-max'

  return (
    <NavLinkReactRouter
      {...props}
      className={({ isActive }) => isActive ? (navStyle + '') : navStyle}
      to={to}
    >
      {children}
    </NavLinkReactRouter>
  )
}
