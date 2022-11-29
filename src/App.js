import AuthScreen from './Authority/Authority'
import WeatherPage from './WeatherPage/WeatherPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<AuthScreen />} />
        <Route path="/dashboard"  element={<WeatherPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
