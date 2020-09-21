import React, { useState, useEffect } from 'react';
import { Container } from "semantic-ui-react";
import './App.css';
import axios from "axios";
import MenuList from "./components/MenuList";
import MenuForm from "./components/MenuForm";

function App() {
  const [menus, setMenus] = useState([]);
  
  useEffect(() => {
    axios 
      .get("/api/menus")
      .then((res) => {
        setMenus(res.data);
      })
      .catch((err) => {
        alert("error occurred");
      });
  }, []);
  
  const addMenu = (name) => {
    axios 
      .post("/api/menus", {name: name})
      .then((res) => {
        setMenus([...menus, res.data]);
      })
      .catch((err)=> {
        alert ("can't create");
      });
  };

  const deleteMenu = (id) => {
    axios 
    .delete(`/api/menus/${id}`)
    .then((res)=>{
      setMenus(menus.filter((menu) => menu.id !== res.data.menu.id));
    })
    .catch((err)=> {
      alert("not deleted");
    });
  }
  const updateMenu = (id) =>{
    axios
    .put(`/api/menus/${id}`)
    .then((res) =>{
      const newMenus = menus.map((m) => {
        if (m.id === res.data.id) {
        return res.data;
        }
        return m;
      })
      setMenus(newMenus);

    })
  }

  return (
    <Container>
      <h1>Restaurant</h1>
      <MenuForm  addMenu={addMenu}/>
      <MenuList menus={menus} deleteMenu={deleteMenu} updateMenu={updateMenu}/>
      </Container>
  );
}

export default App;
