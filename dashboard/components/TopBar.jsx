import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const MenuItem = Menu.Item;

const TopBar = function TopBar() {

  return(
    <Header className="darkBlue">
      <Menu
        mode="horizontal"
        theme="dark"
        className="flex justify-between removeAfter items-center h-100 pa2 w-100"
      >
        <h1>CONNECTED CARS</h1>
        <MenuItem>Logout</MenuItem>
      </Menu>

    </Header>
  )
}

export default TopBar;
