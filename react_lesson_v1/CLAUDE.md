# Project Guidelines

## 必須チェック項目

毎回、以下のコマンドを実行してエラーがないことを確認してください：

1. **TypeScriptの型チェック**
   ```bash
   cd react_lesson_v1 && npm run typecheck
   ```

2. **Lintチェック**
   ```bash
   cd react_lesson_v1 && npm run lint
   ```

3. **ビルドチェック**
   ```bash
   cd react_lesson_v1 && npm run build
   ```

## プロジェクト構成

- フレームワーク: Next.js + React + TypeScript
- ビルドツール: Next.js (Turbopack)
- スタイリング: Tailwind CSS
- コードエディタ: Monaco Editor
- プレビュー: Sandpack (CodeSandbox)

## 開発時の注意点

- コード変更後は必ず上記のチェックを実行
- エラーが出た場合は修正してからコミット
- 型安全性を保つため、any型の使用は避ける
- プロジェクトのルートは `react_lesson_v1/` ディレクトリ

## プロジェクト概要

**React研修プラットフォーム** - MosyaReactを模倣したNext.js/TypeScriptアプリケーション

### 主要機能
- 左側：問題/プレビュータブ切り替え
- 右側：Monaco Editorでコード編集
- リアルタイムSandpackプレビュー

### 技術スタック
- Next.js 14+ (App Router)
- TypeScript
- Monaco Editor
- Sandpack (CodeSandbox)
- Tailwind CSS + CSS Variables
- アトミックデザインパターン

## 重要な実装済み機能

✅ **基本レイアウト** - 左右分割、タブ切り替え  
✅ **Monaco Editor** - VSCode風エディタ、複数ファイル対応  
✅ **Sandpack統合** - SSR/ハイドレーション問題解決済み  
✅ **CSS設計** - Tailwind + CSS Variables の組み合わせ  

## 解決済みの技術的課題

1. **Sandpack SSR問題** → Next.js dynamic import で解決
2. **ハイドレーションエラー** → suppressHydrationWarning で抑制
3. **プレビューオプション** → 段階的設定で安定化

## ドキュメント構成

### docs/ ディレクトリ
- `PROJECT_PLAN.md`: プロジェクト全体の設計書・実装進捗
- `LESSON_PLAN.md`: React学習カリキュラム（10レッスン構成）

## 次の実装予定

1. レッスンデータ構造とサンプル作成
2. 動的ファイル読み込み（Monaco → Sandpack）
3. UIの調整とエラーハンドリング
4. LessonTemplateの拡張（LESSON_PLAN.mdの必要項目実装）

## 開発時の注意点

- Sandpackオプションは慎重に設定（editorHeight: 0 等でエラー）
- SSR関連はdynamic importを優先使用
- ブラウザ拡張機能によるエラーは無視可能

---

**このファイルの目的**: 新セッション開始時の文脈復元と、重要な技術的判断の継承