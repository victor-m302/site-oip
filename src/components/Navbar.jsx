import React, { useState } from 'react';
import { 
    Menu,
    Segment
} from 'semantic-ui-react';

import logoOIP from '../assets/logo_nobg.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Segment style = {{ backgroundColor: '#ADD8E6'}}>
      <Menu  pointing secondary>

      <Menu.Item>
          <img alt='logo' style={{width:"3em", margin: -10}} src={logoOIP} />
        </Menu.Item>


        <Menu.Item 
          as={Link}
          to='/site-oip/'
          position='right'
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/site-oip/clinica'
          name='clinica'
          active={activeItem === 'clinica'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/site-oip/equipe'
          name='equipe'
          active={activeItem === 'equipe'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/site-oip/especialidades'
          name='especialidades'
          active={activeItem === 'especialidades'}
          onClick={handleItemClick}
        >
          Especialidades
        </Menu.Item>
        <Menu.Item
          as={Link}
          to='/site-oip/contato'
          name='contato'
          active={activeItem === 'contato'}
          onClick={handleItemClick}
        />
        



      </Menu>
    </Segment>
  );
};

export default Navbar;
