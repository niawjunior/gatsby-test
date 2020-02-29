---
title: "ทำความรู้จักกับ String Match Method"
slug: string-match-method
date: 2020-02-29
cover: ./cover.jpg
generate-card: true
imageShare: ./string-match-method-share.png
language: th
disqus: true
author: admin2
tags:
    - regex
    - javascript
---

String.match(regexp) คือ การจับคู่ ระหว่าง string และ Regex โดยจะ return ค่าออกมาเป็น array

โดยแบ่งเป็น 3 mode ดังนี้

1. ถ้า RegExp ไม่มี flag g (การค้นหาแบบ global) method match จะ return ส่วนที่ตรงกันแรกสุด, index แรกใน string, string input และ group

ตัวอย่าง
``` javascript
let str = "I love JavaScript JavaScript";

let match = str.match(/JavaScript/);

console.log(match) ['JavaScript',index: 7, input: 'I love JavaScript JavaScript', groups: undefined]
console.log(match[0]); // JavaScript (คำที่ match คำแรก)
console.log(match.length) // 1 (จำนวน คำที่ถูก match)
console.log(match.index) // 7 (Index แรกของคำที่ถูก match)
console.log(match.input) // I love JavaScript JavaScript (string ที่เป็น input)
```

2. ถ้า RegExp มี flag g method match จะ return ค่าเป็น array ที่มีข้อมูลข้างในเป็น string ที่ตรงกับ RegExp เพียงอย่างเดียว ไม่มีส่วนประกอบอื่นๆ

``` javascript
let matchG = str.match(/JavaScript/g);

console.log(matchG) // [ 'JavaScript', 'JavaScript' ]
console.log(matchG.length) // 2 (จำนวน คำที่ถูก match)
```

3. หาก RegExp ไม่ match กับส่วนใดๆ ของ String จะ return null

``` javascript
let matchNull = str.match(/HTML/);
console.log(matchNull); // null
console.log(matchNull.length); // Error: Cannot read property 'length' of null
```

> จะเห็นได้ว่า เหตุการณ์ ที่ 1 และ 2 return ค่าเป็น array ส่วน เหตุการณ์ ที่ 3 return ค่า เป็น null ซึ่งมีโอกาส ทำให้เกิดข้อผิดพลาดได้ เพื่อป้องกันข้อผิดพลาด ควรเพิ่ม || [] ไว้เสมอ

``` javascript
let match = str.match(regexp) || [];
```