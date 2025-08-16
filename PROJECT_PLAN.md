# React研修プラットフォーム 開発計画書

## プロジェクト概要

### 目的
社内でのReact研修を行うことを目的としたWebアプリケーション

### 参考URL
https://mosya.dev/react/lessons/react-basic/challenge

### 最重要機能
- 右側でソースコードを修正しながら左側でプレビューを表示する機能
- 認証機能は不要

## ページ構成

### 必要なページ一覧

1. **ホームページ** (`/`)
   - React研修プラットフォームの概要
   - 利用可能なコース一覧
   - 各レッスンへの直接リンク

2. **コース一覧ページ** (`/courses`)
   - React基礎コース
   - React応用コース
   - Hooks入門コース
   - 各コースのシンプルなカード表示

3. **レッスン一覧ページ** (`/courses/[courseId]`)
   - 特定コース内のレッスン一覧
   - 各レッスンの概要と難易度表示

4. **レッスン詳細ページ** (`/courses/[courseId]/lessons/[lessonId]`)
   - **メイン学習画面**（最重要）
   - 左側：問題とプレビューをタブで切り替え
   - 右側：コードエディタ（複数タブ対応）
   - 下部：実行・リセットボタン

5. **チャレンジページ** (`/courses/[courseId]/challenges/[challengeId]`)
   - レッスン応用の演習問題
   - 自動採点機能
   - ヒント表示機能

### レッスン詳細ページのレイアウト

```
┌─────────────────────────────────────────────────────┐
│                   ヘッダー（レッスンタイトル）            │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────┬─────────────────────────┐   │
│  │ [問題] [プレビュー] │  [App.jsx][style.css]   │   │
│  ├─────────────────┼─────────────────────────┤   │
│  │                 │                         │   │
│  │  問題タブ:        │                         │   │
│  │  - レッスン説明   │     コードエディタ        │   │
│  │  - 課題内容      │                         │   │
│  │  - ヒント        │      （右側）            │   │
│  │                 │                         │   │
│  │  プレビュータブ:   │                         │   │
│  │  - 実行結果表示   │                         │   │
│  │  - コンソール     │                         │   │
│  │  - エラー表示     │                         │   │
│  │                 │                         │   │
│  │   （左側）        │                         │   │
│  │                 │                         │   │
│  ├─────────────────┼─────────────────────────┤   │
│  │                 │  [実行] [リセット]       │   │
│  │                 │  [テスト実行]           │   │
│  └─────────────────┴─────────────────────────┘   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

#### 左側パネル（タブ切り替え）
1. **問題タブ**
   - レッスンの説明
   - 実装すべき課題
   - ヒントや参考情報
   - Markdown形式で記述

2. **プレビュータブ**
   - Reactコンポーネントの実行結果
   - コンソール出力
   - エラーメッセージ
   - テスト結果

#### 右側パネル（コードエディタ）
- 複数ファイルのタブ切り替え
- シンタックスハイライト
- リアルタイム編集

## 技術スタック

- **フレームワーク**: Next.js 14+ (App Router)
- **言語**: TypeScript
- **エディタ**: Monaco Editor（VSCodeのエディタ）
- **実行環境**: @codesandbox/sandpack-react（コード実行環境）
- **スタイリング**: Tailwind CSS
- **コード整形**: Prettier + ESLint

## ディレクトリ構造（アトミックデザイン）

```
react-training-platform/
├── app/                        # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── courses/
│   │   ├── page.tsx
│   │   └── [courseId]/
│   │       ├── page.tsx
│   │       └── lessons/
│   │           └── [lessonId]/
│   │               └── page.tsx
│   └── api/
│       └── execute/
│           └── route.ts
├── components/
│   ├── atoms/                 # 最小単位のコンポーネント
│   │   ├── Button/
│   │   ├── Tab/
│   │   ├── Icon/
│   │   ├── Badge/
│   │   └── Card/
│   ├── molecules/             # 複数のatomsを組み合わせ
│   │   ├── TabGroup/
│   │   ├── FileTab/
│   │   ├── ActionBar/
│   │   ├── ConsoleOutput/
│   │   └── CourseCard/
│   ├── organisms/             # 独立した機能を持つ複雑なコンポーネント
│   │   ├── CodeEditor/
│   │   ├── PreviewPanel/
│   │   ├── LessonPanel/
│   │   ├── Header/
│   │   └── CourseList/
│   ├── templates/             # ページのレイアウト構造
│   │   ├── LessonTemplate/
│   │   ├── CourseListTemplate/
│   │   └── HomeTemplate/
│   └── pages/                 # 完全なページコンポーネント
│       ├── LessonPage/
│       ├── CoursesPage/
│       └── HomePage/
├── lib/
│   ├── types/
│   │   ├── course.ts
│   │   ├── lesson.ts
│   │   └── index.ts
│   └── utils/
│       ├── codeTemplates.ts
│       └── index.ts
├── data/
│   └── courses/
│       ├── react-basic/
│       │   ├── index.ts
│       │   └── lessons/
│       │       ├── 01-jsx.ts
│       │       ├── 02-components.ts
│       │       └── 03-props.ts
│       └── index.ts
├── hooks/
│   ├── useCodeExecution.ts
│   ├── useLesson.ts
│   └── index.ts
├── styles/
│   ├── editor-theme.ts
│   └── variables.css
├── public/
│   └── assets/
├── package.json
├── tsconfig.json
└── next.config.js
```

## データ構造

```typescript
interface Course {
  id: string
  title: string
  description: string
  lessons: Lesson[]
}

interface Lesson {
  id: string
  title: string
  description: string
  initialCode: CodeFiles
  solution?: CodeFiles
}

interface CodeFiles {
  'App.jsx': string
  'index.css'?: string
  [key: string]: string | undefined
}
```

## CSS設計方針

### 最終決定事項
**エディタ部分: CSS Variables + style属性**  
**その他すべて: Tailwind CSS**

### CSS Variables vs style属性の使い分け

#### CSS Variables使用（推奨）
```css
/* 共通テーマ色の定義 */
:root {
  --editor-bg: #1e1e1e;
  --editor-text: #d4d4d4;
  --editor-border: #333333;
}
```

```tsx
/* CSS変数を参照 */
<div style={{
  backgroundColor: 'var(--editor-bg)',
  color: 'var(--editor-text)',
  border: '1px solid var(--editor-border)'
}}>
  エディタ
</div>
```

**メリット:**
- ✅ 再利用性: 一箇所で定義、どこでも使用
- ✅ 保守性: 変数値だけ変更すればOK
- ✅ テーマ切り替え: 変数値を変更するだけ

#### 実装例

```tsx
// components/organisms/CodeEditor/CodeEditor.tsx
const CodeEditor = () => {
  return (
    <div 
      className="h-full rounded-lg overflow-hidden"
      style={{
        backgroundColor: 'var(--editor-bg)',
        border: '1px solid var(--editor-border)',
        fontFamily: 'var(--editor-font)',
      }}
    >
      <MonacoEditor theme="vs-dark" />
    </div>
  )
}

// components/templates/LessonTemplate/LessonTemplate.tsx  
const LessonTemplate = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Tailwind CSSで統一されたUI */}
      <div className="w-1/2 bg-white border-r border-gray-200">
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
          実行
        </button>
      </div>
    </div>
  )
}
```

### CSS Variables設定

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* エディタ専用変数 */
  --editor-bg: #1e1e1e;
  --editor-text: #d4d4d4;
  --editor-border: #333333;
  --editor-font: 'Fira Code', 'Monaco', 'Consolas', monospace;
  --editor-line-height: 1.5;
  
  /* Monaco Editor テーマ色 */
  --editor-selection: #264f78;
  --editor-highlight: #2d2d30;
  --editor-comment: #6a9955;
  --editor-keyword: #569cd6;
  --editor-string: #ce9178;
}
```

## 開発環境設定

### Prettier設定 (.prettierrc.json)
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf",
  "jsxSingleQuote": false,
  "jsxBracketSameLine": false,
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindConfig": "./tailwind.config.ts"
}
```

### ESLint設定 (.eslintrc.json)
```json
{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended",
    "prettier"
  ],
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "react/display-name": "off",
    "react/prop-types": "off"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module"
  }
}
```

## 実装手順

1. Next.jsプロジェクトの初期セットアップ（TypeScript対応）
2. 基本レイアウトコンポーネントの作成（左右分割画面）
3. コードエディタの実装（Monaco Editor）
4. プレビュー機能の実装（iframe/sandpack）
5. レッスンデータ構造とサンプルレッスンの作成
6. コードのリアルタイム実行・プレビュー更新機能
7. UIの調整とスタイリング
8. エラーハンドリングと開発者体験の改善

## 重要な仕様

- データは保存しないため、進捗状況の永続化は不要
- 認証機能は必要なし
- リアルタイムでのコード実行とプレビュー更新が最重要機能
- レスポンシブデザイン対応
- アクセシビリティ対応