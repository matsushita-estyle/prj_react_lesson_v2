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

## ポイント

- ReactとReactDOMは別々のライブラリです
- createRootでルート要素を作成してからrenderを呼び出します
- HTMLの\`<div id="root"></div>\`要素にReactアプリがマウントされます
- StrictModeでラップすることで開発時の警告を有効にできます

コードを完成させて、プレビューでアプリケーションが正常に表示されることを確認しましょう！
  `,
  
  learningObjectives: [
    'ReactDOMの役割を理解する',
    'createRootとrenderの使い方を覚える',
    'Reactアプリケーションの起動プロセスを把握する',
    'React.StrictModeの概念を理解する'
  ],
  
  concepts: [
    'ReactDOM',
    'createRoot',
    'render',
    'DOM',
    'StrictMode',
    'import/export'
  ],
  
  initialFiles: {
    'App.jsx': `function App() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      fontFamily: 'sans-serif',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px'
      }}>
        <h1 style={{ color: '#1e40af', marginBottom: '16px' }}>
          ReactDOM 成功！
        </h1>
        <p style={{ color: '#64748b', lineHeight: '1.6' }}>
          ReactDOMを使ってReactコンポーネントが正常にレンダリングされました。
        </p>
        <div style={{ 
          marginTop: '20px',
          padding: '12px',
          backgroundColor: '#dcfce7',
          border: '1px solid #86efac',
          borderRadius: '8px'
        }}>
          <p style={{ margin: 0, color: '#166534', fontSize: '14px' }}>
            ✅ createRoot と render が正しく実装されています
          </p>
        </div>
      </div>
    </div>
  )
}

export default App`,
    'main.jsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
// ここにAppコンポーネントをimportしてください

// ここにcreateRootとrenderのコードを記述してください
// HTMLの<div id="root"></div>要素にAppコンポーネントをレンダリングしましょう`,
    'index.css': `body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
  width: 100%;
  height: 100vh;
}

* {
  box-sizing: border-box;
}`
  },
  
  solutionFiles: {
    'App.jsx': `function App() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      fontFamily: 'sans-serif',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px'
      }}>
        <h1 style={{ color: '#1e40af', marginBottom: '16px' }}>
          ReactDOM 成功！
        </h1>
        <p style={{ color: '#64748b', lineHeight: '1.6' }}>
          ReactDOMを使ってReactコンポーネントが正常にレンダリングされました。
        </p>
        <div style={{ 
          marginTop: '20px',
          padding: '12px',
          backgroundColor: '#dcfce7',
          border: '1px solid #86efac',
          borderRadius: '8px'
        }}>
          <p style={{ margin: 0, color: '#166534', fontSize: '14px' }}>
            ✅ createRoot と render が正しく実装されています
          </p>
        </div>
      </div>
    </div>
  )
}

export default App`,
    'main.jsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)`,
    'index.css': `body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
  width: 100%;
  height: 100vh;
}

* {
  box-sizing: border-box;
}`
  },
  
  hints: [
    'App.jsxからAppコンポーネントをimportする必要があります',
    'ReactDOM.createRoot()にはHTMLの要素を渡す必要があります',
    'document.getElementById("root")でHTML要素を取得できます',
    'createRootで作成したrootオブジェクトに対してrender()を呼び出します',
    'React.StrictModeでAppコンポーネントをラップすると開発時に有用な警告が表示されます'
  ],
  
  showHints: true,
  showSolution: true,
  
  previousLessonId: 'react-basic-01',
  nextLessonId: 'react-basic-03'
}