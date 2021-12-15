// sort dates in an new array
const datesArray = Object.keys(data)
const timesSort = datesArray.sort((a, b) => {
    return new Date(a).getTime() - new Date(b).getTime()
})
console.log(timesSort)