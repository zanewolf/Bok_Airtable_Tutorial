import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    activeStyle
} from '../styles/layout.module.css'




export default function Layout ({ pageTitle, children }) {

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
            <div className={container}>
                <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                <header className={siteTitle}>{data.site.siteMetadata.title}</header>
                <nav className={navLinks}>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to="/" className={navLinkText}>
                                Home
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/about" className={navLinkText}>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    {children}
                </main>
            </div>
        )
    }