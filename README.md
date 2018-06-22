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

Left off at: https://www.youtube.com/watch?v=cLCnmYEupkk