import { Lesson } from '@/lib/types/lesson'

export const reactBasic01: Lesson = {
  id: 'react-basic-01',
  title: 'Reactに触れてみよう',
  lessonNumber: 1,
  
  material: `# React とは

Reactは、Facebook（現 Meta Platforms） によって開発された JavaScript のライブラリーの一つで、Web 上の部品（コンポーネント）を作るためのものです。
特に、複雑な Web サイトや、ユーザーがたくさん操作するページを簡単に作るために、React はとても便利です。

## JavaScript だけじゃ、それはできないの？

JavaScript だけでももちろんページは作れます。でも、ページが大きくなったり複雑になったりすると、その管理や更新が難しくなります。
Reactでは、ページを小さな「コンポーネント」という部品に分けて考えることで、純粋な JavaScript だけを使うよりも簡単に作ることができるんです。

## コンポーネントとは

React では、画面に表示する部品のことを「コンポーネント」と呼びます。
たとえば、ボタンやテキストボックスなどの小さな部品から、ヘッダーやフッターのような大きな部分まで、何でもコンポーネントとして作ることができます。

そして、一度作ったコンポーネントは、他の場所でも簡単に使い回すことができるのが魅力です。

## React の基本的な書き方

Web ページに表示される内容は、通常 HTML という言語で書かれています。
たとえば、<div>Hello</div>というコードは、画面に「Hello」と表示するための HTML の一部です。

## コンポーネントをつくる

React では、この HTML を表示するために関数を作ります。この関数を「関数コンポーネント（Function Component）」と呼びます。
下のApp関数（コンポーネント）は、「Hello」という文字を画面に表示するためのコンポーネント（部品）です。

\`\`\`jsx
function App() {
  return <div>Hello</div>;
}
\`\`\`

このコードでは、Appという名前の関数を定義し、<div>Hello</div>という HTML のようなものを返しています。

このようにJavaScriptでHTMLのような書き方をすることをJSXと呼びます。

## React の入れ子構造

Reactでは、HTMLでタグを入れ子にするように、小さな要素やコンポーネントを大きなパーツに埋め込むことができます。

\`\`\`jsx
function App() {
  return (
    <main>
      <div>ヘッダー</div>
      <div>メインコンテンツ</div>
      <div>フッター</div>
    </main>
  );
}
\`\`\`

このコードでは、コンポーネントがmain要素の中にdiv要素を入れ子にして配置しています。

## コンポーネントにクラスを追加する

HTMLでは、「クラス」を使ってWebページの見た目をきれいに整えます。
React でも同じように、私たちが作るコンポーネントにクラスを追加して、見た目をオシャレにすることができます。

HTML ではclass属性を使いますが、JSX ではclassName（クラスネーム）属性を使います。

\`\`\`jsx
function App() {
  return (
    <div className="hello">Hello</div>
  );
}
\`\`\`

クラスを追加する場合は、className = "クラス名" のように書きます。

このようにクラスを追加することで、CSS を使ってスタイルを適用することができるようになります。

**今回のレッスンはここまで！**`,
  
  taskDescription: `
# Reactに触れてみよう

このレッスンでは、Reactの基本的な概念を学び、最初のReactコンポーネントを作成します。

## 課題

右側のエディタで \`App.jsx\` ファイルを編集し、以下の要件を満たすコンポーネントを作成してください：

1. 「Hello, React!」というメッセージを表示する
2. h1タグを使用してタイトルとして表示する
3. pタグを使用して「これは私の最初のReactコンポーネントです！」というメッセージを追加する

  `,

  initialFiles: {
    'App.jsx': `function App() {
  // TODO: ここのdivタグの中身を修正してください
  // 1. 「Hello, React!」をh1タグで表示
  // 2. 「これは私の最初のReactコンポーネントです！」をpタグで表示
  return <div>ここを修正してください</div>
}

export default App`,
  },

  solutionFiles: {
    'App.jsx': `function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>これは私の最初のReactコンポーネントです！</p>
    </div>
  )
}

export default App`,
  },

  nextLessonId: 'react-basic-02',
}
