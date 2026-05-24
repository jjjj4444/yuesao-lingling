这里用于存放月嫂本人照片。

建议上传正方形头像图，例如：

```text
assets/profile/chen-liling.jpg
```

上传后，把 `pages/index/index.js` 中的：

```js
photo: '/images/default.png'
```

改成：

```js
photo: '/assets/profile/chen-liling.jpg'
```
