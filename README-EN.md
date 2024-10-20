
[English](README-EN.md) | [简体中文](README.md) | [繁體中文](README-Hant.md) | [日本語](README-JA.md)

# Indiehacker Bio

Indiehacker Bio is a modern, multilingual personal showcase website designed for independent developers and internet entrepreneurs. This project is built using Next.js, combining various advanced web technologies to provide users with an elegant, responsive online personal profile platform.

## DEMO

[ https://biobio.top/en/ ]( https://biobio.top/en/ )

## 预览

![独立开发者在线社媒、项目展示开源模板-Indiehacker-bio-social-media-projects-theme-light](https://github.com/user-attachments/assets/d1107139-f019-4fe3-b2cd-9fb764e3e01d)

## Project Features

1. **Multilingual Support**: Supports English, Simplified Chinese, Traditional Chinese, and Japanese, with seamless language switching implemented using next-intl.

2. **Responsive Design**: Built with Tailwind CSS, ensuring perfect display on various devices.

3. **Dark Mode**: Built-in dark mode support to enhance user experience.

4. **Animation Effects**: Utilizes Framer Motion to achieve smooth page animations, enhancing visual appeal.

5. **Modular Structure**: Clear project structure with component-based design for easy maintenance and expansion.

6. **SEO Optimization**: Uses Next.js's metadata API to optimize search engine performance.

7. **Social Media Integration**: Displays multiple social media links for visitors to quickly understand and contact.

8. **Project Showcase**: Independent project showcase area to highlight personal achievements.

9. **Performance Optimization**: Leverages Next.js's image optimization and code splitting features to improve loading speed.

10. **Customizability**: Easy to customize and expand according to personal needs.

## Usage Guide

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/wincatcher/indiehacker-bio.git
   ```

2. Install dependencies:
   ```
   cd indiehacker-bio
   npm install
   ```

### Configuration

1. Language settings:
   - Edit the `src/i18n/routing.ts` file to configure supported languages.
   - Add or modify corresponding language files in the `messages` directory.

2. Personal information:
   - Modify `src/data/socialLinks.ts` to update social media links.
   - Edit `src/data/projects.ts` to showcase your projects.

3. Style customization:
   - Main styles are defined in `src/app/globals.css`.
   - Use `tailwind.config.ts` to customize Tailwind CSS configuration.

### Running

Development mode:
```
npm run dev
```

Build production version:
```
npm run build
```

Start production server:
```
npm start
```

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- next-intl (Internationalization)
- next-themes (Theme switching)
- Framer Motion (Animation)
- React Icons

## Contribution

Issues and Pull Requests are welcome to improve this project.

## License

This project is licensed under the MIT License. See the [The MIT License](https://opensource.org/license/MIT) file for details.

## Developer Information

This project is developed by [wincatcher](https://github.com/wincatcher).

If you're interested in this project or have any questions, feel free to contact me through:

- GitHub: [@wincatcher](https://github.com/wincatcher)
- Email: wincatcher [at] gmail [dot] com
- Personal Profile: [https://biobio.top/](https://biobio.top/)

I am an independent developer passionate about innovation and technology, focusing on Web development and AI applications. Welcome to exchange and collaborate!

## Support the Project

If you find this project helpful, please consider giving it a star ⭐️ to support it.

You can also support the ongoing development of the project by:

- Sharing the project with others
- Reporting issues or suggesting improvements
- Contributing code or documentation

Thank you for your support!
