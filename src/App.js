import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import NutritionLandingPage from './routes/categories/nutrition/NutritionLandingPage'
import AdvisorFormPage1 from './routes/categories/nutrition/AdvisorFormPage1'
import AdvisorFormPage2 from './routes/categories/nutrition/AdvisorFormPage2'
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
   
    
    </Router>
  );
}

export default App;
