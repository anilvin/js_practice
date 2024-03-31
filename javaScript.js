// git comands

// git config --global user.name
// git config --global user.email
// git init --> initialize the git in current folder
// git diff 
// git add index.js
// git add.
// git status
// git commit -m "initial commit"
// git log --oneline
// git show commitshortid
// git blame
// git reset --hard 57b256(commit short id)
// git revert commitshortid

// git remote add origin (adderss of repo)
// git push -u origin main


// ****problem 1*****

let a =1;
b();
function b(){
    a=10
    return ()=>{console.log('hello')}
}
console.log(a);


// ****problem 2*****
for(let i=0; i<5; i++){
    setTimeout(()=>console.log(i),1000)
}    // this will print 0 1 2 3 4

for(var i=0; i<5; i++){
    setTimeout(()=>console.log(i),1000)
}   // this will print 5 5 5 5 5    // because let is block scope and var is globle or function scope and i is declared in block
    // for ex; {
    //     var i =0;
    //     operation
    //     i++
    // }   this kind of blocks are made may times as per no of loops and var value is updated and let value remains in the block itself


// ****problem 3 promise questions*****

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done!")
    }, 100);
}).then((result)=>console.log(result))  // after the settimeout the promise is resolved,

new Promise((resolve, reject) => {
   resolve(1)
})
.then((result)=>result*2)
.then((result)=>result*2)
.then((result)=>console.log(result))  // 4 is primted at last

new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
})
.then((result)=>console.log(result))
console.log(3);  // answer is 132
