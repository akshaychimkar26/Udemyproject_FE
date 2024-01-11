
import { MdLanguage } from 'react-icons/md'

function Footer() {
    return (
        <footer className='ft'>
            <div className='ftUp'>
                <div className='do'>
                    <p>Udemy Business</p>
                    <p>Teach on Udemy</p>
                    <p>Get the app</p>
                    <p>About us</p>
                    <p>Contact us</p>
                </div>
                <div className='dt'>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Help and Support</p>
                    <p>Affiliate</p>
                    <p>Popular courses</p>
                </div>
                <div className='dth'>
                    <p>Terms</p>
                    <p>Privacy policy</p>
                    <p>cookie settings</p>
                    <p>Sitemap</p>
                    <p>Accessibility statement</p>
                </div>
            </div>
            <div className='ftb'>
                <MdLanguage size={"1.2em"} color='white' />
                <span className='langbut'>English</span>
            </div>
            <div className='ftl'>
                <div className='uld'>
                    <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' alt='not found' />
                </div>
                <div className='cr'>
                    <p>© 2023 Udemy, Inc.</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer