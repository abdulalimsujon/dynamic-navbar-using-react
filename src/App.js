import { Route, Routes } from 'react-router-dom';
import './App.css';

import About from './component/Friends/About/About';
import Friends from './component/Friends/Friends';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import DetailFriend from './DetailFriend/DetailFriend';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Friends' element={<Friends></Friends>}></Route>
        <Route path='/buddy/:buddyId' element={<DetailFriend></DetailFriend>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
