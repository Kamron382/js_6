let a = ['olma', 'banan', 'gilos', 'kiwi']

alert(a)

let b = confirm('add smth ?')


if(b == true){
    a.push('mandarin')
    alert(a)
}else{
    a.pop()
    alert(a)
}