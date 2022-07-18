import React from 'react'
import { ReactComponent as Search } from '../assets/icons/search.svg'
import { ReactComponent as Basket } from '../assets/icons/basket.svg'

const Header = () => {
   return (
      <>
         <h1>Legalide</h1>
         <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>
               <Search />
            </li>
            <li>
               <Basket />
            </li>
         </ul>
      </>
   )
}

export default Header
