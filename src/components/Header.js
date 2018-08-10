import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      Expense Manger
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </header>
  )
}
export default Header