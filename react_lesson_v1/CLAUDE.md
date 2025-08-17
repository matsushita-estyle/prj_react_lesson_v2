# Claude Code セッション開始時の注意事項

## 必須確認事項

新しいセッションを開始した際は、必ず以下を確認してください：

1. **プロジェクト計画ドキュメントを読む**：
   ```
   cat docs/PROJECT_PLAN.md
   cat docs/LESSON_PLAN.md
   ```
   - プロジェクト全体の構成と技術スタック
   - 実装済み機能と進捗状況
   - 技術的課題と解決済みの問題
   - 失敗したアプローチとベストプラクティス
   - React学習カリキュラムの詳細

2. **現在の開発サーバー状況を確認**：
   ```
   npm run dev
   ```

3. **現在のTODOリストを確認**：
   - TodoWriteツールで現在のタスク状況を把握

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