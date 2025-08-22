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

1. **基本的なレイアウト**: 背景色、余白、中央寄せ
2. **タイトルのスタイリング**: フォントサイズ、太さ、影
3. **説明文のスタイリング**: フォントサイズ、行間、透明度
4. **画像のスタイリング**: サイズ調整、角丸、影
5. **高度なスタイリング**: グラデーション、ホバーエフェクト

各ステップで見た目がどのように変化するかを確認しながら、CSSの効果を実感してみましょう！`,

  taskDescription: `
# CSSでスタイルを適用してみよう

前のレッスンで作成したReactアプリに、段階的にCSSスタイルを適用していきます。
styles.cssファイルにCSSを書きながら、見た目がどのように変化するかを確認しましょう！
  `,

  steps: [
    {
      stepNumber: 1,
      title: '基本的なレイアウトを作ろう',
      instruction: `最初に、コンテナの基本的なスタイルを設定しましょう。
背景色、余白、中央寄せ、テキスト色を追加してください。

styles.cssに以下のCSSを追加してみましょう：
- .container に背景色（#4c51bf）を設定
- 最大幅600px、中央寄せ（margin: 2rem auto）
- 内側の余白（padding: 2rem）
- テキストを中央寄せ（text-align: center）
- 白いテキスト色（color: white）`,
      hint: 'CSSでは .クラス名 { プロパティ: 値; } の形で書きます',
      initialCode: `.container {
/* ここにCSSを書いていきます */
}`,
      solutionCode: `.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #4c51bf;
  text-align: center;
  color: white;
}`,
      solutionTargetFile: 'styles.css',
      initialFiles: {
        'styles.css': `.container {
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
      title: 'タイトルを目立たせよう',
      instruction: `次に、タイトルのスタイルを設定します。
styles.cssに .title のスタイルを追加してください：

- フォントサイズを大きく（font-size: 3rem）
- フォントを太く（font-weight: 800） 
- 下に余白を追加（margin: 0 0 1rem 0）
- テキストに影を追加（text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3)）`,
      hint: 'remは相対単位で、1rem = 16px程度です',
      initialCode: `/* Step 1: 基本的なスタイル */
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #4c51bf;
  text-align: center;
  color: white;
}

/* Step 2: タイトルのスタイル */
.title {
/* ここにCSSを書いていきます */
}`,
      solutionCode: `.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #4c51bf;
  text-align: center;
  color: white;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}`,
      solutionTargetFile: 'styles.css',
      initialFiles: {
        'styles.css': `/* Step 1: 基本的なスタイル */
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #4c51bf;
  text-align: center;
  color: white;
}

/* Step 2: タイトルのスタイル */
.title {
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
      title: '説明文を読みやすくしよう',
      instruction: `説明文のスタイルを追加して、読みやすくしましょう。
styles.cssに .description のスタイルを追加してください：

- フォントサイズを調整（font-size: 1.2rem）
- フォントを細く（font-weight: 300）
- 下に余白を追加（margin: 0 0 2rem 0）
- 少し透明に（opacity: 0.9）
- 行間を広く（line-height: 1.6）`,
      hint: 'opacityは0〜1の値で、1が完全不透明、0が完全透明です',
      initialCode: `/* Step 1: 基本的なスタイル */
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #4c51bf;
  text-align: center;
  color: white;
}

/* Step 2: タイトルのスタイル */
.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Step 3: 説明文のスタイル */
.description {
/* ここにCSSを書いていきます */
}`,
      solutionCode: `.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #4c51bf;
  text-align: center;
  color: white;
}

.title {
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
        'styles.css': `/* Step 1: 基本的なスタイル */
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #4c51bf;
  text-align: center;
  color: white;
}

/* Step 2: タイトルのスタイル */
.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Step 3: 説明文のスタイル */
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
        includes: ['className="description"', "import './styles.css'"],
      },
    },
    {
      stepNumber: 4,
      title: '画像を美しくしよう',
      instruction: `画像のスタイルを設定して、見た目を改善しましょう。
styles.cssに .container img のスタイルを追加してください：

- 最大幅100%（max-width: 100%）
- 高さ自動調整（height: auto）
- 角丸にする（border-radius: 15px）`,
      hint: 'border-radiusで角を丸くできます。数値が大きいほど丸くなります',
      initialCode: `/* Step 1: 基本的なスタイル */
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #4c51bf;
  text-align: center;
  color: white;
}

/* Step 2: タイトルのスタイル */
.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Step 3: 説明文のスタイル */
.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

/* Step 4: 画像のスタイル */
.container img {
/* ここにCSSを書いていきます */
}`,
      solutionCode: `.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #4c51bf;
  text-align: center;
  color: white;
}

.title {
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

.container img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}`,
      solutionTargetFile: 'styles.css',
      initialFiles: {
        'styles.css': `/* Step 1: 基本的なスタイル */
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #4c51bf;
  text-align: center;
  color: white;
}

/* Step 2: タイトルのスタイル */
.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Step 3: 説明文のスタイル */
.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

/* Step 4: 画像のスタイル */
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
    {
      stepNumber: 5,
      title: '高度なスタイリングで完成させよう',
      instruction: `最後に、より高度なスタイリングを追加して完成させましょう。

.containerを更新：
- グラデーション背景（background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)）
- 角丸（border-radius: 20px）
- 美しい影（box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1)）
- システムフォント（font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif）

画像に回転アニメーションを追加：
- .container img に、ゆっくり回転するアニメーション（animation: rotate 8s linear infinite）
- @keyframes rotate でアニメーションを定義
- 0度から360度まで8秒かけて回転`,
      hint: 'linear-gradientでグラデーション、@keyframes rotateでアニメーションを定義できます',
      initialCode: `/* Step 1: 基本的なスタイル */
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #4c51bf;
  text-align: center;
  color: white;
}

/* Step 2: タイトルのスタイル */
.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Step 3: 説明文のスタイル */
.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

/* Step 4: 画像のスタイル */
.container img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Step 5: 高度なスタイリング */
/* .containerを更新してグラデーションや角丸を追加 */
.container {
/* ここにCSSを書いていきます */
}

/* .container imgに回転アニメーションを追加 */
.container img {
/* ここにCSSを書いていきます */
}`,
      solutionCode: `.container {
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
        'styles.css': `/* Step 1: 基本的なスタイル */
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #4c51bf;
  text-align: center;
  color: white;
}

/* Step 2: タイトルのスタイル */
.title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Step 3: 説明文のスタイル */
.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

/* Step 4: 画像のスタイル */
.container img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Step 5: 高度なスタイリング */
/* .containerを更新してグラデーションや角丸を追加 */
.container {
/* ここにCSSを書いていきます */
}

/* .container imgに回転アニメーションを追加 */
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
        includes: ["import './styles.css'", 'className="container"'],
      },
    },
  ],

  initialFiles: {
    'styles.css': `.container {
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
