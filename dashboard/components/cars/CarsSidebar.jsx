import React from 'react';
import { Layout, Menu } from 'antd';
import { browserHistory } from 'react-router';

const { Sider } = Layout;
const { SubMenu } = Menu;
const MenuItem = Menu.Item;

const CarsSidebar = function CarsSidebar({findCars, loading}) {
  if(loading) return null;

  return(
    <Sider width={150} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        className="h-100"
        onClick={(item) => browserHistory.push(item.key)}
      >
        <MenuItem key="/cars">Info</MenuItem>
        <SubMenu title="Cars">
          {findCars.map(cars =>
            <MenuItem key={`/cars/${cars._id}`}>{cars.model}</MenuItem>
          )}
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default CarsSidebar;
