<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Full-stack Graph QL with Apollo, Meteor & React](#full-stack-graph-ql-with-apollo-meteor--react)
  - [GraphiQL](#graphiql)
  - [Organizing Resolvers](#organizing-resolvers)
  - [Adding a Database](#adding-a-database)
  - [Mutations](#mutations)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Full-stack Graph QL with Apollo, Meteor & React

> Notes from Youtube LevelUpTuts [series](https://www.youtube.com/watch?v=m0TC5DcFHDY&t=384s&list=PL_vZ4VzURIjxGu5N7wqNGM6R8h35xa9eV&index=2)

Run app from project root: `meteor`.

## GraphiQL

After Apollo server is running, browse to [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

Use this to test queries, eg: (Cmd + Enter to run query)

```javascript
{
  hi
}
```

Need babel config changes to be able to import load .graphql files.

When graphql query returns an object or array of objects (rather than simple string), must specify what objects you want when runing the query.

Given this definition from `Resolution.graphql`:

```javascript
type Resolution {
  _id: String!
  name: String!
}
```

This will return an error:

```javascript
{
  resolutions
}
```

Client must explicitly state what fields it wants, for example, if only want name field:

```javascript
{
  resolutions {
    name
  }
}
```

Will return results like:

```javascript
{
  "data": {
    "resolutions": [
      {
        "name": "Get stuff done!"
      },
      {
        "name": "Get more stuff done!"
      }
    ]
  }
}
```

## Organizing Resolvers

Don't want all queries in `imports/startup/server/register-api.js`. Better to have them organized per logical function, eg: `imports/api/resolutions/resolvers.js`.

Resolver is a query. But `Query` is just one type of resolver, there are many more.

Use lodash to merge `npm i --save lodash`.

## Adding a Database

Recall Meteor already comes with Mongo, so `import { Mongo } from 'meteor/mongo';`

For this demo, graphql schema will mirror collection structure in db but doesn't have to be one to one mapping.

Think of graphql schema as public API.

To hook up db, return `Resolutions.find({}).fetch()` in `resolvers.js` instead of hard-coded data.

## Mutations