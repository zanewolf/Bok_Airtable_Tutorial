import React from 'react'
import {Link} from "gatsby";
import {
        cardStyle
    } from "../styles/card.module.css"

export default function Card({monster,children}) {
    return (
        <div className={cardStyle}>
            <img
                className='avatar'
                src={monster.Image}
                alt={`Avatar for ${monster.Monster}`}
            />
            <h1 className='header-lg center-text'>
                {monster.Monster}
            </h1>
            <h3 className='center-text'>
                {monster.Creator}
            </h3>
            <p className='center-text'>
                Skills: {monster.Skill}
            </p>
            <h4 className='center-text'>
                <Link to={'/monster/'+monster.slug}>
                    Read More
                </Link>
            </h4>
            {children}
        </div>
    )
}
