//styles
import './App.css'

//pages
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Receipe from './pages/receipe/Receipe';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

function App() {

  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
    <BrowserRouter>
        <Navbar />
        <ThemeSelector/>
        <Routes>
          <Route path="/" element={<Home/>}></Route> 
          <Route path="/create" element={<Create/>}></Route>

          <Route path="/recipes/:id" element={<Receipe/>}></Route>
          <Route path="/search" element={<Search/>}></Route>

        </Routes>
        </BrowserRouter>
     </div>
  );
}

export default App
