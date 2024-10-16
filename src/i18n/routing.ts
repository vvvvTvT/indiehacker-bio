import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // 所有支持的语言列表
  locales: ['en', 'zh', 'ja', 'zh-Hant'],
 
  // 当没有匹配的语言时使用
  defaultLocale: 'en'
});
 
// 轻量级的 Next.js 导航 API 包装器
// 将考虑路由配置
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);
