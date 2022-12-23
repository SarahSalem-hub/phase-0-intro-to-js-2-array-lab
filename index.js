// Write your solution here!
let cats =["Milo", "Otis", "Garfield"]
  
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
     let newcat = [...cats.slice(0),name]
     return newcat
}
function prependCat(name){
    let newcat = [name, ...cats.slice(0)]
    return newcat
}
function removeLastCat(){
    let newcat = cats.slice(0,cats.length-1)
    return newcat
}
function removeFirstCat(){
    let newcat = cats.slice(1)
    return newcat
}