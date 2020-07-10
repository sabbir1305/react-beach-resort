import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import {Link } from 'react-router-dom';
import Button from "../components/StyledHero";
 const Home = () => {
    return (
        <>
         <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                <Link to='/rooms' className="btn-primary">
                    Our Rooms
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        <Button>Hello</Button>
        </>
       

    )
}
export default Home;