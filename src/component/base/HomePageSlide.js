import React, { Component } from 'react'

class HomePageSlide extends Component {
    render() {
        return (
            <div className="flexslider">
                <ul className="slides">
                    <li>
                        <img src="themes/images/carousel/banner-1.jpg" alt="" />
                    </li>
                    <li>
                        <img src="themes/images/carousel/banner-2.jpg" alt="" />
                        <div className="intro">
                            <h1>Mid season sale</h1>
                            <p><span>Up to 50% Off</span></p>
                            <p><span>On selected items online and in stores</span></p>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HomePageSlide;