(function() {
  window.BINGO_THEME_VARS = [
    '--bg-body','--bg-tile','--bg-well','--bg-completed','--bg-completed-well',
    '--border-main','--border-completed','--accent',
    '--text-main','--text-bright','--text-dim','--text-completed'
  ];

  window.BINGO_THEME_METADATA = [
    { value: 'osrs', label: 'OSRS (Original)' },
    { value: 'abyssal', label: 'Abyssal' },
    { value: 'autumn', label: 'Autumn' },
    { value: 'berry', label: 'Berry' },
    { value: 'bloodlust', label: 'Bloodlust' },
    { value: 'blueprint', label: 'Blueprint' },
    { value: 'bumblebee', label: 'Bumblebee' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'coffee', label: 'Coffee Shop' },
    { value: 'copper', label: 'Copper Patina' },
    { value: 'cyberpunk', label: 'Cyberpunk' },
    { value: 'dracula', label: 'Dracula' },
    { value: 'dusk', label: 'Dusk' },
    { value: 'emerald', label: 'Emerald' },
    { value: 'forest', label: 'Enchanted Forest' },
    { value: 'noir', label: 'Film Noir' },
    { value: 'fire', label: 'Fire' },
    { value: 'glacier', label: 'Glacier' },
    { value: 'grapes', label: 'Grapes' },
    { value: 'high_contrast', label: 'High Contrast' },
    { value: 'ice', label: 'Ice' },
    { value: 'lavender', label: 'Lavender' },
    { value: 'leather', label: 'Leather' },
    { value: 'lime', label: 'Lime' },
    { value: 'midnight', label: 'Midnight OLED' },
    { value: 'mint', label: 'Mint Fresh' },
    { value: 'moon', label: 'Moon' },
    { value: 'moss', label: 'Moss' },
    { value: 'nebula', label: 'Nebula' },
    { value: 'nord', label: 'Nordic' },
    { value: 'obsidian', label: 'Obsidian Gold' },
    { value: 'ocean', label: 'Ocean Depths' },
    { value: 'paper', label: 'Paper' },
    { value: 'rose', label: 'Rose' },
    { value: 'royal', label: 'Royal' },
    { value: 'sakura', label: 'Sakura' },
    { value: 'sandstorm', label: 'Sandstorm' },
    { value: 'sky', label: 'Sky' },
    { value: 'slate', label: 'Slate' },
    { value: 'solar', label: 'Solar' },
    { value: 'spring', label: 'Spring' },
    { value: 'summer', label: 'Summer' },
    { value: 'sun', label: 'Sun' },
    { value: 'swamp', label: 'Swamp' },
    { value: 'terminal', label: 'Terminal' },
    { value: 'tox', label: 'Toxic' },
    { value: 'vaporwave', label: 'Vaporwave' },
    { value: 'void', label: 'Void' },
    { value: 'volcanic', label: 'Volcanic' },
    { value: 'winter', label: 'Winter' }
  ];

  window.BINGO_THEMES = {
    osrs: null,
    midnight: {
      '--bg-body':'#000000','--bg-tile':'#0e0e0e','--bg-well':'#060606',
      '--bg-completed':'#1a1a1a','--bg-completed-well':'#0d0d0d',
      '--border-main':'#2a2a2a','--border-completed':'#e0e0e0',
      '--accent':'#ffffff','--text-main':'#d4d4d4','--text-bright':'#ffffff',
      '--text-dim':'#4a4a4a','--text-completed':'#e0e0e0'
    },
    high_contrast: {
      '--bg-body':'#000000','--bg-tile':'#000000','--bg-well':'#000000',
      '--bg-completed':'#000000','--bg-completed-well':'#000000',
      '--border-main':'#ffffff','--border-completed':'#ffff00',
      '--accent':'#ffff00','--text-main':'#ffffff','--text-bright':'#ffffff',
      '--text-dim':'#d0d0d0','--text-completed':'#ffff00'
    },
    spring: {
      '--bg-body':'#1e2e1e','--bg-tile':'#2a402a','--bg-well':'#162416',
      '--bg-completed':'#3d2a4d','--bg-completed-well':'#2a1c36',
      '--border-main':'#5a8a5a','--border-completed':'#c77dff',
      '--accent':'#7dffb3','--text-main':'#7dffb3','--text-bright':'#d0ffe0',
      '--text-dim':'#6a8a6a','--text-completed':'#c77dff'
    },
    summer: {
      '--bg-body':'#0f2a3a','--bg-tile':'#1a4058','--bg-well':'#0a1f2d',
      '--bg-completed':'#5a4010','--bg-completed-well':'#3d2b0a',
      '--border-main':'#3a7ea8','--border-completed':'#ffc833',
      '--accent':'#00e5ff','--text-main':'#00e5ff','--text-bright':'#b3f5ff',
      '--text-dim':'#4a7a8f','--text-completed':'#ffc833'
    },
    autumn: {
      '--bg-body':'#261410','--bg-tile':'#3d2218','--bg-well':'#1a0e0a',
      '--bg-completed':'#1a3040','--bg-completed-well':'#0f1f2a',
      '--border-main':'#8a5040','--border-completed':'#4a9ac4',
      '--accent':'#ff8533','--text-main':'#ff8533','--text-bright':'#ffc599',
      '--text-dim':'#8a6a5a','--text-completed':'#4a9ac4'
    },
    winter: {
      '--bg-body':'#141a22','--bg-tile':'#222e3a','--bg-well':'#0e1419',
      '--bg-completed':'#3a2228','--bg-completed-well':'#261418',
      '--border-main':'#4a6a82','--border-completed':'#ff7a7a',
      '--accent':'#8ad4ff','--text-main':'#8ad4ff','--text-bright':'#d6efff',
      '--text-dim':'#5a6e7e','--text-completed':'#ff7a7a'
    },
    abyssal: {
      '--bg-body':'#030810','--bg-tile':'#081428','--bg-well':'#020508',
      '--bg-completed':'#003838','--bg-completed-well':'#001f1f',
      '--border-main':'#0e2040','--border-completed':'#50ffd0',
      '--accent':'#50ffd0','--text-main':'#50ffd0','--text-bright':'#b0d8e8',
      '--text-dim':'#3a5070','--text-completed':'#50ffd0'
    },
    volcanic: {
      '--bg-body':'#100808','--bg-tile':'#1e1010','--bg-well':'#080404',
      '--bg-completed':'#401500','--bg-completed-well':'#280e00',
      '--border-main':'#4a2020','--border-completed':'#ff5500',
      '--accent':'#ff5500','--text-main':'#ff6a20','--text-bright':'#ffb380',
      '--text-dim':'#6a4040','--text-completed':'#ff5500'
    },
    cyberpunk: {
      '--bg-body':'#0a0118','--bg-tile':'#1a0a30','--bg-well':'#06010e',
      '--bg-completed':'#80002a','--bg-completed-well':'#500018',
      '--border-main':'#4a1a6a','--border-completed':'#00e8c8',
      '--accent':'#ffe030','--text-main':'#ff1a60','--text-bright':'#ff80a0',
      '--text-dim':'#6a4070','--text-completed':'#00e8c8'
    },
    bloodlust: {
      '--bg-body':'#140404','--bg-tile':'#220808','--bg-well':'#0e0202',
      '--bg-completed':'#400808','--bg-completed-well':'#280404',
      '--border-main':'#4a1414','--border-completed':'#ff4040',
      '--accent':'#ff4040','--text-main':'#e02020','--text-bright':'#ff8080',
      '--text-dim':'#5a3030','--text-completed':'#ff4040'
    },
    royal: {
      '--bg-body':'#160a24','--bg-tile':'#2e1650','--bg-well':'#0e0618',
      '--bg-completed':'#4a3800','--bg-completed-well':'#302400',
      '--border-main':'#4a2870','--border-completed':'#ffd700',
      '--accent':'#ffc830','--text-main':'#c8a030','--text-bright':'#ffe899',
      '--text-dim':'#6a4890','--text-completed':'#ffd700'
    },
    emerald: {
      '--bg-body':'#04160c','--bg-tile':'#0a2e18','--bg-well':'#020e08',
      '--bg-completed':'#104828','--bg-completed-well':'#0a3018',
      '--border-main':'#1a5030','--border-completed':'#30d868',
      '--accent':'#50e880','--text-main':'#50e880','--text-bright':'#a0ffc0',
      '--text-dim':'#2a5a3a','--text-completed':'#30d868'
    },
    solar: {
      '--bg-body':'#2a1e14','--bg-tile':'#44301e','--bg-well':'#1e140e',
      '--bg-completed':'#6a4a08','--bg-completed-well':'#483208',
      '--border-main':'#6a4a30','--border-completed':'#f0c020',
      '--accent':'#ffcc33','--text-main':'#e8b020','--text-bright':'#fff0b0',
      '--text-dim':'#7a6040','--text-completed':'#f0c020'
    },
    vaporwave: {
      '--bg-body':'#0a0240','--bg-tile':'#1a0830','--bg-well':'#06012a',
      '--bg-completed':'#a0408a','--bg-completed-well':'#6a2860',
      '--border-main':'#3020a0','--border-completed':'#00d8f0',
      '--accent':'#00d8f0','--text-main':'#b070ff','--text-bright':'#e0b0ff',
      '--text-dim':'#5a3880','--text-completed':'#00d8f0'
    },
    tox: {
      '--bg-body':'#100010','--bg-tile':'#200020','--bg-well':'#0a000a',
      '--bg-completed':'#0a200a','--bg-completed-well':'#061406',
      '--border-main':'#400040','--border-completed':'#30ff18',
      '--accent':'#d0ff10','--text-main':'#d0ff10','--text-bright':'#e8ff88',
      '--text-dim':'#604060','--text-completed':'#30ff18'
    },
    ocean: {
      '--bg-body':'#040e1a','--bg-tile':'#0a1e30','--bg-well':'#02080f',
      '--bg-completed':'#004048','--bg-completed-well':'#002830',
      '--border-main':'#10304a','--border-completed':'#00c8a0',
      '--accent':'#0090d0','--text-main':'#40b8e8','--text-bright':'#90e0ff',
      '--text-dim':'#2a5068','--text-completed':'#00c8a0'
    },
    sandstorm: {
      '--bg-body':'#1e1810','--bg-tile':'#302818','--bg-well':'#14100a',
      '--bg-completed':'#484020','--bg-completed-well':'#302a14',
      '--border-main':'#5a4a2a','--border-completed':'#d8b840',
      '--accent':'#e8c848','--text-main':'#d0a830','--text-bright':'#f0dea0',
      '--text-dim':'#6a5a38','--text-completed':'#d8b840'
    },
    nebula: {
      '--bg-body':'#0a0414','--bg-tile':'#140a24','--bg-well':'#06020e',
      '--bg-completed':'#1a1040','--bg-completed-well':'#100a28',
      '--border-main':'#281848','--border-completed':'#c080ff',
      '--accent':'#a060ff','--text-main':'#9070e0','--text-bright':'#d0b8ff',
      '--text-dim':'#443060','--text-completed':'#c080ff'
    },
    forest: {
      '--bg-body':'#0a120a','--bg-tile':'#142014','--bg-well':'#060e06',
      '--bg-completed':'#183818','--bg-completed-well':'#102810',
      '--border-main':'#2a4a2a','--border-completed':'#68d068',
      '--accent':'#88e088','--text-main':'#60c060','--text-bright':'#b0f0b0',
      '--text-dim':'#3a5a3a','--text-completed':'#68d068'
    },
    noir: {
      '--bg-body':'#0e0e0e','--bg-tile':'#1a1a1a','--bg-well':'#080808',
      '--bg-completed':'#2a2a1e','--bg-completed-well':'#1a1a14',
      '--border-main':'#333333','--border-completed':'#c8b870',
      '--accent':'#c8b870','--text-main':'#a0a0a0','--text-bright':'#d8d8d0',
      '--text-dim':'#505050','--text-completed':'#c8b870'
    },
    sakura: {
      '--bg-body':'#1a0e14','--bg-tile':'#2a1824','--bg-well':'#12080e',
      '--bg-completed':'#3a1830','--bg-completed-well':'#281020',
      '--border-main':'#4a2840','--border-completed':'#ff88b8',
      '--accent':'#ff88b8','--text-main':'#e870a0','--text-bright':'#ffc0d8',
      '--text-dim':'#5a3850','--text-completed':'#ff88b8'
    },
    copper: {
      '--bg-body':'#10120e','--bg-tile':'#1e201a','--bg-well':'#0a0c08',
      '--bg-completed':'#2a3028','--bg-completed-well':'#1e2418',
      '--border-main':'#3a4030','--border-completed':'#60b8a0',
      '--accent':'#d08850','--text-main':'#c08048','--text-bright':'#e8c0a0',
      '--text-dim':'#505840','--text-completed':'#60b8a0'
    },
    obsidian: {
      '--bg-body':'#080808','--bg-tile':'#141410','--bg-well':'#040404',
      '--bg-completed':'#282010','--bg-completed-well':'#1a1408',
      '--border-main':'#2a2820','--border-completed':'#d8a830',
      '--accent':'#d8a830','--text-main':'#c09828','--text-bright':'#f0d888',
      '--text-dim':'#484030','--text-completed':'#d8a830'
    },
    lavender: {
      '--bg-body':'#181020','--bg-tile':'#241830','--bg-well':'#100a18',
      '--bg-completed':'#2a1838','--bg-completed-well':'#1a0e24',
      '--border-main':'#4a3060','--border-completed':'#d0a0ff',
      '--accent':'#a080ff','--text-main':'#c0a0ff','--text-bright':'#e0d0ff',
      '--text-dim':'#604880','--text-completed':'#d0a0ff'
    },
    mint: {
      '--bg-body':'#102018','--bg-tile':'#183024','--bg-well':'#0a1410',
      '--bg-completed':'#183828','--bg-completed-well':'#0e2418',
      '--border-main':'#285038','--border-completed':'#50ffb0',
      '--accent':'#50ffb0','--text-main':'#50ffb0','--text-bright':'#b0ffe0',
      '--text-dim':'#306048','--text-completed':'#50ffb0'
    },
    dracula: {
      '--bg-body':'#282a36','--bg-tile':'#44475a','--bg-well':'#21222c',
      '--bg-completed':'#383a59','--bg-completed-well':'#282a36',
      '--border-main':'#6272a4','--border-completed':'#50fa7b',
      '--accent':'#ff79c6','--text-main':'#f8f8f2','--text-bright':'#ffffff',
      '--text-dim':'#6272a4','--text-completed':'#50fa7b'
    },
    nord: {
      '--bg-body':'#2e3440','--bg-tile':'#3b4252','--bg-well':'#242933',
      '--bg-completed':'#434c5e','--bg-completed-well':'#2e3440',
      '--border-main':'#4c566a','--border-completed':'#a3be8c',
      '--accent':'#88c0d0','--text-main':'#eceff4','--text-bright':'#ffffff',
      '--text-dim':'#4c566a','--text-completed':'#a3be8c'
    },
    coffee: {
      '--bg-body':'#201814','--bg-tile':'#30241e','--bg-well':'#140e0c',
      '--bg-completed':'#382820','--bg-completed-well':'#241814',
      '--border-main':'#503830','--border-completed':'#e0c0a0',
      '--accent':'#d0a080','--text-main':'#e0c0a0','--text-bright':'#f0e0d0',
      '--text-dim':'#604840','--text-completed':'#e0c0a0'
    },
    slate: {
      '--bg-body':'#202225','--bg-tile':'#2f3136','--bg-well':'#202225',
      '--bg-completed':'#40444b','--bg-completed-well':'#2f3136',
      '--border-main':'#202225','--border-completed':'#7289da',
      '--accent':'#7289da','--text-main':'#dcddde','--text-bright':'#ffffff',
      '--text-dim':'#72767d','--text-completed':'#7289da'
    },
    dusk: {
      '--bg-body':'#231a24','--bg-tile':'#332233','--bg-well':'#1a101a',
      '--bg-completed':'#402040','--bg-completed-well':'#2a152a',
      '--border-main':'#503050','--border-completed':'#ff80a0',
      '--accent':'#ff80a0','--text-main':'#e0c0d0','--text-bright':'#ffe0f0',
      '--text-dim':'#705060','--text-completed':'#ff80a0'
    },
    moss: {
      '--bg-body':'#1a241a','--bg-tile':'#2a332a','--bg-well':'#101a10',
      '--bg-completed':'#304030','--bg-completed-well':'#203020',
      '--border-main':'#3a4a3a','--border-completed':'#80a080',
      '--accent':'#80a080','--text-main':'#a0c0a0','--text-bright':'#d0e0d0',
      '--text-dim':'#506050','--text-completed':'#80a080'
    },
    berry: {
      '--bg-body':'#241018','--bg-tile':'#331a24','--bg-well':'#1a0810',
      '--bg-completed':'#401828','--bg-completed-well':'#2a0e1a',
      '--border-main':'#502030','--border-completed':'#ff6090',
      '--accent':'#ff6090','--text-main':'#e0a0b0','--text-bright':'#ffc0d0',
      '--text-dim':'#704050','--text-completed':'#ff6090'
    },
    glacier: {
      '--bg-body':'#102028','--bg-tile':'#1a3038','--bg-well':'#081820',
      '--bg-completed':'#204050','--bg-completed-well':'#103040',
      '--border-main':'#305060','--border-completed':'#80d0f0',
      '--accent':'#80d0f0','--text-main':'#a0e0f0','--text-bright':'#d0f0ff',
      '--text-dim':'#406070','--text-completed':'#80d0f0'
    },
    terminal: {
      '--bg-body':'#000000','--bg-tile':'#0a0a0a','--bg-well':'#000000',
      '--bg-completed':'#002000','--bg-completed-well':'#001000',
      '--border-main':'#004000','--border-completed':'#00ff00',
      '--accent':'#00ff00','--text-main':'#00ff00','--text-bright':'#80ff80',
      '--text-dim':'#008000','--text-completed':'#00ff00'
    },
    paper: {
      '--bg-body':'#f0f0f0','--bg-tile':'#ffffff','--bg-well':'#e0e0e0',
      '--bg-completed':'#e0f0e0','--bg-completed-well':'#d0e0d0',
      '--border-main':'#c0c0c0','--border-completed':'#40a040',
      '--accent':'#404040','--text-main':'#202020','--text-bright':'#000000',
      '--text-dim':'#808080','--text-completed':'#40a040'
    },
    swamp: {
      '--bg-body':'#141810','--bg-tile':'#202818','--bg-well':'#0c1008',
      '--bg-completed':'#283020','--bg-completed-well':'#182014',
      '--border-main':'#304020','--border-completed':'#80a040',
      '--accent':'#80a040','--text-main':'#a0b080','--text-bright':'#d0e0a0',
      '--text-dim':'#405030','--text-completed':'#80a040'
    },
    moon: {
      '--bg-body':'#202020','--bg-tile':'#303030','--bg-well':'#181818',
      '--bg-completed':'#404040','--bg-completed-well':'#282828',
      '--border-main':'#505050','--border-completed':'#e0e0e0',
      '--accent':'#e0e0e0','--text-main':'#c0c0c0','--text-bright':'#ffffff',
      '--text-dim':'#707070','--text-completed':'#e0e0e0'
    },
    sun: {
      '--bg-body':'#302810','--bg-tile':'#403818','--bg-well':'#201808',
      '--bg-completed':'#504020','--bg-completed-well':'#302810',
      '--border-main':'#605020','--border-completed':'#ffc040',
      '--accent':'#ffc040','--text-main':'#e0c060','--text-bright':'#ffe080',
      '--text-dim':'#806030','--text-completed':'#ffc040'
    },
    sky: {
      '--bg-body':'#102838','--bg-tile':'#183850','--bg-well':'#082030',
      '--bg-completed':'#204860','--bg-completed-well':'#103040',
      '--border-main':'#305070','--border-completed':'#60a0ff',
      '--accent':'#60a0ff','--text-main':'#80c0ff','--text-bright':'#b0e0ff',
      '--text-dim':'#406080','--text-completed':'#60a0ff'
    },
    fire: {
      '--bg-body':'#281008','--bg-tile':'#381810','--bg-well':'#180804',
      '--bg-completed':'#482010','--bg-completed-well':'#281008',
      '--border-main':'#502010','--border-completed':'#ff4000',
      '--accent':'#ff4000','--text-main':'#ff8040','--text-bright':'#ffc080',
      '--text-dim':'#803020','--text-completed':'#ff4000'
    },
    ice: {
      '--bg-body':'#102830','--bg-tile':'#183840','--bg-well':'#082028',
      '--bg-completed':'#204850','--bg-completed-well':'#103038',
      '--border-main':'#305060','--border-completed':'#00ffff',
      '--accent':'#00ffff','--text-main':'#80ffff','--text-bright':'#c0ffff',
      '--text-dim':'#408080','--text-completed':'#00ffff'
    },
    void: {
      '--bg-body':'#080010','--bg-tile':'#100020','--bg-well':'#040008',
      '--bg-completed':'#200040','--bg-completed-well':'#100020',
      '--border-main':'#300060','--border-completed':'#a000ff',
      '--accent':'#a000ff','--text-main':'#c080ff','--text-bright':'#e0b0ff',
      '--text-dim':'#500080','--text-completed':'#a000ff'
    },
    grapes: {
      '--bg-body':'#181020','--bg-tile':'#241830','--bg-well':'#100818',
      '--bg-completed':'#302040','--bg-completed-well':'#201030',
      '--border-main':'#402850','--border-completed':'#a060d0',
      '--accent':'#a060d0','--text-main':'#c090e0','--text-bright':'#e0c0f0',
      '--text-dim':'#604070','--text-completed':'#a060d0'
    },
    chocolate: {
      '--bg-body':'#281810','--bg-tile':'#382418','--bg-well':'#180c08',
      '--bg-completed':'#483020','--bg-completed-well':'#281810',
      '--border-main':'#503020','--border-completed':'#c08040',
      '--accent':'#c08040','--text-main':'#d0a060','--text-bright':'#e0c090',
      '--text-dim':'#704030','--text-completed':'#c08040'
    },
    lime: {
      '--bg-body':'#102010','--bg-tile':'#183018','--bg-well':'#081808',
      '--bg-completed':'#204020','--bg-completed-well':'#102810',
      '--border-main':'#285028','--border-completed':'#80ff00',
      '--accent':'#80ff00','--text-main':'#a0ff40','--text-bright':'#c0ff80',
      '--text-dim':'#408020','--text-completed':'#80ff00'
    },
    rose: {
      '--bg-body':'#281018','--bg-tile':'#381824','--bg-well':'#180810',
      '--bg-completed':'#482030','--bg-completed-well':'#281018',
      '--border-main':'#502030','--border-completed':'#ff80a0',
      '--accent':'#ff80a0','--text-main':'#ffb0c0','--text-bright':'#ffe0e8',
      '--text-dim':'#804050','--text-completed':'#ff80a0'
    },
    bumblebee: {
      '--bg-body':'#101010','--bg-tile':'#202020','--bg-well':'#080808',
      '--bg-completed':'#303010','--bg-completed-well':'#202008',
      '--border-main':'#404040','--border-completed':'#ffcc00',
      '--accent':'#ffcc00','--text-main':'#ffe060','--text-bright':'#fff0a0',
      '--text-dim':'#605020','--text-completed':'#ffcc00'
    },
    blueprint: {
      '--bg-body':'#002040','--bg-tile':'#003060','--bg-well':'#001020',
      '--bg-completed':'#004080','--bg-completed-well':'#002850',
      '--border-main':'#0050a0','--border-completed':'#ffffff',
      '--accent':'#ffffff','--text-main':'#e0e0ff','--text-bright':'#ffffff',
      '--text-dim':'#6080a0','--text-completed':'#ffffff'
    },
    leather: {
      '--bg-body':'#2c1e14','--bg-tile':'#3e2b1c','--bg-well':'#1e140c',
      '--bg-completed':'#4e3624','--bg-completed-well':'#322216',
      '--border-main':'#5e422e','--border-completed':'#cba67e',
      '--accent':'#cba67e','--text-main':'#dcc0a0','--text-bright':'#f0e0c8',
      '--text-dim':'#7a5c40','--text-completed':'#cba67e'
    }
  };
})();