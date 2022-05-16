//alert('hello')
/*console.log(a)
var a=10
var b=20
var c=30
console.log(a)
var b=c
console.log(b)
function test2(){
    console.log('taheer')
}

function test(){
    console.log('hi')
}
test()
test2()
console.log(test2);
console.log(test);

var a=35;
console.log(a);

 function test(){
     var a=20;
     console.log(a);
 }
 test();
 console.log(a);

 var a=function(){
     console.log('hi');

 }
 var b=function() {
     console.log('hello')
     
 }
 function abc(fn){
     fn()
     console.log(fn);
 }
 abc(a);
  let x=10;
 console.log(x);
  y=20;
 console.log(y);
  z=30;
  z=10;
 console.log(z);*/
 var x;
 function myfunction(){
     var a=10;
     var b=20;
     let x;
     
     console.log(a,b);
     {
          x=40;
         var y=50;
         const z=35;
         console.log(x);
         console.log(y);
         console.log(b);
         console.log(z);
     }

     console.log(x);//let(block scope)
     console.log(b);
     console.log(y);// var(fn scope)
     console.log(a);
     console.log(z);//const(blocvk scope)
 }
 //myfunction()

 //ten(10);
 //eigthteenmulti();

 //console.log(eigthteenmulti);

 function ten(number) {
     console.log(number*10);
     
 }
 function eigthteenmulti(number) {
     console.log(number*18);
     
 }
 ten(10);
 eigthteenmulti(100);

 console.log('hi');
