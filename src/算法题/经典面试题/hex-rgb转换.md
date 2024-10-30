---
title: hex与rgb的转换
order: 2
category:
  - 算法题
---

## 背景

1. `parseInt(string, radix)`：

- string：要解析的字符串（比如 "255" 或 "FF"）。
- radix：指定的进制（基数），可以是 2 到 36 之间的整数

2. `.toString()`对不同数据类型有不同的作用：

- 数字：将数字转换为字符串，使用指定的基数（默认为 10）进行转换。
- 布尔值：将布尔值转换为字符串，返回 "true" 或 "false"。
- 对象：当不重写 toString 方法时，它返回 [object Object]
- 日期：将日期转换为字符串，返回日期的字符串表示形式。

## hex->rgb

思路：切割 hex 使用 parseInt 转换为 10 进制

```js
// #ff5733
const hexToRgb = (hex) => {
  hex = hex.slice(1);
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((item) => item + item)
      .join("");
  }
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);
  return r, g, b;
};
```

```js
function hexCharToDecimal(char) {
  const hexMap = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  return hexMap[char.toLowerCase()];
}

function hexToRgbManual(hex) {
  // 去掉开头的 '#'
  hex = hex.replace(/^#/, "");

  // 如果是 3 位 hex，则扩展为 6 位
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((h) => h + h)
      .join("");
  }

  // 手动计算每个分量
  const r = hexCharToDecimal(hex[0]) * 16 + hexCharToDecimal(hex[1]);
  const g = hexCharToDecimal(hex[2]) * 16 + hexCharToDecimal(hex[3]);
  const b = hexCharToDecimal(hex[4]) * 16 + hexCharToDecimal(hex[5]);

  return `rgb(${r}, ${g}, ${b})`;
}

// 示例
console.log(hexToRgbManual("#ff5733")); // "rgb(255, 87, 51)"
console.log(hexToRgbManual("#abc")); // "rgb(170, 187, 204)"
```

## rgb->hex

```js
function rgbToHex(r, g, b) {
  // 将每个分量转换为 16 进制，并保证是 2 位数
  const toHex = (num) => {
    const hex = num.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// 示例
console.log(rgbToHex(255, 87, 51)); // 输出: #ff5733
console.log(rgbToHex(170, 187, 204)); // 输出: #aabbcc
```

```js
function decimalToHexChar(decimal) {
  const hexMap = "0123456789abcdef";
  return hexMap[decimal];
}

function decimalToHexManual(decimal) {
  // 手动转换十进制数为两位十六进制
  const high = Math.floor(decimal / 16); // 高位
  const low = decimal % 16; // 低位
  return decimalToHexChar(high) + decimalToHexChar(low);
}

function rgbToHexManual(r, g, b) {
  // 确保每个分量在 0-255 范围内
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  // 将每个分量转换为十六进制，并拼接
  return `#${decimalToHexManual(r)}${decimalToHexManual(g)}${decimalToHexManual(
    b
  )}`;
}

// 示例
console.log(rgbToHexManual(255, 87, 51)); // "#ff5733"
console.log(rgbToHexManual(170, 187, 204)); // "#aabbcc"
```
