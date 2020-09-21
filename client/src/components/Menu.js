import React from "react";
import {  Header, Button, Icon } from "semantic-ui-react";

const Menu = ({ id , name, deleteMenu, updateMenu }) => (
<>
  <Header>{name}</Header>
  <Button onClick={() => deleteMenu(id)}>Delete</Button>
  <Button onClick={() => updateMenu(id)}> Edit </Button>

</>
);


export default Menu;