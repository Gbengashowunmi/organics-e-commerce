import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

export default function ItemCard() {
  return (
    <div className='item_container'>
        <img src='https://bonik-react.vercel.app/assets/images/products/headphone.png' alt='' />
        <div className='description'>

        <p className='item-name'>Smart watch black</p>
        <p className='ratings'><BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/></p>
        <p className='price'>$689</p>
        </div>
        <div className='discount'>%565 off</div>
        <button className='add-to-cart'>+</button>
    </div>
  )
}
