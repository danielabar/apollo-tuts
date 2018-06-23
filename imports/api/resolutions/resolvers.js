// import our mongo collection
import Resolutions from './resolutions';

// Quick and dirty insert - no need to assign an _id because mongo will automatically assign it
// Resolutions.insert({
//   name: 'Test Res'
// })

// find returns a cursor, chain with fetch to just get data
// const res = Resolutions.find({}).fetch();
// console.log(res); // eg: [ { _id: 'Kfrp3n5K3NNKdiQ3e', name: 'Test Res' } ]

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    }
  }
}