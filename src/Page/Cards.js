import React from 'react'
import Img1 from '../Images/slide-01.jpg'
import Img2 from '../Images/slide-02.jpg'
import Img3 from '../Images/slide-03.jpg'
import Data from '../Data/Datastr'
import Products from '../Components/Products'

function Cards() {
    return (
        // Carousel of Banner

        <div>
            <div id="carouselExample" class="carousel slide carousel-dark">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Img1} className="d-block w-100 pictures" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Img2} className="d-block w-100 pictures" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Img3} className="d-block w-100 pictures" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* Cards  */}
            <div className="container">
                <div className="card">
                    <a href="">German Shephard</a>
                    <span>Age 12</span>
                    <img className='Card-img' src={Img1} alt="" />
                    <div className="faded" ></div>
                </div>

                <div className="card">
                    <a href="">Delmitian</a>
                    <span>Age 9</span>
                    <img className='Card-img' src={Img2} alt="" />
                    <div className="faded"></div>
                </div>
                <div className="card">
                    <a href="">Golden Reteriever</a>
                    <span>Age 2</span>
                    <img className='Card-img' src={Img3} alt="" />
                    <div className="faded"></div>
                </div>
            </div>
            
            <div className="map_method">
                {
                    Data.map((e) => {
                        return (
                            <Products Img={e.Img} heading3={e.heading3} heading5={e.heading5} />
                        );
                    })
                }
            </div>

        </div>
    )
}

export default Cards
