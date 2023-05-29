import React from 'react'
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
import div from "./assets/div.png"
import './App.css'

const App = () => {
  
  return (
  <div className="App">
    <section className='navigation'>
      <nav className='nav flex justify-between
      items-center py-4 px-10 bg-white gap-10
      '>
        <div className='text-logo font-semibold text-fs-logo'>
          <h1>GiftCard</h1>
        </div>
        <div className='menu'>
          <ul className='flex text-list text-nav-lists font-normal
          gap-10
          '>
            <li><a href='#'>Product</a></li>
            <li><a href='#'>Features</a></li>
            <li><a href='#'>Support</a></li>
          </ul>
        </div>
        <button className='bg-[#33C7C7] border-solid rounded-full text-white
        border-[#33C7C7] px-7 py-2 font-semibold text-fs-button sm:hidden md:block lg:block
        '>Get Gift Card</button>
      </nav>
    </section>



    <section className='hero md:px-3 py-10 lg:px-10 lg:py-20 sm:px-8 sm:py-10 sm:mt-30
    '>
      <div className='hero-text grid lg:grid-cols-2 items-center justify-items-center gap-5'>
        <div className='hero-text-left flex flex-col justify-content items-center'>
          <h1 className='text-fs-hero font-bold text-fs-hero text-dark w-full leading-10 intro-message
          '>Get digital Gifts Cards at Ease</h1>
          <p className='font-normal text-fs-paragraph text-paragraph leading-7 mt-5 mb-10 w-full intro-message'>
          Express love to friends and family all over the world, with special memories of gifts.
          </p>
          <form className='flex'>
            <input type='text' placeholder='Search gift cards' className='bg-white border-solid border-[#E5E5E5] rounded-full px-5 py-3 text-fs-input text-input font-normal leading-7 w-[502px]'></input>
            <button className='bg-[#33C7C7] border-solid rounded-full text-white
            border-[#33C7C7] px-7 py-2 font-semibold text-fs-button'
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
      <div className='sponsor'>
        <img src={div} alt='div'/>
      </div>
    </section>   
    <section className='brands
    '>
      <div className='brands-text flex justify-center items-center font-bold text-bold text-fs-brand
      mt-60 mb-2 sm:text-center
      '>
      Top Brands
      </div>
      <p className='font-normal text-fs-paragraph flex justify-center items-center
      w-[522px] mb-8 mx-auto text-center text-paragraph 
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
          <h1 className='text-fs-card font-bold text-fs-card text-dark leading-10
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
          <h1 className='text-fs-card font-bold text-fs-card text-dark leading-10 mb-10
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
          <h1 className='text-fs-card font-bold text-fs-card text-dark leading-10 mb-10
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
          <h1 className='text-fs-card font-bold text-fs-card text-dark leading-10 mb-10
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
          <h1 className='text-fs-card font-bold text-fs-card text-dark leading-10 mb-10
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
          <h1 className='text-fs-card font-bold text-fs-card text-dark leading-10 mb-10
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
          <h1 className='text-fs-card font-bold text-fs-card text-dark leading-10 mb-10
          '>AppStore
          Gift card</h1>
        </div>
      </div>
    </div>
    </section>    

    <section>
      <div className='features'>
        <div className='flex justify-center mt-8'>
          <h1 className='text-fs-brand font-bold text-bold w-[700px] text-center mb-8
          '>Amazing features made available to you</h1>
        </div>  
      </div>

      <div className='custom grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mb-8 mt-8 px-8  
      '>
        <div className='flex justify-center flex-col text-center lg:text-left
        '>
          <div className='sm:items-center'>
          CUSTOM GIFTS
          </div>
          <div className='mt-3  font-semibold text-fs-heading'>
          Personalise your gift cards to preference
          </div>
          <div className='mt-3 font-normal text-fs-paragraph2 sm:flex justify-center'>
          Tap into the gift bag to share love in the most amazing way. Change preference to suit that special one with no extra cost.
          </div>
          <div className='sm:items-center mt-3'>
          <button className='mt-3 bg-[#33C7C7] border-solid rounded-full text-white
        border-[#33C7C7] px-7 py-2 font-semibold text-fs-button w-[50%]
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
          <div className='sm:items-center'>
          SPECIAL GIFTS
          </div>
          <div className='sm:flex justify-center lg:block'>
          <div className='mt-3 font-semibold text-fs-heading w-[490px]'>
          Suitable to gift loved ones on special moments
          </div>
          </div>
          <div className='mt-3 font-normal text-fs-paragraph2 sm:flex justify-center'>
          <ul>
            <li>Birthdays</li>
            <li>Weddings</li>
            <li>Anniversaries</li>
          </ul>
          </div>
          <div className='sm:items-center mt-3'>
          <button className='mt-3 bg-[#33C7C7] border-solid rounded-full text-white
        border-[#33C7C7] px-7 py-2 font-semibold text-fs-button
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

  </div>
  )
}

export default App
