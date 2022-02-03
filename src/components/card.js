import React from 'react'
import {Link} from "gatsby";

export default function Card({monster,children}) {
    return (
        <div className={`card`}>
            <img
                className='avatar'
                src={monster.Image}
                alt={`Avatar for ${monster.Monster}`}
            />
            <h1 className='header-lg center-text'>
                {monster.Monster}
            </h1>
            <h2 className='center-text'>
                {monster.Creator}
            </h2>
            <h2 className='center-text'>
                {monster.Skill}
            </h2>
            <h4 className='center-text'>
                <Link to={'/monster/'+monster.slug}>
                    Read More
                </Link>
            </h4>
            {children}
        </div>
    )
}
