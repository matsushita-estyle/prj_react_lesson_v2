import { Lesson } from '@/lib/types/lesson'

export const reactBasic02: Lesson = {
  id: 'react-basic-02',
  title: 'ReactDOMを使ってHTMLにコンポーネントを表示する',
  lessonNumber: 2,

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

  previousLessonId: 'react-basic-01',
  nextLessonId: 'react-basic-03',
}
