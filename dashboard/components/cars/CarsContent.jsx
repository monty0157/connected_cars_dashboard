import React from 'react';
import { Mongo } from 'meteor/mongo'
import { createContainer } from 'meteor/react-meteor-data';
import { Form, Input, Col, Row, Button } from 'antd';
import { compose, withHandlers, withProps } from 'recompose';

import CarsCollection from '../../api/Collections'

const FormItem = Form.Item;

const CarsContent = function CarsContent({car, form = {}, loading, handleSubmit}) {
  if(loading) return null;
  const { getFieldDecorator, validateFields, resetFields } = form;

  return(
    <div>
      <h1 >{car.model} - {car.age}</h1>
      <h4 className="mv2">Change your car's name or age here:</h4>
      <Form onSubmit={(e) => handleSubmit({e, validateFields, resetFields})}>
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
        <Button
          label="Submit"
          htmlType="submit"
          type="primary"
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}

const CarsContentForm = Form.create({})(
  compose(
    withProps(({id}) => ({
      handleSubmit({e, validateFields, resetFields}) {
        e.preventDefault();
        validateFields((err, values) => {
          if (!err) {
            CarsCollection.update({"_id" : id}, {
              $set: {
                model: values.car_name,
                age: values.car_age,
              }
            });
            console.log('Received values of form: ', values);
            resetFields();
          }
        });
      }
    }))
  )(CarsContent)
);


const CarsContentContainer = createContainer(({params}) => {
  const { _id } = params;
  ObjectId = new Mongo.ObjectID(_id);
  const subscribe = Meteor.subscribe('cars.all_cars');

  return {
    car: CarsCollection.findOne({_id: ObjectId}),
    loading: !subscribe.ready(),
    id: ObjectId,
  }
}, (CarsContentForm))

export default CarsContentContainer;
