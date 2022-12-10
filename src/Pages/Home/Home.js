import React from 'react';
import Hero from '../Hero/Hero';
import AllSectionCards from './AllSectionCards/AllSectionCards';
import GrowBusiness from './GrowBusiness/GrowBusiness';
import OrganicSearch from './OrganicSearch/OrganicSearch';
import OurBlogs from './OurBlogs/OurBlogs';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <GrowBusiness></GrowBusiness>
            <OrganicSearch></OrganicSearch>
            <AllSectionCards></AllSectionCards>
            <OurBlogs></OurBlogs>
        </div>
    );
};

export default Home; <Hero></Hero>