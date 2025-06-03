import { Routes, Route } from 'react-router';
import { TodoDetail } from './pages/todo-detail/todo-detail';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import SearchAppBar from './components/header/Header';
import Home from './pages/home/home';

function App() {
  return (
    <>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
