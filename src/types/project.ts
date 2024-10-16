import { IconType } from 'react-icons';

export interface Project {
  name: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  icon: IconType;
  color: string;
}
