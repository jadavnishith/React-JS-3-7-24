import React, { useState } from 'react';

function Array() {
    const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Pink','Purple','LightBlue','Orange','Grey','Violet','Aqua'];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + colors.length) % colors.length);
    };

    return (        
        <div className="container mt-5 ">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card text-center rounded-5">
                        <div className="card-body bg-dark-subtle rounded-5">
                            <h5 className="card-title">Color Changer</h5>
                            <div
                                className="color-display my-3 rounded-5"
                                style={{
                                    height: '100px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: colors[currentIndex],
                                    color: 'black',
                                    fontSize:'20px'
                                }}
                            >
                                {colors[currentIndex]}
                            </div>
                            <button className="btn btn-outline-primary mx-2" onClick={handlePrevious}>
                              ⬅ Previous
                            </button>
                            <button className="btn btn-outline-primary mx-2" onClick={handleNext}>
                                Next ➡
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Array;
