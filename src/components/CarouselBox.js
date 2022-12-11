import React, {Component} from 'react';
import Melez from "../pages/Melez";
import HomeCarousel from "../pages/homeCarousel";



class CarouselBox extends Component {
    render() {
        return (
            <div>
                <HomeCarousel/>
                <Melez/>
            </div>
        );
    }
}

export default CarouselBox;