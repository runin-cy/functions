function firstLetterName(NAME, FIRSTLETTEROFNAME) {
    alert("The name Trey starts with the letter T")
}
function divisibleByTwo(num) {
    var result;
    prompt("Enter a number")
    if ( num % 2 == 0){
        result = "true";
    }else {
        result = "false";
    }
    return result;
}
function largestNum(arr) {
    var results =[];
    for (var n =0; n < arr.length; n++) {
        var largestNum = arr[n][0];
        for (var sb = 1; sb < arr[n].length; sb++) {
            if (arr[n][sb] > largestNum) {
                largestNum = arr[n][sb];
            }
        }
        results[n] = largestNum;
    }
    return results;
}

firstLetterName("Trey", "T");
var result = divisibleByTwo("num");
console.log(result);
var results = largestNum("arr");
console.log(results);