---
title: "ตรวจสอบว่า ค่าที่อยู่ใน Array เรียงจาก น้อยไปมาก จริงหรือไม่"
slug: is-ascending
date: 2020-02-28
cover: ./cover.jpg
generate-card: true
imageShare: ./is-ascending-share.png
language: th
disqus: true
author: admin1
tags:
    - sorting
    - javascript
---

เขียน functin เพื่อ ตรวจสอบว่า ค่าที่อยู่ใน Array นั้น ถูกเรียงจาก น้อยไปมาก จริงหรือไม่

``` javascript

const isAscending = arr => arr.every((n, i) => i === 0 || arr[i-1] < n)

console.log(isAscending([-5, 10, 99, 123456])) // == true
console.log(isAscending([99])) // == true
console.log(isAscending([4, 5, 6, 7, 3, 7, 9])) // == false
console.log(isAscending([]))  // == true
console.log(isAscending([1, 1, 1, 1])) // == false

```