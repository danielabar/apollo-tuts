import React from 'react';

// allow to write graphql query in javascript and pull in data
import gql from 'graphql-tag';
// connect query to component
import { graphql } from 'react-apollo';

// Due to higher order component graphql (see export default),
// data prop is available on App component containing query results
const App = ({data}) =>  {
  if (data.loading) return null;
  return (
    <div>
      <h1>{data.hi}</h1>
      <ul>
        {data.resolutions.map(r => (
          <li key={r._id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
}

// `hi` is a query defined on server: imports/startup/server/index.js
const hiQuery = gql`
{
  hi
  resolutions {
    _id
    name
  }
}
`;

// use higher order component pattern to connect query to app
// use React devtools to see data prop now available on App component with query results
export default graphql(hiQuery)(App);