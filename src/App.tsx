
import './App.css'
import './components/FullScrean.css'
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home'
import { Chat } from './pages/Chat';
import { Moji } from './pages/Moji';
import './components/FullScrean.css';


function App() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  return (
    <> 
      <Sidebar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/moji" element={<Moji />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
