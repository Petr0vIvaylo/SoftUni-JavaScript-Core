function agregate(inputArr) {
    function reduce(arr, func) {
        let result = arr[0];
        for (let nextElement of arr.slice(1))
            result = func(result, nextElement);
        return result;

    }

    console.log('Sum = ' + reduce(inputArr, (a, b) => a + b));
    console.log('Min = ' + reduce(inputArr, (a, b) => a < b ? a : b));
    console.log('Max = ' + reduce(inputArr, (a, b) => a < b ? b : a));
    console.log('Product = ' + reduce(inputArr, (a, b) => a * b));
    console.log('Join = ' + reduce(inputArr, (a, b) => ''+ a + b))
}


agregate([5, -3, 20, 7, 0.5])