import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";
import RatingStars from './RatingStars';
import Footer from './Footer';
import CartButton from './CartButton';

function SearchPage() {
    const [starview, setstarview] = useState(true);
    const [videoview, setvideo] = useState(true);
    const location = useLocation().state;
    console.log("values:", location.searchResult);
    const searchResults = location.searchResult;
    const searchText = location.searchText;
    const [ishoveredtwo, setIsHoveredtwo] = useState(null);
    const handleContainerHovertwo = (index) => {
        setIsHoveredtwo(index);
    }
    const handleContainerLeavetwo = () => {
        setIsHoveredtwo(null);
    }
    return (
        <div>
            <div className='smd'>
                <div className='acd'>
                    <h1 style={{ textAlign: "left" }}>{searchResults.length} results for {searchText}</h1>
                    <div className='acmd'>
                        <div className='lc'>
                            <div className="rd" onClick={() => setstarview(!starview)}>
                                <h2>Rating</h2>
                                <div className={`dld ${!starview ? 'rotate' : 'rotateflip'}`}><IoMdArrowDropdown size={"2em"} /></div>
                            </div>
                            {starview && (
                                <div>
                                    <div className='sd'>
                                        <input name='star' type='radio'></input>
                                        <RatingStars rating={4.5} />
                                        <p style={{ margin: 0 }}>&nbsp;4.5 & up (10,000)</p>
                                    </div>
                                    <div className='sd'>
                                        <input name='star' type='radio'></input>
                                        <RatingStars rating={4} />
                                        <p style={{ margin: 0 }}>&nbsp;4 & up (10,000)</p>
                                    </div>
                                    <div className='sd'>
                                        <input name='star' type='radio'></input>
                                        <RatingStars rating={3.5} />
                                        <p style={{ margin: 0 }}>&nbsp;3.5 & up (10,000)</p>
                                    </div>
                                    <div className='sd'>
                                        <input name='star' type='radio'></input>
                                        <RatingStars rating={3} />
                                        <p style={{ margin: 0 }}>&nbsp;3 & up (10,000)</p>
                                    </div>
                                </div>
                            )}
                            <hr />
                            <div className="rd" onClick={() => setvideo(!videoview)}>
                                <h3>Video Duration</h3>
                                <div className={`dld ${!videoview ? 'rotate' : 'rotateflip'}`}><IoMdArrowDropdown size={"2em"} /></div>
                            </div>
                            {videoview && (
                                <div>
                                    <div className='sd'>
                                        <input name='star' type='checkbox'></input>
                                        <p style={{ margin: 0 }}>&nbsp;0 - 1 hr (667)</p>
                                    </div>
                                    <div className='sd'>
                                        <input name='star' type='checkbox'></input>
                                        <p style={{ margin: 0 }}>&nbsp;1 - 3 hr (667)</p>
                                    </div>
                                    <div className='sd'>
                                        <input name='star' type='checkbox'></input>
                                        <p style={{ margin: 0 }}>&nbsp;3 - 6 hr (667)</p>
                                    </div>
                                    <div className='sd'>
                                        <input name='star' type='checkbox'></input>
                                        <p style={{ margin: 0 }}>&nbsp;6 - 17 hr (667)</p>
                                    </div>
                                </div>
                            )}
                            <hr />
                            <div className="rd">
                                <h3>Topic</h3>
                                <div className={`dld`}><IoMdArrowDropdown size={"2em"} /></div>
                            </div>
                            <hr />
                            <div className="rd">
                                <h3>Subcategory</h3>
                                <div className={`dld`}><IoMdArrowDropdown size={"2em"} /></div>
                            </div>
                            <hr />
                            <div className="rd">
                                <h3>Level</h3>
                                <div className={`dld`}><IoMdArrowDropdown size={"2em"} /></div>
                            </div>
                            <hr />
                            <div className="rd">
                                <h3>Language</h3>
                                <div className={`dld`}><IoMdArrowDropdown size={"2em"} /></div>
                            </div>
                            <hr />
                            <div className="rd">
                                <h3>Price</h3>
                                <div className={`dld`}><IoMdArrowDropdown size={"2em"} /></div>
                            </div>
                            <hr />
                        </div>
                        <div className='rc'>

                            {searchResults.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className={`imdiv ${ishoveredtwo === index ? 'hovered' : ''}`} onMouseEnter={() => handleContainerHovertwo(index)} onMouseLeave={handleContainerLeavetwo}>
                                            <div className='iidiv'>
                                                <img src={item.image} alt='not found' className='if' />
                                            </div>
                                            {ishoveredtwo === index && (
                                                <div className='act'>
                                                    <div className="ar"></div>
                                                    <div className='adc'>
                                                        <h4 style={{ margin: 0 }}>{item.topic}</h4>
                                                        <h5>What you&apos;ll learn</h5>
                                                        <ul className='pl'>
                                                            <li>{item.point1}</li>
                                                            <li>{item.point2}</li>
                                                            <li>{item.point3}</li>
                                                        </ul>
                                                        <div className='bdiv'>
                                                            <CartButton item={item} />
                                                            <div className='hbimg'>
                                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9nKX4mmWawwlgehpJGHNxT5OcxKVlRsIzA&usqp=CAU' alt='not found' className='if' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <div className='icdiv'>
                                                <h4 className='pd'>{item.topic}</h4>
                                                <p className='pd'>{item.instructor}</p>
                                                <div className='rtdiv'>{item.rating}<div><RatingStars rating={item.rating} /></div>(3256)</div>
                                                <p className='pd'>{item.duration} total hours . {item.lectures} lectures . All levels</p>
                                            </div>
                                            <div className='ipdiv'>
                                                <h4>₹{item.offerPrice}</h4>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SearchPage