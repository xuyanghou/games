/**
 * 生成游戏清单 —— 让「双击 index.html」也能看到 games 目录下的所有游戏
 *
 * 浏览器出于安全限制：file:// 下的 JS 无法直接列目录，fetch 也会被拦截。
 * 但 <script src="..."> 标签在 file:// 下是可以正常加载同目录 JS 的，
 * 所以把扫描结果写成一个 JS 文件（window.FISH_ARCADE_MANIFEST），由 index.html 用 script 标签引入。
 *
 * 用法：
 *   node scan.js        # 生成 games/manifest.js
 *   npm run scan        # 同上
 *   npm start           # 启动服务器时会自动重新生成
 *   双击「刷新游戏列表.bat」也可以
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const GAME_DIR = path.join(ROOT, 'games');
const MANIFEST_JS = path.join(GAME_DIR, 'manifest.js');

/** 读取每个游戏 html 的 <title> 和 meta description，作为卡片文案 */
function readMeta(file) {
    let title = null;
    let desc = null;
    try {
        const text = fs.readFileSync(file, 'utf8');
        const t = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(text);
        if (t) title = t[1].replace(/\s+/g, ' ').trim().slice(0, 40);
        let d = /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i.exec(text);
        if (!d) d = /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i.exec(text);
        if (d && d[1].trim().length > 4) desc = d[1].trim().slice(0, 80);
    } catch (e) { /* 读取失败就跳过，标题用文件名兜底 */ }
    return { title, desc };
}

function scan() {
    if (!fs.existsSync(GAME_DIR)) {
        fs.mkdirSync(GAME_DIR, { recursive: true });
    }

    const files = fs.readdirSync(GAME_DIR)
        .filter(f => f.toLowerCase().endsWith('.html'))
        .filter(f => !f.startsWith('_'))
        .sort();

    const games = files.map((name) => {
        const meta = readMeta(path.join(GAME_DIR, name));
        return {
            file: name,
            title: meta.title || name.replace(/\.html$/i, ''),
            desc: meta.desc || '',
            size: fs.statSync(path.join(GAME_DIR, name)).size
        };
    });

    const payload = {
        generatedAt: new Date().toISOString(),
        games: games
    };

    const js = '/* 自动生成，请勿手改 —— 运行 node scan.js 或双击「刷新游戏列表.bat」更新 */\n' +
        'window.FISH_ARCADE_MANIFEST = ' + JSON.stringify(payload, null, 2) + ';\n';

    fs.writeFileSync(MANIFEST_JS, js, 'utf8');
    return games;
}

if (require.main === module) {
    const games = scan();
    console.log('✅ 清单已生成: games/manifest.js  (共 ' + games.length + ' 个游戏)');
    games.forEach(g => console.log('   - ' + g.file + '  →  ' + g.title));
}

module.exports = { scan };
