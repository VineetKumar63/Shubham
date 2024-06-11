import './App.css';
import Sidebar from './pages/sidebar';
import Enquiry from './pages/enquiry';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notification from './pages/notification';
import Dashboard from './pages/dashboard';
import Consultations from './pages/Consultations';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/"
            element={
              <Sidebar/>} >
              <Route path='/enquiry' element={<Enquiry/>} />
              <Route path='/notification' element={<Notification/>} />
              <Route path='/' element={<Dashboard/>} />
              <Route path='/consultations' element={<Consultations/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
