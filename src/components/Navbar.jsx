import React, { useState } from 'react';
import { 
    Menu,
    Segment
} from 'semantic-ui-react';

import logoOIP from '../assets/logo.png'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>

      <Menu.Item>
          <img alt='logo' style={{width:"3em", margin: -10}} src={logoOIP} />
        </Menu.Item>


        <Menu.Item 
          position='right'
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='clinica'
          active={activeItem === 'clinica'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='trat'
          active={activeItem === 'trat'}
          onClick={handleItemClick}
        >
          Tratamentos e Especialidades
        </Menu.Item>
        <Menu.Item
          name='contato'
          active={activeItem === 'contato'}
          onClick={handleItemClick}
        />
        



      </Menu>
    </Segment>
  );
};

export default Navbar;
