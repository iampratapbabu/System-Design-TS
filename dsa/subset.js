var subsets = function(nums) {
    let outValue = [];            // not used to collect final; kept for minimal-change style
    let res = [];                 // collector for all subsets
    solve(nums, outValue, res);   // pass collector into solve
    return res;
};

function solve(ip, op, res){
    // base case: when no more input, push a copy of current output (subset)
    if (ip.length === 0){
        res.push(op.slice());     // push a copy so future mutations do not change stored subset
        return;
    }

    // create independent copies for two branches
    let op1 = op.slice();         // branch that does NOT include ip[0]
    let op2 = op.slice();         // branch that DOES include ip[0]

    // include current element in op2
    op2.push(ip[0]);

    // don't mutate ip for both branches — use a non-mutating remainder
    let rest = ip.slice(1);

    // recurse on the remainder with both branches
    solve(rest, op1, res);
    solve(rest, op2, res);
}

// test
let arr = [1,2,3];
let methodRes = subsets(arr);
console.log("method res", methodRes);
