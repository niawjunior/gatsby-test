---
title: "ลบ Property ที่ไม่ต้องการ ออกจาก Object"
slug: delete-property-from-object
date: 2020-02-28
cover: ./cover.jpg
generate-card: true
imageShare: ./delete-property-from-object-share.png
language: th
disqus: true
author: admin1
tags:
    - object
    - javascript
---

สร้าง function ง่ายๆ สำหรับลบ Property ที่ไม่ต้องการ ออกจาก Object โดยใช้ Spread operator และ Object destructuring

เริ่มจาก function removeProperty ที่เราประกาศในรูปแบบของ arrow function โดยจะรับ อาร์กิวเมนต์ เข้ามาหนึ่งตัวคือ prop (property ที่ต้องการจะลบ) ซึ่ง function นี้จะ return arrow function อีกตัวนึงออกไป โดย function ที่ return ออกไป จะเป็นการ ลบ property ที่ไม่ต้องการออก โดยใช้ Object destructuring ซึ่งจะทำการแบ่ง Object ออกเป็น 2 ส่วน คือ ส่วนแรก คือส่วนของ property ที่ต้องการจะลบ `[prop]` อีกส่วน คือ ส่วนที่เหลือ `..rest` และ ผลลัพธ์สุดท้าย ที่จะ return ออกไป คือ rest ที่อยู่ทาง ขวาสุด ครับ

``` javascript
const user = {
  id: 1,
  name: "Anthony",
  password: "1234"
}

const removeProperty = prop => ({ [prop]: _, ...rest }) => rest

const removePassword = removeProperty("password")

console.log(removePassword(user)) // { id: 1, name: 'Anthony' }
```