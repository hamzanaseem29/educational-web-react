import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='bg-review'>
            <div className='review-overlay'>
                {children}
            </div>
        </div>
    )
}

export default Layout