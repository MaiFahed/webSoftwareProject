import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Go4Food
            </Link>
            <ul>
                <CustomLink to="/signIn">SignIn</CustomLink>
                <CustomLink to="/signUp">SignUp</CustomLink>
                <CustomLink to="/orders">Orders</CustomLink>
                {/* <CustomLink to="/about">About</CustomLink> */}
                <CustomLink to="/posting">Posting</CustomLink> 
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default NavBar