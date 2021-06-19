import React from 'react'

import './Header.css'

function Header({ children, border, className }) {
    return (
        <div className={['timeline-header', border && 'border', className].join(' ')}>
            {children}
        </div>
    )
}

export default Header
