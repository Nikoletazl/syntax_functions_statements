function solve(num) {
    let number = Number(num)
    for (i = 0; i < number; i++) {
        let row = ''
        for (j = 0; j < number; j++){
            row += ' *'
        }
        console.log(row + ' ');
    }
}
solve(5)