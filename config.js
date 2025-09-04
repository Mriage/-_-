// Supabase 配置
// 注意：这些是公开的客户端配置，不包含敏感信息
const SUPABASE_CONFIG = {
    // 请替换为你的 Supabase 项目配置
    url: 'https://your-project-id.supabase.co',
    anonKey: 'your-anon-key-here'
};

// 数据库表名
const TABLES = {
    IMAGES: 'gallery_images',
    GALLERIES: 'galleries'
};

// 图片存储桶名称
const STORAGE_BUCKET = 'gallery-images';

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SUPABASE_CONFIG, TABLES, STORAGE_BUCKET };
} else {
    window.SUPABASE_CONFIG = SUPABASE_CONFIG;
    window.TABLES = TABLES;
    window.STORAGE_BUCKET = STORAGE_BUCKET;
}
