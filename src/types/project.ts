import { IconType } from 'react-icons';

export interface Project {
  name: {
    en: string;
    zh: string;
    ja: string;
    'zh-Hant': string;
  };
  description: {
    en: string;
    zh: string;
    ja: string;
    'zh-Hant': string;
  };
  icon: IconType;
  color: string;
}
