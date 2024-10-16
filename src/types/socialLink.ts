import { IconType } from 'react-icons';

export interface SocialLink {
  name: {
    en: string;
    zh: string;
  };
  icon: IconType;
  url: string;
  description: {
    en: string;
    zh: string;
  };
  color: string;
}
