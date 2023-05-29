import React from 'react'
import logo from "./assets/logo.png"
import hamburger from "./assets/hamburger.png"
import star from "./assets/stars.png"
import giftcard from "./assets/giftcard.png"
import boxstar from "./assets/boxstar.png"
import checkmark from "./assets/checkmark.png"
import card1 from "./assets/card1 (1).png"
import card2 from "./assets/card1 (2).png"
import card3 from "./assets/card1 (3).png"
import card4 from "./assets/card1 (4).png"
import card5 from "./assets/card1 (5).png"
import card6 from "./assets/card1 (6).png"
import card7 from "./assets/card1 (7).png"
import emptystar from "./assets/emptystar.png"
import fullstar from "./assets/fullstar.png"
import firstrating from "./assets/firstrating.png"
import secondrating from "./assets/secondrating.png"
import thirdrating from "./assets/thirdrating.png"
import fourthrating from "./assets/fourthrating.png"
import fifthrating from "./assets/fifthrating.png"
import sixthrating from "./assets/sixthrating.png"
import fullpicture from "./assets/Frame 1531.png"
import feature1 from "./assets/feature1.png"
import feature2 from "./assets/feature2.png"
import overlap from "./assets/overlapping.png"
import profilepic from "./assets/profilepic.png"
import facebook from "./assets/facebook.png"
import twitter from "./assets/twitter.png"
import instagram from "./assets/instagram.png"
import linkedin from "./assets/linkedin.png"
import youtube from "./assets/youtube.png"
import div from "./assets/div.png"
import './App.css'

const App = () => {
  
  return (
  <div className="App">
    <section className='navigation'>
      <nav className='nav flex justify-between
      items-center py-4 px-10 bg-white gap-10
      '>
        <div className='flex justify-center items-center text-logo font-semibold text-fs-logo font-["Sora"]'>
                <img src={logo} alt='logo'/>
          <h1>GiftCard</h1>
        </div>
        <div className='menu'>
          <ul className='flex text-list text-nav-lists font-normal
          gap-10 font-["Inter"] sm:hidden md:flex lg:flex
          '>
            <li><a href='#'>Product</a></li>
            <li><a href='#'>Features</a></li>
            <li><a href='#'>Support</a></li>
          </ul>

          <img src={hamburger} alt='hamburger' className='hamburger sm:block md:hidden lg:hidden'/>
        </div>
        <button className='bg-[#33C7C7] border-solid rounded-full text-white
        border-[#33C7C7] px-7 py-2 font-semibold text-fs-button font-["Inter"] sm:hidden md:block lg:block
        '>Get Gift Card</button>
      </nav>
    </section>



    <section className='hero md:px-3 py-10 lg:px-10 lg:py-20 sm:px-8 sm:py-10 sm:mt-20
    '>
      <div className='hero-text grid lg:grid-cols-2 items-center justify-items-center gap-5'>
        <div className='hero-text-left flex flex-col justify-content items-center'>
          <h1 className='text-fs-hero font-bold text-fs-hero text-dark w-full leading-10 intro-message font-["Sora"]
          '>Get digital Gifts Cards at Ease</h1>
          <p className='font-normal text-fs-paragraph text-paragraph leading-7 mt-5 mb-10 w-full intro-message font-["Inter"]'>
          Express love to friends and family all over the world, with special memories of gifts.
          </p>
          <form className='flex'>
            <input type='text' placeholder='Search gift cards' className='bg-white border-solid border-[#E5E5E5] rounded-full px-5 py-3 text-fs-input text-input font-normal leading-7 w-[502px] font-["Open Sans"]'></input>
            <button className='bg-[#33C7C7] border-solid rounded-full text-white
            border-[#33C7C7] px-7 py-2 font-semibold text-fs-button font-["Open Sans"]'
            >Search</button>
          </form>  
        </div>  

        {/* // stack 4 images on top of each other */}
        <div className='hero-image flex flex-col gap-5'>
          <div className='hero-text-right-top flex flex-col gap-5
          '>
            <img src={fullpicture} alt='hero1' className='object-cover sm:mb-10 mt-10
            '/>
          </div>
        </div>          
      </div>
    </section>  

    <section className='sponsors'>
      <div className='sponsor flex items-center gap-8
      '>
        <div>
        <img src={div} alt='div'/>
        </div>
      <div className='flex flex-col justify-center text-center items-center lg:text-left'>
        <div className='flex items-center gap-10 px-10 py-10 sm:px-8 sm:py-10 sm:mt-30'>
        <img src={star} alt='star'/>
        <img src={star} alt='star'/>
        <img src={star} alt='star'/>
        <img src={star} alt='star'/>
        <img src={star} alt='star'/>
        </div>
        <div className='w-[216.84px] flex justify-center'>
        Highest brands from our market of over 100,000+ products
        </div>
      </div>
      <div className='flex flex-col justify-center text-center items-center lg:text-left'>
        <div className='flex items-center px-10 py-10 sm:px-8 sm:py-10 sm:mt-30'>
        <img src={giftcard} alt='giftcard'/>
        <h1>Apple</h1>
        </div>
        <div className='flex bg-[#57D4D4]'>
        <img src={boxstar} alt='boxstar'/>
        <img src={boxstar} alt='boxstar'/>
        <img src={boxstar} alt='boxstar'/>
        <img src={boxstar} alt='boxstar'/>
        <img src={boxstar} alt='boxstar'/>
        </div>
        <div className='flex flex-col justify-center'>
          <div>
          Top Brand 4.9
          </div>
          <div>
        915 reviews
        </div>
        </div>
      </div>
      </div>

    </section>   

    <section className='brands
    '>
      <div className='brands-text flex justify-center items-center font-bold text-bold text-fs-brand font-["Sora"]
      mt-60 mb-2 sm:text-center 
      '>
      Top Brands
      </div>
      <p className='font-normal text-fs-paragraph flex justify-center items-center
      w-[522px] mb-8 mx-auto text-center text-paragraph font-["Inter"] 
      '>
      Simply place an order and have it delivered to any recipient residential address. 
      </p>
    </section>
    <section className='cards sm:flex justify-center'>
    <div className='
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 py-20
    '>
      <div className='card1'>
        <img src={card1} alt='hero1'/> 
        <div>
          <div className='flex'>
            <div className='mt-8 flex'>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
            </div>
            <img src={firstrating} alt='first rating' className='mt-8 ml-5'/>

          </div>
          <h1 className='text-fs-paragraph2 font-normal text-bold leading-10 font-["Sora"] w-[211px] 
          '>Amazon
          Gift Card</h1>
        </div>
      </div>
      <div className='card2'>
        <img src={card2} alt='hero1'/>
        <div>
          <div className='flex'>
            <div className='mt-8 flex'>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={emptystar} alt='empty star'/>
            </div>
            <img src={secondrating} alt='first rating' className='mt-8 ml-5'/>

          </div>
          <h1 className='text-fs-paragraph2 font-normal text-bold leading-10 font-["Sora"] w-[211px]
          '>iTunes
          Gift Card</h1>
        </div>
      </div>
      <div className='card3'>
            <img src={card3} alt='hero1'/>
            <div>
          <div className='flex'>
            <div className='mt-8 flex'>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
            </div>
            <img src={thirdrating} alt='first rating' className='mt-8 ml-5'/>

          </div>
          <h1 className='text-fs-paragraph2 font-normal text-bold leading-10 font-["Sora"] w-[211px]
          '>Sephora
          Gift Card</h1>
        </div>
      </div>
      <div className='card4'>
        <img src={card4} alt='hero1'/>
        <div>
          <div className='flex'>
            <div className='mt-8 flex'>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={emptystar} alt='empty star'/>
          <img src={emptystar} alt='empty star'/>
            </div>
            <img src={fourthrating} alt='first rating' className='mt-8 ml-5'/>

          </div>
          <h1 className='text-fs-paragraph2 font-normal text-bold leading-10 font-["Sora"] w-[211px]
          '>Walmart
          Gift card</h1>
        </div>
      </div>
      <div className='card5'>
        <img src={card5} alt='hero1'/>
        <div>
          <div className='flex'>
            <div className='mt-8 flex'>
          <img src={fullstar} alt='full star'/>
          <img src={emptystar} alt='empty star'/>
          <img src={emptystar} alt='empty star'/>
          <img src={emptystar} alt='empty star'/>
          <img src={emptystar} alt='empty star'/>
            </div>
            <img src={fifthrating} alt='first rating' className='mt-8 ml-5'/>

          </div>
          <h1 className='text-fs-paragraph2 font-normal text-bold leading-10 font-["Sora"] w-[211px]
          '>Spotify
          Gift card</h1>
        </div>
      </div>
      <div className='card6'>
        <img src={card6} alt='hero1'/>
        <div>
          <div className='flex'>
            <div className='mt-8 flex'>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
            </div>
            <img src={sixthrating} alt='first rating' className='mt-8 ml-5'/>

          </div>
          <h1 className='text-fs-paragraph2 font-normal text-bold leading-10 font-["Sora"] w-[211px]
          '>PlayStation
          Gift card</h1>
        </div>
      </div>
      <div className='card7'>
        <img src={card7} alt='hero1'/>
        <div>
          <div className='flex'>
            <div className='mt-8 flex'>
          <img src={fullstar} alt='full star'/>
          <img src={fullstar} alt='full star'/>
          <img src={emptystar} alt='empty star'/>
          <img src={emptystar} alt='empty star'/>
          <img src={emptystar} alt='empty star'/>
            </div>
            <img src={firstrating} alt='first rating' className='mt-8 ml-5'/>

          </div>
          <h1 className='text-fs-paragraph2 font-normal text-bold leading-10 font-["Sora"] w-[211px]
          '>AppStore
          Gift card</h1>
        </div>
      </div>
    </div>
    </section>    

    <section>
      <div className='features'>
        <div className='flex justify-center mt-8'>
          <h1 className='text-fs-brand font-bold text-bold w-[747px] text-center mb-8
          '>Amazing features made available to you</h1>
        </div>  
      </div>

      <div className='custom grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mb-8 mt-8 px-8  
      '>
        <div className='flex justify-center flex-col text-center lg:text-left
        '>
          <div className='font-["Nanum Pen"] font-normal text-bold text-fs-feature sm:items-center'>
          CUSTOM GIFTS
          </div>
          <div className='mt-3 font-semibold text-fs-heading font-["Sora"] text-bold
          '>
          Personalise your gift cards to preference
          </div>
          <div className='mt-3 font-normal text-fs-paragraph2 text-paragraph font-["Inter"] sm:flex justify-center'>
          Tap into the gift bag to share love in the most amazing way. Change preference to suit that special one with no extra cost.
          </div>
          <div className='sm:items-center mt-3'>
          <button className='mt-3 bg-[#33C7C7] border-solid rounded-full text-white
        border-[#33C7C7] px-7 py-2 font-semibold text-fs-button w-[50%] font-["Inter"]
        '>
            Get started for free
          </button>
          </div>
        </div>
        <div className='feature-image gap-5'>
          <div className='feature-text-right-top gap-5 sm:flex justify-center items-center
          '>
            <img src={feature1} alt='feature1' className=' object-cover w-[70%] sm:mb-10 mt-10
            '/>
          </div>
        </div>       
      </div>

      <div className='feature-image2 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
        <div className='flex justify-center'>
          <div className='feature-text-left-top sm:flex justify-center items-center
          '>
            <img src={feature2} alt='feature2' className='object-cover w-[25rem] sm:mb-10 mt-10
            '/>
          <img src={overlap} alt='overlap' className='overlap' />
          </div>
          {/* <div className='overlap'>
          </div> */}
        </div>    
        <div className='custom grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mb-8 mt-8 px-8  
      '>
        <div className='flex justify-center flex-col text-center lg:text-left
        '>
          <div className='special font-["Nanum Pen"] font-normal text-bold text-fs-feature sm:items-center'>
          SPECIAL GIFTS
          </div>
          <div className='sm:flex justify-center lg:block'>
          <div className='mt-3 font-semibold text-fs-heading w-[490px] font-["Sora"] text-bold'>
          Suitable to gift loved ones on special moments
          </div>
          </div>
          <div className='mt-3 font-normal text-fs-paragraph2 sm:flex justify-center'>
          <ul className='font-["Inter"] font-medium text-list text-fs-paragraph2'>
            <div className='flex gap-5'>
            <img src={checkmark} alt='checkmark' className='checkmark
            '/>
            <li className='font-["Inter"] font-medium w-[231px]'>Purchase at Discounts</li>
            </div>
            <div className='flex gap-5'>
            <img src={checkmark} alt='checkmark' className='checkmark'/>
            <li className='font-["Inter"] font-medium w-[231px]'>Share to multiple people</li>
            </div>
            <div className='flex gap-5'>
            <img src={checkmark} alt='checkmark' className='checkmark'/>
            <li className='font-["Inter"] font-medium w-[231px]'>Deliver at any location</li>
            </div>
          </ul>
          </div>
          <div className='sm:items-center mt-3'>
          <button className='mt-3 bg-[#33C7C7] border-solid rounded-full text-white
        border-[#33C7C7] px-7 py-2 font-semibold text-fs-button font-["Inter"] 
        '>
            Get Gift Card
          </button>
          </div>
        </div>
        </div>
      </div>
      </section> 

      {/* carousel in tailwind css */}

      <section>
        {/* //for image slider */}
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn bg-arrow" style={
        { color: 'black' }
      }>❮</a> 

      <div className='flex flex-col'>
      <div className='flex justify-center font-["Sora"] font-bold text-fs-feature text-bold'>
        APP STORE
      </div>
        <div className='w-[430px] text-center mt-5 font-["Inter"] font-semibold text-list'>
          I gifted the family package to my younger brother, and he could download all mobile applications at ease.
        </div>
        <div className='flex justify-center items-center gap-2'>
        <div className='flex justify-center mt-5'>
          <img src={profilepic} alt='profile picture'/>
        </div>
        <div className='flex justify-center mt-5 font-["Inter"] font-semibold'>
        Eniola Salami 
        </div>  
        </div>

      </div>

      <a href="#slide2" className="btn bg-arrow" style={
        { color: 'black' }
      }>❯</a> 
    </div>
  </div> 
  
  <div id="slide2" className="carousel-item relative w-full">
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn bg-arrow" style={
        { color: 'black' }
      }>❮</a>  

      <div className='flex flex-col'>
      <div className='flex justify-center flex justify-center font-["Sora"] font-bold text-fs-feature text-bold'>
        APP STORE
      </div>
        <div className='w-[430px] text-center mt-5 font-["Inter"] font-semibold text-list'>
          I gifted the family package to my younger brother, and he could download all mobile applications at ease.
        </div>
        <div className='flex justify-center items-center gap-2'>
        <div className='flex justify-center mt-5'>
          <img src={profilepic} alt='profile picture'/>
        </div>
        <div className='flex justify-center mt-5 font-["Inter"] font-semibold'>
        Eniola Salami 
        </div>  
        </div>

      </div>

      <a href="#slide3" className="btn bg-arrow" style={
        { color: 'black' }
      }>❯</a> 
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn bg-arrow" style={
        { color: 'black' }
      }>❮</a>  

      <div className='flex flex-col'>
      <div className='flex justify-center flex justify-center font-["Sora"] font-bold text-fs-feature text-bold'>
        APP STORE
      </div>
        <div className='w-[430px] text-center mt-5 font-["Inter"] font-semibold text-list'>
          I gifted the family package to my younger brother, and he could download all mobile applications at ease.
        </div>
        <div className='flex justify-center items-center gap-2'>
        <div className='flex justify-center mt-5'>
          <img src={profilepic} alt='profile picture'/>
        </div>
        <div className='flex justify-center mt-5 font-["Inter"] font-semibold'>
        Eniola Salami 
        </div>  
        </div>

      </div>

      <a href="#slide4" className="btn bg-arrow" style={
        { color: 'black' }
      }>❯</a> 
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={feature1} className="w-full" />
    <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide3" className="btn bg-arrow" style={
        { color: 'black' }
      }>❮</a>  

      <div className='flex flex-col'>
      <div className='flex justify-center'>
        APP STORE
      </div>
        <div className='w-[430px] text-center mt-5'>
          I gifted the family package to my younger brother, and he could download all mobile applications at ease.
        </div>
        <div className='flex justify-center items-center gap-2'>
        <div className='flex justify-center mt-5'>
          <img src={profilepic} alt='profile picture'/>
        </div>
        <div className='flex justify-center mt-5'>
        Eniola Salami 
        </div>  
        </div>

      </div>

      <a href="#slide1" className="btn bg-arrow" style={
        { color: 'black' }
      }>❯</a> 
    </div>
  </div>
</div>
      </section>  

      <section>
        <div className='customise'>
          <div className='flex justify-center font-["Sora"] font-bold text-fs-heading text-bold'>
          Customise Gift Card for free
          </div>
          <div className='flex justify-center font-["Inter"] font-medium text-list text-fs-paragraph2'>
          Express your love, so easy! 
          </div>
          <div className='flex justify-center mt-5 sm:items-center mt-3'>
          <button className='mt-3 bg-[#33C7C7] border-solid rounded-full text-white
        border-[#33C7C7] px-7 py-2 font-semibold text-fs-button w-[20%] font-["Inter"]
        '>
            Get Started
          </button>
          </div>
        </div>
      </section>

      {/* //footer */}
      <div className='border'/>
      
      <section className='footer flex justify-center'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10'>
          <div className='product mt-7'>
            <div className='flex'>
              <ul>
                <li className='font-["Manrope"] font-bolder text-fs-button text-logo mt-7'>Product</li>
                <li className='mt-7 font-["Manrope"] font-medium text-fs-footer2 text-list'>Fashion</li>
                <li className='mt-7 font-["Manrope"] font-medium text-fs-footer2 text-list'>Gadjets</li>
                <li className='mt-7 font-["Manrope"] font-medium text-fs-footer2 text-list'>Home Appliances</li>
                <li className='mt-7 font-["Manrope"] font-medium text-fs-footer2 text-list'>Office & Work Tools</li>
              </ul>
            </div>
          </div>

          <div className='features mt-7'>
            <div className='flex'>
              <ul>
                <li className='font-["Manrope"] font-bolder text-fs-button text-logo  mt-7'>Features</li>
                <li className='mt-7 font-["Manrope"] font-medium text-fs-footer2 text-list'>Customise</li>
                <li className='mt-7 font-["Manrope"] font-medium text-fs-footer2 text-list'>Delivery</li>
                <li className='mt-7 font-["Manrope"] font-medium text-fs-footer2 text-list'>Apply Coupon</li>
                <li className='mt-7 font-["Manrope"] font-medium text-fs-footer2 text-list'>Referral Bonus</li>
              </ul>
            </div>
          </div>

          <div className='Support mt-7'>
            <div className='flex'>
              <ul>
                <li className='font-["Manrope"] font-bolder text-fs-button text-logo mt-7'>Support</li>
                <li className='mt-7 font-["Manrope"] font-medium text-fs-footer2 text-list'>Get Help</li>
                <li className='mt-7 font-["Manrope"] font-medium text-fs-footer2 text-list'>FAQ</li>
                <li className='mt-7 font-["Manrope"] font-medium text-fs-footer2 text-list'>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className='Transparency mt-7'>
            <div className='flex'>
              <ul>
                <li className='font-["Manrope"] font-bolder text-fs-button text-logo mt-7'>Transparency</li>
                <li className=' mt-7 font-["Manrope"] font-medium text-fs-footer2 text-list'>Terms & Conditions</li>
                <li className='mt-7 font-["Manrope"] font-medium text-fs-footer2 text-list'>Privacy Policy</li>
                <li className='mt-7 font-["Manrope"] font-medium text-fs-footer2 text-list'>Cookies</li>
              </ul>
            </div>
          </div>

          <div className='Subscribe to newsletter mt-7'>
            <div className='flex'>
              <ul>
                <li className='mt-7 font-bolder text-fs-button text-logo font-["Manrope"] '>Subscribe to newsletter</li>
              </ul>
            </div>
            <input type='text' placeholder='Enter your email' className='mt-5 w-full border border-[#33C7C7] px-5 py-2'/>
              <ul className='flex items-center gap-3'>
                <li>
                  <img src={facebook} alt='facebook'/>
                </li>
                <li>
                  <img src={twitter} alt='twitter'/>
                </li>
                <li>
                  <img src={youtube} alt='youtube'/>
                </li>
                <li>
                  <img src={linkedin} alt='linkedin'/>
                </li>
                <li>
                  <img src={instagram} alt='instagram'/>
                </li>
              </ul>
          </div>

        </div>  
      </section>  

      <div className='border'/>

      <section>
        <div className='flex justify-between px-20 py-5
        '>
          <div className='flex justify-center items-center gap-3'>
            <div>
             <img src={logo} alt='logo'/>
            </div>
            <h1 className='font-["Sora"] font-semibold text-fs-logo text-logo'>
            GiftCard
            </h1>
            <p className='text-fs-footer font-medium font-["Manrope"]'>
            © 1995 - 2023 GiftCard Inc. All Rights Reserved.
            </p>
          </div>

          <div className='flex'>
            <ul className='flex gap-5 text-fs-footer font-normal font-["Inter"] text-paragraph'>
              <li>Features</li>
              <li>Product</li>
              <li>Support</li>
            </ul>
          </div>  
        </div>  
      </section>



  </div>
  )
}

export default App
