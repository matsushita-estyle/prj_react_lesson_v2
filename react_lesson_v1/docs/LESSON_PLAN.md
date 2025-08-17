# React レッスンプラン

## 概要

React研修プラットフォームで実施するReactの基礎学習カリキュラム。初心者がReactの基本概念を段階的に学習できるよう設計されています。

**学習スタイル**: ハンズオン形式（コード実践中心）
**学習方法**: 初期コードを提供し、段階的にタスクをクリアしながら実践的にReactを習得

## 学習目標

- Reactの基本概念とJSXの理解
- コンポーネントベースの開発手法の習得
- Props、State、イベント処理の実装
- モダンなReact開発環境での実践的スキル獲得

## レッスン構成

### 1. Reactに触れてみよう ✅実装済み

**学習内容:**
- Reactの基本概念を理解し、最初のReactコンポーネントを作成します

**ハンズオンタスク:**
1. 「Hello, React!」というメッセージを表示する
2. h1タグを使用してタイトルとして表示する  
3. pタグを使用して追加メッセージを表示する

**学習ポイント:**
- Reactコンポーネントは関数として定義します
- JSXを使ってHTMLライクな構文でUIを記述します
- 複数の要素を返す場合は、一つの親要素で囲む必要があります

**初期コード提供:**
```jsx
// App.jsx
function App() {
  return <div>ここを修正してください</div>
}

export default App
```

**実装ファイル:** `src/data/lessons/react-basic-01.ts`

---

### 2. ReactDOMを使ってHTMLにコンポーネントを表示する ✅実装済み

**学習内容:**
- ReactDOMの役割と重要性を理解し、Reactアプリケーションの起動プロセスを学習します

**ハンズオンタスク:**
1. ReactDOM.createRootを使用してルート要素を作成する
2. App.jsxからAppコンポーネントをimportする
3. 作成したルートでAppコンポーネントをレンダリングする

**学習ポイント:**
- ReactとReactDOMは別々のライブラリです
- createRootでルート要素を作成してからrenderを呼び出します
- HTMLの `<div id="root"></div>` 要素にReactアプリがマウントされます
- StrictModeでラップすることで開発時の警告を有効にできます

**初期コード提供:**
```jsx
// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
// ここにAppコンポーネントをimportしてください

// ここにcreateRootとrenderのコードを記述してください
```

**実装ファイル:** `src/data/lessons/react-basic-02.ts`

---

### 3. JSXをマスターしよう 🚧要実装

**学習内容:**
- JSXの基本文法とルールを実践的に学習します

**ハンズオンタスク:**
1. className属性を使用してCSSクラスを適用する
2. 条件分岐（三項演算子）で要素の表示/非表示を制御する
3. map関数を使用して配列データをリスト表示する
4. JSXフラグメント（<>）を使用して複数要素をまとめる

**学習ポイント:**
- HTMLのclass属性はJSXではclassNameになります
- JSX内で条件分岐は{condition ? A : B}の形式で書きます
- 配列の表示にはmap関数を使用し、各要素にkeyプロパティが必要です
- フラグメントで不要なdiv要素を減らせます

**初期コード提供:**
```jsx
// App.jsx
function App() {
  const isVisible = true
  const items = ['React', 'Vue', 'Angular']
  
  return (
    <div>
      {/* ここにJSXを記述してください */}
      {/* 条件分岐でisVisibleがtrueの時のみh1を表示 */}
      {/* itemsをmapでリスト表示 */}
    </div>
  )
}

export default App
```

**実装予定ファイル:** `src/data/lessons/react-basic-03.ts`

---

### 4. JSXに変数を埋め込もう 🚧要実装

**学習内容:**
- {}を使った式の埋め込みを実践的に学習します

**ハンズオンタスク:**
1. 文字列変数をJSX内で表示する
2. 数値計算の結果を表示する
3. オブジェクトのプロパティにアクセスして表示する
4. 関数の戻り値を表示する
5. テンプレートリテラルと組み合わせて使用する

**学習ポイント:**
- JSX内で{}を使うとJavaScript式を記述できます
- オブジェクトのプロパティアクセスはドット記法で行います
- 関数呼び出しも{}内で実行できます
- 文字列結合やテンプレートリテラルも使用可能です

**初期コード提供:**
```jsx
// App.jsx
function App() {
  const userName = 'React Developer'
  const userAge = 25
  const userInfo = {
    email: 'developer@example.com',
    location: 'Tokyo'
  }
  
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString()
  }
  
  return (
    <div>
      {/* ここに変数を埋め込んでください */}
      <h1>ユーザー名: </h1>
      <p>年齢: </p>
      <p>メール: </p>
      <p>現在時刻: </p>
    </div>
  )
}

export default App
```

**実装予定ファイル:** `src/data/lessons/react-basic-04.ts`

---

### 5. コンポーネントをimportしてみよう 🚧要実装

**学習内容:**
- コンポーネントの分割とモジュール化を実践的に学習します

**ハンズオンタスク:**
1. Headerコンポーネントを別ファイルで作成してimportする
2. Footerコンポーネントを別ファイルで作成してimportする  
3. Mainコンポーネントを別ファイルで作成してimportする
4. App.jsxで全てのコンポーネントを組み合わせてレイアウトを構築する

**学習ポイント:**
- コンポーネントは1ファイル1コンポーネントが基本です
- export defaultでコンポーネントをエクスポートします
- importでコンポーネントを取り込んで使用します
- ファイル名とコンポーネント名を一致させるのが慣例です

**初期コード提供:**
```jsx
// App.jsx
import Header from './Header'
// 他のコンポーネントもimportしてください

function App() {
  return (
    <div>
      {/* Header、Main、Footerコンポーネントを使用 */}
    </div>
  )
}

export default App
```

**実装予定ファイル:** `src/data/lessons/react-basic-05.ts`

---

### 6. さまざまなimportをマスターしよう 🚧要実装

**学習内容:**
- import/exportの様々なパターンを実践的に学習します

**ハンズオンタスク:**
1. デフォルトexportを使用したコンポーネントのimport
2. 名前付きexportを使用したutility関数のimport
3. 複数のexportを一度にimportする
4. asキーワードを使用した名前変更import
5. *を使用した全体import

**学習ポイント:**
- デフォルトexportは1ファイル1つまで、名前付きexportは複数可能
- 名前付きexportは{}で囲んでimportします
- asキーワードで別名を付けることができます
- *でそのファイルの全てのexportを取得できます

**初期コード提供:**
```jsx
// utils.js
export const formatDate = (date) => {
  return date.toLocaleDateString()
}

export const calculateAge = (birthYear) => {
  return new Date().getFullYear() - birthYear
}

export default function greetUser(name) {
  return `Hello, ${name}!`
}

// App.jsx  
// ここで様々なimportパターンを実践してください
```

**実装予定ファイル:** `src/data/lessons/react-basic-06.ts`

---

### 7. JavaScriptから直接CSSを読み込む方法 🚧要実装

**学翕内容:**
- CSS Modulesとインラインスタイルを実践的に学習します

**ハンズオンタスク:**
1. CSS Modulesをimportしてコンポーネントにスタイルを適用する
2. 条件分岐で異なるクラスを適用する
3. インラインスタイルで動的なスタイルを実装する
4. スタイルと機能の組み合わせ（ホバー効果など）

**学習ポイント:**
- CSS Modulesでスコープ化されたスタイルを作れます
- JavaScriptの変数を使って動的にスタイルを変更できます
- インラインスタイルはstyle属性にオブジェクトで渡します
- CSSプロパティ名はcamelCaseで記述します

**初期コード提供:**
```jsx
// App.jsx
import styles from './App.module.css'

function App() {
  const isActive = true
  
  return (
    <div className={styles.container}>
      {/* CSS Modulesやインラインスタイルを使用してスタイリング */}
      <button className={/* 条件に応じてクラスを適用 */}>
        ボタン
      </button>
    </div>
  )
}

export default App
```

**実装予定ファイル:** `src/data/lessons/react-basic-07.ts`

---

### 8. ReactのPropsを理解する 🚧要実装

**学習内容:**
- Propsの概念と実用的な使い方を学習します

**ハンズオンタスク:**
1. UserCardコンポーネントでPropsを受け取る
2. 文字列、数値、オブジェクトのPropsを使用する
3. 分割代入でPropsを受け取る
4. デフォルト値を設定する
5. map関数で複数のコンポーネントをレンダリングする

**学習ポイント:**
- Propsは親コンポーネントから子コンポーネントへ渡すデータです
- 関数の引数としてPropsを受け取ります
- 分割代入で必要なPropsだけを取り出せます
- デフォルト引数でデフォルト値を設定できます

**初期コード提供:**
```jsx
// UserCard.jsx
function UserCard(/* propsを受け取る */) {
  return (
    <div className="user-card">
      {/* propsを使用してユーザー情報を表示 */}
    </div>
  )
}

export default UserCard

// App.jsx
import UserCard from './UserCard'

function App() {
  const users = [
    { id: 1, name: '田中太郎', age: 30, email: 'tanaka@example.com' },
    { id: 2, name: '佐藤花子', age: 25, email: 'sato@example.com' }
  ]
  
  return (
    <div>
      {users.map(user => (
        // UserCardにpropsを渡してユーザー情報を表示
      ))}
    </div>
  )
}

export default App
```

**実装予定ファイル:** `src/data/lessons/react-basic-08.ts`

---

### 9. コンポーネント同士を入れ子にする 🚧要実装

**学習内容:**
- children propsを使用した柔軟なコンポーネント設計を学習します

**ハンズオンタスク:**
1. Cardコンポーネントでchildren propsを受け取る
2. childrenを使用して柔軟なレイアウトを作成する
3. 複数の異なるコンテンツを同じCardで表示する
4. コンポーネントの入れ子構造を実装する
5. タイトルとchildrenを組み合わせたコンポーネントを作成する

**学習ポイント:**
- childrenは特別なpropsで、コンポーネントタグの間に書かれた内容です
- childrenを使うことで再利用可能なレイアウトコンポーネントが作れます
- コンポーネントの入れ子で柔軟なUI構造を構築できます
- childrenは文字列、要素、コンポーネントなど何でも渡せます

**初期コード提供:**
```jsx
// Card.jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">
        {/* children propsを表示 */}
      </div>
    </div>
  )
}

export default Card

// App.jsx
import Card from './Card'

function App() {
  return (
    <div>
      <Card title="ユーザー情報">
        {/* Card内に他のコンポーネントを配置 */}
        <p>名前: 田中太郎</p>
        <p>年齢: 30歳</p>
      </Card>
    </div>
  )
}

export default App
```

**実装予定ファイル:** `src/data/lessons/react-basic-09.ts`

---

### 10. 要素にスタイル属性を指定する 🚧要実装

**学習内容:**
- style属性とuseStateを組み合わせた動的スタイリングを学習します

**ハンズオンタスク:**
1. useStateでスタイルの状態を管理する
2. ボタンクリックで背景色を動的に変更する
3. フォントサイズをインクリメント/デクリメントする
4. 複数のスタイルプロパティを組み合わせる
5. インラインスタイルとCSSクラスを組み合わせる

**学習ポイント:**
- style属性にはオブジェクトを渡します（{{}}に注意）
- CSSプロパティ名はcamelCaseで記述します（background-color → backgroundColor）
- useStateでスタイル値を管理し、イベントで更新します
- テンプレートリテラルで動的な値を埋め込めます

**初期コード提供:**
```jsx
// App.jsx
import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState('#ffffff')
  const [fontSize, setFontSize] = useState(16)
  
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffd93d']
  
  return (
    <div style={{ backgroundColor: bgColor, padding: '20px' }}>
      <h1 style={{ fontSize: `${fontSize}px` }}>
        スタイル属性のテスト
      </h1>
      
      {/* 色変更ボタンを実装してください */}
      {/* フォントサイズ変更ボタンを実装してください */}
    </div>
  )
}

export default App
```

**実装予定ファイル:** `src/data/lessons/react-basic-10.ts`

---

## ハンズオン学習の特徴

### 実装状況

- ✅ **lesson 1-2**: 実装済み（react-basic-01.ts, react-basic-02.ts）
- 🚧 **lesson 3-10**: 実装予定（同じ形式で順次作成）

### 各レッスンの構成要素

1. **taskDescription**: マークダウン形式の詳細な課題説明
2. **initialFiles**: 学習者が編集する初期コード（複数ファイル対応）
3. **solutionFiles**: 完成形のコード例（学習者が確認可能）
4. **hints**: 段階的なヒント機能
5. **learningObjectives**: 明確な学習目標
6. **concepts**: 学習する技術概念

### ハンズオン学習のメリット

- **即座のフィードバック**: コードを書いてすぐにプレビューで結果確認
- **段階的な実践**: 簡単なタスクから徐々に複雑な実装へ
- **実際のコード体験**: 理論だけでなく、手を動かして体得
- **エラー体験と解決**: 実際の開発で遭遇する問題を事前に体験

### 完了後のスキル

このハンズオン形式のレッスンを完了することで、学習者は以下のスキルを実践的に獲得できます：

- Reactの基本概念の理解と実装
- JSXを使った効率的なUIコンポーネント作成
- コンポーネント間のデータ受け渡し（Props）の実践
- モジュール化されたコンポーネント設計の体験
- 様々なスタイリング手法の実装
- モダンなReact開発環境での実践的スキル

### 次のステップ

基礎習得後は以下の高度なトピックに進むことができます：
- State管理（useState, useReducer）
- イベント処理とフォーム操作
- React Hooks（useEffect, useContext等）
- API連携とデータフェッチング
- ルーティング（React Router）
- 状態管理ライブラリ（Redux, Zustand等）