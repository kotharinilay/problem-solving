function solve(A) {
    const n = A.length;
    const nsl = new Array(n);
    const nsr = new Array(n);
    const ngl = new Array(n);
    const ngr = new Array(n);

    const stackSL = [];
    const stackGL = [];
    const stackSR = [];
    const stackGR = [];

    for (let i = 0; i < n; i++) {
        // prepare nsl
        while (stackSL.length && A[stackSL[stackSL.length - 1]] >= A[i]) {
            stackSL.pop();
        }
        if (stackSL.length) {
            nsl[i] = stackSL[stackSL.length - 1];
        } else {
            nsl[i] = -1;
        }
        stackSL.push(i);

        // prepare nsr
        while (stackSR.length && A[stackSR[stackSR.length - 1]] > A[n - i - 1]) {
            stackSR.pop();
        }
        if (stackSR.length) {
            nsr[n - i - 1] = stackSR[stackSR.length - 1];
        } else {
            nsr[n - i - 1] = n;
        }
        stackSR.push(n - i - 1);

        // prepare ngl
        while (stackGL.length && A[stackGL[stackGL.length - 1]] <= A[i]) {
            stackGL.pop();
        }
        if (stackGL.length) {
            ngl[i] = stackGL[stackGL.length - 1];
        } else {
            ngl[i] = -1;
        }
        stackGL.push(i);

        // prepare ngr
        while (stackGR.length && A[stackGR[stackGR.length - 1]] < A[n - i - 1]) {
            stackGR.pop();
        }
        if (stackGR.length) {
            ngr[n - i - 1] = stackGR[stackGR.length - 1];
        } else {
            ngr[n - i - 1] = n;
        }
        stackGR.push(n - i - 1);
    }

    let maxSum = 0;
    let minSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += A[i] * ((i - ngl[i]) * (ngr[i] - i));
        minSum += A[i] * ((i - nsl[i]) * (nsr[i] - i));
    }
    return maxSum - minSum;
}

console.log(solve([1, 8, 3, 5, 4, 2, 11, 7, 2]));