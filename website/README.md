# 陈立玲个人介绍静态站

这是给 Cloudflare Pages 使用的静态网站版本。

## 本地查看

直接用浏览器打开：

```text
website/index.html
```

## Cloudflare Pages 部署

### 方式一：网页后台部署

1. 把项目推送到 GitHub。
2. 在 Cloudflare Pages 新建项目并连接仓库。
3. 构建命令留空。
4. 发布目录填写：

```text
website
```

### 方式二：命令行部署

不要把 API Token 写入代码。先在终端临时设置：

```bash
export CLOUDFLARE_API_TOKEN="你的 Cloudflare Pages API Token"
```

然后运行：

```bash
npm run deploy:pages
```

当前 Cloudflare Account ID 已配置在部署脚本中：

```text
a2b22827e32358f2aab496233d795381
```

说明：部署脚本使用的是 `wrangler pages deploy`，这是 Cloudflare Pages 的命令行部署方式，不是 Workers 部署；仓库里不保留 Workers 配置。

## 图片替换

- 头像：`website/assets/profile/chen-liling.jpg`
- 证书：`website/assets/certificates/`
- 客户评价：`website/assets/reviews/`
- 月子餐占位图：`website/assets/ui/default.png`

月子餐后续如果要给每道菜放图，可以在 `website/assets/meals/` 中按菜名放同名图片，再调整 `website/app.js` 中的图片路径逻辑。
