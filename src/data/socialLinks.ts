import { FaTwitter, FaYoutube, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTiktok, FaPinterest, FaReddit, FaMedium } from 'react-icons/fa'

export const socialLinks = [
  { 
    name: {
      en: 'Follow on Twitter',
      zh: '在Twitter上关注',
      ja: 'Twitterでフォロー',
      'zh-Hant': '在Twitter上關注'
    }, 
    icon: FaTwitter, 
    url: 'https://twitter.com/', 
    description: {
      en: 'Join my digital brainstorming sessions! I tweet about the latest tech trends, coding challenges, and occasionally, my epic battles with semicolons. Warning: May contain traces of nerdy humor and caffeine-induced epiphanies.',
      zh: '加入我的数字头脑风暴会议！我在这里分享最新科技趋势、编程挑战，偶尔还有我与分号的史诗级战斗。警告：可能包含极客式幽默和咖啡因引发的顿悟。',
      ja: 'デジタルブレインストーミングセッションに参加しませんか？最新のテクノロジートレンド、コーディングの課題、そして時々、セミコロンとの壮大な戦いについてツイートしています。注意：オタクユーモアとカフェイン誘発のひらめきの痕跡が含まれている可能性があります。',
      'zh-Hant': '加入我的數位腦力激盪會議！我在這裡分享最新科技趨勢、程式設計挑戰，偶爾還有我與分號的史詩級戰鬥。警告：可能包含極客式幽默和咖啡因引發的頓悟。'
    }, 
    color: 'bg-[#1DA1F2] text-white' 
  },
  { 
    name: {
      en: 'Subscribe to my YouTube',
      zh: '订阅我的YouTube频道',
      ja: 'YouTubeチャンネルを登録',
      'zh-Hant': '訂閱我的YouTube頻道'
    }, 
    icon: FaYoutube, 
    url: 'https://www.youtube.com/', 
    description: {
      en: 'Dive into a world of pixels and possibilities! My channel is a treasure trove of coding tutorials, tech reviews, and the occasional \'How I Survived Debugging This\' horror stories. Subscribe for a front-row seat to the digital revolution (and my questionable green screen skills).',
      zh: '潜入像素与可能性的世界！我的频道是编程教程、科技评测的宝库，偶尔还有"我是如何在调试中幸存下来的"恐怖故事。订阅以获得数字革命的前排座位（以及见证我有待提高的绿幕技巧）。',
      ja: 'ピクセルと可能性の世界に飛び込みましょう！私のチャンネルは、コーディングチュートリアル、テクノロジーレビュー、そして時々「デバッグから生還した方法」というホラーストーリーの宝庫です。デジタル革命の最前列の席（そして私の疑わしいグリーンスクリーンスキル）をご覧いただくためにチャンネル登録してください。',
      'zh-Hant': '潛入像素與可能性的世界！我的頻道是程式設計教學、科技評測的寶庫，偶爾還有「我是如何在除錯中倖存下來的」恐怖故事。訂閱以獲得數位革命的前排座位（以及見證我有待提高的綠幕技巧）。'
    }, 
    color: 'bg-[#FF0000] text-white' 
  },
  { 
    name: {
      en: 'Connect on LinkedIn',
      zh: '在LinkedIn上连接',
      ja: 'LinkedInでつながる',
      'zh-Hant': '在LinkedIn上連接'
    }, 
    icon: FaLinkedin, 
    url: 'https://www.linkedin.com/', 
    description: {
      en: 'Witness the professional facade of a code-wrangling, bug-squashing, feature-shipping machine. My LinkedIn is where I pretend to be a serious adult while secretly plotting world domination through perfectly indented code. Connect for industry insights, career opportunities, and the occasional existential crisis disguised as a status update.',
      zh: '见证一个驯服代码、消灭bug、发布功能的专业机器的外表。我的LinkedIn是我假装成为一个严肃成年人的地方，同时暗地里通过完美缩进的代码策划统治世界。连接以获取行业洞察、职业机会，以及偶尔伪装成状态更新的存在主义危机。',
      ja: 'コードを操り、バグを潰し、機能を出荷する機械の専門的な外観をご覧ください。私のLinkedInは、完璧にインデントされたコードで世界征服を密かに企てながら、真面目な大人のふりをする場所です。業界の洞察、キャリアの機会、そして時々ステータスアップデートに偽装された実存的危機のために接続してください。',
      'zh-Hant': '見證一個馴服程式碼、消滅bug、發布功能的專業機器的外表。我的LinkedIn是我假裝成為一個嚴肅成年人的地方，同時暗地裡通過完美縮排的程式碼策劃統治世界。連接以獲取產業洞察、職涯機會，以及偶爾偽裝成狀態更新的存在主義危機。'
    }, 
    color: 'bg-[#0A66C2] text-white' 
  },
  { 
    name: {
      en: 'Follow on GitHub',
      zh: '在GitHub上关注',
      ja: 'GitHubでフォロー',
      'zh-Hant': '在GitHub上關注'
    }, 
    icon: FaGithub, 
    url: 'https://github.com/', 
    description: {
      en: 'Welcome to my code sanctuary! Here, you\'ll find an eclectic mix of passion projects, half-baked ideas, and that one repo I swear I\'ll finish... someday. Star my repositories to boost my ego, fork them to make them better, or just lurk and judge my variable naming skills. Open source enthusiasts and insomniacs especially welcome!',
      zh: '欢迎来到我的代码圣殿！在这里，你会发现充满激情的项目、半成品创意的混合体，以及那个我发誓总有一天会完成的仓库。为我的仓库加星以提升我的自我，fork它们使其变得更好，或者只是潜伏着判断我的变量命名技巧。特别欢迎开源爱好者和失眠者！',
      ja: '私のコードサンクチュアリーへようこそ！ここでは、情熱的なプロジェクト、半煮えのアイデア、そしていつか完成させると誓った1つのレポジトリの折衷的な混合が見つかります。私のエゴを boost するためにリポジトリにスターを付け、それらをより良くするためにフォークするか、ただ潜んで私の変数命名スキルを判断してください。オープンソース愛好家と不眠症の方は特に歓迎です！',
      'zh-Hant': '歡迎來到我的程式碼聖殿！在這裡，你會發現充滿熱情的專案、半成品創意的混合體，以及那個我發誓總有一天會完成的儲存庫。為我的儲存庫加星以提升我的自我，fork它們使其變得更好，或者只是潛伏著判斷我的變數命名技巧。特別歡迎開源愛好者和失眠者！'
    }, 
    color: 'bg-[#181717] text-white' 
  },
  { 
    name: {
      en: 'Follow on Instagram',
      zh: '在Instagram上关注',
      ja: 'Instagramでフォロー',
      'zh-Hant': '在Instagram上關注'
    }, 
    icon: FaInstagram, 
    url: 'https://www.instagram.com/', 
    description: {
      en: 'Peek behind the curtain of a developer\'s life! My Instagram is a curated gallery of my coding battlestation, artisanal coffee that fuels my late-night debugging sessions, and the occasional glimpse of the outside world (yes, I do go there sometimes). Follow for a perfect blend of tech aesthetics and proof that developers do have a life... sort of.',
      zh: '一窥开发者生活的帷幕！我的Instagram是一个精心策划的画廊，展示我的编程战斗工作站、为深夜调试提供动力的手工咖啡，以及偶尔瞥见的外部世界（是的，我确实偶尔会出去）。关注以获得科技美学和开发者确实有生活的完美融合证明...算是吧。',
      ja: '開発者の生活の舞台裏をのぞいてみませんか！私のInstagramは、コーディングバトルステーション、深夜のデバッグセッションを支える職人的なコーヒー、そして時々外の世界を垣間見る（はい、時々そこに行きます）厳選されたギャラリーです。テックな美学と開発者にも生活があることの証明（まあ、ある種の）の完璧なブレンドをフォローしてください。',
      'zh-Hant': '一窺開發者生活的帷幕！我的Instagram是一個精心策劃的畫廊，展示我的程式設計戰鬥工作站、為深夜除錯提供動力的手工咖啡，以及偶爾瞥見的外部世界（是的，我確實偶爾會出去）。關注以獲得科技美學和開發者確實有生活的完美融合證明...算是吧。'
    }, 
    color: 'bg-[#E4405F] text-white' 
  },
  { 
    name: {
      en: 'Connect on Facebook',
      zh: '在Facebook上连接',
      ja: 'Facebookでつながる',
      'zh-Hant': '在Facebook上連接'
    }, 
    icon: FaFacebook, 
    url: 'https://www.facebook.com/', 
    description: {
      en: 'Join my digital living room! On Facebook, I share the lighter side of tech life, including memes that only developers will understand, photos of my rubber duck debugging sessions, and polls about critically important topics like tabs vs. spaces. Connect for a daily dose of tech humor and to witness my futile attempts at explaining what I do for a living to my non-tech friends.',
      zh: '加入我的数字客厅！在Facebook上，我分享科技生活的轻松一面，包括只有开发者才能理解的梗图、我的橡皮鸭调试法照片，以及关于 tabs vs. spaces 等至关重要话题的投票。连接以获得每日科技幽默剂量，并见证我徒劳地向非技术朋友解释我的工作。',
      ja: '私のデジタルリビングルームに参加してください！Facebookでは、開発者だけが理解できるミーム、ラバーダックデバッギングセッションの写真、タブ対スペースのような重要なトピックに関する投票など、テックライフの軽い面を共有しています。毎日のテックユーモアの投与量を得るため、そして非技術系の友人に私の仕事を説明しようとする無駄な試みを目撃するためにつながってください。',
      'zh-Hant': '加入我的數位客廳！在Facebook上，我分享科技生活的輕鬆一面，包括只有開發者才能理解的迷因圖、我的橡皮鴨除錯法照片，以及關於 tabs vs. spaces 等至關重要話題的投票。連接以獲得每日科技幽默劑量，並見證我徒勞地向非技術朋友解釋我的工作。'
    }, 
    color: 'bg-[#1877F2] text-white' 
  },
  { 
    name: {
      en: 'Follow on TikTok',
      zh: '在TikTok上关注',
      ja: 'TikTokでフォロー',
      'zh-Hant': '在TikTok上關注'
    }, 
    icon: FaTiktok, 
    url: 'https://www.tiktok.com/', 
    description: {
      en: 'Witness the collision of code and creativity! My TikTok is where I attempt to explain complex programming concepts in 60 seconds or less, showcase my interpretive dance of sorting algorithms, and occasionally, lip-sync to the sweet sounds of compilation errors. Follow for quick coding tips, tech trends explained through interpretive dance, and to see a developer try (and often fail) to be cool.',
      zh: '见证代码与创意的碰撞！我的TikTok是我尝试在60秒或更短时间内解释复杂编程概念、展示我对排序算法的诠释舞蹈，以及偶尔对编译错误的甜美声音进行唇语同步的地方。关注以获得快速编码技巧、通过诠释舞蹈解释的科技趋势，并看到一个开发者尝试（并经常失败）变得很酷。',
      ja: 'コードと創造性の衝突を目撃してください！私のTikTokは、複雑なプログラミングの概念を60秒以内で説明しようとしたり、ソートアルゴリズムの解釈ダンスを披露したり、時にはコンパイルエラーの甘い音に合わせてリップシンクする場所です。クイックコーディングのヒント、解釈ダンスで説明されるテックトレンド、そして開発者がクールになろうとする（そしてしばしば失敗する）姿を見るためにフォローしてください。',
      'zh-Hant': '見證程式碼與創意的碰撞！我的TikTok是我嘗試在60秒或更短時間內解釋複雜程式設計概念、展示我對排序演算法的詮釋舞蹈，以及偶爾對編譯錯誤的甜美聲音進行唇語同步的地方。關注以獲得快速編碼技巧、通過詮釋舞蹈解釋的科技趨勢，並看到一個開發者嘗試（並經常失敗）變得很酷。'
    }, 
    color: 'bg-[#000000] text-white' 
  },
  { 
    name: {
      en: 'Follow on Pinterest',
      zh: '在Pinterest上关注',
      ja: 'Pinterestでフォロー',
      'zh-Hant': '在Pinterest上關注'
    }, 
    icon: FaPinterest, 
    url: 'https://www.pinterest.com/', 
    description: {
      en: 'Discover the aesthetics of algorithms! My Pinterest is a visual feast of coding setups, UI/UX inspirations, and \'Coding Outfits of the Day\' (spoiler: it\'s usually pajamas). Follow for curated boards on everything from minimalist IDE themes to maximalist mechanical keyboard builds, and join me in pretending that color-coordinated code is a valid optimization technique.',
      zh: '发现算法的美学！我的Pinterest是编码设置、UI/UX灵感和"每日编码装扮"的视觉盛宴（剧透：通常是睡衣）。关注以获得从极简主义IDE主题到极繁主义机械键盘构建的精选板块，并和我一起假装颜色协调的代码是一种有效的优化技术。',
      ja: 'アルゴリズムの美学を発見してください！私のPinterestは、コーディングセットアップ、UI/UXのインスピレーション、そして「今日のコーディング衣装」（ネタバレ：通常はパジャマです）の視覚的饗宴です。ミニマリストのIDEテーマからマキシマリストの機械式キーボードビルドまで、すべてのキュレーションされたボードをフォローし、色調整されたコードが有効な最適化技術であるふりをする私に加わってください。',
      'zh-Hant': '發現演算法的美學！我的Pinterest是程式設計設置、UI/UX靈感和「每日編碼裝扮」的視覺盛宴（劇透：通常是睡衣）。關注以獲得從極簡主義IDE主題到極繁主義機械鍵盤構建的精選板塊，並和我一起假裝顏色協調的程式碼是一種有效的最佳化技術。'
    }, 
    color: 'bg-[#BD081C] text-white' 
  },
  { 
    name: {
      en: 'Join me on Reddit',
      zh: '在Reddit上加入我',
      ja: 'Redditで参加',
      'zh-Hant': '在Reddit上加入我'
    }, 
    icon: FaReddit, 
    url: 'https://www.reddit.com/user/', 
    description: {
      en: 'Dive into the depths of tech discourse! On Reddit, I\'m that person who writes novel-length comments on programming language debates, shares obscure coding tips that might be useful once in a blue moon, and occasionally posts memes about my struggles with CSS. Join me in upvoting quality content, downvoting PHP (just kidding... maybe), and engaging in healthy debates about whether HTML is a programming language.',
      zh: '深入技术讨论的深处！在Reddit上，我是那个在编程语言辩论中写小说般长评论的人，分享可能在蓝月亮出现时才有用的晦涩编码技巧，并偶尔发布关于我与CSS斗争的梗图。加入我一起为优质内容点赞，为PHP点踩（开玩笑的...也许），并就HTML是否是编程语言展开健康辩论。',
      ja: 'テックディスカッションの深みに飛び込んでください！Redditでは、プログラミング言語の議論に小説の長さのコメントを書き、青い月に一度しか役立たないかもしれない obscure なコーディングのヒントを共有し、時々CSSとの格闘についてのミームを投稿する人です。質の高いコンテンツをアップボートし、PHPをダウンボートし（冗談です...たぶん）、HTMLがプログラミング言語かどうかについて健全な議論に参加する私に加わってください。',
      'zh-Hant': '深入技術討論的深處！在Reddit上，我是那個在程式設計語言辯論中寫小說般長評論的人，分享可能在藍月亮出現時才有用的晦澀編碼技巧，並偶爾發布關於我與CSS鬥爭的迷因圖。加入我一起為優質內容點讚，為PHP點踩（開玩笑的...也許），並就HTML是否是程式設計語言展開健康辯論。'
    }, 
    color: 'bg-[#FF4500] text-white' 
  },
  { 
    name: {
      en: 'Read on Medium',
      zh: '在Medium上阅读',
      ja: 'Mediumで読む',
      'zh-Hant': '在Medium上閱讀'
    }, 
    icon: FaMedium, 
    url: 'https://medium.com/', 
    description: {
      en: 'Embark on a journey through the synapses of a developer\'s mind! My Medium is where I transform caffeine into coherent thoughts about technology, share my experiences of debugging code and life, and occasionally rant about the existential crisis induced by JavaScript frameworks. Follow for in-depth articles, tutorials that start simple and somehow end up explaining quantum computing, and reflections on the life of a code wrangler in the digital wild west.',
      zh: '踏上穿越开发者思维突触的旅程！我的Medium是我将咖啡因转化为关于技术的连贯思考、分享调试代码和生活的经验，以及偶尔吐槽JavaScript框架引发的存在主义危机的地方。关注以获取深度文章、开始简单却不知怎么最终解释量子计算的教程，以及对数字狂野西部中代码牛仔生活的反思。',
      ja: '開発者の心のシナプスを通る旅に乗り出しましょう！私のMediumは、カフェインをテクノロジーに関する一貫した思考に変換し、コードと人生のデバッグ経験を共有し、時にはJavaScriptフレームワークによって引き起こされる実存的危機について愚痴をこぼす場所です。深い記事、シンプルに始まって何故か量子コンピューティングの説明で終わるチュートリアル、そしてデジタル・ワイルドウェストでのコードラングラーの人生についての考察のためにフォローしてください。',
      'zh-Hant': '踏上穿越開發者思維突觸的旅程！我的Medium是我將咖啡因轉化為關於技術的連貫思考、分享除錯程式碼和生活的經驗，以及偶爾抱怨JavaScript框架引發的存在主義危機的地方。關注以獲取深度文章、開始簡單卻不知怎麼最終解釋量子計算的教程，以及對數位狂野西部中程式碼牛仔生活的反思。'
    }, 
    color: 'bg-[#000000] text-white' 
  },
]
