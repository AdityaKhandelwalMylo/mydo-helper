import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MydoForm from './components/MydoForm/MydoForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MydoForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
