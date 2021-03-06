import React, { useState, useEffect } from 'react';
import './App.css';
import { useStateValue } from './StateProvider'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage/LandingPage'
import NutritionLandingPage from './routes/categories/nutrition/NutritionLandingPage/NutritionLandingPage'
import AdvisorFormPage1 from './routes/categories/nutrition/AdvisorFormPage1'
import AdvisorFormPage2 from './routes/categories/nutrition/AdvisorFormPage2'
import AdvisorFormPage3 from './routes/categories/nutrition/AdvisorFormPage3'
import AdvisorFormPage4 from './routes/categories/nutrition/AdvisorFormPage4'
import ResultsSummary from './routes/categories/nutrition/ResultsSummary'
import FoodSelection from './routes/categories/nutrition/FoodSelection'
import SupplementSelection from './routes/categories/nutrition/SupplementSelection/SupplementSelection'
import MealPlan from './routes/categories/nutrition/MealPlan/MealPlan'
import BlogPost from './routes/BlogPosts/BlogPost'
import Header from './components/Header'

function App() {

  const [{ dog, progress, width }, dispatch] = useStateValue()

  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

      dispatch({ type: 'UPDATE_WIDTH', payload: dimensions.width })
    
}

    window.addEventListener('resize', handleResize)
    

    return _ => {
      window.removeEventListener('resize', handleResize)

      
    
}
  })

  console.log(dimensions)

  return (
    <Router>
      <Header />
      <Route 
        exact
        path="/"
        component={LandingPage} 
      />
      <Route 
        exact
        path="/category/nutrition"
        component={NutritionLandingPage} 
      />
      <Route 
        exact
        path="/foodadvisor/page-one"
        component={AdvisorFormPage1} 
      />
       <Route 
        exact
        path="/foodadvisor/page-two"
        component={AdvisorFormPage2} 
      />
       <Route 
        exact
        path="/foodadvisor/page-three"
        component={AdvisorFormPage3} 
      />
       <Route 
        exact
        path="/foodadvisor/page-four"
        component={AdvisorFormPage4} 
      />
       <Route 
        exact
        path="/foodadvisor/results/summary"
        component={ResultsSummary} 
      />
       <Route 
        exact
        path="/foodadvisor/results/food"
        component={FoodSelection} 
      />
       <Route 
        exact
        path="/foodadvisor/results/supplements"
        component={SupplementSelection} 
      />
      <Route 
        exact
        path="/foodadvisor/mealplan/:id"
        component={MealPlan} 
      />
       <Route 
        exact
        path="/blog/nutrition/:id"
        component={BlogPost} 
      />
   
    
    </Router>
  );
}

export default App;
