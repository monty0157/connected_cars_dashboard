import React from 'react';
import { Form, Button, Modal } from 'antd';
import { compose, withState, withProps } from 'recompose'
import { createContainer } from 'meteor/react-meteor-data';

import CarForm from './CarForm';
import CarsCollection from '../../api/Collections'

const InfoPage = function InfoPage({form = {}, handleModalOpen, handleAddCar, modalOpen}) {
  const { getFieldDecorator, validateFields } = form;

  return(
    <div>
      <h1 className="mt0">Add new cars here</h1>
      <Modal
        title="Basic Modal"
        visible={modalOpen}
        onCancel={() => handleModalOpen()}
        onOk={() => handleAddCar({ validateFields })}
        cancelText="Cancel"
        okText="Add"
      >
      <CarForm
        {...this.props}
        form={form}
      />
      </Modal>
      <Button
        type="primary"
        onClick={() => handleModalOpen()}
      >
        Add Car
      </Button>
    </div>
  )
}

const InfoPageCompose = Form.create({})(
  compose(
    withState("modalOpen", "setModalOpen", false),
    withProps(({modalOpen, setModalOpen}) => ({
      handleModalOpen: () => setModalOpen(!modalOpen),
      handleAddCar: ({ validateFields }) => validateFields((err, value) => {
        CarsCollection.insert({model: value.car_name, age: value.car_age})
        setModalOpen(!modalOpen);
      }),
    }))
  )(InfoPage)
);


export default InfoPageCompose;
