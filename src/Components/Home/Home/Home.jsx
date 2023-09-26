import React from 'react';
import Banner from '../../Pages/Banner/Banner';
import CardSection from '../../Pages/CardSection/CardSection';
import Entertainment from '../../Pages/Entertainment/Entertainment';
import Explore from '../../Pages/Explore/Explore';
import Fountain from '../../Pages/Fountain/Fountain';
import Food from '../../Pages/Food/Food';
import Dessert from '../../Pages/Dessert/Dessert';
import Dinning from '../../Pages/Dinning/Dinning';
import Resort from '../../Pages/Resort/Resort';
import Gallery from '../../Pages/Gallery/Gallery';
import Pool from '../../Pages/Pool/Pool';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Resort></Resort>
            <CardSection></CardSection>
            <Entertainment></Entertainment>
            <Explore></Explore>
            <Fountain></Fountain>
            <Gallery></Gallery>
            <Pool></Pool>
            <Food></Food>
            <Dinning></Dinning>
            <Dessert></Dessert>
        </div>
    );
};

export default Home;