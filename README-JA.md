[English](README-EN.md) | [简体中文](README.md) | [繁體中文](README-Hant.md) | [日本語](README-JA.md)

# Indiehacker Bio

Indiehacker Bio は、独立開発者とインターネット起業家のために設計された、現代的で多言語対応の個人ショーケースウェブサイトです。このプロジェクトは Next.js を使用して構築され、さまざまな先進的な Web 技術を組み合わせて、ユーザーにエレガントでレスポンシブなオンライン個人プロフィールプラットフォームを提供します。

## DEMO

[ https://biobio.top/ja/ ]( https://biobio.top/ja/ )

## 预览

![独立开发者在线社媒、项目展示开源模板-Indiehacker-bio-social-media-projects-theme-light](https://github.com/user-attachments/assets/d1107139-f019-4fe3-b2cd-9fb764e3e01d)

## プロジェクトの特徴

1. **多言語サポート**：英語、簡体字中国語、繁体字中国語、日本語をサポートし、next-intl を使用してシームレスな言語切り替えを実現。

2. **レスポンシブデザイン**：Tailwind CSS を採用し、さまざまなデバイスで完璧に表示されることを保証。

3. **ダークモード**：ビルトインのダークモードサポートでユーザー体験を向上。

4. **アニメーション効果**：Framer Motion を使用してスムーズなページアニメーションを実現し、視覚的な魅力を高める。

5. **モジュラー構造**：明確なプロジェクト構造とコンポーネントベースの設計で、メンテナンスと拡張が容易。

6. **SEO 最適化**：Next.js のメタデータ API を使用して、検索エンジンのパフォーマンスを最適化。

7. **ソーシャルメディア統合**：複数のソーシャルメディアリンクを表示し、訪問者が素早く理解し連絡できるようにする。

8. **プロジェクトショーケース**：個人の成果を強調する独立したプロジェクト展示エリア。

9. **パフォーマンス最適化**：Next.js の画像最適化とコード分割機能を活用して、読み込み速度を向上。

10. **カスタマイズ性**：個人のニーズに応じて簡単にカスタマイズおよび拡張可能。

## 使用ガイド

### インストール

1. リポジトリをクローン：
   ```
   git clone https://github.com/wincatcher/indiehacker-bio.git
   ```

2. 依存関係をインストール：
   ```
   cd indiehacker-bio
   npm install
   ```

### 設定

1. 言語設定：
   - `src/i18n/routing.ts` ファイルを編集してサポートする言語を設定。
   - `messages` ディレクトリ内の対応する言語ファイルを追加または修正。

2. 個人情報：
   - `src/data/socialLinks.ts` を修正してソーシャルメディアリンクを更新。
   - `src/data/projects.ts` を編集してプロジェクトを表示。

3. スタイルのカスタマイズ：
   - メインスタイルは `src/app/globals.css` で定義。
   - `tailwind.config.ts` を使用して Tailwind CSS の設定をカスタマイズ。

### 実行

開発モード：
```
npm run dev
```

プロダクションビルド：
```
npm run build
```

プロダクションサーバーの起動：
```
npm start
```

## 技術スタック

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- next-intl（国際化）
- next-themes（テーマ切り替え）
- Framer Motion（アニメーション）
- React Icons

## 貢献

このプロジェクトを改善するための Issues と Pull Requests を歓迎します。

## ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています。詳細は [The MIT License](https://opensource.org/license/MIT) ファイルをご覧ください。

## 開発者情報

このプロジェクトは [wincatcher](https://github.com/wincatcher) によって開発されました。

このプロジェクトに興味がある、または質問がある場合は、以下の方法で私に連絡してください：

- GitHub: [@wincatcher](https://github.com/wincatcher)
- メール: wincatcher [at] gmail [dot] com
- 個人プロフィール: [https://biobio.top/](https://biobio.top/)

私はイノベーションとテクノロジーに情熱を注ぐ独立開発者で、Web 開発と AI アプリケーションに焦点を当てています。交流と協力を歓迎します！

## プロジェクトのサポート

このプロジェクトが役立つと感じた場合は、スター ⭐️ を付けてサポートしてください。

また、以下の方法でプロジェクトの継続的な開発をサポートすることもできます：

- プロジェクトを他の人と共有する
- 問題を報告したり、改善を提案したりする
- コードやドキュメントに貢献する

ご支援ありがとうございます！