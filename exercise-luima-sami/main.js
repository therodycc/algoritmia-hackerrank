// get all uuid in a new array
let uuids = []

const valuesUuids = Object.values(data)

valuesUuids.forEach(item =>{
    item.transactions.map(dt =>{
        uuids.push(dt.uuid)
    })
})

console.log(uuids)

