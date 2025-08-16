import LessonTemplate from '@/components/templates/LessonTemplate'

export default function Home() {
  const sampleLessonContent = (
    <div className="prose max-w-none">
      <h2>JSXの基本</h2>
      <p>このレッスンでは、JSXの基本的な使い方を学びます。</p>
      <h3>課題</h3>
      <ol>
        <li>
          <code>App.jsx</code>で、「Hello, React!」と表示するコンポーネントを作成してください
        </li>
        <li>背景色を青色（#3b82f6）に設定してください</li>
        <li>テキストを中央に配置してください</li>
      </ol>
      <h3>ヒント</h3>
      <ul>
        <li>
          <code>className</code>を使用してCSSクラスを適用できます
        </li>
        <li>
          <code>style</code>プロパティでインラインスタイルも設定可能です
        </li>
      </ul>
    </div>
  )

  const initialFiles = {
    'App.jsx': `import React from 'react';

function App() {
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'sans-serif',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#333', marginBottom: '10px' }}>Hello, World!</h1>
        <p style={{ color: '#666' }}>React研修プラットフォームへようこそ！</p>
      </div>
    </div>
  );
}

export default App;`,
    'index.css': `body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
}

* {
  box-sizing: border-box;
}`,
  }

  return (
    <LessonTemplate
      lessonTitle="JSXの基本"
      courseTitle="React基礎コース"
      lessonContent={sampleLessonContent}
      initialFiles={initialFiles}
    />
  )
}
