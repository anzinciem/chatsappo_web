import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/privacy' element={<PrivacyPolicy/>}></Route>
        <Route path='/terms' element={<TermsConditions/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
