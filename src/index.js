module.exports = function solveEquation(equation) {
    equation = equation.split('').filter(item => /\S/.test(item));
    equation = equation.join('');

    function solve(a, b, c) {

        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);

        var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        return [Math.round(result), Math.round(result2)].sort((a, b) => a - b);
    }

    var match = equation.match(/[-\+]\d+|(^\d+)/g);

    match = match.filter(item => item);
    return solve(...match);

}
