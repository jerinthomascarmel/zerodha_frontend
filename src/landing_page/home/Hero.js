import React from 'react';
function Hero() {
    return (
        <div className='container p-5'>
            <div className='row text-center p-5'>
                <img src='media/images/homeHero.png' alt='home hero image' style={{ width: "100%" }} className='mb-5'></img>
                <h1 className='mt-5'>Invest Everything</h1>
                <p>Our ultra-fast flagship trading platform with <br></br> streaming market data, advanced charts,
                    an elegant UI, and  more. Enjoy the Kite experience seamlessly<br></br> on your Android and iOS devices.</p>
                <button className='btn pl-2 pr-2 fs-5 text-white' style={{ width: '20%', margin: '0 auto', backgroundColor: '#387ed1' }}>Signup now</button>
            </div>
        </div>
    );
}

export default Hero;