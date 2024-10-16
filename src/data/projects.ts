import { AiOutlineRobot } from 'react-icons/ai'
import { FaLeaf, FaImage, FaHome, FaChartLine, FaVideo, FaCalendarAlt, FaDumbbell, FaLanguage, FaGamepad } from 'react-icons/fa'

export const projects = [
  { 
    name: {
      en: 'AI Code Assistant',
      zh: 'AI代码助手'
    },
    description: {
      en: 'An advanced AI-powered coding assistant that helps developers write, debug, and optimize code across multiple programming languages. Features include real-time code suggestions, automated bug detection, and performance optimization tips.',
      zh: '一个先进的AI驱动的编码助手,帮助开发人员编写、调试和优化多种编程语言的代码。功能包括实时代码建议、自动错误检测和性能优化提示。'
    },
    icon: AiOutlineRobot, 
    color: 'bg-purple-200 dark:bg-purple-800' 
  },
  { 
    name: {
      en: 'AI Language Tutor',
      zh: 'AI语言导师'
    },
    description: {
      en: 'An intelligent language learning platform that uses AI to provide personalized lessons, real-time pronunciation feedback, and adaptive quizzes. Supports multiple languages and caters to learners of all levels.',
      zh: '一个智能语言学习平台,使用AI提供个性化课程、实时发音反馈和自适应测验。支持多种语言,适合各个级别的学习者。'
    },
    icon: FaLanguage, 
    color: 'bg-blue-200 dark:bg-blue-800' 
  },
  { 
    name: {
      en: 'EcoTrack',
      zh: '生态追踪'
    },
    description: {
      en: 'An innovative app that helps individuals and businesses track and reduce their carbon footprint. Features include personalized sustainability tips, carbon offset recommendations, and integration with smart home devices for energy optimization.',
      zh: '一款创新应用,帮助个人和企业追踪并减少碳足迹。功能包括个性化可持续发展建议、碳补偿建议,以及与智能家居设备集成以优化能源使用。'
    },
    icon: FaLeaf, 
    color: 'bg-green-200 dark:bg-green-800' 
  },
  { 
    name: {
      en: 'AI Image Generator',
      zh: 'AI图像生成器'
    },
    description: {
      en: 'A powerful tool that uses advanced AI algorithms to generate unique and creative images based on text descriptions. Perfect for designers, marketers, and content creators looking for custom visuals.',
      zh: '一个强大的工具,使用先进的AI算法根据文本描述生成独特和创意图像。非常适合寻求定制视觉效果的设计师、营销人员和内容创作者。'
    },
    icon: FaImage, 
    color: 'bg-indigo-200 dark:bg-indigo-800' 
  },
  { 
    name: {
      en: 'Smart Home Hub',
      zh: '智能家居中枢'
    },
    description: {
      en: 'A centralized platform for managing all your smart home devices. Integrates with popular brands, offers voice control, automated routines, and energy usage insights.',
      zh: '一个集中管理所有智能家居设备的平台。与流行品牌集成,提供语音控制、自动化例程和能源使用洞察。'
    },
    icon: FaHome, 
    color: 'bg-yellow-200 dark:bg-yellow-800' 
  },
  { 
    name: {
      en: 'Personal Finance Tracker',
      zh: '个人财务追踪器'
    },
    description: {
      en: 'An all-in-one financial management app that helps users track expenses, set budgets, and achieve savings goals. Includes investment tracking and tax preparation features.',
      zh: '一个全方位的财务管理应用,帮助用户追踪支出、设置预算和实现储蓄目标。包括投资追踪和税务准备功能。'
    },
    icon: FaChartLine, 
    color: 'bg-red-200 dark:bg-red-800' 
  },
  { 
    name: {
      en: 'AI Video Editor',
      zh: 'AI视频编辑器'
    },
    description: {
      en: 'A user-friendly video editing tool powered by AI. Automates tedious tasks like cutting, transitions, and color correction. Ideal for content creators and marketers.',
      zh: '一个由AI驱动的用户友好的视频编辑工具。自动化繁琐的任务,如剪辑、转场和色彩校正。非常适合内容创作者和营销人员。'
    },
    icon: FaVideo, 
    color: 'bg-pink-200 dark:bg-pink-800' 
  },
  { 
    name: {
      en: 'Smart Calendar',
      zh: '智能日历'
    },
    description: {
      en: 'An AI-enhanced calendar app that optimizes your schedule, suggests ideal meeting times, and automates appointment booking. Integrates with popular productivity tools.',
      zh: '一个AI增强的日历应用,优化您的日程安排,建议理想的会议时间,并自动化预约预订。与流行的生产力工具集成。'
    },
    icon: FaCalendarAlt, 
    color: 'bg-orange-200 dark:bg-orange-800' 
  },
  { 
    name: {
      en: 'Fitness AI',
      zh: '健身AI'
    },
    description: {
      en: 'A personalized fitness coach powered by AI. Creates custom workout plans, tracks progress, and provides real-time form corrections using computer vision.',
      zh: '由AI驱动的个性化健身教练。创建定制的锻炼计划,追踪进度,并使用计算机视觉提供实时姿势纠正。'
    },
    icon: FaDumbbell, 
    color: 'bg-teal-200 dark:bg-teal-800' 
  },
  { 
    name: {
      en: 'Language Learning Game',
      zh: '语言学习游戏'
    },
    description: {
      en: 'Fun and interactive way to learn new languages. Gamify your language learning experience with challenges, quizzes, and real-world scenarios. Suitable for beginners and advanced learners alike.',
      zh: '学习新语言的有趣互动方式。通过挑战、测验和真实场景游戏化您的语言学习体验。适合初学者和高级学习者。'
    },
    icon: FaGamepad, 
    color: 'bg-emerald-200 dark:bg-emerald-800' 
  },
]
