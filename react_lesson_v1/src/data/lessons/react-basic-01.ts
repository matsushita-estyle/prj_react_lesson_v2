import { Lesson } from '@/lib/types/lesson'

export const reactBasic01: Lesson = {
  id: 'react-basic-01',
  title: 'Reactに触れてみよう',
  lessonNumber: 1,

  material: `# Reactって何だろう？

Reactは、ユーザーインターフェース（UI）を作るためのJavaScriptライブラリです。
ウェブサイトやアプリケーションの画面を、効率的かつ柔軟に構築できるツールとして、世界中の開発者に愛用されています。

## なぜReactが必要なの？

従来のJavaScriptだけでも画面は作れますが、アプリケーションが複雑になると、以下のような課題が出てきます：

- コードの管理が大変になる
- 同じような処理を何度も書く必要がある
- 画面の更新処理が複雑になる

Reactは、これらの問題を「コンポーネント」という考え方で解決します。

## コンポーネント - Reactの基本単位

コンポーネントは、画面を構成する独立した部品のことです。
レゴブロックのように、小さな部品を組み合わせて大きな作品を作るイメージです。

### コンポーネントの特徴
- **再利用可能**：一度作れば何度でも使える
- **独立性**：それぞれが独立して動作する
- **組み合わせ可能**：複数のコンポーネントを組み合わせて複雑な画面を作れる

## はじめてのReactコンポーネント

Reactでコンポーネントを作る最も基本的な方法は、JavaScript の関数として定義することです。

\`\`\`jsx
const Welcome = () => {
  return <h1>ようこそReactの世界へ！</h1>;
}
\`\`\`

これは \`Welcome\` という名前のコンポーネントで、画面に挨拶メッセージを表示します。

## JSX - JavaScriptの中でHTMLを書く魔法

上記のコードで、JavaScriptの中にHTMLのような記述があることに気づきましたか？
これは **JSX（JavaScript XML）** という特別な記法です。

### JSXの基本ルール

\`\`\`jsx
const MyComponent = () => {
  return (
    <div>
      <h2>JSXの例</h2>
      <p>これはJSXで書かれています</p>
    </div>
  );
}
\`\`\`

JSXを使うことで、JavaScriptの中に直感的にUIの構造を記述できます。

## JSXを書く時の重要なルール

### ルール1：すべてのタグは閉じる

HTMLでは省略できる閉じタグも、JSXでは必ず閉じる必要があります。

\`\`\`jsx
// ✅ 正しい
<input type="text" />
<br />
<img src="photo.jpg" alt="写真" />

// ❌ エラーになる
<input type="text">
<br>
<img src="photo.jpg" alt="写真">
\`\`\`

### ルール2：複数の要素は1つの親要素で包む

JSXでは、複数の要素を返す場合、必ず1つの親要素で包む必要があります。

\`\`\`jsx
// ❌ エラー：複数の要素が並んでいる
const BadExample = () => {
  return (
    <h1>見出し</h1>
    <p>段落</p>
  );
}

// ✅ 正しい：divで包んでいる
const GoodExample = () => {
  return (
    <div>
      <h1>見出し</h1>
      <p>段落</p>
    </div>
  );
}
\`\`\`

### ルール3：JavaScriptの予約語との衝突を避ける

HTMLの \`class\` 属性は、JSXでは \`className\` になります。

\`\`\`jsx
// HTMLでの書き方
// <div class="container">内容</div>

// JSXでの書き方
<div className="container">内容</div>
\`\`\`

これは \`class\` がJavaScriptの予約語（特別な意味を持つ言葉）だからです。

## コンポーネントの階層構造

Reactでは、コンポーネントを入れ子にして、より複雑な画面を構築できます。

\`\`\`jsx
const Page = () => {
  return (
    <div className="page">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const Header = () => {
  return <header>ページのヘッダー</header>;
}

const MainContent = () => {
  return <main>メインコンテンツ</main>;
}

const Footer = () => {
  return <footer>ページのフッター</footer>;
}
\`\`\`

このように、小さなコンポーネントを組み合わせて、ページ全体を構成していきます。

## まとめ

今回学んだこと：
- Reactはコンポーネントベースのライブラリ
- コンポーネントは関数として定義できる
- JSXを使ってJavaScriptの中にHTMLのような記述ができる
- JSXには守るべきルールがある

次回は、コンポーネントに動きを加える方法を学びます！`,

  taskDescription: `
# Reactを触ってみよう

このレッスンでは、学んだ知識を使って実際にReactコンポーネントを作っていきます。
少しずつステップを踏んで、最初のコンポーネントを完成させましょう！
  `,

  // 段階的な課題
  steps: [
    {
      stepNumber: 1,
      title: 'シンプルなコンポーネントを作ろう',
      instruction: `まずは、最もシンプルなReactコンポーネントを作ってみましょう。
「こんにちは」というテキストを表示するだけのコンポーネントです。`,
      hint: 'divタグの中に「こんにちは」と書くだけでOKです',
      initialCode: `const App = () => {
  // ここにコードを書いてください
  return <div>???</div>
}

export default App`,
      solutionCode: `const App = () => {
  return <div>こんにちは</div>
}

export default App`,
      validation: {
        includes: ['こんにちは'],
      },
    },
    {
      stepNumber: 2,
      title: '見出しタグを使ってみよう',
      instruction: `次は、h1タグを使って「ようこそReactへ！」という見出しを作りましょう。
h1タグは大きな見出しを表示するためのタグです。`,
      hint: 'divタグの代わりにh1タグを使います',
      initialCode: `const App = () => {
  // h1タグを使って「ようこそReactへ！」と表示してください
  return <div>???</div>
}

export default App`,
      solutionCode: `const App = () => {
  return <h1>ようこそReactへ！</h1>
}

export default App`,
      validation: {
        includes: ['<h1>', 'ようこそReactへ', '</h1>'],
      },
    },
    {
      stepNumber: 3,
      title: '複数の要素を表示しよう',
      instruction: `JSXのルールを思い出してください。複数の要素を返すときは、必ず1つの親要素で包む必要があります。
h1タグで「React App」、pタグで「Reactの基本構造を学ぶ」と表示してみましょう。`,
      hint: 'divタグで全体を包み、その中にh1とpタグを入れます',
      initialCode: `const App = () => {
  // 複数の要素を返すときは、divタグで包む必要があります
  return (
    // ここにコードを書いてください
  )
}

export default App`,
      solutionCode: `const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <p>Reactの基本構造を学ぶ</p>
    </div>
  )
}

export default App`,
      validation: {
        includes: ['<div>', '<h1>', '<p>', '</div>'],
      },
    },
    {
      stepNumber: 4,
      title: 'クラス名を追加してスタイリングの準備をしよう',
      instruction: `最後に、classNameを使ってクラス名を追加してみましょう。
divタグに「container」、h1タグに「title」、pタグに「description」というクラス名を追加してください。

**今度は、CSSを適用するためのインポート文も追加する必要があります！**
ファイルの先頭に \`import './styles.css'\` を追加してスタイルを読み込みましょう。`,
      hint: 'JSXではclassではなくclassNameを使います。また、ファイルの先頭にimport文も忘れずに！',
      initialCode: `const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <p>Reactの基本構造を学ぶ</p>
    </div>
  )
}

export default App`,
      solutionCode: `import './styles.css'

const App = () => {
  return (
    <div className="container">
      <h1 className="title">React App</h1>
      <p className="description">Reactの基本構造を学ぶ</p>
    </div>
  )
}

export default App`,
      validation: {
        includes: ['className="container"', 'className="title"', 'className="description"'],
      },
    },
    {
      stepNumber: 5,
      title: 'セルフクロージングタグを使ってみよう',
      instruction: `JSXでは、すべてのタグを閉じる必要があります。
画像を表示するimgタグを追加してみましょう。
imgタグは「セルフクロージング」といって、最後に/を付けて閉じます。

**忘れずに、ファイルの先頭に \`import './styles.css'\` も追加してくださいね！**`,
      hint: 'imgタグの最後に必ず/を付けてください。import文も忘れずに！',
      initialCode: `const App = () => {
  return (
    <div className="container">
      <h1 className="title">React App</h1>
      <p className="description">Reactの基本構造を学ぶ</p>
      {/* ここに画像タグを追加 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png" */}
    </div>
  )
}

export default App`,
      solutionCode: `import './styles.css'

const App = () => {
  return (
    <div className="container">
      <h1 className="title">React App</h1>
      <p className="description">Reactの基本構造を学ぶ</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png" alt="React学習画像" />
    </div>
  )
}

export default App`,
      validation: {
        includes: ['<img', '/>'],
      },
    },
  ],

  // 互換性のため、最終的な完成形も残す
  initialFiles: {
    'App.jsx': `const App = () => {
  // このファイルは段階的に編集していきます
  return <div>スタート</div>
}

export default App`,
    'styles.css': `/* React学習用のスタイル */
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  color: white;
}

.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

.container img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.container img:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .container {
    margin: 1rem;
    padding: 1.5rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .description {
    font-size: 1rem;
  }
}`,
  },

  solutionFiles: {
    'App.jsx': `import './styles.css'

const App = () => {
  return (
    <div className="container">
      <h1 className="title">React App</h1>
      <p className="description">Reactの基本構造を学ぶ</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png" alt="React学習画像" />
    </div>
  )
}

export default App`,
    'styles.css': `/* React学習用のスタイル */
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  color: white;
}

.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

.container img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.container img:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .container {
    margin: 1rem;
    padding: 1.5rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .description {
    font-size: 1rem;
  }
}`,
  },

  nextLessonId: 'react-basic-02',
}
