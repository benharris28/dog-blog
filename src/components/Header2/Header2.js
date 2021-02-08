import React from 'react'
import './Header2.css'

const Header2 = () => {
    return (

        <header className="hero container-fluid position-relative">
            <div className="hero__content container">


                <div className="hero__body text-center col-lg-8 px-0 mx-auto">
                    <h1 className="hero__title mb-3">Learning experiences made easy, social and<span className="highlight">interactive</span>.</h1>
                    <p className="hero__paragraph mb-5">Increase learner engagement &amp; knowledge retention in higher education and corporate training settings.</p>
                    <div className="hero__btns-container"><a className="hero__btn btn btn-primary mb-2 mb-lg-0 mx-1 mx-lg-2" href="#!">Sign up for free</a>
                        <a className="hero__btn btn btn-secondary mb-2 mb-lg-0 mx-1 mx-lg-2" href="#!">
                            Start your 14-days free
            </a>
                    </div>
                </div>
                <div className="mackbook-mockup-container position-relative mx-auto p-0">
                    <div className="mackbook-mockup"><img className="mackbook-mockup__img" src="https://platform.frontendor.com/assets/blocks/dist/images/block-8-media/MacBook-Pro.png" /> <img className="mackbook-mockup__screenshot" src="https://platform.frontendor.com/assets/blocks/dist/images/block-8-media/screenshot.png" /></div><svg className="hero-9-dots-svg hero-9-dots-svg--top-left">
                        <defs>
                            <pattern id="pattern" media="(min-width: 992px)" width="19" height="19" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(90)">
                                <rect id="pattern-background" x="0" y="0" width="400%" height="400%" fill="transparent"></rect>
                                <circle cx="20" cy="20" r="4" fill="currentColor" stroke="currentColor" stroke-width="0"></circle>
                                <circle cx="20" cy="20" r="0" fill="currentColor" stroke="currentColor" stroke-width="0"></circle>
                            </pattern>
                        </defs>
                        <rect fill="url(#pattern)" height="100%" width="100%" y="0" x="0"></rect>
                    </svg><svg className="hero-9-dots-svg hero-9-dots-svg--bottom-right">
                        <defs>
                            <pattern id="pattern" width="19" height="19" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(90)">
                                <rect id="pattern-background" x="0" y="0" width="400%" height="400%" fill="transparent"></rect>
                                <circle cx="20" cy="20" r="4" fill="currentColor" stroke="currentColor" stroke-width="0"></circle>
                                <circle cx="20" cy="20" r="0" fill="currentColor" stroke="currentColor" stroke-width="0"></circle>
                            </pattern>
                        </defs>
                        <rect fill="url(#pattern)" height="100%" width="100%" y="0" x="0"></rect>
                    </svg>
                </div>
            </div>
        </header>


    )
}

export default Header2
