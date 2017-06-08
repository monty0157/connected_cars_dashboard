import React from 'react';
import { Mongo } from 'meteor/mongo'
import { createContainer } from 'meteor/react-meteor-data';
import CarsCollection from '../../api/Collections'

const CarsContent = function CarsContent({findCars, car}) {

  return(
    <h1>{car.model}</h1>
  )
}

const CarsContentContainer = createContainer(({params}) => {
  const { _id } = params;
  ObjectId = new Mongo.ObjectID(_id)

  return {
    car: CarsCollection.find({_id: ObjectId}).fetch(),
  }
}, (CarsContent))

export default CarsContentContainer;
