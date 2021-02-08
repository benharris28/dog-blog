import React from 'react'
import './TestHeader.css'

const TestHeader = () => {
    return (
        <div>

            <div className="block-8-scr space-between-blocks">
                <div className="container position-relative">
                    <div className="row px-2 align-items-center flex-column-reverse flex-lg-row">

                        <div className="col-lg-6 position-relative mt-4 mt-lg-0">
                            <h1 className="block__title block__title--big mb-3">Free until<span className="highlight">you're ready to lanuch</span></h1>
                            <p className="block__paragraph block__paragraph--big mb-0">Build your site for free and take as long as you need. (That’s right, no trial here.) Just add a site plan for more pages, and a custom domain when you’re ready for the world.</p>
                        </div>
                        <div className="col-lg-6 my-5 my-lg-0 p-lg-5 text-center">
                            <div className="block-8-scr__img-container position-relative"><img className="block-8-scr__img w-100" src="https://images.unsplash.com/photo-1531496244015-67bec2b9952b?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80" /><svg className="block-8-scr-scr-dots-svg">
                                <defs>
                                    <pattern id="pattern" width="19" height="19" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(90)">
                                        <rect id="pattern-background" x="0" y="0" width="400%" height="400%" fill="transparent"></rect>
                                        <circle cx="20" cy="20" r="4" fill="currentColor" stroke="currentColor" stroke-width="0"></circle>
                                        <circle cx="20" cy="20" r="0" fill="currentColor" stroke="currentColor" stroke-width="0"></circle>
                                    </pattern>
                                </defs>
                                <rect fill="url(#pattern)" height="100%" width="100%" y="0" x="0"></rect>
                            </svg></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default TestHeader
