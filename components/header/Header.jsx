import React from "react"
import Image from "next/image"
import Link from "next/link"
import Avatar from "../avatar/Avatar"

const Header = () => {
  return (
    <nav className='header'>
      <div className='container'>
        <div className='header_wrapper'>
          <div className='header_left'>
            <h1>sneakers</h1>
            <Link href='/'>
              <div className='nav_item'>Collections</div>
            </Link>
            <Link href='/'>
              <div className='nav_item'>Men</div>
            </Link>
            <Link href='/'>
              <div className='nav_item'>Women</div>
            </Link>
            <Link href='/'>
              <div className='nav_item'>About</div>
            </Link>
            <Link href='/'>
              <div className='nav_item'>Contact</div>
            </Link>
          </div>
          <div className='header_right'>
            <Image
              className='cart'
              src='/images/icon-cart.svg'
              alt='cart'
              width={20}
              height={20}
            />
            <Avatar className='profile' url='https://lh3.googleusercontent.com/ogw/ADea4I4xylUgccJY5Nv1gHh1B8BD4IV1HIWnfmJhvFqu0Q=s64-c-mo' />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
