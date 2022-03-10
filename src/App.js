import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import PostDetail from './components/PostDetail';
import Menu from './components/ui/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Form />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
