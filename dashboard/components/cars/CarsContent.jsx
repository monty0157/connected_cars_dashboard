import React from 'react';
import { Mongo } from 'meteor/mongo'
import { createContainer } from 'meteor/react-meteor-data';
import { Form, Button } from 'antd';
import { compose, withHandlers, withProps } from 'recompose';
import { browserHistory } from 'react-router';

import CarsCollection from '../../api/Collections'
import CarForm from './CarForm';

const CarsContent = function CarsContent({car, handleRemoveCar, form = {}, loading, handleSubmit}) {
  if(loading) return null;
  const { validateFields, resetFields } = form;

  return(
    <div>
      <h1 className="mt0">{car.model} - {car.age}</h1>
      <h4 className="mv2">Change your car's name or age here:</h4>
      <Form onSubmit={(e) => handleSubmit({e, validateFields, resetFields})}>
        <CarForm
          {...this.props}
          form={form}
        />
        <Button
          htmlType="submit"
          type="primary"
          className="mr2 mv2"
        >
          Change
        </Button>
        <Button
          className="ml2 mv2"
          onClick={(e) => handleRemoveCar({e})}
        >
          Delete Car
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
            CarsCollection.update({"_id": id}, {
              $set: {
                model: values.car_name,
                age: values.car_age,
              }
            });
            console.log('Received values of form: ', values);
            resetFields();
          }
        });
      },

      handleRemoveCar({e}) {
        e.preventDefault();
        CarsCollection.remove({"_id": id});
        browserHistory.push('/cars/info_page');
      }
    }))
  )(CarsContent)
);


const CarsContentContainer = createContainer(({params}) => {
  const { _id } = params;
  //ObjectId = new Mongo.ObjectID(_id);
  const subscribe = Meteor.subscribe('cars.all_cars');

  return {
    car: CarsCollection.findOne({_id}),
    loading: !subscribe.ready(),
    id: _id,
  }
}, (CarsContentForm))

export default CarsContentContainer;
