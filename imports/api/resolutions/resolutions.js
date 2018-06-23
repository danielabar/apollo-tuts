import { Mongo } from 'meteor/mongo';

// Define collection
const Resolutions = new Mongo.Collection('resolutions');

export default Resolutions;
