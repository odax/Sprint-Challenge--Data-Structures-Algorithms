Add your answers to the Algorithms exercises here.

Exercise 1

a. o(n^3)
b. o(log(n))
c. o(sqrt(n))
d. o(log2)
e. o(n^3)
f. o(n)
g. o(n)

Exercise 2
a.
const maxDifference = (arr) => {
    let min = arr[0];
    let maxDifference = 0;
        arr.forEach(val => {
        min = Math.min(min, val);
        maxDifference = Math.max(maxDifference, val-min);
    });
        return maxDifference;
}

b. binary search

Exercise 3
a. o(n*log(n))
b. o(n^2)