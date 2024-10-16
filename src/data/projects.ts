import { AiOutlineRobot } from 'react-icons/ai'
import { FaLeaf, FaImage, FaHome, FaChartLine, FaVideo, FaCalendarAlt, FaDumbbell, FaLanguage, FaGamepad } from 'react-icons/fa'

export const projects = [
  { 
    name: {
      en: 'AI Code Assistant',
      zh: 'AI代码助手',
      ja: 'AIコードアシスタント',
      'zh-Hant': 'AI程式碼助手'
    },
    description: {
      en: 'An advanced AI-powered coding assistant that helps developers write, debug, and optimize code across multiple programming languages.',
      zh: '一个先进的AI驱动的编码助手,帮助开发人员编写、调试和优化多种编程语言的代码。',
      ja: '複数のプログラミング言語にわたってコードの作成、デバッグ、最適化を支援する高度なAI駆動のコーディングアシスタント。',
      'zh-Hant': '一個先進的AI驅動的編碼助手，幫助開發人員編寫、調試和優化多種程式語言的程式碼。'
    },
    icon: AiOutlineRobot, 
    color: 'bg-purple-200 dark:bg-purple-800' 
  },
  { 
    name: {
      en: 'AI Language Tutor',
      zh: 'AI语言导师',
      ja: 'AI言語チューター',
      'zh-Hant': 'AI語言導師'
    },
    description: {
      en: 'An intelligent language learning platform that uses AI to provide personalized lessons, real-time pronunciation feedback, and adaptive quizzes.',
      zh: '一个智能语言学习平台,使用AI提供个性化课程、实时发音反馈和自适应测验。',
      ja: 'AIを使用してパーソナライズされたレッスン、リアルタイムの発音フィードバック、適応型クイズを提供するインテリジェントな言語学習プラットフォーム。',
      'zh-Hant': '一個智能語言學習平台，使用AI提供個性化課程、即時發音反饋和自適應測驗。'
    },
    icon: FaLanguage, 
    color: 'bg-blue-200 dark:bg-blue-800' 
  },
  { 
    name: {
      en: 'EcoTrack',
      zh: '生态追踪',
      ja: 'エコトラック',
      'zh-Hant': '生態追蹤'
    },
    description: {
      en: 'An innovative app that helps individuals and businesses track and reduce their carbon footprint.',
      zh: '一款创新应用,帮助个人和企业追踪并减少碳足迹。',
      ja: '個人や企業が炭素排出量を追跡し削減するのを支援する革新的なアプリ。',
      'zh-Hant': '一款創新應用，幫助個人和企業追蹤並減少碳足跡。'
    },
    icon: FaLeaf, 
    color: 'bg-green-200 dark:bg-green-800' 
  },
  { 
    name: {
      en: 'AI Image Generator',
      zh: 'AI图像生成器',
      ja: 'AI画像ジェネレーター',
      'zh-Hant': 'AI圖像生成器'
    },
    description: {
      en: 'A powerful tool that uses advanced AI algorithms to generate unique and creative images based on text descriptions.',
      zh: '一个强大的工具,使用先进的AI算法根据文本描述生成独特和创意图像。',
      ja: 'テキスト説明に基づいてユニークで創造的な画像を生成する高度なAIアルゴリズムを使用する強力なツール。',
      'zh-Hant': '一個強大的工具，使用先進的AI算法根據文本描述生成獨特和創意圖像。'
    },
    icon: FaImage, 
    color: 'bg-indigo-200 dark:bg-indigo-800' 
  },
  { 
    name: {
      en: 'Smart Home Hub',
      zh: '智能家居中枢',
      ja: 'スマートホームハブ',
      'zh-Hant': '智能家居中樞'
    },
    description: {
      en: 'A centralized platform for managing all your smart home devices.',
      zh: '一个集中管理所有智能家居设备的平台。',
      ja: 'すべてのスマートホームデバイスを管理する中央プラットフォーム。',
      'zh-Hant': '一個集中管理所有智能家居設備的平台。'
    },
    icon: FaHome, 
    color: 'bg-yellow-200 dark:bg-yellow-800' 
  },
  { 
    name: {
      en: 'Personal Finance Tracker',
      zh: '个人财务追踪器',
      ja: '個人財務トラッカー',
      'zh-Hant': '個人財務追蹤器'
    },
    description: {
      en: 'An all-in-one financial management app that helps users track expenses, set budgets, and achieve savings goals.',
      zh: '一个全方位的财务管理应用,帮助用户追踪支出、设置预算和实现储蓄目标。',
      ja: '支出の追跡、予算の設定、貯蓄目標の達成を支援するオールインワンの財務管理アプリ。',
      'zh-Hant': '一個全方位的財務管理應用，幫助用戶追蹤支出、設置預算和實現儲蓄目標。'
    },
    icon: FaChartLine, 
    color: 'bg-red-200 dark:bg-red-800' 
  },
  { 
    name: {
      en: 'AI Video Editor',
      zh: 'AI视频编辑器',
      ja: 'AIビデオエディター',
      'zh-Hant': 'AI影片編輯器'
    },
    description: {
      en: 'A user-friendly video editing tool powered by AI. Automates tedious tasks like cutting, transitions, and color correction.',
      zh: '一个由AI驱动的用户友好的视频编辑工具。自动化繁琐的任务,如剪辑、转场和色彩校正。',
      ja: 'AIを活用したユーザーフレンドリーな動画編集ツール。カット、トランジション、色補正などの面倒な作業を自動化。',
      'zh-Hant': '一個由AI驅動的用戶友好的影片編輯工具。自動化繁瑣的任務，如剪輯、轉場和色彩校正。'
    },
    icon: FaVideo, 
    color: 'bg-pink-200 dark:bg-pink-800' 
  },
  { 
    name: {
      en: 'Smart Calendar',
      zh: '智能日历',
      ja: 'スマートカレンダー',
      'zh-Hant': '智能日曆'
    },
    description: {
      en: 'An AI-enhanced calendar app that optimizes your schedule, suggests ideal meeting times, and automates appointment booking.',
      zh: '一个AI增强的日历应用,优化您的日程安排,建议理想的会议时间,并自动化预约预订。',
      ja: 'スケジュールを最適化し、理想的な会議時間を提案し、予約を自動化するAI強化カレンダーアプリ。',
      'zh-Hant': '一個AI增強的日曆應用，優化您的日程安排，建議理想的會議時間，並自動化預約預訂。'
    },
    icon: FaCalendarAlt, 
    color: 'bg-orange-200 dark:bg-orange-800' 
  },
  { 
    name: {
      en: 'Fitness AI',
      zh: '健身AI',
      ja: 'フィットネスAI',
      'zh-Hant': '健身AI'
    },
    description: {
      en: 'A personalized fitness coach powered by AI. Creates custom workout plans, tracks progress, and provides real-time form corrections using computer vision.',
      zh: '由AI驱动的个性化健身教练。创建定制的锻炼计划,追踪进度,并使用计算机视觉提供实时姿势纠正。',
      ja: 'AIを活用したパーソナライズされたフィットネスコーチ。カスタムワークアウトプランを作成し、進捗を追跡し、コンピュータビジョンを使用してリアルタイムのフォーム修正を提供。',
      'zh-Hant': '由AI驅動的個性化健身教練。創建定制的鍛煉計劃，追蹤進度，並使用計算機視覺提供即時姿勢糾正。'
    },
    icon: FaDumbbell, 
    color: 'bg-teal-200 dark:bg-teal-800' 
  },
  { 
    name: {
      en: 'Language Learning Game',
      zh: '语言学习游戏',
      ja: '言語学習ゲーム',
      'zh-Hant': '語言學習遊戲'
    },
    description: {
      en: 'Fun and interactive way to learn new languages. Gamify your language learning experience with challenges, quizzes, and real-world scenarios.',
      zh: '学习新语言的有趣互动方式。通过挑战、测验和真实场景游戏化您的语言学习体验。',
      ja: '新しい言語を学ぶ楽しくてインタラクティブな方法。チャレンジ、クイズ、実世界のシナリオで言語学習体験をゲーム化。',
      'zh-Hant': '學習新語言的有趣互動方式。通過挑戰、測驗和真實場景遊戲化您的語言學習體驗。'
    },
    icon: FaGamepad, 
    color: 'bg-emerald-200 dark:bg-emerald-800' 
  },
]
