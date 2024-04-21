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




{// ****problem 1*****
  
  let a =1;
b();
function b(){
    a=10
    return ()=>{console.log('hello')}
}
console.log(a);
}




{// ****problem 2*****
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
}






{// ****problem 3 *****

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done!")
    }, 100);
}).then((result)=>console.log(result))  // after the settimeout the promise is resolved,

}





{// ****problem 4*****
  new Promise((resolve, reject) => {
    resolve(1)
 })
 .then((result)=>result*2)
 .then((result)=>result*2)
 .then((result)=>console.log(result))  // 4 is primted at last
 
}






{// ****problem 5*****
  new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
})
.then((result)=>console.log(result))
console.log(3);  // answer is 1 3 2  (important question)

}







{// ****problem 6*****
// good question from promise
console.log("start");

const promise = new Promise((resolve, reject) => {
  console.log("promise start");
  resolve(2);
  console.log("promise finish");
});

promise
  .then((v) => {
    console.log(v);
    return v + 2;
  })
  .finally((v) => {
    console.log(v,"finallly");
    return v + 2;
  })
  .catch((err) => {
    console.log(err);
    return err + 2;
  })
  .then((v) => {
    console.log(v, 'after than');
    return v + 2;
  })

console.log("finish");

}






{ // ****problem 7*****
  // closure problem 
  let a = 10;
  function b(){
    console.log(a);
  }
function c(){
  let a = 20;
  b(); 
}
c()
}






{ // ****problem 8*****
  // answer of console is undefined.
var a = 5;
(function b(){
  console.log(a);
  var a =10
})();
}