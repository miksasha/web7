import AuthScreen from './Authority/Authority'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<AuthScreen />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
