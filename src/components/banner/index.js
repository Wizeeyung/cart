import './index.css'
import images from './images/logo1.png'

const Banner = ()=>{
  return (
    <div className="banner-container">
      <div className="banner-text">
        <h1>The CHRISTMAS SALE <br />is now back!</h1>
        <p>Get your favourite device at an unbelievable price and win many cool <br />Christmas Discounts available on all gadgets from just Rs.299 only</p>
        <span>Get your device at unbelievable prices!!!</span>
        <button>Explore Now</button>
      </div>
      <img src={images} alt="banner-logo"></img>

    </div>
  )
}

export default Banner;