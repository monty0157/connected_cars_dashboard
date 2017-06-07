import React from 'react';
import { Layout, Card } from 'antd';
import Wrapper from './Wrapper';
import CarsCollection from '../api/Collections'

const { Content } = Layout;

const Cars = function Cars() {
CarsCollection.insert({model: 'TELSA'})
  return(
    <Wrapper>
      <Content>
        <Card />
      </Content>
    </Wrapper>
  )
}

export default Cars;
