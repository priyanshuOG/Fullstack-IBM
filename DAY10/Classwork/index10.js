/*
let str="sv university"
console.log(str.length-1)
console.log(str[str.length-5])
console.log(str)
let arr=[1,2,3,"svu",true,false,null,undefined," "]
arr.push("cse")
let slicedArr = arr.slice(2, 5);
arr.splice(1,2)
console.log(arr)
let obj = {
    name: "Priyanshu",
    age: 21,
    Subject: "DS",
    nm: ["a","b","c"]
} //object key will always be string
console.log(obj)
obj.nm.push("d")
console.log(obj.nm)
obj.ne="new"
console.log(obj)
let name="svu"
let Class="btech ds"
let subjects=["ds","os","cn"]
let newobj={
    name,
    Class,
    subjects
}
console.log(newobj)
let arr=[1,2,[3,4,5,6,[7,8,9]]]
console.log(arr[2][4][0]);//working on nested array using index
*/
let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13 }
    }
}
console.log(superHeroes[1].name, superHeroes[1].power[0], superHeroes[1].villains[0].name, superHeroes[1].metadata.favouriteColor)