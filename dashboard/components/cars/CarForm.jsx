import React from 'react';
import { Form, Col, Row, Input } from 'antd';

const FormItem = Form.Item;

const CarForm = function CarForm({ form = {}, loading }) {
  if(loading) return null;
  const { getFieldDecorator } = form;

  return(
    <Row
      gutter={12}
      justify="space-between"
    >
      <Col span={8}>
        <FormItem
          className="mb2"
          label="Bilens navn"
        >
            {getFieldDecorator("car_name")(

              <Input size="default" />
            )}
        </FormItem>
      </Col>

      <Col span={8}>
        <FormItem
          label="Bilens alder"
          className="mb2"
        >
          {getFieldDecorator("car_age")(

            <Input size="default" />
          )}
        </FormItem>
      </Col>
    </Row>
  )
}

export default CarForm;
