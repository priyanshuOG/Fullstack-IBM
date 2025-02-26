// console.log(this);



// let obj={

//     name:"abc",

//     class:"btech",

//     myFunction:function(){

//         console.log(this);

//         // console.log(name, class)

//         console.log("I am a method inside object");

//     },

//     subjects:["dbms","cn","ai","ml","dl"],

//     newObj:{

//         1:80,

//         nestedFunction:function(){

//             console.log(this);

//             console.log("I am nested method of Object");

//         },

//         nestedNewObj:{

//             myMethod:function(){

//                 console.log("another nested method");

//             }

//         }

//     }

// }

// console.log(obj);

// obj.myFunction();

// obj.newObj,nestedFunction();





// let num1=10,num2=20;

// if(num1<num2){

//     console.log("$(num1)is less than $(num2)");

// }else if(num1==num2){

//     console.log("$(num1)is equall to $(num2)");



// }else{

//     console.log("$(num2)is less than $(num1)");

// }





// let a=3;

// if(a%3==0 && a%5==0){

//     console.log("$(a) is fizzbuzz");

// }else if(a%5==0){

//     console.log("$(a) is buzz");

// }else if(a%3==0){

//     console.log("$(a) is fizz");

// }else{

//     console.log("$(a) is something else");

// }





// let num=10;

// for(let I=0; I<num; I++){

//     console.log(I);

// }



// let arr=[1,2,3,4,5,6,7,8,9,10]

// for(let I=0; I<arr.length; I++){

//     console.log(arr[I],I)

// }



// let str = "abc def"

// for(I=0; I<=str.length; I++){

//     console.log("a"+str[I])

// }



// let arr=["a","b","c","d"]

// for(let num of arr){

//     console.log(num)

// }



// let num=5;

// while(num<10){

//     num++

// }



let arr=[1,2,3,4,5,6,7,8,9,10]

for(let I=0; I<arr.length; I++){

   if(arr[I]%2==0){

       console.log(arr[I]+is+even);

   }else{

       console.log(arr[I]+is+odd);

   }

}