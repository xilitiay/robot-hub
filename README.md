# RobotHub · 全球机器人产品库

> The Global Robot Directory — 高保真复刻「全球最大机器人产品库网站」的全栈原型。
> 零依赖（仅 Node 内置模块）+ SQLite，开箱即跑。

## 特性 Features
- 🤖 **332 款机器人 / 178 个品牌 / 20 个国家 / 11 大类目**，中英双语
- 🔍 产品库多维筛选（类目 / 自主度 / 国家）、排序（精选/最新/负载/价格/热门/名称）、分页、关键词搜索
- ⚡ **实时搜索联想**（首页输入即出建议）
- 📊 **规格对比**：最多 4 款同屏对比，自动高亮最优值，支持 **CSV 导出**
- 🏷️ **品牌索引**：96+ 品牌卡片，点击直达该品牌产品库
- 🌗 **明暗双主题**：持久化记忆，一键切换
- 🌐 全站 **中英双语** i18n
- 🛠️ **后台管理**：令牌保护，机器人增删改 + 询价线索查看
- 📝 公开 **询价（RFQ）**：详情页一键提交，供应商线索入库

## 技术栈 Tech Stack
- 后端：`node:http` + `node:sqlite`（DatabaseSync），**零第三方依赖**
- 前端：原生 HTML / CSS / JS（无框架），服务端渲染静态页 + JSON API
- 数据库：SQLite 文件（`db/robot-hub.db`，首次启动自动播种）

## 目录结构
```
robot-hub/
├── server.js            # 全栈服务器 + REST API
├── db/schema.js         # 建表 + 种子导入（仅首次）
├── data/
│   ├── meta.js          # 类目 / 自主度 / 国家 元数据
│   ├── robots.js        # 数据集（主，144 款）
│   └── robots_extra.js  # 数据集（扩展，~200 款）
├── public/
│   ├── css/style.css
│   ├── js/app.js        # 共享前端（i18n / 主题 / 搜索 / 对比）
│   ├── index.html       # 首页
│   ├── catalog.html     # 产品库
│   ├── detail.html      # 详情
│   ├── compare.html     # 对比 + CSV 导出
│   ├── brands.html      # 品牌索引
│   └── admin.html       # 管理后台
├── Dockerfile / docker-compose.yml
└── .env.example
```

## 快速开始 Quick Start

### 本地运行（Local）
需要 **Node ≥ 22.5**（启用 `node:sqlite`）。
```bash
cd robot-hub
PORT=3100 node --experimental-sqlite server.js
# 打开 http://localhost:3100
```
> 默认管理令牌 `robothub-admin-2026`，可在后台输入解锁。

### Docker 运行
```bash
cp .env.example .env        # 修改 ADMIN_TOKEN
docker compose up -d --build
# 打开 http://localhost:3100
```
数据库持久化于名为 `robothub-db` 的 volume；如需重建数据，删除该 volume 后重启即可重新播种。

## 部署到云端 Deploy to Cloud (Render)
零配置一键上线，**后台管理 / 询价提交等写操作全部可用**（SQLite 落持久磁盘）。

1. 把本仓库推到 GitHub（无需改任何代码）。
2. 打开 [Render Dashboard](https://dashboard.render.com) → **New** → **Blueprint**。
3. 关联你的 GitHub 仓库，Render 会读取根目录 `render.yaml` 自动建好服务：
   - 运行时：Docker（`node --experimental-sqlite`）
   - 持久磁盘 `/data`（1 GB，存 `robot-hub.db`）
   - 健康检查 `/api/health`
   - `ADMIN_TOKEN` 自动生成强随机值
4. 点 **Apply** 后即开始构建，约 1–2 分钟完成，获得 `https://robothub-xxxx.onrender.com`。
5. 进入 **Environment** 可查看/修改 `ADMIN_TOKEN`（后台登录令牌）与 `DB_PATH`。

> 其它平台：Railway / Fly.io 直接吃本仓库的 `Dockerfile`；挂载持久卷并把 `DB_PATH` 指向它即可。
> Other platforms: Railway / Fly.io run this repo's `Dockerfile` directly — mount a persistent volume and point `DB_PATH` at it.

## REST API
| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/api/meta` | 类目 / 国家 / 统计 |
| GET | `/api/robots` | 列表（支持 `category,brand,country,autonomy,featured,q,sort,page,limit`） |
| GET | `/api/robots/:id` | 详情 + 相关推荐（浏览量 +1） |
| GET | `/api/brands` | 品牌聚合 |
| GET | `/api/compare?ids=a,b,c` | 对比（最多 4 款） |
| POST | `/api/rfq` | 提交询价（需 `name` + `email`） |
| POST/PUT/DELETE | `/api/admin/robots[/:id]` | 机器人增改删（需 `X-Admin-Token`） |
| GET | `/api/admin/rfq` | 询价线索（需 `X-Admin-Token`） |

## 数据扩充 Adding Data
编辑 `data/robots.js` 或 `data/robots_extra.js`，新增对象到数组，字段见文件头注释；
删除 `db/robot-hub.db` 重启即可重新播种（自动按 `id` 去重）。

## 说明 Notes
- 本仓库为演示/教育用途，型号参数尽量贴近真实公开资料，价格多为「询价」或估算。
- 视觉采用 CSS/SVG 与品牌字标（monogram），避免直接使用受版权保护的厂商 Logo 与原型图。
- 对标标杆：Geppetto Robot Directory（The World's Robot Directory）。
