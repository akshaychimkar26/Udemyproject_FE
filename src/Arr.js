import React, { useState } from 'react'

function Arr() {
    const [ishovered, setIshovered] = useState(null);

    const handleContainerHover = (index) => {
        setIshovered(index);
    };

    const handleContainerLeave = () => {
        setIshovered(null);
    };
    return (
        <div className="cr">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (


                <div
                    key={index}
                    className={`ct ${ishovered === index ? 'hovered' : ''}`}
                    onMouseEnter={() => handleContainerHover(index)}
                    onMouseLeave={handleContainerLeave}
                >
                    Container {item}
                    {ishovered === index && (
                        <div className="actn">
                            <div className="aw"></div>
                            <div className="adctt">
                                Additional Content for Container {item}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )

}

export default Arr