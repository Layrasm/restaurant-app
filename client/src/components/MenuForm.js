import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const MenuForm = ({ addMenu }) =>{

    const [name, setName] = useState ("");

    const handleSubmit = (e) => {
      e.preventDefault();
      addMenu(name);
      setName("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input 
              label= "Menu"
              placeholder= "add Menu"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
        </Form>

    );

};

export default MenuForm;