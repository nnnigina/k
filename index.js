let yage = prompt('Сколько вам лет?')
    let mark = '1) Mersedes-Benz  2) BMW  3) Audi  4) Lamborghini'
if(yage >= 18) {
    prompt('Какую марку предпочитаете из этого списка?' + '  ' + mark + '  ' + '(введите только номер марки)').trim
    if(mark === 1) {
        confirm('Аренда за час Mersedes-Benz стоит 200$')
    } else if (mark === 2) {
    confirm('Аренда за чаc BMW стоит 200$')} 
    else if (mark === 3) {
r        confirm('Аренда за чаc Audi стоит 200$')}
    else if (mark === 4) {
            confirm('Аренда за чаc Lamborghini стоит 200$')}
    if(confirm === true) {
        prompt('на сколько часов хотите арендовать')} else {
            alert('досвидания')
    } } else {
    alert('не верно введенные данные')
} else { alert('Для того, что-бы заполнить следующее поле вам должно быть не меньше 18!')
}


console.log(mark.split(' '));