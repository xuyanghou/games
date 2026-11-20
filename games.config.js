/* ============================================================================
 * 摸鱼游戏厅 · 游戏配置表
 * ----------------------------------------------------------------------------
 * 【最重要】所有游戏文件都放在 games/ 目录，index.html 会自动读取
 *           games/manifest.js（由 node scan.js 扫描生成），无需在这里登记。
 *
 * 所以你只需要：
 *   1) 把新游戏 .html 放进 games/ 目录
 *   2) 双击「刷新游戏列表.bat」或运行 node scan.js  → 自动出现在大厅
 *   3) 想给它专属图标/配色/简介/最高分，再在下面加一条配置（可选）
 *
 * 字段说明：
 *   file     必填，游戏 html 文件名（放在 games/ 目录）
 *   title    中文标题（不填则用游戏 html 里的 <title>）
 *   en       英文副标题（显示在标题下方的小字）
 *   icon     卡片图标（emoji）
 *   desc     卡片简介（一两句）
 *   tags     玩法标签数组，如 ['塔防','回合制']
 *   tone     配色主题：amber / cyan / magenta / green / blue / purple
 *   scoreKey 游戏内使用的 localStorage 最高分键名（不填则不显示最高分）
 *            想让新游戏显示最高分：在游戏代码里写
 *            localStorage.setItem('your_game_key', 分数) 即可
 * ==========================================================================*/

window.FISH_ARCADE_GAMES = [
    {
        file: 'code_artifact.html',
        title: '夜市大排档：美食合成',
        en: 'Night Market Merge',
        icon: '🏮',
        desc: '把相同的夜宵丢进大竹碗里，两两合成升级，从毛豆一路拼到「豪华海鲜大咖」。手感治愈，越玩越上头。',
        tags: ['合成', '物理', '治愈'],
        tone: 'amber',
        scoreKey: 'night_market_merge_best'
    },
    {
        file: 'neon_pulse_orbit.html',
        title: '霓虹脉冲：轨道',
        en: 'Neon Pulse Orbit',
        icon: '🛸',
        desc: '在赛博轨道上点击生成脉冲节点，串联同色节点得分，连击不断、超载爆发，考验手速与眼力。',
        tags: ['节奏', '连击', '赛博'],
        tone: 'cyan',
        scoreKey: 'neon_pulse_orbit_best'
    },
    {
        file: 'starport_tactical_defense.html',
        title: '星际港湾：战术防御',
        en: 'Starport Tactical Defense',
        icon: '🛰️',
        desc: '回合制塔防：在港湾周围布置炮塔、路障与路标，抵御 10 波外星来犯，每波还有随机词条强化战场。',
        tags: ['塔防', '回合制', '策略'],
        tone: 'magenta',
        scoreKey: null
    },
    {
        file: 'super_mario.html',
        title: '超级玛丽 · 六关版',
        en: 'Super Mario · Six Worlds',
        icon: '🍄',
        desc: '经典横版卷轴平台跳跃：顶砖块、吃蘑菇变大、踩敌人，一路冲向旗杆。六关连闯，三条命，限时通关。',
        tags: ['平台跳跃', '怀旧', '横版'],
        tone: 'green',
        scoreKey: null
    },
    {
        file: 'toon_delta_extract.html',
        title: '卡通三角洲：搜打撤',
        en: 'Toon Delta · Extract',
        icon: '🚁',
        desc: 'Q 版小人潜入玩具城：搜刮战利品、击退巡逻小怪，在 3 分钟内赶到绿色撤离区，按住 E 完成撤离。屏幕边缘有撤离箭头指引，搜得越多越值钱，也越危险。',
        tags: ['俯视角', '射击', '搜刮撤离'],
        tone: 'purple',
        scoreKey: 'toon_delta_best'
    },
    {
        file: 'lingshe.html',
        title: '灵蛇渡劫 · 修仙贪吃蛇',
        en: 'Spirit Snake · Snake xianxia',
        icon: '🐍',
        desc: '一条初开灵智的小蛇闯荡仙途：吞灵石淬炼灵体，每得五枚便提升一境。境界越高身形越快，天雷劫雷也随之落下 —— 撞上结界、劫雷或自己，身死道消。',
        tags: ['贪吃蛇', '修仙', '躲避'],
        tone: 'cyan',
        scoreKey: 'lingshe_best'
    },
    {
        file: 'xiuxian.html',
        title: '修仙人生模拟器',
        en: 'Xianxia Life Simulator',
        icon: '🧘',
        desc: '一命一世的人生模拟器：开局抽天赋选种族，从凡人一路修到大乘再渡天劫。天赋、属性、法宝、道侣、宗门抉择轮番登场，寿元耗尽后转动命轮继承前世机缘 —— 活得久、境界高，未必就是最好的一世。',
        tags: ['文字', '养成', '轮回'],
        tone: 'amber',
        scoreKey: null
    }
];
