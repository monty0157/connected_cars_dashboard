import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const CarsCollection = new Mongo.Collection('cars');

if(Meteor.isServer) {
  Meteor.publish('cars.all_cars', function() {
    return CarsCollection.find();
  });
}

export default CarsCollection;
