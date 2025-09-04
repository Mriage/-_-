# 生米一号_起飞 - 详细部署指南

## 🚀 快速部署（3分钟完成）

### 方案一：GitHub Pages（推荐，永久免费）

#### 步骤 1：准备 GitHub 账号
- 访问 [github.com](https://github.com)
- 如果没有账号，点击 "Sign up" 注册
- 验证邮箱地址

#### 步骤 2：创建仓库
1. 登录后点击右上角 "+" 号
2. 选择 "New repository"
3. 填写信息：
   - Repository name: `shengmi-gallery`
   - Description: `生米一号_起飞 - 图片发布网站`
   - 选择 "Public"（必须公开才能免费使用 Pages）
   - 不要勾选 "Add a README file"
4. 点击 "Create repository"

#### 步骤 3：上传文件
1. 在新建的仓库页面，点击 "uploading an existing file"
2. 将 `index.html` 文件拖拽到上传区域
3. 在下方填写：
   - Commit message: `Add website files`
4. 点击 "Commit changes"

#### 步骤 4：启用 GitHub Pages
1. 在仓库页面，点击 "Settings" 标签
2. 左侧菜单找到 "Pages"
3. 在 "Source" 部分：
   - 选择 "Deploy from a branch"
   - Branch 选择 "main"
   - Folder 选择 "/ (root)"
4. 点击 "Save"
5. 等待 1-2 分钟，页面会显示你的网站地址

#### 步骤 5：访问网站
- 你的网站地址：`https://你的用户名.github.io/shengmi-gallery`
- 例如：`https://zhangsan.github.io/shengmi-gallery`

---

### 方案二：Netlify（最简单，拖拽即用）

#### 步骤 1：访问 Netlify
- 打开 [netlify.com](https://netlify.com)
- 点击 "Sign up" 注册（可用 GitHub 账号登录）

#### 步骤 2：部署网站
1. 在 Netlify 控制台，找到 "Want to deploy a new site without connecting to Git?"
2. 点击 "Browse to upload" 或直接拖拽 `index.html`
3. 等待几秒钟，网站自动部署完成
4. 获得类似 `https://amazing-name-123456.netlify.app` 的网址

#### 步骤 3：自定义域名（可选）
- 在网站设置中可以修改为自定义域名
- 例如：`https://shengmi.netlify.app`

---

### 方案三：Vercel（适合开发者）

#### 步骤 1：安装 Vercel CLI
```bash
# 需要先安装 Node.js
# 访问 nodejs.org 下载安装

# 安装 Vercel CLI
npm i -g vercel
```

#### 步骤 2：部署
```bash
# 在包含 index.html 的文件夹中运行
vercel

# 按提示操作：
# - 是否要部署到 Vercel？输入 y
# - 项目名称：输入 shengmi-gallery
# - 是否要修改设置？输入 n
```

#### 步骤 3：访问网站
- 部署完成后会显示网站地址
- 例如：`https://shengmi-gallery-xxx.vercel.app`

---

## 🔧 高级配置

### 自定义域名
1. 购买域名（阿里云、腾讯云、GoDaddy 等）
2. 在域名管理中添加 CNAME 记录
3. 在 GitHub Pages/Netlify/Vercel 中绑定域名

### 自动更新
- GitHub Pages：每次推送代码到仓库自动更新
- Netlify：连接 GitHub 仓库后自动更新
- Vercel：连接 GitHub 仓库后自动更新

### HTTPS 证书
- GitHub Pages：自动提供免费 HTTPS
- Netlify：自动提供免费 HTTPS
- Vercel：自动提供免费 HTTPS

---

## 🐛 常见问题

### Q: 网站显示 404 错误
A: 检查文件名是否为 `index.html`，确保在仓库根目录

### Q: 图片上传后刷新页面丢失
A: 这是正常的，图片存储在用户浏览器本地，不会上传到服务器

### Q: 无法访问网站
A: 检查网络连接，尝试清除浏览器缓存

### Q: 想要备份图片数据
A: 使用网站内的"导出本页数据"功能，下载 JSON 文件

---

## 📱 移动端访问

网站支持移动端访问，在手机浏览器中打开网址即可使用。

---

## 🔄 更新网站

### 方法 1：通过 GitHub 网页
1. 在仓库页面点击 `index.html`
2. 点击编辑按钮（铅笔图标）
3. 修改代码
4. 点击 "Commit changes"

### 方法 2：通过本地修改
1. 修改本地 `index.html` 文件
2. 重新上传到 GitHub 仓库
3. 网站自动更新

---

## 💡 建议

1. **首选 GitHub Pages**：稳定、免费、支持自定义域名
2. **备份重要数据**：定期使用导出功能备份图片
3. **测试功能**：部署后测试所有功能是否正常
4. **分享链接**：将网站链接分享给朋友使用

有任何问题可以随时询问！
