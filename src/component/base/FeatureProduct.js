import React, { Component } from 'react'

class FeatureProduct extends Component {
    render() {
        return (
            <div className="row">
                <div className="span12">
                    <h4 className="title">
                        <span className="pull-left"><span className="text"><span className="line">Feature <strong>Products</strong></span></span></span>
                        <span className="pull-right">
                            <a className="left button" href="#myCarousel" data-slide="prev" /><a className="right button" href="#myCarousel" data-slide="next" />
                        </span>
                    </h4>
                    <div id="myCarousel" className="myCarousel carousel slide">
                        <div className="carousel-inner">
                            <div className="active item">
                                <ul className="thumbnails">
                                    <li className="span3">
                                        <div className="product-box">
                                            <span className="sale_tag" />
                                            <p><a href="product_detail.html"><img src="themes/images/ladies/1.jpg" alt="" /></a></p>
                                            <a href="product_detail.html" className="title">Ut wisi enim ad</a><br />
                                            <a href="products.html" className="category">Commodo consequat</a>
                                            <p className="price">$17.25</p>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="product-box">
                                            <span className="sale_tag" />
                                            <p><a href="product_detail.html"><img src="themes/images/ladies/2.jpg" alt="" /></a></p>
                                            <a href="product_detail.html" className="title">Quis nostrud exerci tation</a><br />
                                            <a href="products.html" className="category">Quis nostrud</a>
                                            <p className="price">$32.50</p>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="product-box">
                                            <p><a href="product_detail.html"><img src="themes/images/ladies/3.jpg" alt="" /></a></p>
                                            <a href="product_detail.html" className="title">Know exactly turned</a><br />
                                            <a href="products.html" className="category">Quis nostrud</a>
                                            <p className="price">$14.20</p>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="product-box">
                                            <p><a href="product_detail.html"><img src="themes/images/ladies/4.jpg" alt="" /></a></p>
                                            <a href="product_detail.html" className="title">You think fast</a><br />
                                            <a href="products.html" className="category">World once</a>
                                            <p className="price">$31.45</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="item">
                                <ul className="thumbnails">
                                    <li className="span3">
                                        <div className="product-box">
                                            <p><a href="product_detail.html"><img src="themes/images/ladies/5.jpg" alt="" /></a></p>
                                            <a href="product_detail.html" className="title">Know exactly</a><br />
                                            <a href="products.html" className="category">Quis nostrud</a>
                                            <p className="price">$22.30</p>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="product-box">
                                            <p><a href="product_detail.html"><img src="themes/images/ladies/6.jpg" alt="" /></a></p>
                                            <a href="product_detail.html" className="title">Ut wisi enim ad</a><br />
                                            <a href="products.html" className="category">Commodo consequat</a>
                                            <p className="price">$40.25</p>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="product-box">
                                            <p><a href="product_detail.html"><img src="themes/images/ladies/7.jpg" alt="" /></a></p>
                                            <a href="product_detail.html" className="title">You think water</a><br />
                                            <a href="products.html" className="category">World once</a>
                                            <p className="price">$10.45</p>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="product-box">
                                            <p><a href="product_detail.html"><img src="themes/images/ladies/8.jpg" alt="" /></a></p>
                                            <a href="product_detail.html" className="title">Quis nostrud exerci</a><br />
                                            <a href="products.html" className="category">Quis nostrud</a>
                                            <p className="price">$35.50</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeatureProduct;