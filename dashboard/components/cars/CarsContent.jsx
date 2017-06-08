import React from 'react';
import { Mongo } from 'meteor/mongo'
import { createContainer } from 'meteor/react-meteor-data';
import CarsCollection from '../../api/Collections'

const CarsContent = function CarsContent({findCars, car, loading}) {
  if(loading) return null;

  return(
    <h1>{car.model}</h1>
  )
}

const CarsContentContainer = createContainer(({params}) => {
  const { _id } = params;
  ObjectId = new Mongo.ObjectID(_id);
  const subscribe = Meteor.subscribe('cars.all_cars');

  return {
    car: CarsCollection.findOne({_id: ObjectId}),
    loading: !subscribe.ready(),
  }
}, (CarsContent))

export default CarsContentContainer;
