import React from 'react'

const Menu = () => {
    return (
        <div className='flex items-center  px-10 gap-8'>
            <div className='py-5 border-b-4 border-white cursor-pointer hover:border-b-accent-hover'>Insurance Products <i className="bi bi-chevron-down text-accent-hover" style={{fontSize: "70px"}} ></i></div>
            <div className='py-5 border-b-4 border-white cursor-pointer hover:border-b-accent-hover'>Renew Your Policy <i className="bi bi-chevron-down"></i></div>
            <div className='py-5 border-b-4 border-white cursor-pointer hover:border-b-accent-hover'>Claim <i className="bi bi-chevron-down"></i></div>
            <div className='py-5 border-b-4 border-white cursor-pointer hover:border-b-accent-hover'>Support <i className="bi bi-chevron-down"></i></div>
        </div>
    )
}

export default Menu