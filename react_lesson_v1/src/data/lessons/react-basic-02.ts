import { Lesson } from '@/lib/types/lesson';

export const reactBasic02: Lesson = {
  id: 'react-basic-02',
  title: 'CSSでスタイルを適用してみよう',
  lessonNumber: 2,

  material: `# CSSでスタイルを適用してみよう

前のレッスンでReactの基本構造とJSXの書き方を学びました。
今度は、CSSを使って見た目を美しくしていきましょう！

## CSSとは？

CSS（Cascading Style Sheets）は、ウェブページの見た目やデザインを指定するための言語です。
HTMLが「構造」を担当するのに対し、CSSは「装飾」を担当します。

## ReactでCSSを使う方法

ReactでCSSを適用する主な方法は以下の通りです：

### 1. 外部CSSファイルを読み込む

\`\`\`jsx
import './styles.css'
\`\`\`

### 2. classNameでクラスを指定する

HTMLでは \`class\` 属性を使いますが、ReactのJSXでは \`className\` を使います。

\`\`\`jsx
<div className="container">
  <h1 className="title">タイトル</h1>
</div>
\`\`\`

## CSSの基本的な書き方

CSSは「セレクタ」と「プロパティ」で構成されます。

\`\`\`css
.container {  /* セレクタ（クラス名） */
  background-color: blue;  /* プロパティ: 値; */
  padding: 20px;
  margin: 10px;
}
\`\`\`

## よく使うCSSプロパティ

### レイアウト関連
- \`margin\`: 外側の余白
- \`padding\`: 内側の余白  
- \`width\`: 幅
- \`height\`: 高さ
- \`text-align\`: テキストの配置

### 色とフォント関連
- \`color\`: 文字色
- \`background-color\`: 背景色
- \`font-size\`: フォントサイズ
- \`font-weight\`: フォントの太さ

### 装飾関連
- \`border-radius\`: 角丸
- \`box-shadow\`: 影
- \`border\`: 枠線

## 段階的にスタイルを適用しよう

このレッスンでは、以下の順序でスタイルを追加していきます：

1. **タイトルと説明文のスタイリング**: フォントサイズ、太さ、余白、影
2. **コンテナのレイアウト**: 背景色、グラデーション、角丸、影
3. **画像のスタイリング**: サイズ調整、角丸、アニメーション

各ステップで見た目がどのように変化するかを確認しながら、CSSの効果を実感してみましょう！`,

  taskDescription: `
# CSSでスタイルを適用してみよう

Reactアプリに、段階的にCSSスタイルを適用していきます。
styles.cssファイルにCSSを書きながら、見た目がどのように変化するかを確認しましょう！
  `,

  steps: [
    {
      stepNumber: 1,
      title: 'タイトルと説明文をスタイリングしよう',
      instruction: `最初に、タイトルと説明文のスタイルを設定しましょう。

.titleのスタイルを追加してください：
- フォントサイズを大きく（font-size: 3rem）
- フォントを太く（font-weight: 800）
- 下に余白を追加（margin: 0 0 1rem 0）
- テキストに影を追加（text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3)）

.descriptionのスタイルも追加してください：
- フォントサイズを調整（font-size: 1.2rem）
- フォントを細く（font-weight: 300）
- 下に余白を追加（margin: 0 0 2rem 0）
- 少し透明に（opacity: 0.9）
- 行間を広く（line-height: 1.6）`,
      hint: '複数のクラスを同時にスタイリングできます。フォントのサイズや太さで見た目が大きく変わります。',
      copyableCode: [
        {
          label: 'タイトルのスタイル設定',
          code: `font-size: 3rem;
font-weight: 800;
margin: 0 0 1rem 0;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);`,
        },
        {
          label: '説明文のスタイル設定',
          code: `font-size: 1.2rem;
font-weight: 300;
margin: 0 0 2rem 0;
opacity: 0.9;
line-height: 1.6;`,
        },
      ],
      initialCode: `/* タイトルのスタイル */
.title {
/* ここにCSSを書いていきます */
}

/* 説明文のスタイル */
.description {
/* ここにCSSを書いていきます */
}`,
      solutionCode: `.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}`,
      solutionTargetFile: 'styles.css',
      initialFiles: {
        'styles.css': `/* タイトルのスタイル */
.title {
/* ここにCSSを書いていきます */
}

/* 説明文のスタイル */
.description {
/* ここにCSSを書いていきます */
}`,
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
      },
      defaultFile: 'styles.css',
      validation: {
        includes: ["import './styles.css'", 'className="container"'],
      },
    },
    {
      stepNumber: 2,
      title: 'コンテナのレイアウトを作ろう',
      instruction: `次に、コンテナの基本的なレイアウトを設定しましょう。

.containerのスタイルを追加してください：
- 最大幅を設定（max-width: 600px）
- 中央寄せ（margin: 2rem auto）
- 内側の余白（padding: 2rem）
- 背景色（background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)）
- 角丸（border-radius: 20px）
- 美しい影（box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1)）
- テキストを中央寄せ（text-align: center）
- 白いテキスト色（color: white）
- システムフォント（font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif）`,
      hint: 'linear-gradientでグラデーション背景を作ることができます。数値が大きいほど影が大きくなります。',
      copyableCode: [
        {
          label: 'コンテナクラスの定義',
          code: `/* コンテナのスタイル */
.container {
/* ここにCSSを書いていきます */
}`,
        },
        {
          label: 'コンテナのレイアウトと装飾',
          code: `max-width: 600px;
margin: 2rem auto;
padding: 2rem;
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
border-radius: 20px;
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
text-align: center;
color: white;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;`,
        },
      ],
      initialCode: `/* タイトルのスタイル */
.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* 説明文のスタイル */
.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

/* コンテナのスタイル */
.container {
/* ここにCSSを書いていきます */
}`,
      solutionCode: `.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

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
}`,
      solutionTargetFile: 'styles.css',
      initialFiles: {
        'styles.css': `/* タイトルのスタイル */
.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* 説明文のスタイル */
.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

/* コンテナのスタイル */
.container {
/* ここにCSSを書いていきます */
}`,
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
      },
      defaultFile: 'styles.css',
      validation: {
        includes: ['className="title"', "import './styles.css'"],
      },
    },
    {
      stepNumber: 3,
      title: '画像を美しくしよう',
      instruction: `最後に、画像のスタイルを設定して、見た目を最終的に仕上げましょう。

.container imgのスタイルを追加してください：
- 最大幅100%（max-width: 100%）
- 高さ自動調整（height: auto）
- 回転アニメーションを追加（animation: rotate 8s linear infinite）

@keyframes rotateで回転アニメーションを定義：
- from：transform: rotate(0deg)
- to：transform: rotate(360deg)`,
      hint: '@keyframesでアニメーションを定義できます。linearは一定速度、infiniteは無限ループを意味します。',
      copyableCode: [
        {
          label: '画像クラスの定義',
          code: `.container img {
/* ここにCSSを書いていきます */
}`,
        },
        {
          label: '画像のスタイル設定',
          code: `max-width: 100%;
height: auto;
animation: rotate 8s linear infinite;`,
        },
        {
          label: '回転アニメーションの定義',
          code: `@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`,
        },
      ],
      initialCode: `/* タイトルのスタイル */
.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* 説明文のスタイル */
.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

/* コンテナのスタイル */
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

/* 画像のスタイル */
.container img {
/* ここにCSSを書いていきます */
}`,
      solutionCode: `.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

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

.container img {
  max-width: 100%;
  height: auto;
  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`,
      solutionTargetFile: 'styles.css',
      initialFiles: {
        'styles.css': `/* タイトルのスタイル */
.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* 説明文のスタイル */
.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

/* コンテナのスタイル */
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

/* 画像のスタイル */
.container img {
/* ここにCSSを書いていきます */
}`,
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
      },
      defaultFile: 'styles.css',
      validation: {
        includes: ['<img', "import './styles.css'"],
      },
    },
  ],

  initialFiles: {
    'styles.css': `/* タイトルのスタイル */
.title {
/* ここにCSSを書いていきます */
}

/* 説明文のスタイル */
.description {
/* ここにCSSを書いていきます */
}`,
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
  },

  defaultFile: 'styles.css',

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
    'styles.css': `.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

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

.container img {
  max-width: 100%;
  height: auto;
  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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

  previousLessonId: 'react-basic-01',
  nextLessonId: 'react-basic-03',
};