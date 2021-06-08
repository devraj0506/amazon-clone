import React from 'react'
import './home.css'
import Product from './Products.js'

function Home() {
    return (
        <div className="home">
         <img className='home-img' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""  />   

        {/* product id,title,price,rating,img */}

        <div className="home-row">
        <Product id='1'
        title='2020 Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Silver (2nd Generation)'
        price={112}
        rating={3}
        image='https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SX466_.jpg' />
        <Product id='2'
        title='2020 Apple Mac Mini M1 (8GB RAM, 256GB SSD Storage)'
        price={112}
        rating={3}
        image='https://images-na.ssl-images-amazon.com/images/I/71pcTYT%2BICL._AC_SX342_.jpg' />
        </div>

        <div className="home-row">
        <Product id='3'
        title='Nintendo Switch with Gray Joy‑Con'
        price={112}
        rating={3}
        image='https://images-na.ssl-images-amazon.com/images/I/61i421VnFYL.__AC_SY300_SX300_QL70_FMwebp_.jpg' />
        <Product id='4'
        title='Roku Express | HD '
        price={112}
        rating={3}
        image='https://images-na.ssl-images-amazon.com/images/I/81%2B0dqbDGWL.__AC_SX300_SY300_QL70_FMwebp_.jpg' />
        <Product id='5'
        title='Seagate Portable 2TB External Hard Drive Portable HDD'
        price={112}
        rating={3}
        image='https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL.__AC_SX300_SY300_QL70_FMwebp_.jpg' />
        </div>
        

        <div className="home-row">
        <Product id='6'
        title='HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting'
        price={112}
        rating={3}
        image='https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg' />
        
        </div>
        
 
        </div>
    )
}

export default Home
