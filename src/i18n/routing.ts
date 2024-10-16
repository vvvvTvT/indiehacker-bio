import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export type Locale = 'en' | 'zh' | 'ja' | 'zh-Hant';

export const routing = defineRouting({
  locales: ['en', 'zh', 'ja', 'zh-Hant'] as const,
  defaultLocale: 'en' as const
});

// 轻量级的 Next.js 导航 API 包装器
// 将考虑路由配置
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);
