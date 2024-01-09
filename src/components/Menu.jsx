import React from 'react'

const Menu = () => {
    return (
        <div className='flex items-stretch  px-10 gap-8'>
            <div onMo className='menuitem py-5 border-b-4 border-white cursor-pointer hover:border-b-accent-hover flex items-center relative gap-2'><h1>Insurance Products</h1> <i className=" icon bi bi-chevron-down text-accent-hover" style={{ fontSize: "18px" }}></i>

              

            </div>
          
            <div className='menuitem py-5 border-b-4 border-white cursor-pointer hover:border-b-accent-hover flex items-center gap-2'>Renew Your Policy <i className="bi bi-chevron-down text-accent-hover" style={{ fontSize: "18px" }} ></i></div>
            <div className='menuitem py-5 border-b-4 border-white cursor-pointer hover:border-b-accent-hover flex items-center gap-2'>Claim <i className="bi bi-chevron-down text-accent-hover" style={{ fontSize: "18px" }} ></i></div>
            <div className='menuitem py-5 border-b-4 border-white cursor-pointer hover:border-b-accent-hover flex items-center gap-2'>Support <i className="bi bi-chevron-down text-accent-hover" style={{ fontSize: "18px" }} ></i></div>
        </div>
    )
}

export default Menu