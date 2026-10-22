# CS2 攻略站（纯前端静态版）

黑灰背景 + 橙色强调的 CS2 攻略网站。无数据库、无后端、无管理后台；内容由 JSON 文件维护，构建后部署静态文件。

## 技术栈
- Vue 3 + TypeScript
- Vite
- Vue Router
- vite-ssg（静态站点生成）
- JSON 内容数据

## 环境要求
- Node.js 20 或更高版本
- npm

## 本地运行
```bash
npm install
npm run dev
```
按终端显示的地址打开本地网站。

## 构建静态站点
```bash
npm run build
npm run preview
```
构建输出目录为 `dist/`。将 `dist/` 内文件部署到 Nginx、静态托管服务或 CDN 即可。

## 内容维护
- 地图：`src/data/maps.json`
- 投掷物：`src/data/grenades.json`
- 视频：`src/data/videos.json`

新增条目时，建议复制同类型对象并确保 `slug` 唯一。图片可以使用 `public/images/...` 的本地路径（例如 `/images/maps/mirage-cover.webp`），也可以使用可公开访问的 HTTPS 图片地址。正式运营建议将重要图片放到自己的静态资源存储中，避免第三方图片链接失效。

### 视频嵌入
在 `src/data/videos.json` 对应对象中填写 `embedUrl`。请使用视频平台提供的嵌入地址，并确认允许跨域嵌入；普通网页 URL 不一定能放入 iframe。

### 投掷物内容准确性
目前内容是示例与训练思路，不是经过当前游戏版本逐帧验证的精确投掷教程。上线前应补齐真实站位图、准星图、落点图，并在当前 CS2 版本训练服中复测。

## 部署
静态站点不需要后端。可将 `dist/` 部署到 Nginx 或静态托管平台。若部署在域名根路径，使用默认 `base: '/'`。若部署到 GitHub Pages 子路径，请修改 `vite.config.ts` 的 `base`，并按托管平台配置 SPA 路由回退或采用静态生成路由。

## 说明
- 无账号系统、评论、云端收藏和在线内容编辑。
- Google Fonts 和示例封面图使用外部网络资源；正式部署建议准备本地字体与自有/授权图片。
- 网站为非官方玩家指南项目，与 Valve / Counter-Strike 官方无隶属关系。
