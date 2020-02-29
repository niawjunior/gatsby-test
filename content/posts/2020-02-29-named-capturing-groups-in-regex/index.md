---
title: "Named Capturing Groups In Regex"
slug: named-capturing-groups-in-regex
date: 2020-02-28
cover: ./cover.jpg
generate-card: true
imageShare: ./named-capturing-groups-in-regex-share.png
language: th
disqus: true
author: admin1
tags:
    - regex
    - javascript
---

ตัวอย่าง การใช้ name capturing groups ใน Regex (Regular Expression) ในการ แยก วันที่, เดือน และ ปี ออกจากกัน


``` javascript

const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g;

const result = re.exec('2019-06-23');

console.log(result.groups.year); //2019
console.log(result.groups.month); //06
console.log(result.groups.day); //23


```
