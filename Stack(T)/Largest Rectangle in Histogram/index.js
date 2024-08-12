function largestRectangleArea(A) {
    const n = A.length;
    const nsl = new Array(A);
    const nsr = new Array(A);

    const stackL = [];
    const stackR = [];

    // to find nearest smaller element on left/right side we need to follow 3 steps:
    // remove all greater or equal elements from stack
    // update ans: if stack is empty then ans is -1 else top of stack.
    // push current element to stack

    for (let i = 0; i < n; i++) {
        // prepare nsl
        while (stackL.length && A[stackL[stackL.length - 1]] >= A[i]) {
            stackL.pop();
        }
        if (stackL.length) {
            nsl[i] = stackL[stackL.length - 1];
        } else {
            nsl[i] = -1;
        }
        stackL.push(i);

        // prepare nrl
        while (stackR.length && A[stackR[stackR.length - 1]] >= A[n - i - 1]) {
            stackR.pop();
        }
        if (stackR.length) {
            nsr[n - i - 1] = stackR[stackR.length - 1];
        } else {
            nsr[n - i - 1] = n;
        }
        stackR.push(n - i - 1);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        let currArea = A[i] * (nsr[i] - nsl[i] - 1);
        ans = Math.max(ans, currArea);
    }
    return ans;
}

console.log(largestRectangleArea([2, 1, 4, 7, 5, 2, 1, 3, 4, 5, 6, 4, 3, 2, 3, 1, 5, 6, 4, 2]));