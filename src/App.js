import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import SearchPost from './components/SearchPost';
import DeletePost from './components/DeletePost';
import NavBar from './components/NavBar';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddPost/>}/>
      <Route path='/Search' element={<SearchPost/>}/>
      <Route path='/Delete' element={<DeletePost/>}/>
      <Route path='/View' element={<ViewAll/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
