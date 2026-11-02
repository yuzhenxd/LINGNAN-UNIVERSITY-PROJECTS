# Tip Calculator — Cursor Activity (CDS-703)

Getting to Know Cursor 动手练习交付物：可在浏览器打开的 tip calculator。

## 文件

- `index.html` — 页面与样式
- `script.js` — 计算与边界校验
- `Reflection.pdf` — 反思/提交材料（如有）

## 本地运行

用浏览器打开 `index.html`，或 Cursor 中右键 Open in Browser。

## 测试用例

- 账单 80、小费 15%、3 人 → Tip 12.00，Total 92.00，Per person 30.67
- 空账单或人数 ≤ 0 → 友好错误提示，不应出现 NaN
