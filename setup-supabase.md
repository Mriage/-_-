# Supabase 设置指南

## 1. 创建 Supabase 项目

1. 访问 [supabase.com](https://supabase.com)
2. 点击 "Start your project"
3. 使用 GitHub 账号登录
4. 点击 "New project"
5. 填写项目信息：
   - Name: `shengmi-gallery`
   - Database Password: 设置一个强密码（记住它）
   - Region: 选择离你最近的区域
6. 点击 "Create new project"
7. 等待项目创建完成（约2分钟）

## 2. 获取项目配置

1. 在项目仪表板，点击左侧 "Settings"
2. 选择 "API"
3. 复制以下信息：
   - Project URL
   - anon public key

## 3. 配置数据库

### 创建图片表
在 Supabase 的 SQL Editor 中执行：

```sql
-- 创建图片表
CREATE TABLE gallery_images (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    gallery_name TEXT NOT NULL,
    file_name TEXT NOT NULL,
    file_size INTEGER NOT NULL,
    file_type TEXT NOT NULL,
    storage_path TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by TEXT DEFAULT 'anonymous'
);

-- 创建索引
CREATE INDEX idx_gallery_images_gallery_name ON gallery_images(gallery_name);
CREATE INDEX idx_gallery_images_created_at ON gallery_images(created_at DESC);

-- 启用行级安全
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- 创建策略：允许所有人读取
CREATE POLICY "Allow public read access" ON gallery_images
    FOR SELECT USING (true);

-- 创建策略：允许所有人插入
CREATE POLICY "Allow public insert" ON gallery_images
    FOR INSERT WITH CHECK (true);

-- 创建策略：允许所有人删除
CREATE POLICY "Allow public delete" ON gallery_images
    FOR DELETE USING (true);
```

### 创建存储桶
1. 在 Supabase 仪表板，点击左侧 "Storage"
2. 点击 "Create a new bucket"
3. 填写信息：
   - Name: `gallery-images`
   - Public bucket: 勾选（这样图片可以直接访问）
4. 点击 "Create bucket"

### 设置存储策略
在 SQL Editor 中执行：

```sql
-- 允许所有人读取存储桶中的文件
CREATE POLICY "Allow public read access" ON storage.objects
    FOR SELECT USING (bucket_id = 'gallery-images');

-- 允许所有人上传文件
CREATE POLICY "Allow public upload" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'gallery-images');

-- 允许所有人删除文件
CREATE POLICY "Allow public delete" ON storage.objects
    FOR DELETE USING (bucket_id = 'gallery-images');
```

## 4. 更新配置文件

1. 打开 `config.js` 文件
2. 替换以下内容：
   ```javascript
   const SUPABASE_CONFIG = {
       url: '你的项目URL',
       anonKey: '你的anon key'
   };
   ```

## 5. 测试配置

1. 打开 `index.html`
2. 如果配置正确，应该能看到图片上传和同步功能
3. 在不同浏览器/设备上测试，确认图片能同步显示

## 注意事项

- Supabase 免费版有使用限制，但足够个人使用
- 图片会存储在 Supabase 的云存储中
- 所有用户都能看到相同的图片库
- 数据会实时同步到所有访问者

## 故障排除

### 如果图片无法上传
- 检查存储桶策略是否正确设置
- 确认 `config.js` 中的配置是否正确

### 如果图片无法显示
- 检查存储桶是否为公开
- 确认图片路径是否正确

### 如果无法同步
- 检查数据库策略是否正确
- 确认网络连接正常
