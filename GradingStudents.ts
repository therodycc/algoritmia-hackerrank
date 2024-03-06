function gradingStudents(grades: number[]): number[] {
    const resultArray: number[] = [];

    const add = (first: number, second: number) => resultArray.push(parseInt(`${first}${second}`));

    for (let index = 0; index < grades.length; index++) {
        const element = grades[index].toString();

        if (element.length > 1 && element.length < 3) {
            const numbers = element.split("");
            let first = parseInt(numbers[0]);
            let second = parseInt(numbers[1]);

            if (parseInt(element) < 38) {
                add(first, second)
            } else {
                if (second > 2 && second < 6) [second = 5]
                if (second > 7) [second = 0, first += 1]
                add(first, second)
            }
        } else {
            resultArray.push(parseInt(element))
        }
    }
    return resultArray;
}

console.log(gradingStudents([73, 67, 38, 33]));
console.log(gradingStudents([73, 67, 94, 33]));
console.log(gradingStudents([64, 24, 68, 14, 53, 49, 45, 99, 55, 24, 59, 67, 8, 76, 37, 24, 24, 73, 81]));
console.log(gradingStudents([23, 80, 96, 18, 73, 78, 60, 60, 15, 45, 15, 10, 5, 46, 87, 33, 60, 14, 71]));
console.log(gradingStudents([84, 94, 21, 0, 18, 100, 18, 62, 30, 61, 53, 0, 43, 2, 29, 53, 61, 40]));