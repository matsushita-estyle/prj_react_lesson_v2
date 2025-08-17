# React レッスンプラン

## 概要

React研修プラットフォームで実施するReactの基礎学習カリキュラム。初心者がReactの基本概念を段階的に学習できるよう設計されています。

## 学習目標

- Reactの基本概念とJSXの理解
- コンポーネントベースの開発手法の習得
- Props、State、イベント処理の実装
- モダンなReact開発環境での実践的スキル獲得

## レッスン構成

### 1. Reactに触れてみよう

**学習内容:**
- Reactとは何か（ライブラリの概要）
- 従来のJavaScriptとReactの違い
- Reactの特徴（コンポーネントベース、仮想DOM）
- 開発環境の確認

**課題:**
- 簡単な「Hello, React!」メッセージの表示
- React Developer Toolsでコンポーネントツリーの確認

**初期コード:**
```jsx
// App.jsx
function App() {
  return <div>ここを修正してください</div>
}

export default App
```

**到達目標:**
- Reactコンポーネントの基本構造を理解する
- JSXとHTMLの違いを認識する

---

### 2. ReactDOMを使ってHTMLにコンポーネントを表示する

**学習内容:**
- ReactDOMの役割と重要性
- render()メソッドの使い方
- HTMLとReactコンポーネントの連携
- ルート要素の概念

**課題:**
- main.jsxでReactDOMを使用してコンポーネントをレンダリング
- 複数の要素を持つコンポーネントの作成

**初期コード:**
```jsx
// App.jsx
function App() {
  return (
    <div>
      <h1>React アプリケーション</h1>
      <p>ReactDOMでレンダリングされています</p>
    </div>
  )
}

export default App

// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// ここにReactDOM.createRootとrenderのコードを追加
```

**到達目標:**
- ReactDOMの役割を理解する
- Reactアプリケーションの起動プロセスを把握する

---

### 3. JSXをマスターしよう

**学習内容:**
- JSXの基本文法とルール
- HTMLとJSXの違い（className、htmlFor等）
- JSX内での条件分岐とループ
- フラグメント（<>）の使用

**課題:**
- 複数のHTML要素をJSXで記述
- className、onClick等のJSX属性の使用
- 条件に応じた要素の表示/非表示

**初期コード:**
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

**到達目標:**
- JSXの基本文法をマスターする
- HTMLとJSXの違いを理解し実践できる

---

### 4. JSXに変数を埋め込もう

**学習内容:**
- {}を使った式の埋め込み
- 文字列、数値、配列の表示
- オブジェクトのプロパティアクセス
- 関数呼び出しの結果表示

**課題:**
- 変数をJSX内で表示
- 計算結果をJSX内で表示
- オブジェクトのプロパティを表示

**初期コード:**
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

**到達目標:**
- JSX内での変数埋め込みをマスターする
- 動的なコンテンツ表示を理解する

---

### 5. コンポーネントをimportしてみよう

**学習内容:**
- コンポーネントの分割とモジュール化
- import/exportの基本
- ファイル構造の組織化
- 再利用可能なコンポーネント設計

**課題:**
- Header、Footer、Mainコンポーネントを別ファイルで作成
- App.jsxでそれらをimportして使用

**初期コード:**
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

// Header.jsx
function Header() {
  return (
    <header>
      <h1>サイトヘッダー</h1>
    </header>
  )
}

export default Header

// 他のコンポーネントも作成してください
```

**到達目標:**
- コンポーネントの分割とimport/exportを理解する
- モジュール化の利点を実感する

---

### 6. さまざまなimportをマスターしよう

**学習内容:**
- 名前付きexport vs デフォルトexport
- 複数のコンポーネントをまとめてimport
- asを使った名前変更
- *を使った全体import

**課題:**
- 名前付きexportを使用したutility関数のimport
- 複数のコンポーネントを一つのファイルから取得
- ライブラリからの様々なimportパターン

**初期コード:**
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

**到達目標:**
- import/exportの各種パターンをマスターする
- 効率的なモジュール管理を理解する

---

### 7. JavaScriptから直接CSSを読み込む方法

**学習内容:**
- CSS Modulesの概念と使用方法
- importでCSSファイルを読み込む
- スタイルオブジェクトとインラインスタイル
- CSS-in-JSの基本概念

**課題:**
- CSS Modulesを使用したコンポーネントスタイリング
- 動的なスタイル適用
- 条件付きクラス名の適用

**初期コード:**
```jsx
// App.jsx
import styles from './App.module.css'

function App() {
  const isActive = true
  
  return (
    <div className={styles.container}>
      {/* CSS Modulesを使用してスタイリング */}
      <button className={/* 条件に応じてクラスを適用 */}>
        ボタン
      </button>
    </div>
  )
}

export default App
```

```css
/* App.module.css */
.container {
  padding: 20px;
  background-color: #f0f0f0;
}

.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
}

.buttonActive {
  background-color: #28a745;
}
```

**到達目標:**
- CSS Modulesの使用方法を理解する
- 動的スタイリングを実装できる

---

### 8. ReactのPropsを理解する

**学習内容:**
- Propsの概念と役割
- 親コンポーネントから子コンポーネントへのデータ渡し
- Propsの型（文字列、数値、オブジェクト、関数）
- 分割代入とデフォルト値

**課題:**
- UserCardコンポーネントにユーザー情報をPropsで渡す
- 複数の型のPropsを使用
- デフォルト値の設定

**初期コード:**
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

**到達目標:**
- Propsの概念を理解し実践できる
- コンポーネント間のデータ受け渡しをマスターする

---

### 9. コンポーネント同士を入れ子にする

**学習内容:**
- children propsの概念
- コンポーネント構造の設計
- 再利用可能なレイアウトコンポーネント
- コンポーネントツリーの理解

**課題:**
- Cardコンポーネントでchildren propsを使用
- LayoutコンポーネントでPage構造を作成
- 複数レベルの入れ子構造

**初期コード:**
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
      
      <Card title="投稿">
        {/* 複雑なコンテンツを配置 */}
      </Card>
    </div>
  )
}

export default App
```

**到達目標:**
- children propsを理解し活用できる
- 柔軟なコンポーネント設計を実践できる

---

### 10. 要素にスタイル属性を指定する

**学習内容:**
- style属性の使用方法
- インラインスタイルとCSSファイルの使い分け
- 動的なスタイル変更
- Reactにおけるスタイリングのベストプラクティス

**課題:**
- ボタンクリックで背景色を変更
- 条件に応じたスタイル適用
- CSSとstyle属性の組み合わせ

**初期コード:**
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
      
      {/* 色変更ボタン */}
      {colors.map(color => (
        <button
          key={color}
          // スタイル属性を動的に適用
          onClick={() => setBgColor(color)}
        >
          {color}
        </button>
      ))}
      
      {/* フォントサイズ変更 */}
      <div>
        <button onClick={() => setFontSize(fontSize - 2)}>
          小さく
        </button>
        <button onClick={() => setFontSize(fontSize + 2)}>
          大きく
        </button>
      </div>
    </div>
  )
}

export default App
```

**到達目標:**
- style属性を効果的に使用できる
- 動的なスタイル変更を実装できる
- 適切なスタイリング手法を選択できる

---

## 学習サポート

### 各レッスンの共通要素

1. **実践的なコード課題**: 理論だけでなく実際にコードを書いて学習
2. **段階的な難易度**: 前のレッスンの知識を活用して新しい概念を学習
3. **リアルタイムプレビュー**: 書いたコードの結果をすぐに確認
4. **ヒント機能**: 困った時のサポート
5. **解答例**: 学習者の理解を深める参考コード

### 学習のポイント

- **実践重視**: 理論と実践をバランスよく組み合わせ
- **段階的習得**: 基礎から応用まで無理のないステップアップ
- **現実的な例**: 実際の開発で使用する場面を想定
- **ベストプラクティス**: 業界標準の書き方やパターンを学習

### 完了後のスキル

このレッスンプランを完了することで、学習者は以下のスキルを獲得できます：

- Reactの基本概念の理解
- JSXを使った効率的なUIコンポーネント作成
- コンポーネント間のデータ受け渡し（Props）
- モジュール化されたコンポーネント設計
- 基本的なスタイリング手法
- モダンなReact開発の基礎

次のステップとして、State管理、イベント処理、Hooksなどのより高度なReact機能の学習に進むことができます。