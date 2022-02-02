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
import {menuData} from "../data/menuData";




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
                    {menuData.map((item, index)=>(
                        <Link
                            className={navLinkItem}
                            to={item.link} key={index}>
                            {item.title}
                        </Link>
                    ))}
                </nav>
                <main>
                    {children}
                </main>
            </div>
        )
    }