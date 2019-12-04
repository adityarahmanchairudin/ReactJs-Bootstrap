import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="slider">
            <div className="container sliderimage">
                <div className="row">
                    <img className="img-fluid rounded slide" src={require("../../gambar/desktop1.jpg")} alt="Responsive image"/>
                </div>
            </div>
            <div className="container notive">
                <div className="row">
                    <div className="col-md-12">
                    <div className="alert alert-danger danger" role="alert">
                        <p className="text-white text-center">A simple success Alert-Check it out !</p>
                    </div>
                    </div>
                </div>
                {/* end Slider */}
                <div className="container slide">
                        <div className="row">
                            <div className="col-md-8">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <div className="carrousel-inner">
                                        <div className="carousel-item active">
                                            <img className="img-fluid d-block w-100" src={require('../../gambar/slider1.jpeg')} alt="Responsive image"/>
                                        </div>

                                        <div className="carousel-item ">
                                            <img className="img-fluid d-block w-100" src={require('../../gambar/slider2.jpg')} alt="Responsive image"/>
                                        </div>

                                        <div className="carousel-item ">
                                            <img className="img-fluid d-block w-100" src={require('../../gambar/slider3.jpg')} alt="Responsive image"/>
                                        </div>
                                        <a href="#carouselExampleIndicators" className='carousel-control-prev' role="button" data-slide="prev "> 
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only"> Previous</span>
                                        </a>
                                        <a href="#carouselExampleIndicators" className='carousel-control-next' role="button" data-slide="next "> 
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only"> Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img className="img-fluid rounded slide" src={require('../../gambar/baner1.jpg')} alt="Responsive image"/>
                                <img className="img-fluid rounded slide" src={require('../../gambar/desktop.jpg')} alt="Responsive image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;