const arr = [10, 20, 10, 20, 30, 20, 20, 10, 10];
const n = arr.length;
function findDuplicate(arr) {
    let maxcount = 0;
    let x;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = i + 1; j < n; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
            if (count > maxcount) {
                maxcount = count;
                x = arr[i]
            }
        }

    }
    return x

}
let x = findDuplicate(arr);
console.log(x)

//const arr =[42,1, 335, 501, 170, 725,  479, 359, 963 ,465 ,706, 146, 12, 828 ,962 ,492 ,996 ,943, 828 ,437 ,392 ,605 ,903, 154 ,293, 383 ,422, 717 ,719, 896, 448 ,727, 772 ,539, 870 ,913, 668 ,300 ,36 ,895, 704, 812, 323]