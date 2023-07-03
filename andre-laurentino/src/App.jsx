import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Components/Menu';
import Blog from './Pages/Blog';

export default function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          {/* <Route path="/details/:id" element={<Details/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

