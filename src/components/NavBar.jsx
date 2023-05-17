import React from 'react'

const NavBar = () => {
    return (
        <nav className="nav">
            <a href="/Home2" className="site-title">
                Go4Food
            </a>
            <ul>
                <CustomLink href="/ResPosting">Posting</CustomLink> 
                <CustomLink href="/Orders">Orders</CustomLink>
                <CustomLink href="/LogOut">Log Out</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ href, children, ...props }) {
    const path= window.location.pathname;
    return (
        <li className={ path===href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}

export default NavBar