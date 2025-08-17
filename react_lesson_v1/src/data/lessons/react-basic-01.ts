import { Lesson } from '@/lib/types/lesson'

export const reactBasic01: Lesson = {
  id: 'react-basic-01',
  title: 'Reactに触れてみよう',
  lessonNumber: 1,
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
