import React from 'react'
import TestHeader from '../../components/TestHeader'
import Header2 from '../../components/Header2/Header2'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div>
            <Container>

            <div className="block-12 space-between-blocks">
                <div className="container-xl">

                    <div className="col-lg-8 col-xl-7 mx-auto text-center mb-5">
                        <h1 className="block__title mb-3">Save Time By Not Developing Everything From Scratch</h1>
                        <p className="block__paragraph pb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard</p>
                    </div>
                    <div className="row px-2">
                        <div className="col-lg-4 mb-2-1rem">
                            <Link to='/category/nutrition'>
                            <div className="card-1">
                                <div className="card-1__content">
                                    <h3 className="card-1__title">Nutrition</h3>
                                    <p className="card-1__paragraph">We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
                                    <div className="card-1__button-container"><span className="card-1__cta-text">Discover Now</span><span className="mx-1"></span><svg className="card-1__cta-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                    </svg></div>
                                </div>
                                <div className="card-1__shapes"><img src="https://www.flaticon.com/svg/static/icons/svg/3154/3154335.svg" /></div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 mb-2-1rem">
                            <div className="card-1 card-1--selected">
                                <div className="card-1__content">
                                    <h3 className="card-1__title">IT Design</h3>
                                    <p className="card-1__paragraph">We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
                                    <div className="card-1__button-container"><span className="card-1__cta-text">Discover Now</span><span className="mx-1"></span><svg className="card-1__cta-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                    </svg></div>
                                </div>
                                <div className="card-1__shapes"><img src="https://www.flaticon.com/svg/static/icons/svg/3154/3154221.svg" /></div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2-1rem">
                            <div className="card-1">
                                <div className="card-1__content">
                                    <h3 className="card-1__title">Leading the Future of Work</h3>
                                    <p className="card-1__paragraph">Our network is ready for tomorrow's business challenges by embracing advanced and specialized skills including blockchain and AI.</p>
                                    <div className="card-1__button-container"><span className="card-1__cta-text">Discover Now</span><span className="mx-1"></span><svg className="card-1__cta-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                    </svg></div>
                                </div>
                                <div className="card-1__shapes"><img src="https://www.flaticon.com/svg/static/icons/svg/3154/3154211.svg" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-12__shape-for-background"></div>
            </div>
            </Container>
        </div>
    )
}

export default LandingPage
