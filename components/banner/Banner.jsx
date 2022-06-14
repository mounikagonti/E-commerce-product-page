import React from "react"
import Counter from "../counter/Counter"
// import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsCart3 } from "react-icons/bs"
import Swiper from "../swiper/Swiper"

const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='banner_wrapper'>
          <div className='banner_left'>
            <Swiper />
          </div>
          <div className='banner_right'>
            <div className='content'>
              <h5>sneaker company</h5>
              <h2>Fall Limited Edition</h2>
              <h2>Sneakers</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sit
                omnis minus sunt, tempora, totam aut debitis nam dolore
                temporibus sapiente ab nesciunt vitae provident eius officia
                quae ipsa et. Debitis aperiam, atque saepe ea rerum sequi
                dolorem maiores, nisi, dolor mollitia sapiente sed repellendus
                velit architecto? Maxime, corporis. Quaerat.
              </p>
            </div>
            <div className='price'>
              <div className='price_left'>
                <h3>$125.00</h3>
                <del>$250.00</del>
              </div>
              <div className='price_right'>
                <p>50%</p>
              </div>
            </div>
            <div className='banner_right_bottom'>
              <Counter />
              <div className='cart'>
                <BsCart3 className='cart_icon' />
                <button className='cart_btn'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
