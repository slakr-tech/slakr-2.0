const faunadb = require('faunadb'),
  q = faunadb.query

const client = new faunadb.Client({ secret: process.env['slakrFaunaSecret'] })

function insert(doc: object){

    let createP = client.query(
        q.Create(q.Collection('users'), { data: { doc } })
    )
    createP.then(function(response: any) {
        console.log(response)
        console.log(response.ref) // Would log the ref to console.
    })
    
    createP.catch((err: any) => {
        console.log(err)
    })
}