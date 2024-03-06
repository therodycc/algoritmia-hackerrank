function timeConversion(s: string): string {
    const getFormat = (hour: number, minute: number, second: number = 0) => {
        const _second = second < 10 ? `0${second}` : `${second}`
        const _minute = minute < 10 ? `0${minute}` : `${minute}`
        const _hour = hour === 24 ? `00` : hour < 10 ? `0${hour}` : `${hour}`

        return `${_hour}:${_minute}:${_second}`
    }

    let hour = parseInt(s.slice(0, 2))
    let minute = parseInt(s.slice(3, 5))
    let second = parseInt(s.slice(6, 8))
    let time = s.slice(8, 10)

    if ((time === "PM" && hour !== 12) || (time === "AM" && hour === 12)) {
        return getFormat(hour + 12, minute, second)
    }

    return getFormat(hour, minute, second)
}


console.log(timeConversion('07:05:45PM'))
console.log(timeConversion('12:40:22AM'))
console.log(timeConversion('06:40:03AM'))
console.log(timeConversion('12:45:54PM'))