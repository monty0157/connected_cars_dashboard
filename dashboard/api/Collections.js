import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const CarsCollection = new Mongo.Collection('cars');

CarsCollection.allow({
  update() {
    return true;
  },
  remove() {
    return true;
  }
})

if(Meteor.isServer) {
  Meteor.publish('cars.all_cars', () => CarsCollection.find());
}

export default CarsCollection;
