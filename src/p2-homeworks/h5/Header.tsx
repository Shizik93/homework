import React from 'react'
import m from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routes'


function Header() {
    return (
        <div className={m.header} >
            <NavLink to={PATH.PRE_JUNIOR} activeClassName={m.active}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} activeClassName={m.active}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} activeClassName={m.active}>junior-plus</NavLink>
            <div className={m.bk}/>
        </div>
    )
}

export default Header
