# 🐟 摸鱼游戏厅 · Fish Break Arcade

上班摸鱼专用的小游戏合集。一个页面统一收纳多个 HTML 小游戏，双击即可开玩，无需安装、无需联网、无需任何授权。

> 技术栈：原生 HTML + CSS + JavaScript，界面层使用 Vue 3（已本地化，离线可用）。
> 游戏本体均为**单文件原生 HTML**，零依赖、零构建。（当前共 14 款：夜市大排档、霓虹脉冲、星际港湾、超级玛丽、卡通三角洲、灵蛇渡劫、修仙人生模拟器、数字幻方 2048、雷区迷阵扫雷、霓虹弹跳打砖块、像素吞噬者贪吃蛇、彩虹岛冒险、钢铁突击、雷霆战机）

### 🌐 在线体验

**https://xuyanghou.github.io/games/**

由 GitHub Actions 自动部署，每次推送到 `main` 分支即自动发布。

---

## 📑 目录

- [快速开始](#-快速开始)
- [目录结构](#-目录结构)
- [使用方式](#-使用方式)
- [➕ 添加新游戏](#-添加新游戏)
- [🎨 自定义卡片样式](#-自定义卡片样式)
- [🏆 接入最高分](#-接入最高分)
- [⌨️ 快捷键](#️-快捷键)
- [❓ 常见问题](#-常见问题)
- [🛠 进阶：游戏开发规范](#️-进阶游戏开发规范)
- [🚀 部署到 GitHub Pages](#-部署到-github-pages)

---

## 🚀 快速开始

### 方式一：双击打开（最简单）

直接双击 `index.html`，浏览器就会打开游戏厅大厅。

> ⚠️ 部分浏览器（如 Firefox）出于安全策略对 `file://` 下的本地资源限制较严，
> 如果发现页面空白或游戏加载异常，请改用「方式二」。

### 方式二：本地服务器（推荐）

需要预先安装 [Node.js](https://nodejs.org/)（v16 以上即可）。

```bash
cd d:\nodeJs学习\games

npm start          # 自动扫描 games 目录 → 启动服务器
```

然后浏览器访问 <http://localhost:5173/>

指定端口：

```bash
npm start -- 8080          # 或者
node serve.js 8080
```

---

## 📂 目录结构

```
d:\nodeJs学习\games\
├── index.html              ← 【入口】双击这个打开游戏厅
├── README.md               ← 本说明文档
│
├── games/                  ← ⭐ 游戏目录，所有 HTML 小游戏都放这里
│   ├── code_artifact.html          夜市大排档：美食合成
│   ├── neon_pulse_orbit.html       霓虹脉冲：轨道
│   ├── starport_tactical_defense.html  星际港湾：战术防御
│   ├── super_mario.html            超级玛丽 · 六关版
│   ├── toon_delta_extract.html     卡通三角洲：搜打撤
│   ├── lingshe.html                灵蛇渡劫 · 修仙贪吃蛇
│   ├── xiuxian.html                修仙人生模拟器
│   ├── number_phantom_2048.html    数字幻方 · 2048
│   ├── minefield_maze.html         雷区迷阵 · 扫雷
│   ├── neon_bounce_breakout.html   霓虹弹跳 · 打砖块
│   ├── pixel_devourer_snake.html   像素吞噬者 · 贪吃蛇
│   ├── rainbow_island_adventure.html  彩虹岛冒险 · 横版平台
│   ├── steel_assault_run_gun.html  钢铁突击 · 跑轰射击
│   ├── thunder_fighter_shmup.html  雷霆战机 · 纵版空战
│   └── manifest.js         ← 【自动生成】扫描结果清单，请勿手改
│
├── games.config.js         ← 【可选】卡片图标 / 配色 / 简介 / 最高分配置
├── scan.js                 ← 扫描 games 目录，生成 manifest.js
├── 刷新游戏列表.bat         ← 【Windows】双击即可刷新游戏列表
│
├── serve.js                ← 零依赖静态服务器（可选）
├── package.json            ← npm 脚本配置
└── vendor/
    └── vue.global.prod.js  ← Vue 3（已本地化，离线可用）
```

---

## 🎮 使用方式

1. **打开大厅**：双击 `index.html`（或 `npm start` 后访问 <http://localhost:5173/>）
2. **选游戏**：大厅里每张小卡片就是一个游戏，点击「开始」进入
3. **游戏中**：顶部悬浮条提供 `← 返回大厅` / `↻ 重开` / `⛶ 全屏`
4. **返回大厅**：按 `Esc`，游戏进度会被保留在后台（不会丢失）
5. **假装工作**：按 `W` 或点右上角 🧑‍💻，弹出「正在努力工作…」全屏遮罩

大厅顶部实时统计：**累计摸鱼时长**、**今日摸鱼时长**、**总局数**，数据保存在浏览器 `localStorage`，关掉再开依然在。

---

## ➕ 添加新游戏

### 最快的方式（两步）

**第 1 步**：把新游戏的 `.html` 文件丢进 `games/` 目录

```
games/
├── code_artifact.html
├── neon_pulse_orbit.html
├── starport_tactical_defense.html
├── super_mario.html
├── toon_delta_extract.html
├── lingshe.html
├── xiuxian.html
├── number_phantom_2048.html
├── minefield_maze.html
├── neon_bounce_breakout.html
├── pixel_devourer_snake.html
├── rainbow_island_adventure.html
├── steel_assault_run_gun.html
├── thunder_fighter_shmup.html
└── my_new_game.html      ← 👈 放这里
```

**第 2 步**：刷新游戏列表

- **Windows**：双击根目录的 `刷新游戏列表.bat`
- **命令行**：`node scan.js`
- **或者**：`npm run scan`

**完成！** 双击 `index.html`，新游戏已经出现在大厅卡片里了。

### 自动做了什么？

`scan.js` 会扫描 `games/` 目录下所有 `.html` 文件，并自动提取：

| 信息 | 来源 | 提取方式 |
|---|---|---|
| 游戏标题 | HTML 里的 `<title>` | 正则解析 |
| 游戏简介 | `<meta name="description">` | 正则解析（没有则用默认文案） |
| 文件大小 | 文件系统 | `fs.statSync` |

解析结果写入 `games/manifest.js`，大厅通过 `<script src="./games/manifest.js">` 加载。

> 💡 **为什么要用清单文件？**
> 浏览器安全策略禁止 `file://` 页面下的 JS 列目录，也会拦截 `fetch` 请求。
> 但 `<script src="同目录.js">` 在 `file://` 下是完全允许的 —— 所以用静态清单文件绕开限制，
> 这样**双击 `index.html` 也能看到全部游戏，无需任何授权**。

### 注意事项

- 文件名不要以 `_` 开头（下划线开头的文件会被扫描脚本忽略，可用于存放草稿）
- 游戏必须是**单文件 HTML**（CSS/JS 内联或用相对路径引用同目录资源）
- 游戏建议使用 `localStorage` 保存最高分，键名见下文「接入最高分」

---

## 🎨 自定义卡片样式

`games.config.js` 是**可选**的。没有配置的游戏会自动分配不重复的主题配色，卡片右上角显示 `AUTO` 角标。

想给某个游戏专属的图标、配色、简介，就加一条配置：

```js
window.FISH_ARCADE_GAMES = [
    {
        file: 'super_mario.html',              // 必填：games 目录下的文件名
        title: '超级玛丽 · 六关版',             // 卡片标题（不填则用 <title>）
        en: 'Super Mario · Six Worlds',        // 英文副标题，显示在标题下方
        icon: '🍄',                             // 卡片图标（emoji）
        desc: '经典横版卷轴平台跳跃：顶砖块、吃蘑菇变大、踩敌人，一路冲向旗杆。',
        tags: ['平台跳跃', '怀旧', '横版'],      // 玩法标签
        tone: 'green',                         // 主题配色
        scoreKey: 'super_mario_best'           // 最高分键名（见下文）
    }
];
```

### 字段说明

| 字段 | 必填 | 说明 |
|---|:---:|---|
| `file` | ✅ | 游戏 html 文件名（放在 `games/` 目录） |
| `title` | ❌ | 中文标题，不填则自动读取游戏里的 `<title>` |
| `en` | ❌ | 英文副标题 |
| `icon` | ❌ | 卡片图标（emoji），默认 `🎮` |
| `desc` | ❌ | 一句话简介 |
| `tags` | ❌ | 玩法标签数组 |
| `tone` | ❌ | 配色主题，见下表 |
| `scoreKey` | ❌ | `localStorage` 最高分键名，不填则不显示最高分 |

### 可用主题色

| `tone` | 效果 |
|---|---|
| `amber` | 暖橙（夜市大排档 / 修仙人生模拟器 / 数字幻方 / 彩虹岛冒险） |
| `cyan` | 赛博青（霓虹脉冲 / 灵蛇渡劫 / 雷霆战机） |
| `magenta` | 品红（星际港湾 / 霓虹弹跳 / 钢铁突击） |
| `green` | 草绿（超级玛丽 / 像素吞噬者） |
| `blue` | 科技蓝（雷区迷阵） |
| `purple` | 梦幻紫（卡通三角洲） |

不写 `tone` 时会按 `amber → cyan → magenta → green → blue → purple` 循环自动分配，保证相邻卡片不撞色。

---

## 🏆 接入最高分

在游戏代码里写入分数即可（通常放在游戏结束时）：

```js
const best = Math.max(Number(localStorage.getItem('super_mario_best') || 0), score);
localStorage.setItem('super_mario_best', best);
```

然后在 `games.config.js` 里把对应游戏的 `scoreKey` 设为 `'super_mario_best'`，大厅卡片就会显示「最高纪录」。

> 没有配置 `scoreKey` 的游戏，卡片右下角显示 `—`。

---

## ⌨️ 快捷键

| 按键 | 功能 |
|---|---|
| `Esc` | 返回大厅（游戏进度保留在后台） |
| `W` | 假装工作（弹出全屏遮罩遮住游戏） |
| `F` | 当前游戏全屏 |
| `1` ~ `9` | 按大厅卡片顺序直达对应游戏 |

---

## ❓ 常见问题

**Q：双击 `index.html` 后页面空白 / 卡片不显示？**
A：多为浏览器对 `file://` 的限制。改用 `npm start` 打开，或换一个基于 Chromium 的浏览器（Chrome / Edge）。

**Q：新增了游戏但大厅没显示？**
A：忘了刷新清单。运行 `node scan.js` 或双击 `刷新游戏列表.bat`。

**Q：游戏显示的是文件名而不是中文标题？**
A：游戏 HTML 里没有 `<title>` 标签。加上即可，或在 `games.config.js` 里手动指定 `title`。

**Q：最高分每次刷新就没了？**
A：`localStorage` 是按域名隔离的。`file://` 和 `http://localhost` 是两个不同的存储空间，数据不互通。建议固定用一种方式访问。

**Q：想让某个游戏不出现在大厅？**
A：把文件重命名成以 `_` 开头（如 `_draft_game.html`），扫描脚本会自动忽略它。

**Q：能改成 Vue 组件形式放进大厅吗？**
A：可以，但目前 iframe 方案更省事 —— 游戏保持纯 HTML 单文件，加新游戏零改动。若要改成组件模式，可把 `games/` 里的 HTML 改写为 Vue 组件并在 `index.html` 中注册。

---

## 🛠 进阶：游戏开发规范

如果想自己写新游戏放进 `games/`，建议遵循这几条，能让它们在大厅里表现得更一致：

1. **单文件**：HTML / CSS / JS 全部内联在一个 `.html` 里，不要引用外部 CDN（离线不可用）
2. **标题**：`<title>` 写中文游戏名，会被自动用作卡片标题
3. **简介**：加一行 `<meta name="description" content="一句话简介">`
4. **自适应**：用 `window.innerWidth / innerHeight` 或 CSS 撑满，不要写死像素尺寸
5. **移动端**：加上 `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
6. **禁止滚动条**：给 `html, body` 设置 `overflow: hidden`（游戏是全屏画布）
7. **音效**：用 Web Audio API 或 `<audio>`，并在用户首次交互后再初始化（浏览器自动播放策略）
8. **最高分**：用 `localStorage` 保存，键名与 `games.config.js` 的 `scoreKey` 对应
9. **不要依赖 `localStorage` 里的旧值做初始化判断**，用 `|| 默认值` 的写法兜底

一个最小可用的游戏骨架：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的小游戏</title>
    <meta name="description" content="一句话简介">
    <style>
        html, body { margin: 0; height: 100%; overflow: hidden; background: #111; }
        canvas { display: block; width: 100%; height: 100%; }
    </style>
</head>
<body>
    <canvas id="game"></canvas>
    <script>
        const cv = document.getElementById('game');
        const ctx = cv.getContext('2d');
        function resize() {
            cv.width = window.innerWidth;
            cv.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();
        // ... 游戏逻辑 ...
    </script>
</body>
</html>
```

---

## 📄 许可

个人项目，随意使用与修改 😎
