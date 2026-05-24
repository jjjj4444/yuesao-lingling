这里用于存放月子餐菜品图片。

建议使用 1:1 方图。当前月子餐数据会为每道菜生成一个图片路径：

```js
assetPath: '/assets/meals/菜名.png'
```

例如：
- `/assets/meals/水煮蛋.png`
- `/assets/meals/蒸鲈鱼.png`
- `/assets/meals/番茄青菜汤面.png`

上传图片后，把 `pages/confinement/index.js` 中对应菜品的 `image` 字段改成相同路径即可，例如：

```js
image: '/assets/meals/水煮蛋.png'
```
