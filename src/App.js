import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Originals from './components/Originals';
import Recommends from './components/Recommends';
import Trending from './components/Trending';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} caseSensitive={false} />
        <Route path='/originals' element={<Originals />} caseSensitive={false} />
        <Route path='/recommends' element={<Recommends />} caseSensitive={false} />
        <Route path='/trending' element={<Trending />} caseSensitive={false} />
        <Route path='/detail/:id' element={<Detail />} caseSensitive={false} />
      </Routes>
    </Router>
  );
}

export default App;
