import React from 'react'
import { Menu } from 'semantic-ui-react';
import logo from '../../Constants/logo.png';
const Navbar = ()=>{
    return(
        <Menu borderless fixed='top'>
            <Menu.Item>
                <img src={logo} alt="logo" styel={{height:250}}/>
            </Menu.Item>
            <Menu.Item name='Home'/>
            <Menu.Item name="About"/>
        </Menu>
    )

}
export default Navbar;