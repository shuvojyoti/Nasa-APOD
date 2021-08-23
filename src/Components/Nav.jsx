import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div className="nav">
            <ul>
                <Link to='/'>Take me home</Link>
            </ul>
        </div>
    )
}
