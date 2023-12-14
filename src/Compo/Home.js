/* eslint-disable react/destructuring-assignment */

import ImageCarousel from './ImageCarousel'
import { MdPlayCircle } from "react-icons/md";
import Footer from './Footer';

function Home() {
    const images = [
        "https://techboomers.com/wp-content/uploads/2018/02/best-udemy-courses-1024x576.png",
        "https://www.academicfaqs.com/wp-content/uploads/2019/04/Udemy-online-learning-offers-ethereum-1024x512-11-22-2016.jpg"
    ]
    return (
        <div>
            <ImageCarousel images={images} />
            <br></br>
            <div className='trustedby_div'>
                <h5 className='trustedh5'>Trusted by over 15,000 companies and millions of learners around the world</h5>
                <div className='mainbrandsimg_div'>
                    <div className='brandsimg_div'>
                        <img className='imgfil' src='https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg' alt='not found' />
                    </div>
                    <div className='brandsimg_div'>
                        <img className='imgfil' src='https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg' alt='not found' />
                    </div>
                    <div className='brandsimg_div'>
                        <img className='imgfil' src='https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg' alt='not found' />
                    </div>
                    <div className='brandsimg_div'>
                        <img className='imgfil' src='https://s.udemycdn.com/partner-logos/ou-v1/att.svg' alt='not found' />
                    </div>
                    <div className='brandsimg_div'>
                        <img className='imgfil' src='https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg' alt='not found' />
                    </div>
                    <div className='brandsimg_div'>
                        <img className='imgfil' src='https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg' alt='not found' />
                    </div>
                    <div className='brandsimg_div'>
                        <img className='imgfil' src='https://s.udemycdn.com/partner-logos/ou-v1/citi.svg' alt='not found' />
                    </div>
                    <div className='brandsimg_div'>
                        <img className='imgfil' src='https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg' alt='not found' />
                    </div>
                </div>
            </div>
            <br /><br />
            <div className='learners_div'>
                <h2 className='learnh2'>How learners like you are achieving their goals</h2>
                <div className='mainlearnercard_div'>
                    <div className='learnercard_div'>
                        <div className='imgdouble'>
                            <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt='not found' className='imgfil' />
                        </div>
                        <p className='learnertext'>I am proud to say that after a few months of taking this course...<span>I passed my exam and am now an AWS Certified Cloud Practitioner!</span> This content was exactly what the CCP exam covered.</p>
                        <div className='profile_learner'>
                            <div className='profileround'>
                                <h5>WA</h5>
                            </div>
                            <h4 className='h4profilename'>Will A</h4>
                        </div>
                        <hr />
                        <div className='flexy'>
                            <MdPlayCircle color='rgb(22, 22, 179)' size={"3em"} />
                            <p className='playspan'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</p>
                        </div>
                    </div>
                    <div className='learnercard_div'>
                        <div className='imgdouble'>
                            <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt='not found' className='imgfil' />
                        </div>
                        <p className='learnertext'>I am proud to say that after a few months of taking this course...<span>I passed my exam and am now an AWS Certified Cloud Practitioner!</span> This content was exactly what the CCP exam covered.</p>
                        <div className='profile_learner'>
                            <div className='profileround'>
                                <h5>WA</h5>
                            </div>
                            <h4 className='h4profilename'>Will A</h4>
                        </div>
                        <hr />
                        <div className='flexy'>
                            <MdPlayCircle color='rgb(22, 22, 179)' size={"3em"} />
                            <p className='playspan'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</p>
                        </div>
                    </div>
                    <div className='learnercard_div'>
                        <div className='imgdouble'>
                            <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt='not found' className='imgfil' />
                        </div>
                        <p className='learnertext'>I am proud to say that after a few months of taking this course...<span>I passed my exam and am now an AWS Certified Cloud Practitioner!</span> This content was exactly what the CCP exam covered.</p>
                        <div className='profile_learner'>
                            <div className='profileround'>
                                <h5>WA</h5>
                            </div>
                            <h4 className='h4profilename'>Will A</h4>
                        </div>
                        <hr />
                        <div className='flexy'>
                            <MdPlayCircle color='rgb(22, 22, 179)' size={"3em"} />
                            <p className='playspan'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</p>
                        </div>
                    </div>
                </div>
            </div><br /><br />
            <div className='becomeinstruc_div'>
                <div className='becomeinstruc_imgdiv'>
                    <img className='imgfil' src='https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg' alt='not found' />
                </div>
                <div className='becomeinstruc_contentdiv'>
                    <h1>Become an instructor</h1>
                    <p>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p>
                    <button>Start teaching today</button>
                </div>
            </div><br /><br />
            <Footer />
        </div>
    )
}

export default Home