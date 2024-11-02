[English](README-EN.md) | [简体中文](README.md) | [繁體中文](README-Hant.md) | [日本語](README-JA.md)

# Indiehacker Bio

Indiehacker Bio 是一個現代化的、多語言支持的個人展示網站，專為獨立開發者和互聯網創業者設計。本項目使用 Next.js 構建，結合了多種先進的 Web 技術，為用戶提供了一個優雅、響應式的在線個人簡介平台。

## DEMO

[ https://biobio.top/zh-Hant/ ]( https://biobio.top/zh-Hant/ )

## 预览

![独立开发者在线社媒、项目展示开源模板-Indiehacker-bio-social-media-projects-theme-light](https://github.com/user-attachments/assets/d1107139-f019-4fe3-b2cd-9fb764e3e01d)

## 項目特色

1. **多語言支持**：支持英語、簡體中文、繁體中文和日語，使用 next-intl 實現無縫的語言切換。

2. **響應式設計**：採用 Tailwind CSS 構建，確保在各種設備上都能完美展示。

3. **深色模式**：內置深色模式支持，提升用戶體驗。

4. **動畫效果**：使用 Framer Motion 實現流暢的頁面動畫，增強視覺吸引力。

5. **模塊化結構**：項目結構清晰，組件化設計便於維護和擴展。

6. **SEO 優化**：使用 Next.js 的元數據 API，優化搜索引擎表現。

7. **社交媒體集成**：展示多個社交媒體鏈接，方便訪客快速了解和聯繫。

8. **項目展示**：獨立的項目展示區域，突出個人成就。

9. **性能優化**：利用 Next.js 的圖片優化和代碼分割特性，提升加載速度。

10. **可定制性**：易於根據個人需求進行定制和擴展。

## 使用指南

### 安裝

1. 克隆倉庫：
   ```
   git clone https://github.com/wincatcher/indiehacker-bio.git
   ```

2. 安裝依賴：
   ```
   cd indiehacker-bio
   npm install
   ```

### 配置

1. 語言設置：
   - 編輯 `src/i18n/routing.ts` 文件來配置支持的語言。
   - 在 `messages` 目錄下添加或修改相應的語言文件。

2. 個人信息：
   - 修改 `src/data/socialLinks.ts` 來更新社交媒體鏈接。
   - 編輯 `src/data/projects.ts` 來展示您的項目。

3. 樣式定制：
   - 主要樣式在 `src/app/globals.css` 中定義。
   - 使用 `tailwind.config.ts` 來自定義 Tailwind CSS 配置。

### 運行

開發模式：
```
npm run dev
```

構建生產版本：
```
npm run build
```

啟動生產服務器：
```
npm start
```

## 技術棧

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- next-intl（國際化）
- next-themes（主題切換）
- Framer Motion（動畫）
- React Icons

## 貢獻

歡迎提交 Issues 和 Pull Requests 來改進這個項目。

## 許可證

本項目採用 MIT 許可證。詳情請見 [The MIT License](https://opensource.org/license/MIT) 文件。

## 開發者信息

本項目由 [wincatcher](https://github.com/wincatcher) 開發。

如果你對這個項目感興趣或有任何問題，歡迎通過以下方式聯繫我：

- GitHub: [@wincatcher](https://github.com/wincatcher)
- 電子郵件: wincatcher [at] gmail [dot] com
- 個人簡介: [https://biobio.top/](https://biobio.top/)

我是一名熱衷於創新和技術的獨立開發者，專注於 Web 開發和人工智能應用。歡迎交流與合作！

## 支持項目

如果你覺得這個項目對你有幫助，歡迎給項目一個星標 ⭐️ 來支持它。

你也可以通過以下方式支持項目的持續開發：

- 分享項目給其他人
- 報告問題或提出改進建議
- 貢獻代碼或文檔

感謝你的支持！

![Alt](https://repobeats.axiom.co/api/embed/08a6938436b0c5394eb7d13b0538d147f57a1876.svg "Repobeats analytics image")