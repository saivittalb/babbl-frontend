import React from 'react'
import { Link } from 'react-router-dom'
import TextBody from '../Text/body';

import './News.css';

function List({ tag, className }) {
    return (
        <Link to={`explore?tag=${tag}`} className={['extra__news', className].join(' ')}>
            <TextBody gray>Trending</TextBody>
            <TextBody bold>{`#${tag}`}</TextBody>
        </Link>
    )
}

export default List
