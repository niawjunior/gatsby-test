---
title: "รวมเทคนิคการใช้ Destructuring ในรูปแบบต่างๆ"
slug: destructuring-in-javascript
date: 2020-02-27
cover: ./cover.jpeg
generate-card: true
imageShare: ./destructuring-in-javascript-share.png
language: th
disqus: true
tags:
    - destructuring
    - javascript
---
รวมเทคนิคการใช้ Destructuring ในรูปแบบต่างๆ จริงๆเรื่องนี้ ก็มีเคยโพสลงเพจ ไปบ้างแล้ว แต่โพสนี้ จะยกตัวอย่าง การใช้ Destructuring ในรูปแบบต่างๆ ที่หลายคนอาจไม่เคยใช้มาก่อน มาให้ดูกันครับ

>อธิบาย สั้นๆก่อนละกัน สำหรับ คนที่พึ่งมาหัดเขียน JavaScript อาจจะงงๆ ว่า มันคืออะไร Destructuring เป็น feature ที่มาใน ES6 ซึ่งความสามารถ ของมันคือ unpack หรือ แกะ variables หลายๆตัว พร้อมทั้ง value ต่างๆ ออกมาจาก Array หรือ Object ได้!

เดี๋ยวก่อน อย่าพึ่ง งง ไปดูตัวอย่าง การใช้งาน ในแต่ละ รูปแบบกันครับ

ตัวอย่างที่ 1. Object Destructuring

``` javascript
const users = {
firstname: 'Tyson',
lastname: 'Fury',
age: 30
};
const {firstname, lastname, age} = users
console.log(firstname) // Tyson
console.log(lastname) // Fury
console.log(age) // 30
```

ตัวอย่างที่ 2. New Variable Names

``` javascript
const users = {
firstname: 'Tyson',
lastname: 'Fury',
age: 30
};
const {firstname: f, lastname: l, age: a} = users
console.log(f) // Tyson
console.log(l) // Fury
console.log(a) // 30
```

ตัวอย่างที่ 3. Default Values

``` javascript
# แบบที่ยังไม่ได้กำหนด default values
const users = {
firstname: 'Tyson',
lastname: 'Fury'
};
const {firstname, lastname, age } = users
console.log(firstname) // Tyson
console.log(lastname) // Fury
console.log(age) // undefined *ไม่มี property age ใน object
# แบบที่กำหนด default values แล้ว
const users = {
firstname: 'Tyson',
lastname: 'Fury'
};
const {firstname, lastname, age = 30 } = users
console.log(firstname) // Tyson
console.log(lastname) // Fury
console.log(age) // 30 * ถ้าไม่มี property age ใน object จะแสดงค่า default แทน
```

ตัวอย่างที่ 4. Nested Object Values

``` javascript
const users = {
firstname: 'Tyson',
lastname: 'Fury',
age: 30,
score: {
w: 29,
k: 20,
l: 0,
d: 1
 }
};
const {firstname, lastname, age, score: { w: win, k: ko, l: lose, d: drew }} = users
console.log(firstname) // Tyson
console.log(lastname) // Fury
console.log(age) // 30
console.log(win) // 29
console.log(ko) // 20
console.log(lose) // 0
console.log(drew) // 1
```

ตัวอย่างที่ 5. Object Destructuring With Rest

``` javascript
const users = {
firstname: 'Tyson',
lastname: 'Fury',
age: 30,
score: {
w: 29,
k: 20,
l: 0,
d: 1
}
};
const {firstname, lastname, age, ...other} = users
console.log(firstname) // Tyson
console.log(lastname) // Fury
console.log(age) // 30
console.log(other) // { score: { w: 29, k: 20, l: 0, d: 1 } }
```

ตัวอย่างที่ 6. Array Destructuring

``` javascript
const users = [
'Tyson',
'Fury',
30
]
const [firstname, lastname, age] = users
console.log(firstname) // Tyson
console.log(lastname) // Fury
console.log(age) // 30
```

ตัวอย่างที่ 7. Skipping Items in an Array

``` javascript
const users = [
'Tyson',
'Fury',
30,
{
w: 29,
k: 20,
l: 0,
d: 1
}
]
const [firstname,, age] = users
console.log(firstname) // Tyson
console.log(age) // 30
```

ตัวอย่างที่ 8. Array Destructuring With Rest

``` javascript
const users = [
'Tyson',
'Fury',
30,
{
w: 29,
k: 20,
l: 0,
d: 1
}
]
const [firstname, lastname, age, ...other] = users
console.log(firstname) // Tyson
console.log(lastname) // Fury
console.log(age) // 30
console.log(other) //  [ { w: 29, k: 20, l: 0, d: 1 } ]
```

ตัวอย่างที่ 9. Function Destructuring

``` javascript
const getBoxer = () => ['Tyson fury', 'Deontay Wilder', 'Luis Ortiz']
const [tyson, deontay] = getBoxer()
console.log(tyson) // Tyson fury
console.log(deontay) // Deontay Wilder
```

> สำหรับใครที่ชื่นชอบการเขียน JavaScript สามารถติดตาม เนื้อหาอื่นๆ เพิ่มเติมได้ที่ เพจ <a href="https://www.facebook.com/JSKhamKham/" target="_blank">JS ขำๆ</a>