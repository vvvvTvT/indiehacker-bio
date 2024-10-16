import { IconType } from 'react-icons';

export interface SocialLink {
  name: {
    en: string;
    zh: string;
    ja: string;
    'zh-Hant': string;
  };
  icon: IconType;
  url: string;
  description: {
    en: string;
    zh: string;
    ja: string;
    'zh-Hant': string;
  };
  color: string;
}
