// ===================== 食譜數據 =====================
const recipes = {
  meat: [
    {
      id: 'baiqieji', name: '白切雞', emoji: '🐔',
      desc: '皮爽肉嫩，蘸薑蔥蓉，經典住家菜',
      difficulty: 'easy', tags: ['住家菜', '零失敗'],
      ingredients: ['新鮮雞 1 隻（約 1.2kg）', '薑 1 大塊', '蔥 3 條', '鹽 2 茶匙', '料酒 2 湯匙', '冰水 1 大盆'],
      steps: [
        '雞洗淨，用鹽均勻塗抹雞身內外，醃 15 分鐘',
        '大鍋水加薑片、蔥段、料酒煮滾',
        '手提雞頭，將雞身浸入滾水燙 10 秒，提起瀝水，重複 3 次（讓皮緊實）',
        '整隻雞放入鍋中，小火煮 25 分鐘（水保持微滾不沸騰）',
        '關火燜 15 分鐘，取出立刻浸入冰水 10 分鐘',
        '斬件上碟，配薑蔥蓉蘸料（薑蔥切末，熱油淋上，加鹽拌勻）'
      ],
      tip: '💡 浸冰水讓雞皮爽脆，肉質更嫩滑。雞胸最厚處插入筷子，流出清汁即熟。'
    },
    {
      id: 'doufuchaorousui', name: '豆腐炒肉碎', emoji: '🍲',
      desc: '嫩滑豆腐配香炒肉碎，下飯神器',
      difficulty: 'easy', tags: ['住家菜', '快手菜'],
      ingredients: ['嫩豆腐 2 盒', '豬肉碎 200g', '蒜頭 3 瓣', '生抽 2 湯匙', '蠔油 1 湯匙', '糖 1 茶匙', '蔥花適量', '胡椒粉少許'],
      steps: [
        '豆腐切小塊，用鹽水浸泡 5 分鐘（去豆腥味），瀝乾',
        '熱油爆香蒜末，加入肉碎炒至變色散開',
        '加入生抽、蠔油、糖、胡椒粉調味，炒勻',
        '輕輕放入豆腐，用鍋鏟背推勻（不要翻炒，豆腐易碎）',
        '加 2 湯匙水，蓋蓋小火燜 3 分鐘讓豆腐入味',
        '開蓋大火收汁，撒上蔥花即可'
      ],
      tip: '💡 用嫩豆腐口感最好，推的時候輕手，豆腐就不會碎。'
    },
    {
      id: 'mapodoufu', name: '麻婆豆腐', emoji: '🌶️',
      desc: '麻辣鮮香，正宗川菜風味',
      difficulty: 'hard', tags: ['較困難', '有食譜'],
      ingredients: ['嫩豆腐 1 盒', '豬絞肉 150g', '豆瓣醬 1.5 湯匙', '花椒粉 1 茶匙', '蒜末 1 湯匙', '薑末 1 茶匙', '蔥花適量', '生抽 1 湯匙', '太白粉水（勾芡用）'],
      steps: [
        '豆腐切 2cm 小方塊，鹽水焯燙 2 分鐘，瀝乾備用',
        '熱油爆香蒜末、薑末，加入絞肉炒至變色',
        '加入豆瓣醬小火炒出紅油（約 1 分鐘，不要炒焦）',
        '倒入清水 200ml 煮滾，加入生抽調味',
        '輕輕放入豆腐，小火煮 5 分鐘讓豆腐入味',
        '分 2-3 次淋入太白粉水勾芡，推勻至湯汁濃稠',
        '盛碟，撒上花椒粉和蔥花即可'
      ],
      tip: '💡 豆瓣醬本身有鹹味，不用再額外加鹽。勾芡分次加入，濃稠度更好控制。'
    },
    {
      id: 'gulurou', name: '咕嚕肉', emoji: '🍖',
      desc: '酸甜開胃，外脆內嫩',
      difficulty: 'hard', tags: ['較困難', '宴客菜'],
      ingredients: ['豬頸肉 400g', '青椒 1 個', '紅椒 1 個', '菠蘿 4 片', '雞蛋 1 隻', '生粉 3 湯匙', '番茄醬 3 湯匙', '白醋 2 湯匙', '糖 3 湯匙', '生抽 1 湯匙'],
      steps: [
        '豬肉切小塊，用生抽、糖、雞蛋醃 20 分鐘',
        '加入生粉拌勻，讓每塊肉均勻裹上粉漿',
        '熱油至 170°C，逐塊放入肉塊炸至金黃（約 3 分鐘），撈起',
        '油溫升至 190°C，回鍋複炸 30 秒至酥脆',
        '調酸甜汁：番茄醬、白醋、糖、2 湯匙水拌勻',
        '少油炒香青紅椒和菠蘿，倒入酸甜汁煮滾',
        '放入炸好的肉塊快速翻炒裹汁，立刻上碟'
      ],
      tip: '💡 複炸是酥脆的關鍵！肉塊裹汁要快，否則會變軟。'
    },
    {
      id: 'hongshaorou', name: '紅燒肉', emoji: '🥘',
      desc: '肥而不膩，入口即化',
      difficulty: 'hard', tags: ['較困難', '功夫菜'],
      ingredients: ['五花肉 600g', '冰糖 30g', '生抽 3 湯匙', '老抽 1 湯匙', '料酒 3 湯匙', '薑 5 片', '蔥 2 條', '八角 2 顆', '桂皮 1 小塊'],
      steps: [
        '五花肉切 3cm 方塊，冷水下鍋加薑片、料酒焯水，撈起洗淨',
        '少油小火炒冰糖至融化呈琥珀色（炒糖色）',
        '放入肉塊翻炒上色，加入薑片、八角、桂皮炒香',
        '加入生抽、老抽、料酒，倒入熱水剛好蓋過肉塊',
        '大火煮滾後轉小火，蓋蓋燜煮 45 分鐘',
        '開蓋大火收汁，不停翻炒至湯汁濃稠裹在肉上即可'
      ],
      tip: '💡 一定要加熱水，冷水會讓肉變硬。炒糖色小火慢炒，焦了會苦。'
    },
    {
      id: 'suantairousi', name: '蒜苔炒肉絲', emoji: '🥓',
      desc: '蒜苔爽脆，肉絲嫩滑，簡單下飯',
      difficulty: 'easy', tags: ['住家菜', '快手菜'],
      ingredients: ['蒜苔 300g', '豬肉絲 200g', '蒜頭 2 瓣', '生抽 1 湯匙', '料酒 1 湯匙', '生粉 1 茶匙', '鹽 半茶匙', '糖 少許'],
      steps: [
        '肉絲用生抽、料酒、生粉醃 15 分鐘',
        '蒜苔洗淨切段，蒜頭切片',
        '熱油快炒肉絲至變色，盛起備用',
        '原鍋加油爆香蒜片，倒入蒜苔大火快炒 2 分鐘',
        '加入肉絲回鍋，加鹽、糖調味，炒勻即可'
      ],
      tip: '💡 蒜苔不要炒太久，保持爽脆口感。肉絲先炒定型再回鍋，不會老。'
    },
    {
      id: 'tangcupaigu', name: '糖醋排骨', emoji: '🍖',
      desc: '酸甜開胃，骨肉酥香',
      difficulty: 'hard', tags: ['較困難', '宴客菜'],
      ingredients: ['排骨 500g', '番茄醬 3 湯匙', '白醋 2 湯匙', '糖 3 湯匙', '生抽 1 湯匙', '料酒 2 湯匙', '薑 3 片', '生粉 2 湯匙', '白芝麻適量'],
      steps: [
        '排骨切小段，冷水下鍋加薑片、料酒焯水，撈起瀝乾',
        '用生抽、料酒醃 20 分鐘，裹上薄薄一層生粉',
        '熱油至 170°C，放入排骨炸至金黃（約 5 分鐘），撈起',
        '油溫升至 190°C，回鍋複炸 1 分鐘至酥脆',
        '調汁：番茄醬、白醋、糖、生抽、3 湯匙水拌勻',
        '少油煮滾調汁，倒入排骨快速翻炒裹勻',
        '盛碟撒上白芝麻即可'
      ],
      tip: '💡 排骨先焯水去血水，炸出來更香。複炸讓外皮更酥脆。'
    },
    {
      id: 'qiezibao', name: '魚香茄子煲', emoji: '🍆',
      desc: '軟糯入味，魚香味濃',
      difficulty: 'hard', tags: ['較困難', '下飯'],
      ingredients: ['茄子 2 條', '豬絞肉 100g', '豆瓣醬 1 湯匙', '蒜末 1 湯匙', '薑末 1 茶匙', '蔥花適量', '生抽 1 湯匙', '糖 1 茶匙', '醋 1 茶匙', '太白粉水'],
      steps: [
        '茄子切條，用鹽醃 10 分鐘擠出水分',
        '熱油將茄子炸至微黃軟身，撈起瀝油',
        '少油爆香蒜末、薑末，加入絞肉炒散',
        '加入豆瓣醬炒出紅油，倒入炸好的茄子',
        '加生抽、糖、醋、少許水，小火燜 5 分鐘',
        '勾芡，撒上蔥花，盛入預熱的砂鍋即可'
      ],
      tip: '💡 茄子先醃鹽擠水，炸的時候不會吸太多油。砂鍋預熱能保持溫度。'
    }
  ],
  veggie: [
    {
      id: 'caixin', name: '蒜蓉菜心', emoji: '🥬',
      desc: '翠綠爽口，簡單清炒保留鮮甜',
      difficulty: 'easy', tags: ['住家菜', '5分鐘'],
      ingredients: ['菜心 400g', '蒜頭 4 瓣', '鹽 1 茶匙', '糖 半茶匙', '生抽 1 湯匙', '料酒 1 湯匙'],
      steps: [
        '菜心洗淨，粗莖部分用刀輕拍（易熟入味）',
        '蒜頭切末備用',
        '大火熱油，先下菜心莖部炒 30 秒',
        '加入菜葉和蒜末，大火快炒 1 分鐘',
        '沿鍋邊淋入料酒，加鹽、糖、生抽調味',
        '快速炒勻，菜心變深綠色立刻起鍋'
      ],
      tip: '💡 大火快炒是保持翠綠的秘訣！不要蓋蓋，否則菜會變黃。'
    },
    {
      id: 'shouyubaicai', name: '手撕包菜', emoji: '🥗',
      desc: '酸辣開胃，比刀切更入味',
      difficulty: 'easy', tags: ['住家菜', '下飯'],
      ingredients: ['包菜 半個', '乾辣椒 3 條', '蒜頭 3 瓣', '花椒 1 茶匙', '生抽 2 湯匙', '陳醋 1 湯匙', '糖 1 茶匙'],
      steps: [
        '包菜用手撕成小片（比刀切更易入味），洗淨瀝乾',
        '蒜頭切片，乾辣椒剪段去籽',
        '熱油爆香花椒後撈出（只留香味）',
        '加入蒜片和乾辣椒爆香',
        '倒入包菜，大火翻炒至微微變軟',
        '加入生抽、陳醋、糖，快速炒勻即可'
      ],
      tip: '💡 包菜要瀝乾水，否則炒出來水汪汪。手撕比刀切口感更好。'
    },
    {
      id: 'mapodoufu-veg', name: '麻婆豆腐（素版）', emoji: '🌱',
      desc: '用香菇代替肉碎，一樣麻辣過癮',
      difficulty: 'hard', tags: ['較困難', '素食'],
      ingredients: ['嫩豆腐 1 盒', '鮮香菇 4 朵', '豆瓣醬 1 湯匙', '花椒粉 1 茶匙', '蒜末 1 湯匙', '生抽 1 湯匙', '蔥花適量', '太白粉水'],
      steps: [
        '豆腐切小塊，鹽水焯燙 2 分鐘瀝乾',
        '香菇切丁，用少許油炒至金黃微焦（模擬肉香）',
        '加入豆瓣醬小火炒出紅油',
        '倒入清水 200ml，加生抽調味',
        '放入豆腐小火煮 5 分鐘',
        '勾芡，撒花椒粉和蔥花即可'
      ],
      tip: '💡 香菇要炒到微焦才有「肉」的口感，不要急著加水。'
    },
    {
      id: 'tangcupaigu-veg', name: '糖醋豆乾', emoji: '🍄',
      desc: '用豆乾代替排骨，酸甜一樣美味',
      difficulty: 'hard', tags: ['較困難', '創意菜'],
      ingredients: ['厚豆乾 4 塊', '青椒 1 個', '紅椒 1 個', '番茄醬 3 湯匙', '白醋 2 湯匙', '糖 3 湯匙', '生抽 1 湯匙', '生粉適量'],
      steps: [
        '豆乾切條，用廚房紙吸乾表面水分',
        '均勻裹上生粉，熱油炸至金黃酥脆',
        '青紅椒切塊備用',
        '調汁：番茄醬、白醋、糖、生抽、2 湯匙水拌勻',
        '少油炒香青紅椒，倒入調汁煮滾',
        '放入炸豆乾快速翻炒裹汁即可'
      ],
      tip: '💡 豆乾要吸乾水再炸，否則油會彈。炸好立刻裹汁吃最脆。'
    },
    {
      id: 'suanrongkongxincai', name: '蒜蓉通菜', emoji: '🌿',
      desc: '腐乳或蝦醬兩種風味，翠綠爽脆',
      difficulty: 'easy', tags: ['住家菜', '快手菜'],
      ingredients: ['通菜 400g', '蒜頭 4 瓣', '腐乳 2 塊（或蝦醬 1 茶匙）', '糖 半茶匙', '料酒 1 湯匙'],
      steps: [
        '通菜洗淨切段，蒜頭切末',
        '腐乳壓碎加少許水調開（如果用蝦醬則直接備用）',
        '大火熱油爆香蒜末',
        '倒入通菜大火快炒 1 分鐘',
        '加入腐乳汁（或蝦醬）、糖調味',
        '沿鍋邊淋入料酒，快速炒勻起鍋'
      ],
      tip: '💡 通菜炒太久會變黑，全程大火快炒不超過 2 分鐘。'
    },
    {
      id: 'xihongshichaojidan', name: '番茄炒蛋', emoji: '🍅',
      desc: '國民家常菜，酸甜開胃',
      difficulty: 'easy', tags: ['住家菜', '零失敗'],
      ingredients: ['番茄 3 個', '雞蛋 4 隻', '糖 1 湯匙', '鹽 半茶匙', '蔥花適量', '番茄醬 1 湯匙（可選）'],
      steps: [
        '番茄劃十字燙熱水去皮，切小塊',
        '雞蛋打散，加少許鹽拌勻',
        '熱油倒入蛋液，用筷子劃散成塊狀，盛起備用',
        '原鍋加少許油，倒入番茄塊中火炒出汁',
        '加入糖、番茄醬，煮至番茄軟爛',
        '倒入炒蛋拌勻，撒蔥花即可'
      ],
      tip: '💡 番茄去皮口感更好。加糖能中和酸味，番茄炒蛋的靈魂是「甜」。'
    },
    {
      id: 'ganbianjijiao', name: '乾煸四季豆', emoji: '🫛',
      desc: '外皮微皺，內裡爽脆，麻辣過癮',
      difficulty: 'hard', tags: ['較困難', '川菜'],
      ingredients: ['四季豆 300g', '豬絞肉 80g', '乾辣椒 5 條', '花椒 1 茶匙', '蒜末 1 湯匙', '生抽 1 湯匙', '糖 半茶匙'],
      steps: [
        '四季豆洗淨撕去老筋，折成段',
        '熱油至 160°C，放入四季豆炸至表皮起皺（約 3 分鐘），撈起瀝油',
        '少油炒香絞肉至微焦',
        '加入乾辣椒、花椒、蒜末爆香',
        '倒入炸好的四季豆，加生抽、糖調味',
        '大火快速翻炒均勻即可'
      ],
      tip: '💡 四季豆一定要炸熟或炒熟，否則有毒。炸至起皺是乾煸的標誌。'
    }
  ],
  staple: [
    {
      id: 'zhengdan', name: '蒸水蛋', emoji: '🥚',
      desc: '滑嫩如布丁，簡單又美味',
      difficulty: 'easy', tags: ['住家菜', '零失敗'],
      ingredients: ['雞蛋 3 隻', '溫水 300ml（蛋的 1.5 倍）', '鹽 半茶匙', '生抽 1 茶匙', '蔥花適量', '香油少許'],
      steps: [
        '雞蛋打入碗中，加入鹽打散',
        '慢慢加入溫水（約 40°C），邊加邊攪勻',
        '用篩網過濾蛋液 2 次（去除泡沫，蒸出來更滑）',
        '倒入深碟，蓋上保鮮膜（用牙籤戳幾個小孔）',
        '水滾後放入，中火蒸 10 分鐘',
        '關火燜 2 分鐘，取出淋生抽、香油，撒蔥花'
      ],
      tip: '💡 溫水+過濾+保鮮膜，三招讓蒸蛋像布丁一樣滑！'
    },
    {
      id: 'yifen', name: '番茄肉醬意粉', emoji: '🍝',
      desc: '濃郁醬汁配彈牙意粉，經典西式風味',
      difficulty: 'hard', tags: ['較困難', '有食譜'],
      ingredients: ['意大利粉 200g', '番茄 3 個', '洋蔥 1/2 個', '蒜頭 2 瓣', '豬絞肉 150g', '番茄醬 2 湯匙', '芝士粉適量', '羅勒葉少許', '橄欖油'],
      steps: [
        '大鍋水加 1 湯匙鹽煮滾，放入意粉煮 8-10 分鐘（按包裝時間）',
        '番茄劃十字燙熱水去皮，切小塊；洋蔥切丁',
        '熱橄欖油爆香蒜末和洋蔥，炒至洋蔥透明',
        '加入絞肉炒至變色，加入番茄塊炒軟出汁',
        '加入番茄醬和 1 湯匙煮麵水，小火煮 10 分鐘成濃郁醬汁',
        '意粉瀝乾（保留少許煮麵水），倒入醬汁拌勻',
        '裝碟撒上芝士粉和羅勒葉即可'
      ],
      tip: '💡 煮麵水含澱粉，加一湯匙進醬汁能讓醬汁更掛麵。意粉瀝乾後立刻拌醬，不要放涼。'
    },
    {
      id: 'mixian', name: '雞湯米線', emoji: '🍜',
      desc: '湯鮮味美，暖胃又暖心',
      difficulty: 'hard', tags: ['較困難', '有食譜'],
      ingredients: ['米線 200g', '雞骨架 1 副（或雞湯 500ml）', '榨菜 1 包', '肉絲 100g', '蔥花', '香菜', '生抽 1 湯匙', '白胡椒粉'],
      steps: [
        '雞骨架洗淨，冷水下鍋焯水去血沫，撈起洗淨',
        '重新加水 1L，加薑片大火煮滾，轉小火熬 1 小時成雞湯',
        '米線用溫水浸泡 15 分鐘至軟',
        '肉絲用生抽、胡椒粉、少許生粉醃 10 分鐘',
        '雞湯煮滾，放入肉絲煮熟撈起',
        '另煮一鍋水，燙熟米線（約 2-3 分鐘）',
        '米線撈入碗中，倒入熱雞湯和肉絲',
        '放上榨菜、蔥花、香菜，根據喜好加辣'
      ],
      tip: '💡 雞骨架熬湯比雞精更鮮。米線不要煮太久，會爛。湯和米線分開煮，湯才清澈。'
    },
    {
      id: 'chaofan', name: '揚州炒飯', emoji: '🍚',
      desc: '粒粒分明，色彩繽紛，剩飯變美味',
      difficulty: 'easy', tags: ['住家菜', '快手菜'],
      ingredients: ['隔夜飯 2 碗', '雞蛋 2 隻', '火腿丁 50g', '青豆 30g', '紅蘿蔔丁 30g', '蔥花', '鹽', '生抽 1 湯匙'],
      steps: [
        '隔夜飯用筷子撥散，讓米粒分開（這是粒粒分明的關鍵）',
        '雞蛋打散，熱油快炒成碎蛋花，盛起備用',
        '少油炒香火腿丁、青豆、紅蘿蔔丁',
        '倒入飯，大火翻炒 2 分鐘讓飯粒跳動',
        '加入碎蛋花、鹽、生抽，繼續大火翻炒',
        '炒至飯粒在鍋中跳舞，撒蔥花即可'
      ],
      tip: '💡 一定要用隔夜飯！水分少才能炒得乾爽。大火快炒，飯會在鍋裡「跳舞」。'
    },
    {
      id: 'zhajiangmian', name: '炸醬麵', emoji: '🍜',
      desc: '濃郁肉醬拌麵，北方經典風味',
      difficulty: 'hard', tags: ['較困難', '有食譜'],
      ingredients: ['麵條 300g', '豬絞肉 200g', '黃豆醬 2 湯匙', '甜麵醬 1 湯匙', '黃瓜 1 條', '紅蘿蔔 半條', '蔥花', '蒜末 1 湯匙', '糖 1 茶匙'],
      steps: [
        '黃瓜、紅蘿蔔切細絲備用',
        '熱油爆香蒜末，加入絞肉炒至變色微焦',
        '加入黃豆醬、甜麵醬小火炒 3 分鐘（醬香四溢）',
        '加 2 湯匙水、糖，小火煮 5 分鐘成濃稠炸醬',
        '另煮一鍋水，煮熟麵條，撈起過冷水（更彈牙）',
        '麵條盛碗，淋上炸醬，放上黃瓜絲、紅蘿蔔絲、蔥花',
        '吃的時候拌勻即可'
      ],
      tip: '💡 黃豆醬和甜麵醬比例 2:1 最剛好。肉要炒到微焦才香。麵過冷水更彈牙。'
    },
    {
      id: 'congee', name: '皮蛋瘦肉粥', emoji: '🥣',
      desc: '綿密香滑，暖胃早餐或宵夜',
      difficulty: 'easy', tags: ['住家菜', '養胃'],
      ingredients: ['白米 1 杯', '皮蛋 2 隻', '瘦肉絲 150g', '薑絲適量', '蔥花', '鹽', '胡椒粉', '香油少許'],
      steps: [
        '白米洗淨，加少許油和鹽醃 30 分鐘（更易煮綿）',
        '大鍋水滾，放入白米，大火煮滾後轉小火煮 45 分鐘',
        '瘦肉絲用鹽、胡椒粉、少許生粉醃 15 分鐘',
        '皮蛋去殼切小塊',
        '粥煮至綿密後，加入薑絲和瘦肉絲，攪散煮 3 分鐘',
        '加入皮蛋塊，煮 2 分鐘',
        '調味，撒蔥花、淋香油即可'
      ],
      tip: '💡 米先醃油鹽，煮出來更綿密。皮蛋最後放，煮太久會化掉。'
    },
    {
      id: 'danzhafan', name: '蛋炒飯', emoji: '🍳',
      desc: '最簡單也最困難，黃金蛋炒飯',
      difficulty: 'easy', tags: ['住家菜', '快手菜'],
      ingredients: ['隔夜飯 1 碗', '雞蛋 2 隻', '蔥花', '鹽', '胡椒粉', '生抽 半湯匙'],
      steps: [
        '隔夜飯用筷子撥散',
        '雞蛋打散，將一半蛋液倒入飯中拌勻（讓每粒飯裹上蛋）',
        '熱油倒入拌好的飯，大火翻炒至米粒跳動',
        '將剩餘蛋液均勻淋在飯上，快速翻炒讓蛋包裹飯粒',
        '加鹽、胡椒粉、生抽調味',
        '撒蔥花，炒至飯粒金黃乾爽即可'
      ],
      tip: '💡 蛋液分兩次加是黃金蛋炒飯的秘訣！第一次拌飯，第二次裹飯粒。'
    }
  ],
  dessert: [
    {
      id: 'yugao', name: '椰汁年糕', emoji: '🐟',
      desc: '傳統魚形年糕，寓意年年有餘，椰香軟糯',
      difficulty: 'easy', tags: ['住家菜', '寓意菜'],
      ingredients: ['糯米粉 200g', '粘米粉 50g', '椰漿 200ml', '糖 80g', '水 100ml', '植物油 1 湯匙', '魚形模具（或普通容器）'],
      steps: [
        '糯米粉、粘米粉混合過篩',
        '椰漿、糖、水加熱至糖溶解，放涼至溫熱',
        '慢慢將椰漿倒入粉中，邊倒邊攪成無顆粒粉漿',
        '加入植物油拌勻',
        '模具刷油，倒入粉漿至 8 分滿',
        '水滾後大火蒸 30-40 分鐘，用牙籤插入無粉漿黏住即熟',
        '放涼後脫模，可切片慢火煎至兩面金黃更香'
      ],
      tip: '💡 蒸的時候模具上蓋錫紙或碟子，防止水滴入。放涼後更好脫模。'
    },
    {
      id: 'hongdougao', name: '紅豆糕', emoji: '🫘',
      desc: '軟糯香甜，紅豆粒粒分明',
      difficulty: 'hard', tags: ['較困難', '傳統'],
      ingredients: ['紅豆 150g', '糯米粉 150g', '粘米粉 50g', '糖 100g', '椰漿 150ml', '水 200ml'],
      steps: [
        '紅豆洗淨，浸泡 4 小時或過夜',
        '紅豆加水煮至軟爛（約 40 分鐘），瀝乾保留紅豆水',
        '糯米粉和粘米粉混合，加入椰漿和紅豆水調成粉漿',
        '加入糖和一半紅豆粒拌勻',
        '模具鋪烘焙紙，倒入粉漿，表面撒上剩餘紅豆粒',
        '水滾後大火蒸 35-40 分鐘',
        '完全放涼後切件，冷藏後口感更Q彈'
      ],
      tip: '💡 紅豆不要煮太爛，保留一點口感更好吃。一定要完全放涼再切，否則會黏刀。'
    },
    {
      id: 'mangguobuding', name: '芒果布丁', emoji: '🥭',
      desc: '香滑布丁配鮮甜芒果，夏日清涼甜品',
      difficulty: 'easy', tags: ['住家菜', '免焗'],
      ingredients: ['芒果 2 個（大）', '鮮奶 250ml', '淡奶 100ml', '魚膠粉 10g', '糖 40g', '水 50ml'],
      steps: [
        '芒果去皮切粒，一半留用，一半放入攪拌機打成芒果汁',
        '魚膠粉加 50ml 水靜置 5 分鐘，隔水加熱至溶解',
        '鮮奶、淡奶、糖加熱至糖溶解（不用煮滾），放涼',
        '將芒果汁、奶液、魚膠液混合拌勻',
        '倒入模具，冷藏 4 小時或過夜至凝固',
        '脫模後放上芒果粒裝飾即可'
      ],
      tip: '💡 淡奶讓布丁更香滑，沒有可用鮮奶代替。魚膠粉一定要完全溶解，否則布丁會出水。'
    },
    {
      id: 'tangshui', name: '紅豆沙', emoji: '🫘',
      desc: '綿密紅豆沙，陳皮香氣，經典廣式糖水',
      difficulty: 'easy', tags: ['住家菜', '養生'],
      ingredients: ['紅豆 200g', '陳皮 1 小塊', '冰糖 80g', '水 1.5L', '鹽 1 小撮'],
      steps: [
        '紅豆洗淨，浸泡 4 小時或過夜',
        '陳皮用熱水泡軟，刮去白瓤，切絲',
        '紅豆加水大火煮滾，轉小火煮 1 小時至軟爛',
        '用湯匙壓爛部分紅豆（讓湯更濃稠），或部分用攪拌機打碎',
        '加入陳皮絲和冰糖，繼續煮 15 分鐘',
        '加一小撮鹽提味，關火即可'
      ],
      tip: '💡 加一小撮鹽能讓甜味更突出。陳皮是靈魂，不要省略。紅豆浸泡後更容易煮爛。'
    },
    {
      id: 'shuangpinai', name: '雙皮奶', emoji: '🥛',
      desc: '順德名點，兩層奶皮，香滑濃郁',
      difficulty: 'hard', tags: ['較困難', '傳統'],
      ingredients: ['鮮水牛奶 500ml', '蛋白 3 隻', '糖 40g'],
      steps: [
        '鮮奶倒入碗中，大火蒸 10 分鐘或小火煮熱（不要煮滾）',
        '放涼後表面會結一層奶皮，用牙籤沿碗邊劃一圈',
        '將奶從碗邊倒出，碗底留少許奶和奶皮',
        '蛋白打散，加入糖和倒出的奶拌勻，過篩 2 次',
        '將蛋奶液沿碗邊緩緩倒回有奶皮的碗中（奶皮會浮起）',
        '蓋上錫紙，水滾後中火蒸 12 分鐘',
        '關火燜 5 分鐘，放涼後冷藏食用'
      ],
      tip: '💡 一定要用鮮水牛奶，脂肪含量高才能結出厚奶皮。倒回蛋奶液時要慢，奶皮才會浮在表面。'
    },
    {
      id: 'mahu', name: '芝麻糊', emoji: '🖤',
      desc: '濃郁香滑，養顏烏髮，冬日暖身佳品',
      difficulty: 'easy', tags: ['住家菜', '養生'],
      ingredients: ['黑芝麻 100g', '白米 50g', '冰糖 60g', '水 800ml'],
      steps: [
        '黑芝麻乾鍋小火炒香（約 3 分鐘，聞到香味即可，不要炒焦）',
        '白米洗淨浸泡 30 分鐘',
        '黑芝麻和白米放入攪拌機，加 400ml 水打成細滑漿',
        '過篩去除粗渣（可重複打一次更細滑）',
        '芝麻漿倒入鍋中，加剩餘水和冰糖',
        '小火邊煮邊攪拌，煮至濃稠冒泡即可',
        '熱食或放涼冷藏後食用均可'
      ],
      tip: '💡 黑芝麻一定要炒香，否則會有生味。邊煮邊攪拌防止糊底。過篩是口感細滑的關鍵。'
    }
  ]
};

// ===================== 台詞數據 =====================
const quotes = {
  normal: [
    '今天想煮什麼？點點上面的格子，我幫你挑～',
    '這個看起來好好吃！煮出來一定很棒～',
    '買菜有目標，煮飯更快樂！今天想吃什麼呢？',
    '隨機選一個吧，說不定有驚喜哦！',
    '不知道吃什麼？讓我來幫你決定～'
  ],
  afterPick: [
    '哇！{dish}！這個很讚～',
    '{dish}耶！已經聞到香味了～',
    '好選擇！{dish}配飯一定很棒～',
    '選了{dish}，今晚有口福了！',
    '{dish}！期待開動～'
  ],
  afterRandom: [
    '一鍵配餐完成！今天的菜單看起來很豐富呢～',
    '隨機配餐成功！覺得怎麼樣？不滿意可以重新選哦～',
    '今天的組合很不錯呢！有肉有菜有主食～',
    '配好了！看看合不合口味？'
  ],
  shopping: [
    '買菜清單生成好了！照著買就不會漏了～',
    '清單準備好了，打勾一項項買，很有成就感哦！',
    '記得帶環保袋去買菜～',
    '清單在這裡，買完回來就可以開煮了！'
  ]
};

// ===================== 狀態 =====================
let currentPlan = { meat: null, veggie: null, staple: null, dessert: null };
let currentTab = 'meat';
let currentModalDish = null;

// ===================== 初始化 =====================
function init() {
  renderDishes('meat');
  updatePlanDisplay();
}

// ===================== 渲染菜式列表 =====================
function renderDishes(cat) {
  const list = document.getElementById('dishesList');
  list.innerHTML = '';
  recipes[cat].forEach(dish => {
    const card = document.createElement('div');
    card.className = 'dish-card';
    card.onclick = () => openRecipe(dish);
    const tagsHtml = dish.tags.map(t => {
      const cls = t === '住家菜' || t === '零失敗' || t === '快手菜' || t === '5分鐘' || t === '養生' ? 'tag-easy' :
                  t === '較困難' || t === '功夫菜' ? 'tag-hard' : 'tag-home';
      return '<span class="dish-tag ' + cls + '">' + t + '</span>';
    }).join('');
    card.innerHTML = '<div class="dish-emoji">' + dish.emoji + '</div>' +
      '<div class="dish-info"><div class="dish-name">' + dish.name + '</div>' +
      '<div class="dish-desc">' + dish.desc + '</div>' +
      '<div class="dish-tags">' + tagsHtml + '</div></div>';
    list.appendChild(card);
  });
}

// ===================== 分類切換 =====================
function switchTab(cat, btn) {
  currentTab = cat;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderDishes(cat);
}

// ===================== 打開食譜彈窗 =====================
function openRecipe(dish) {
  currentModalDish = dish;
  document.getElementById('modalEmoji').textContent = dish.emoji;
  document.getElementById('modalTitle').textContent = dish.name;
  const tagsHtml = dish.tags.map(t => {
    const cls = t === '住家菜' || t === '零失敗' || t === '養生' ? 'tag-easy' :
                t === '較困難' ? 'tag-hard' : 'tag-home';
    return '<span class="dish-tag ' + cls + '">' + t + '</span>';
  }).join('');
  document.getElementById('modalTags').innerHTML = tagsHtml;
  document.getElementById('modalIngredients').innerHTML = dish.ingredients.map(i =>
    '<span class="ingredient-item">' + i + '</span>'
  ).join('');
  document.getElementById('modalSteps').innerHTML = dish.steps.map((s, i) =>
    '<div class="step-item"><div class="step-num">' + (i + 1) + '</div>' +
    '<div class="step-text">' + s + '</div></div>'
  ).join('');
  document.getElementById('modalTip').innerHTML = dish.tip;
  document.getElementById('recipeModal').classList.add('active');
}

// ===================== 關閉食譜彈窗 =====================
function closeModal() {
  document.getElementById('recipeModal').classList.remove('active');
  currentModalDish = null;
}

// ===================== 隨機選擇單個分類 =====================
function pickRandom(cat) {
  const list = recipes[cat];
  const dish = list[Math.floor(Math.random() * list.length)];
  currentPlan[cat] = dish;
  updatePlanDisplay();
  const q = quotes.afterPick[Math.floor(Math.random() * quotes.afterPick.length)];
  updateDaughter(q.replace('{dish}', dish.name));
}

// ===================== 一鍵隨機配餐 =====================
function randomAll() {
  Object.keys(recipes).forEach(cat => {
    currentPlan[cat] = recipes[cat][Math.floor(Math.random() * recipes[cat].length)];
  });
  updatePlanDisplay();
  updateDaughter(quotes.afterRandom[Math.floor(Math.random() * quotes.afterRandom.length)]);
}

// ===================== 從彈窗加入計劃 =====================
function addToPlanFromModal() {
  if (!currentModalDish) return;
  for (const cat of Object.keys(recipes)) {
    const found = recipes[cat].find(d => d.id === currentModalDish.id);
    if (found) {
      currentPlan[cat] = found;
      updatePlanDisplay();
      closeModal();
      updateDaughter('已把' + found.name + '加入今日菜單！');
      return;
    }
  }
}

// ===================== 更新計劃顯示 =====================
function updatePlanDisplay() {
  const slots = { meat: 'plan-meat', veggie: 'plan-veggie', staple: 'plan-staple', dessert: 'plan-dessert' };
  for (const [cat, elId] of Object.entries(slots)) {
    const el = document.getElementById(elId);
    const slotEl = el.closest('.plan-slot');
    if (currentPlan[cat]) {
      el.textContent = currentPlan[cat].name;
      slotEl.classList.add('filled');
    } else {
      el.textContent = '點擊隨機選擇';
      slotEl.classList.remove('filled');
    }
  }
}

// ===================== 生成買菜清單 =====================
function generateShoppingList() {
  const selected = Object.values(currentPlan).filter(d => d !== null);
  if (selected.length === 0) {
    updateDaughter('先選幾道菜，我才能幫你生成買菜清單哦～');
    return;
  }
  const allIng = [];
  selected.forEach(dish => { dish.ingredients.forEach(ing => allIng.push(ing)); });

  const cats = { '🥩 肉類': [], '🥬 蔬菜': [], '🍚 主食/粉麵': [], '🧂 調味料': [], '🥛 奶蛋/其他': [] };
  allIng.forEach(item => {
    const n = item.toLowerCase();
    if (n.includes('豬') || n.includes('雞') || n.includes('肉') || n.includes('火腿') || n.includes('絞肉') || n.includes('排骨'))
      cats['🥩 肉類'].push(item);
    else if (n.includes('菜') || n.includes('蔥') || n.includes('蒜') || n.includes('薑') || n.includes('椒') || n.includes('蘿蔔') || n.includes('菠蘿') || n.includes('番茄') || n.includes('洋蔥') || n.includes('香菇') || n.includes('包菜') || n.includes('豆乾') || n.includes('榨菜') || n.includes('香菜') || n.includes('羅勒') || n.includes('四季豆') || n.includes('通菜') || n.includes('茄子') || n.includes('青豆') || n.includes('黃瓜'))
      cats['🥬 蔬菜'].push(item);
    else if (n.includes('米') || n.includes('粉') || n.includes('麵') || n.includes('年糕') || n.includes('意粉') || n.includes('米線') || n.includes('麵條') || n.includes('飯'))
      cats['🍚 主食/粉麵'].push(item);
    else if (n.includes('醬') || n.includes('油') || n.includes('醋') || n.includes('糖') || n.includes('鹽') || n.includes('料酒') || n.includes('胡椒') || n.includes('花椒') || n.includes('八角') || n.includes('桂皮') || n.includes('生粉') || n.includes('魚膠') || n.includes('豆瓣') || n.includes('黃豆') || n.includes('甜麵') || n.includes('蠔油') || n.includes('生抽') || n.includes('老抽') || n.includes('陳醋') || n.includes('番茄醬') || n.includes('香油'))
      cats['🧂 調味料'].push(item);
    else
      cats['🥛 奶蛋/其他'].push(item);
  });

  const listEl = document.getElementById('shoppingList');
  listEl.innerHTML = '';
  for (const [catName, items] of Object.entries(cats)) {
    if (items.length === 0) continue;
    const catDiv = document.createElement('div');
    catDiv.className = 'shopping-category';
    const unique = [...new Set(items)];
    const itemsHtml = unique.map(name =>
      '<div class="shopping-item"><input type="checkbox" onchange="this.parentElement.classList.toggle('checked')">' +
      '<span>' + name + '</span></div>'
    ).join('');
    catDiv.innerHTML = '<h4>' + catName + '</h4>' + itemsHtml;
    listEl.appendChild(catDiv);
  }
  document.getElementById('shoppingModal').classList.add('active');
  updateDaughter(quotes.shopping[Math.floor(Math.random() * quotes.shopping.length)]);
}

// ===================== 關閉買菜清單 =====================
function closeShoppingModal() {
  document.getElementById('shoppingModal').classList.remove('active');
}

// ===================== 複製清單 =====================
function copyList() {
  const items = [];
  document.querySelectorAll('.shopping-item span').forEach(el => items.push(el.textContent));
  const text = '🛒 今晚煮什麼 - 買菜清單

' + items.join('
');
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() =>
      updateDaughter('清單已複製！可以貼到備忘錄裡～')
    );
  } else {
    updateDaughter('請手動截圖保存清單哦～');
  }
}

// ===================== 更新小助手台詞 =====================
function updateDaughter(text) {
  const bubble = document.getElementById('daughterBubble');
  bubble.style.opacity = '0';
  setTimeout(() => { bubble.textContent = text; bubble.style.opacity = '1'; }, 200);
}

// ===================== 啟動 =====================
init();
