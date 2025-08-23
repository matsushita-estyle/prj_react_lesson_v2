# Project Guidelines

## 必須チェック項目

毎回、以下のコマンドを実行してエラーがないことを確認してください：

1. **TypeScript の型チェック**

   ```bash
   cd react_lesson_v1 && npm run typecheck
   ```

2. **Lint チェック**
   ```bash
   cd react_lesson_v1 && npm run lint
   ```

注意: npm run build は時間がかかるため、毎回実行する必要はありません。重要な変更時のみ実行してください。

## プロジェクト構成

- フレームワーク: Next.js + React + TypeScript
- ビルドツール: Next.js (Turbopack)
- スタイリング: Tailwind CSS
- コードエディタ: Monaco Editor
- プレビュー: Sandpack (CodeSandbox)

## 開発時の注意事項

- コード変更後は必ず上記のチェックを実行
- エラーが出た場合は修正してからコミット
- 型安全性を保つため、any 型の使用は避ける
- プロジェクトのルートは `react_lesson_v1/` ディレクトリ
