import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import WeightTracker from './pages/WeightTracker';
import CalorieCalculator from './pages/CalorieCalculator';
import MealPlanner from './pages/MealPlanner';
import Settings from './pages/Settings';


function App() {
  return (

    <Router>
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/weighttracker' element={<WeightTracker />} />
       <Route path='/caloriecalculator' element={<CalorieCalculator/>} />
       <Route path='/mealplanner' element={<MealPlanner/>} />
       <Route path='/settings' element={<Settings/>} />
    </Routes>
 </Router>

  );
}

export default App;
