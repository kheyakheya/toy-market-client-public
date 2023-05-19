import React from 'react';

const HotDeals = () => {
    return (
        <div className='myContainer'>
            <h2  className=' text-center text-5xl tracking-wide font-bold text-secondary mb-24 pt-24'>Hot Deals</h2>

            <div className="carousel rounded-box  pb-24">
                <div className="carousel-item">
                    <div className="card w-96 glass">
                        <figure><img src="https://t3.ftcdn.net/jpg/00/28/78/32/240_F_28783272_McJzgAYLurO4wEnWAfwDDq9a9RpXRofe.jpg" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Get now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 glass">
                        <figure>
                            <img src="https://t3.ftcdn.net/jpg/00/62/18/54/240_F_62185421_cVM7RxbG5c2GAeJWMDtgyOiEM1iHyTOR.jpg" alt="Burger" />

                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 glass">
                        <figure>
                            <img src="https://t4.ftcdn.net/jpg/00/28/70/15/240_F_28701537_mDNLuDPlUGffb93doN977WYMSSTKh1tK.jpg" alt="Burger" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 glass">
                        <figure>
                            <img src="https://t3.ftcdn.net/jpg/05/64/72/76/240_F_564727613_7g5fko4xVYgaHsmxw3CldRICMHhKcg7E.jpg" alt="Burger" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 glass">
                        <figure>
                            <img src="https://t3.ftcdn.net/jpg/01/57/43/76/240_F_157437668_QdQE9iGuMv8F05fFoxkV2WT1z7Me4wnL.jpg" alt="Burger" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotDeals;