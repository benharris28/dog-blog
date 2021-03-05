import React from 'react'

const CategoryHero = (props) => {
    return (
        <div>
           
<header class="hero container-fluid position-relative overflow-hidden">
  <div class="hero__content container">

   
    <div class="hero__body text-center col-lg-8 px-0 mx-auto">
      <h1 class="hero__title mb-3">{props.title}</h1>
      <p class="hero__paragraph mb-5">{props.subtitle}</p>
   
    </div>
  </div>

    <div class="hero__video-container">
      
    </div>
    
    </header>

        </div>
    )
}

export default CategoryHero
