import React from 'react';
import useTitle from '../../Hook/useTitle';
import Hero from '../Hero/Hero';
import AllSectionCards from './AllSectionCards/AllSectionCards';
import GrowBusiness from './GrowBusiness/GrowBusiness';
import OrganicSearch from './OrganicSearch/OrganicSearch';
import OurBlogs from './OurBlogs/OurBlogs';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {


    //dynamic title
    useTitle('Home')

    return (
        <div>
            <Hero></Hero>
            <GrowBusiness></GrowBusiness>
            <OrganicSearch></OrganicSearch>
            <AllSectionCards></AllSectionCards>
            <OurBlogs></OurBlogs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home; <Hero></Hero>