/**
 * 极简零依赖静态服务器（原生 Node.js）
 * 用法: node serve.js [端口]
 *
 * 特性：
 *   - 静态文件服务
 *   - 启动时自动扫描 games/ 目录并生成 games/manifest.js
 *   - GET /api/games → 返回 games 目录下的游戏清单
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { scan } = require('./scan');

const ROOT = __dirname;
const PORT = Number(process.argv[2]) || 5173;

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2'
};

// 启动时刷新游戏清单
let gameFiles = [];
try {
    gameFiles = scan();
    console.log('已扫描 games 目录, 共 ' + gameFiles.length + ' 个游戏');
} catch (e) {
    console.log('扫描 games 目录失败: ' + e.message);
}

const server = http.createServer((req, res) => {
    let pathname = decodeURIComponent(url.parse(req.url).pathname);

    // ---- 游戏清单接口 ----
    if (pathname === '/api/games') {
        try {
            gameFiles = scan();
        } catch (e) { /* 忽略 */ }
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-cache'
        });
        res.end(JSON.stringify({ games: gameFiles.map(g => g.file) }));
        return;
    }

    if (pathname === '/' || pathname === '') pathname = '/index.html';

    const filePath = path.join(ROOT, path.normalize(pathname));
    if (!filePath.startsWith(ROOT)) {
        res.writeHead(403); res.end('403 Forbidden'); return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('404 Not Found: ' + pathname);
            return;
        }
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, {
            'Content-Type': MIME[ext] || 'application/octet-stream',
            'Cache-Control': 'no-cache'
        });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log('摸鱼游戏厅已启动: http://localhost:' + PORT + '/');
    gameFiles.forEach(g => console.log('   - ' + g.file + '  →  ' + g.title));
});
