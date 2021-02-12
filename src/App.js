import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import NutritionLandingPage from './routes/categories/nutrition/NutritionLandingPage'
import AdvisorFormPage1 from './routes/categories/nutrition/AdvisorFormPage1'
import AdvisorFormPage2 from './routes/categories/nutrition/AdvisorFormPage2'
import AdvisorFormPage3 from './routes/categories/nutrition/AdvisorFormPage3'
import AdvisorFormPage4 from './routes/categories/nutrition/AdvisorFormPage4'
import Header from './components/Header'

function App() {
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
   
    
    </Router>
  );
}

export default App;
