const faunadb = require('faunadb'),
  q = faunadb.query

const client = new faunadb.Client({ secret: process.env['slakrFaunaSecret'] })

let createP = client.query(
    q.Create(q.Collection('users'), { data: { testField: 'testValue' } })
)

createP.then(function(response: any) {
    console.log(response)
    console.log(response.ref) // Would log the ref to console.
})

createP.catch((err: any) => {
    console.log(err)
})