import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { browserHistory } from 'react-router';

const { Sider } = Layout;
const MenuItem = Menu.Item;

const MenuItems =[
  {
    key: 'profile',
    icon: 'user',
    label: 'Profile',
  },
  {
    key: 'cars',
    icon: 'team',
    label: 'Cars',
  },
  {
    key: 'settings',
    icon: 'setting',
    label: 'Settings',
  }
]

const Sidebar = function Sidebar() {

  return(
    <Sider className="h-100 bg-white width__15 flexAuto">
      <Menu
        theme="light"
        mode="vertical"
        onClick={(item) => browserHistory.push(`/${item.key}`)}
      >
        {MenuItems.map(item =>
          <MenuItem key={item.key}>
            <Icon type={item.icon} />
            <span className="nav-text f5">{item.label}</span>
          </MenuItem>
        )}
      </Menu>
    </Sider>
  )
}

export default Sidebar;
