import React from 'react'
import Statistic from './../pages/Statistic';
import Examination from '../pages/Examination';

const AdminNavBar = () => {
    return (
        <nav className="nav">
            <a className="site-title">
                Admin of Go4Food
            </a>
            <ul>
                <CustomLink href="/Examination">Examination</CustomLink>
                <CustomLink href="/Statistic">Statistic</CustomLink>
                <CustomLink>Log Out</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname;
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}
export default AdminNavBar