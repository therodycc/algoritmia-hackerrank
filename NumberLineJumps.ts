function kangaroo(
    startPosition1: number,
    jumpDistance1: number,
    startPosition2: number,
    jumpDistance2: number
): string {
    // If the second kangaroo starts ahead and moves faster, they'll never meet
    if (startPosition2 > startPosition1 && jumpDistance2 > jumpDistance1) return "NO";

    // If the rates are the same and they start at different positions, they won't meet
    if (jumpDistance1 === jumpDistance2 && startPosition1 !== startPosition2) {
        return "NO";
    }

    // Check if the difference in starting positions is divisible by the difference in rates
    return (startPosition2 - startPosition1) % (jumpDistance2 - jumpDistance1) === 0 ? "YES" : "NO";
}

function kangaroo_(startPosition1: number, jumpDistance1: number, startPosition2: number, jumpDistance2: number): string {
    const distance = (startPosition2 - startPosition1);
    const velocity = (jumpDistance1 - jumpDistance2);

    const timeToMeet = distance / velocity;
    return timeToMeet >= 0 && Number.isInteger(timeToMeet) ? "YES" : "NO";
}

const data = [
    [0, 2, 5, 3],
    [0, 3, 4, 2],
    [1571, 4240, 9023, 4234],
    [14, 4, 98, 2],
    [2, 1, 1, 2]
]

data.forEach(([x1, v1, x2, v2]) => {
    console.log(kangaroo(x1, v1, x2, v2), "-", kangaroo_(x1, v1, x2, v2))
})