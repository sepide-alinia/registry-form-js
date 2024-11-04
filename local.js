let lc = localStorage.getItem('myData')
console.log(lc)

let showMe = JSON.parse(lc)

document.write(showMe)