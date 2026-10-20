/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const a = -(2 ** 31);
    const b = 2 ** 31 - 1
    let c = 0;
    if (x >= a && x <= b) {
        if (x > 0) {
            while (x>0) {
                let d = x % 10;
                c *= 10;
                c += d;

                x = x / 10 | 0;
            }
            x=c;
            if(x >= a && x <= b){
                return x
            }else{
                return 0 ;
                }
        }
        else{
            x = x*(-1);
            while (x>0) {
                let d = x % 10;
                c *= 10;
                c += d;

                x = x / 10 | 0;
            }
            x=c;
            if(x >= a && x <= b){
                return -x;
            }else{
                return 0 ;
                }
        }
    }else{
        return 0 ;
    }
}
