function toArray(liststr) {
    var arr = [];
    arr.push(3);
    arr.push(5);
    arr.push(0);
    arr.push(-1);
    arr.push(45);
    return arr;
}

function getMin(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (min > arr[i]) min = arr[i];
    }
    return min;
}
function toHtml(methodName, methodVal) {
    return '<li class="method-result">' +
                '<span class="method-name">' +
                    '.' + methodName + ' = ' +
                '</span>' +
                '<span class="method-val">' +
                    methodVal +
                '</span>' +
            '</li>';
}
function result () {
    var min = getMin([3, 5, 0, -1, 45]);
    document.getElementById('results-list').innerHTML = toHtml('min', min);
}
result();
