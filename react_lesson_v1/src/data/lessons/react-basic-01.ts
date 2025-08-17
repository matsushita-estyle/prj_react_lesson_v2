import { Lesson } from '@/lib/types/lesson'

export const reactBasic01: Lesson = {
  id: 'react-basic-01',
  title: 'Reactに触れてみよう',
  description: 'Reactの基本概念を理解し、最初のReactコンポーネントを作成します',
  difficulty: 'beginner',
  estimatedTime: 15,
  lessonNumber: 1,
  courseId: 'react-basic',

  taskDescription: `
# Reactに触れてみよう

このレッスンでは、Reactの基本的な概念を学び、最初のReactコンポーネントを作成します。

## 課題

右側のエディタで \`App.jsx\` ファイルを編集し、以下の要件を満たすコンポーネントを作成してください：

1. 「Hello, React!」というメッセージを表示する
2. h1タグを使用してタイトルとして表示する
3. pタグを使用して「これは私の最初のReactコンポーネントです！」というメッセージを追加する

  `,

  learningObjectives: [
    'Reactコンポーネントの基本構造を理解する',
    'JSXの基本的な書き方を覚える',
    'Reactとは何かを理解する',
  ],

  concepts: ['React', 'コンポーネント', 'JSX', '関数コンポーネント'],

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

  hints: [
    'Reactコンポーネントは必ず何かを return する必要があります',
    'JSXでは、複数の要素を返す場合は一つの親要素（divなど）で囲みます',
    'className属性を使ってCSSクラスを指定できます',
    'JSXはHTMLに似ていますが、少し違いがあります（例：class → className）',
  ],

  showHints: true,
  showSolution: true,

  nextLessonId: 'react-basic-02',
}
