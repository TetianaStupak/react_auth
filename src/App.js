import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Dashboard from "./components/Dashboard";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import "./App.css";
import Login from './components/Login';

const App = () => {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <h1 className="header">Auth Example </h1>
          <Login setToken={setToken} />
        </Container>
      </Container>
    )
  }

  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">Auth Example </h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard token={token} />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Container>
  )
}

export default App;

