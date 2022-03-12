const colum = document.querySelectorAll('.colum')
const result = document.querySelector('.result')
const del = document.querySelector('.delete')
const btn = document.querySelector('#btn')
let str = ''


for (let i = 0; i < colum.length; i++) {
    colum[i].addEventListener('click', () => {
        if (colum[i].value === '=') {
            result.innerHTML = `${eval(str)}`
            str = `${eval(str)}`
        } else if (colum[i].value === '×') {
            result.innerHTML += '*'    
            str += `*` 
        } else if (colum[i].value === '÷') {
            result.innerHTML += '/'
            str += `/`
        } else {
            result.innerHTML += colum[i].value
            str += colum[i].value
        }

    })
}

del.addEventListener('click', () => {
    result.innerHTML = `` 
    str = ``
})

console.log(eval(str))