@echo off
chcp 65001 >nul
title 刷新摸鱼游戏厅 - 游戏列表
cd /d "%~dp0"

echo.
echo   ============================================
echo     摸鱼游戏厅 - 扫描 games 目录并刷新清单
echo   ============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
    echo   [X] 未检测到 Node.js，请先安装 Node.js 后重试。
    echo       下载地址: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

node scan.js
if errorlevel 1 (
    echo.
    echo   [X] 刷新失败，请检查上方错误信息。
    pause
    exit /b 1
)

echo.
echo   [OK] 游戏列表已刷新，现在双击 index.html 就能看到最新游戏。
echo.
pause
