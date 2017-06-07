import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { browserHistory } from 'react-router';

const { Sider } = Layout;
const MenuItem = Menu.Item;

const Sidebar = function Sidebar() {

  return(
    <Sider className="h-100">
      <Menu
        theme="dark"
        mode="vertical"
        onClick={(item) => browserHistory.push(`/${item.key}`)}
      >
        <MenuItem key="profile">
          <Icon type="user" />
          <span className="nav-text f5">Profile</span>
        </MenuItem>

        <MenuItem key="cars">
          <Icon type="car" />
          <span className="nav-text f5">Car</span>
        </MenuItem>
      </Menu>
    </Sider>
  )
}

export default Sidebar;
