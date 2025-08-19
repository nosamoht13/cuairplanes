import './App.css';
import { Routes , Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/columbiauniversityplaneclub" element={<Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;
