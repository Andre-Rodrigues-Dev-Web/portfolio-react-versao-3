import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Components/Menu';
import Blog from './Pages/Blog';
import Post from './Pages/Post'

export default function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/post/:slug" element={<Post/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

