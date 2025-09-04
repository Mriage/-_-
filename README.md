# 生米一号_起飞 - 图片发布网站

一个支持本地图片存储的网站，具有蓝色主题和双面板设计。

## 功能特点

- 🎨 蓝色主题设计，现代化 UI
- 📱 响应式布局，支持移动端
- 🖼️ 支持拖拽上传多张图片
- 💾 使用 IndexedDB 本地存储，容量大
- 🔄 双面板切换：9.29Hz 和 深深的
- 📤 支持导出图片数据
- 🗑️ 支持清空和删除操作

## 技术栈

- 纯 HTML/CSS/JavaScript
- IndexedDB 存储
- 无需后端服务器

## 本地运行

直接双击 `index.html` 在浏览器中打开即可。

## 部署到服务器

### GitHub Pages 部署（推荐）

1. **创建 GitHub 仓库**
   - 访问 [GitHub](https://github.com)
   - 点击 "New repository"
   - 仓库名：`shengmi-gallery`（或任意名称）
   - 选择 Public
   - 点击 "Create repository"

2. **上传文件**
   - 点击 "uploading an existing file"
   - 拖拽 `index.html` 到页面
   - 填写提交信息："Initial commit"
   - 点击 "Commit changes"

3. **启用 GitHub Pages**
   - 进入仓库的 Settings 页面
   - 左侧菜单找到 "Pages"
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"
   - 点击 "Save"

4. **访问网站**
   - 几分钟后，访问：`https://你的用户名.github.io/shengmi-gallery`
   - 例如：`https://zhangsan.github.io/shengmi-gallery`

### Netlify 部署（最简单）

1. 访问 [netlify.com](https://netlify.com)
2. 注册/登录账号
3. 直接拖拽 `index.html` 到部署区域
4. 获得类似 `https://amazing-name-123456.netlify.app` 的网址

### Vercel 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 在项目文件夹运行
vercel

# 按提示操作
```

## 注意事项

- 图片数据存储在用户浏览器本地，不会上传到服务器
- 建议使用 HTTPS 访问（GitHub Pages 自动提供）
- 支持现代浏览器（Chrome、Firefox、Safari、Edge）

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 10.1+
- Edge 79+

## 更新网站

如需更新网站内容：
1. 修改 `index.html` 文件
2. 重新上传到 GitHub 仓库
3. GitHub Pages 会自动更新（通常 1-5 分钟）

## 许可证

MIT License
