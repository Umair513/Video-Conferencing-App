import logo from './logo.svg';
import './App.css';
import LobbyScreen from './screens/Lobby';
import {Routes, Route} from "react-router-dom"
import RoomPage from './screens/Room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LobbyScreen></LobbyScreen>}></Route>
        <Route path='/room/:roomId' element={<RoomPage></RoomPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
