import React, { useState, useEffect } from 'react';
import { Container } from "semantic-ui-react";
import './App.css';
import axios from "axios";
import MenuList from "./components/MenuList"

function App() {
  const [menus, setMenus] = useState([]);
  
  useEffect(() => {
    axios 
      .get("/api/menus")
      .then ((res) => {
        console.log(res.data)
        setMenus(res.data);
      })
      .catch((err) => {
        alert("error occurred");
      });
  }, []);
  
  return (
    <Container>
      <h1>Restaurant</h1>
      <MenuList menus={menus}/>
      </Container>
  );
}

export default App;
