import React from 'react'
import HeroSlider from '../../components/Slider/HeroSlider';
import CategorySlider from '../../components/Slider/CategorySlider';
import LatestProductSlider from '../../components/Slider/LatestProductSlider';
import ProductList from '../../components/Product/ProductList';
import QuickDeals from '../../components/QuickDeals';

const HomeScreen = () => {

    return (
        <div className='bg-sky-50'>
            {/* Hero Section Slider */}
            <HeroSlider />

            {/* Quick Deals Section */}
            <QuickDeals />

            {/* Categories Section Carousel */}
            <CategorySlider />

            {/* Latest Products Section Carousel */}
            <LatestProductSlider />

            {/* All Products Section */}
            <ProductList />
        </div>
    )
}

export default HomeScreen;