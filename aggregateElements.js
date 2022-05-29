function solve(input) {
    let array = input.map(Number)
    let sum = 0
    let inverseSum = 0
    let concat = ''
    for (let i = 0; i < array.length; i++){
        sum += array[i]
        inverseSum += 1 / array[i]
        concat += array[i].toString()
        
    }
    console.log(sum)
    console.log(inverseSum)
    console.log(concat)
}
solve([1, 2, 3])