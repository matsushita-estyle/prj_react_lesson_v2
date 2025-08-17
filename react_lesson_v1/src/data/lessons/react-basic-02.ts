import { Lesson } from '@/lib/types/lesson'

export const reactBasic02: Lesson = {
  id: 'react-basic-02',
  title: 'JSXの中にJavaScriptを埋め込む',
  lessonNumber: 2,
  
  material: `# JSXの中にJavaScriptを埋め込む

このレッスンでは、JSXの中にJavaScriptの変数や式を埋め込む方法について学習します。

## JSX式の基本

JSXでは、波括弧 \`{}\` を使ってJavaScriptの変数や式を埋め込むことができます。これによって、動的なコンテンツを表示することが可能になります。

## 変数の埋め込み

変数の値をJSXで表示する例を見てみましょう。

\`\`\`jsx
function WelcomeMessage() {
  const userName = "太郎";
  return <h1>こんにちは、{userName}さん！</h1>;
}
// 画面には "こんにちは、太郎さん！" と表示される
\`\`\`

この例では、userNameという変数の値が波括弧を使ってJSX内に表示されています。

## 計算式の埋め込み

JSXの中では、変数だけでなく計算式も実行できます。

\`\`\`jsx
function Calculator() {
  const price = 1000;
  const taxRate = 0.1;
  
  return (
    <div>
      <p>商品価格: {price}円</p>
      <p>税込価格: {price + price * taxRate}円</p>
    </div>
  );
}
\`\`\`

## 関数の実行

JSXの中で関数を呼び出すこともできます。ただし、関数は画面に表示可能な値（文字列、数値、JSX要素など）を返す必要があります。

\`\`\`jsx
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

function Clock() {
  return <p>現在時刻: {getCurrentTime()}</p>;
}
\`\`\`

## 属性での変数使用

HTML要素の属性にも変数を使用できます。

\`\`\`jsx
function ProfileImage() {
  const imageUrl = "/images/profile.jpg";
  const altText = "プロフィール画像";
  
  return <img src={imageUrl} alt={altText} />;
}
\`\`\`

## 重要な注意点

### 表示できる値の種類

JSXで直接表示できるのは以下の値です：
- 文字列
- 数値  
- boolean値（ただし画面には表示されない）
- JSX要素

### オブジェクトの扱い

オブジェクトを直接表示しようとするとエラーになります。

\`\`\`jsx
// ❌ エラーになる例
function BadExample() {
  const user = { name: "田中", age: 25 };
  return <h1>{user}</h1>; // エラー！
}
\`\`\`

オブジェクトの値を表示したい場合は、具体的なプロパティにアクセスする必要があります。

\`\`\`jsx
// ✅ 正しい例
function GoodExample() {
  const user = { name: "田中", age: 25 };
  return (
    <div>
      <h1>名前: {user.name}</h1>
      <p>年齢: {user.age}歳</p>
    </div>
  );
}
\`\`\`

## まとめ

- 波括弧 \`{}\` でJavaScriptの式をJSXに埋め込める
- 変数、計算式、関数の戻り値を表示できる
- HTML要素の属性にも変数を使用可能
- オブジェクトは直接表示できないため、プロパティを指定する`,

  taskDescription: `
# JSXの中にJavaScriptを埋め込む

このレッスンでは、学んだ知識を使って実際にJSXの中でJavaScriptを使ってみましょう。
段階的にステップを踏んで、動的なコンテンツを表示するコンポーネントを完成させます！
  `,

  // 段階的な課題
  steps: [
    {
      stepNumber: 1,
      title: '変数をJSXで表示してみよう',
      instruction: `まずは、シンプルな変数をJSXで表示してみましょう。
「userName」という変数を定義し、あなたの名前を代入して、画面に「こんにちは、{名前}さん！」と表示してください。`,
      hint: '波括弧{}を使って変数を埋め込みます',
      initialCode: `function App() {
  // ここに変数を定義してください
  const userName = "???";
  
  return (
    <div>
      <h1>こんにちは、{/* ここに変数を入れてください */}さん！</h1>
    </div>
  )
}

export default App`,
      solutionCode: `function App() {
  const userName = "太郎";
  
  return (
    <div>
      <h1>こんにちは、{userName}さん！</h1>
    </div>
  )
}

export default App`,
      validation: {
        includes: ['{userName}'],
      },
    },
    {
      stepNumber: 2,
      title: '数値の計算を表示してみよう',
      instruction: `次は、数値の計算をJSXで表示してみましょう。
「price」変数に1000を代入し、「tax」変数に0.1（10%）を代入して、
「商品価格: 1000円」と「税込価格: 1100円」を表示してください。`,
      hint: '計算式は {price + price * tax} のように書けます',
      initialCode: `function App() {
  const userName = "太郎";
  // ここに価格と税率の変数を追加してください
  
  return (
    <div>
      <h1>こんにちは、{userName}さん！</h1>
      <p>商品価格: {/* 価格を表示 */}円</p>
      <p>税込価格: {/* 税込価格を計算して表示 */}円</p>
    </div>
  )
}

export default App`,
      solutionCode: `function App() {
  const userName = "太郎";
  const price = 1000;
  const tax = 0.1;
  
  return (
    <div>
      <h1>こんにちは、{userName}さん！</h1>
      <p>商品価格: {price}円</p>
      <p>税込価格: {price + price * tax}円</p>
    </div>
  )
}

export default App`,
      validation: {
        includes: ['{price}', '{price + price * tax}'],
      },
    },
    {
      stepNumber: 3,
      title: '関数を作って使ってみよう',
      instruction: `今度は、関数を作って使ってみましょう。
「getCurrentTime」という関数を定義し、現在の時刻を返すようにしてください。
そして、「現在時刻: {時刻}」を表示してください。`,
      hint: 'new Date().toLocaleTimeString()で現在時刻を取得できます',
      initialCode: `function App() {
  const userName = "太郎";
  const price = 1000;
  const tax = 0.1;
  
  // ここに時刻を取得する関数を作ってください
  
  return (
    <div>
      <h1>こんにちは、{userName}さん！</h1>
      <p>商品価格: {price}円</p>
      <p>税込価格: {price + price * tax}円</p>
      <p>現在時刻: {/* 関数を呼び出してください */}</p>
    </div>
  )
}

export default App`,
      solutionCode: `function App() {
  const userName = "太郎";
  const price = 1000;
  const tax = 0.1;
  
  function getCurrentTime() {
    return new Date().toLocaleTimeString();
  }
  
  return (
    <div>
      <h1>こんにちは、{userName}さん！</h1>
      <p>商品価格: {price}円</p>
      <p>税込価格: {price + price * tax}円</p>
      <p>現在時刻: {getCurrentTime()}</p>
    </div>
  )
}

export default App`,
      validation: {
        includes: ['{getCurrentTime()}'],
      },
    },
    {
      stepNumber: 4,
      title: '属性に変数を使ってみよう',
      instruction: `HTML要素の属性にも変数を使うことができます。
「imageUrl」変数に画像のURLを代入し、「altText」変数にalt属性の内容を代入して、
img要素で画像を表示してください。`,
      hint: 'src={imageUrl} alt={altText} のように属性に変数を設定します',
      initialCode: `function App() {
  const userName = "太郎";
  const price = 1000;
  const tax = 0.1;
  
  function getCurrentTime() {
    return new Date().toLocaleTimeString();
  }
  
  // ここに画像URLとalt属性の変数を追加してください
  
  return (
    <div>
      <h1>こんにちは、{userName}さん！</h1>
      <p>商品価格: {price}円</p>
      <p>税込価格: {price + price * tax}円</p>
      <p>現在時刻: {getCurrentTime()}</p>
      <img 
        src={/* 画像URLを設定 */}
        alt={/* alt属性を設定 */}
        width="200"
      />
    </div>
  )
}

export default App`,
      solutionCode: `function App() {
  const userName = "太郎";
  const price = 1000;
  const tax = 0.1;
  
  function getCurrentTime() {
    return new Date().toLocaleTimeString();
  }
  
  const imageUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop&crop=center";
  const altText = "美しい山と湖の風景";
  
  return (
    <div>
      <h1>こんにちは、{userName}さん！</h1>
      <p>商品価格: {price}円</p>
      <p>税込価格: {price + price * tax}円</p>
      <p>現在時刻: {getCurrentTime()}</p>
      <img 
        src={imageUrl}
        alt={altText}
        width="200"
      />
    </div>
  )
}

export default App`,
      validation: {
        includes: ['src={imageUrl}', 'alt={altText}'],
      },
    },
    {
      stepNumber: 5,
      title: 'オブジェクトのプロパティを表示してみよう',
      instruction: `最後に、オブジェクトのプロパティを表示してみましょう。
「user」オブジェクトを作成し、nameとageプロパティを持たせてください。
そして、「ユーザー名: {名前}」と「年齢: {年齢}歳」を表示してください。`,
      hint: 'オブジェクトのプロパティは user.name や user.age でアクセスできます',
      initialCode: `function App() {
  const userName = "太郎";
  const price = 1000;
  const tax = 0.1;
  
  function getCurrentTime() {
    return new Date().toLocaleTimeString();
  }
  
  const imageUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop&crop=center";
  const altText = "美しい山と湖の風景";
  
  // ここにuserオブジェクトを作成してください
  
  return (
    <div>
      <h1>こんにちは、{userName}さん！</h1>
      <p>商品価格: {price}円</p>
      <p>税込価格: {price + price * tax}円</p>
      <p>現在時刻: {getCurrentTime()}</p>
      <img 
        src={imageUrl}
        alt={altText}
        width="200"
      />
      <hr />
      <p>ユーザー名: {/* user.nameを表示 */}</p>
      <p>年齢: {/* user.ageを表示 */}歳</p>
    </div>
  )
}

export default App`,
      solutionCode: `function App() {
  const userName = "太郎";
  const price = 1000;
  const tax = 0.1;
  
  function getCurrentTime() {
    return new Date().toLocaleTimeString();
  }
  
  const imageUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop&crop=center";
  const altText = "美しい山と湖の風景";
  
  const user = {
    name: "田中花子",
    age: 25
  };
  
  return (
    <div>
      <h1>こんにちは、{userName}さん！</h1>
      <p>商品価格: {price}円</p>
      <p>税込価格: {price + price * tax}円</p>
      <p>現在時刻: {getCurrentTime()}</p>
      <img 
        src={imageUrl}
        alt={altText}
        width="200"
      />
      <hr />
      <p>ユーザー名: {user.name}</p>
      <p>年齢: {user.age}歳</p>
    </div>
  )
}

export default App`,
      validation: {
        includes: ['{user.name}', '{user.age}'],
      },
    },
  ],

  // 互換性のため、最終的な完成形も残す
  initialFiles: {
    'App.jsx': `function App() {
  // このファイルは段階的に編集していきます
  return <div>スタート</div>
}

export default App`,
  },

  solutionFiles: {
    'App.jsx': `function App() {
  const userName = "太郎";
  const price = 1000;
  const tax = 0.1;
  
  function getCurrentTime() {
    return new Date().toLocaleTimeString();
  }
  
  const imageUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop&crop=center";
  const altText = "美しい山と湖の風景";
  
  const user = {
    name: "田中花子",
    age: 25
  };
  
  return (
    <div>
      <h1>こんにちは、{userName}さん！</h1>
      <p>商品価格: {price}円</p>
      <p>税込価格: {price + price * tax}円</p>
      <p>現在時刻: {getCurrentTime()}</p>
      <img 
        src={imageUrl}
        alt={altText}
        width="200"
      />
      <hr />
      <p>ユーザー名: {user.name}</p>
      <p>年齢: {user.age}歳</p>
    </div>
  )
}

export default App`,
  },

  previousLessonId: 'react-basic-01',
  nextLessonId: 'react-basic-03',
}
