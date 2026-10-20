/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let copy = x;
    let rev = 0;
    if (x>= 0) {
        while (copy > 0) {
            let c = copy % 10;
            rev *= 10;
            rev += c;
            copy = copy / 10 | 0;
        }
        return rev == x;

    } else {
        return false;
    }
};