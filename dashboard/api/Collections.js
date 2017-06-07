import { Mongo } from 'meteor/mongo';

const CarsCollection = new Mongo.Collection('cars');

export default CarsCollection;
