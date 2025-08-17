import { Lesson } from '@/lib/types/lesson'

export const reactBasic02: Lesson = {
  id: 'react-basic-02',
  title: 'ReactDOMを使ってHTMLにコンポーネントを表示する',
  description: 'ReactDOMの役割と重要性を理解し、Reactアプリケーションの起動プロセスを学習します',
  difficulty: 'beginner',
  estimatedTime: 20,
  lessonNumber: 2,
  courseId: 'react-basic',

  taskDescription: `
# ReactDOMを使ってHTMLにコンポーネントを表示する

このレッスンでは、ReactDOMの役割と重要性について学び、Reactアプリケーションがどのように起動するかを理解します。

## 課題

右側のエディタで \`main.jsx\` ファイルを編集し、以下の要件を満たすコードを作成してください：

1. ReactDOM.createRootを使用してルート要素を作成する
2. App.jsxからAppコンポーネントをimportする
3. 作成したルートでAppコンポーネントをレンダリングする

## ReactDOMとは

- **ReactDOM**: ReactコンポーネントをHTML DOM要素にレンダリングするためのライブラリ
- **createRoot**: React 18で導入された新しいAPIで、アプリケーションのルートを作成
- **render**: 作成したルートにコンポーネントをレンダリング

  `,

  learningObjectives: [
    'ReactDOMの役割を理解する',
    'createRootとrenderの使い方を覚える',
    'Reactアプリケーションの起動プロセスを把握する',
    'React.StrictModeの概念を理解する',
  ],

  concepts: ['ReactDOM', 'createRoot', 'render', 'DOM', 'StrictMode', 'import/export'],

  initialFiles: {
    'App.jsx': `function App() {
  return (
    <div>
      <h1>ReactDOM成功！</h1>
      <p>ReactDOMを使ってReactコンポーネントが正常にレンダリングされました。</p>
    </div>
  )
}

export default App`,
    'main.jsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
// TODO: Appコンポーネントをimportしてください
// import App from './App'

// TODO: 以下のコードを追加してください
// 1. ReactDOM.createRootでルート要素を作成
// 2. root.renderでAppコンポーネントをレンダリング
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)`,
  },

  solutionFiles: {
    'App.jsx': `function App() {
  return (
    <div>
      <h1>ReactDOM成功！</h1>
      <p>ReactDOMを使ってReactコンポーネントが正常にレンダリングされました。</p>
    </div>
  )
}

export default App`,
    'main.jsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)`,
  },

  hints: [
    'App.jsxからAppコンポーネントをimportする必要があります',
    'ReactDOM.createRoot()にはHTMLの要素を渡す必要があります',
    'document.getElementById("root")でHTML要素を取得できます',
    'createRootで作成したrootオブジェクトに対してrender()を呼び出します',
    'React.StrictModeでAppコンポーネントをラップすると開発時に有用な警告が表示されます',
  ],

  showHints: true,
  showSolution: true,

  previousLessonId: 'react-basic-01',
  nextLessonId: 'react-basic-03',
}
