
import MetaMask from "./components/metaMask/MetaMask";
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Nav from "./layout/header/nav";

function App() {
  const [modalOpen, setModalOpen] = useState(Boolean);
  const { ethereum } = window;

  useEffect(()=>{
    setModalOpen(!Boolean(ethereum && ethereum.isMetaMask));
  },[])

  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </div>
        { modalOpen && <MetaMask modalOpen={modalOpen} setModalOpen={setModalOpen}/>}
    </div>
  );
}

export default App;
