const text = '안녕하세요'
console.log(text.replace('안녕', '안녕#')) // 안녕#하세요
console.log(text.replace('안녕', '안녕#').split('#')) // [ '안녕', '하세요' ]

const text2 = '철수안녕하세요'
console.log(text2.replace('안녕', '#안녕#').split('#')) // [ '철수', '안녕', '하세요' ]

// **** 시크릿 코드를 만들어 겹치지 않게 하는 법
const text3 = '철수안녕하세요'
console.log(text2.replace('안녕', '#@$%안녕#@$%').split('#@$%')) // [ '철수', '안녕', '하세요' ]
