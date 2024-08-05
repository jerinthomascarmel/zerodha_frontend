import React from 'react';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount'
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Education from './Education';
import Pricing from './Pricing';
import Footer from '../Footer';

function HomePage() {
    return (
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}


export default HomePage;