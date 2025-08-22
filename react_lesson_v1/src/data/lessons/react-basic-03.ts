import { Lesson } from '@/lib/types/lesson';

export const reactBasic03: Lesson = {
  id: 'react-basic-03',
  title: 'JSXの中にJavaScriptを埋め込む',
  lessonNumber: 3,

  material: `# JSXの中にJavaScriptを埋め込む

このレッスンでは、JSXの中にJavaScriptの変数や式を埋め込む方法について学習します。

## JSX式の基本

JSXでは、波括弧 \`{}\` を使ってJavaScriptの変数や式を埋め込むことができます。これによって、動的なコンテンツを表示することが可能になります。

## 変数の埋め込み

変数の値をJSXで表示する例を見てみましょう。

\`\`\`jsx
const ProductCard = () => {
  const productName = "スマートウォッチ";
  return <h2>{productName}</h2>;
}
// 画面には "スマートウォッチ" と表示される
\`\`\`

この例では、productNameという変数の値が波括弧を使ってJSX内に表示されています。

## 計算式の埋め込み

JSXの中では、変数だけでなく計算式も実行できます。

\`\`\`jsx
const PriceCalculator = () => {
  const price = 12000;
  const discountRate = 0.20;
  
  return (
    <div>
      <p>定価: {price}円</p>
      <p>割引価格: {price - price * discountRate}円</p>
    </div>
  );
}
\`\`\`

## 関数の実行

JSXの中で関数を呼び出すこともできます。ただし、関数は画面に表示可能な値（文字列、数値、JSX要素など）を返す必要があります。

\`\`\`jsx
const getStarRating = (rating) => {
  return '⭐'.repeat(rating);
}

const ProductRating = () => {
  return <p>評価: {getStarRating(4)}</p>;
}
\`\`\`

## 属性での変数使用

HTML要素の属性にも変数を使用できます。

\`\`\`jsx
const ProductImage = () => {
  const imageUrl = "/images/smartwatch.jpg";
  const altText = "スマートウォッチの画像";
  
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
const BadExample = () => {
  const product = { name: "スマートウォッチ", price: 12000 };
  return <h2>{product}</h2>; // エラー！
}
\`\`\`

オブジェクトの値を表示したい場合は、具体的なプロパティにアクセスする必要があります。

\`\`\`jsx
// ✅ 正しい例
const GoodExample = () => {
  const product = { name: "スマートウォッチ", price: 12000 };
  return (
    <div>
      <h2>商品名: {product.name}</h2>
      <p>価格: {product.price}円</p>
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
段階的にステップを踏んで、動的な商品カードコンポーネントを完成させます！
  `,

  // 段階的な課題
  steps: [
    {
      stepNumber: 1,
      title: '商品名を表示してみよう',
      instruction: `まずは、商品名をJSXで表示してみましょう。
「productName」という変数に「スマートウォッチ」を代入して、h1タグで表示してください。`,
      hint: '波括弧{}を使って変数を埋め込みます',
      initialFiles: {
        'App.jsx': `import './styles.css'

const App = () => {
  // ここに商品名の変数を定義してください
  const productName = "???";
  
  return (
    <div className="product-card">
      <h1>{/* ここに商品名を表示 */}</h1>
    </div>
  )
}

export default App`
      },
      solutionCode: `import './styles.css'

const App = () => {
  const productName = "スマートウォッチ";
  
  return (
    <div className="product-card">
      <h1>{productName}</h1>
    </div>
  )
}

export default App`,
      validation: {
        includes: ['{productName}', "import './styles.css'"],
      },
    },
    {
      stepNumber: 2,
      title: '価格と割引を計算しよう',
      instruction: `次は、商品の価格と割引を計算して表示しましょう。
「price」変数に12000を代入し、「discountRate」変数に0.20（20%割引）を代入して、
「定価: 12000円」と「割引価格: 9600円」を表示してください。`,
      hint: '割引価格の計算は {price - price * discountRate} のように書けます',
      initialFiles: {
        'App.jsx': `import './styles.css'

const App = () => {
  const productName = "スマートウォッチ";
  // ここに価格と割引率の変数を追加してください
  
  return (
    <div className="product-card">
      <h1>{productName}</h1>
      <p className="price">定価: {/* 定価を表示 */}円</p>
      <p className="discount-price">割引価格: {/* 割引価格を計算して表示 */}円</p>
    </div>
  )
}

export default App`
      },
      solutionCode: `import './styles.css'

const App = () => {
  const productName = "スマートウォッチ";
  const price = 12000;
  const discountRate = 0.20;
  
  return (
    <div className="product-card">
      <h1>{productName}</h1>
      <p className="price">定価: {price}円</p>
      <p className="discount-price">割引価格: {price - price * discountRate}円</p>
    </div>
  )
}

export default App`,
      validation: {
        includes: [
          '{price}',
          '{price - price * discountRate}',
          "import './styles.css'",
        ],
      },
    },
    {
      stepNumber: 3,
      title: '星評価の関数を作ろう',
      instruction: `今度は、商品の評価を星で表示する関数を作ってみましょう。
「getStarRating」という関数を定義し、引数で受け取った数だけ星（⭐）を返すようにしてください。
そして、評価4つ星を表示してください。`,
      hint: '文字列の.repeat()メソッドを使うと文字を繰り返せます',
      initialFiles: {
        'App.jsx': `import './styles.css'

const App = () => {
  const productName = "スマートウォッチ";
  const price = 12000;
  const discountRate = 0.20;
  
  // ここに星評価を返す関数を作ってください
  
  return (
    <div className="product-card">
      <h1>{productName}</h1>
      <p className="price">定価: {price}円</p>
      <p className="discount-price">割引価格: {price - price * discountRate}円</p>
      <p className="rating">評価: {/* 星評価関数を呼び出してください */}</p>
    </div>
  )
}

export default App`
      },
      solutionCode: `import './styles.css'

const App = () => {
  const productName = "スマートウォッチ";
  const price = 12000;
  const discountRate = 0.20;
  
  const getStarRating = (rating) => {
    return '⭐'.repeat(rating);
  }
  
  return (
    <div className="product-card">
      <h1>{productName}</h1>
      <p className="price">定価: {price}円</p>
      <p className="discount-price">割引価格: {price - price * discountRate}円</p>
      <p className="rating">評価: {getStarRating(4)}</p>
    </div>
  )
}

export default App`,
      validation: {
        includes: ['{getStarRating(4)}', "import './styles.css'"],
      },
    },
    {
      stepNumber: 4,
      title: '商品画像を表示しよう',
      instruction: `HTML要素の属性にも変数を使うことができます。
「imageUrl」変数に商品画像のURLを代入し、「altText」変数にalt属性の内容を代入して、
商品カードに画像を表示してください。`,
      hint: 'src={imageUrl} alt={altText} のように属性に変数を設定します',
      initialFiles: {
        'App.jsx': `import './styles.css'

const App = () => {
  const productName = "スマートウォッチ";
  const price = 12000;
  const discountRate = 0.20;
  
  const getStarRating = (rating) => {
    return '⭐'.repeat(rating);
  }
  
  // ここに画像URLとalt属性の変数を追加してください
  
  return (
    <div className="product-card">
      <img 
        className="product-image"
        src={/* 画像URLを設定 */}
        alt={/* alt属性を設定 */}
      />
      <h1>{productName}</h1>
      <p className="price">定価: {price}円</p>
      <p className="discount-price">割引価格: {price - price * discountRate}円</p>
      <p className="rating">評価: {getStarRating(4)}</p>
    </div>
  )
}

export default App`
      },
      solutionCode: `import './styles.css'

const App = () => {
  const productName = "スマートウォッチ";
  const price = 12000;
  const discountRate = 0.20;
  
  const getStarRating = (rating) => {
    return '⭐'.repeat(rating);
  }
  
  const imageUrl = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center";
  const altText = "スマートウォッチの商品画像";
  
  return (
    <div className="product-card">
      <img 
        className="product-image"
        src={imageUrl}
        alt={altText}
      />
      <h1>{productName}</h1>
      <p className="price">定価: {price}円</p>
      <p className="discount-price">割引価格: {price - price * discountRate}円</p>
      <p className="rating">評価: {getStarRating(4)}</p>
    </div>
  )
}

export default App`,
      validation: {
        includes: ['src={imageUrl}', 'alt={altText}', "import './styles.css'"],
      },
    },
    {
      stepNumber: 5,
      title: '商品オブジェクトを完成させよう',
      instruction: `最後に、すべての商品情報を1つのオブジェクトにまとめてみましょう。
「product」オブジェクトを作成し、name、price、discountRate、rating、imageUrl、altTextプロパティを持たせてください。
そして、すべてのプロパティを使って商品カードを表示してください。`,
      hint: 'オブジェクトのプロパティは product.name や product.price でアクセスできます',
      initialFiles: {
        'App.jsx': `import './styles.css'

const App = () => {
  const getStarRating = (rating) => {
    return '⭐'.repeat(rating);
  }
  
  // ここにproductオブジェクトを作成してください
  
  return (
    <div className="product-card">
      <img 
        className="product-image"
        src={/* product.imageUrl */}
        alt={/* product.altText */}
      />
      <h1>{/* product.name */}</h1>
      <p className="price">定価: {/* product.price */}円</p>
      <p className="discount-price">割引価格: {/* 計算式 */}円</p>
      <p className="rating">評価: {/* getStarRating(product.rating) */}</p>
    </div>
  )
}

export default App`
      },
      solutionCode: `import './styles.css'

const App = () => {
  const getStarRating = (rating) => {
    return '⭐'.repeat(rating);
  }
  
  const product = {
    name: "スマートウォッチ",
    price: 12000,
    discountRate: 0.20,
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center",
    altText: "スマートウォッチの商品画像"
  };
  
  return (
    <div className="product-card">
      <img 
        className="product-image"
        src={product.imageUrl}
        alt={product.altText}
      />
      <h1>{product.name}</h1>
      <p className="price">定価: {product.price}円</p>
      <p className="discount-price">割引価格: {product.price - product.price * product.discountRate}円</p>
      <p className="rating">評価: {getStarRating(product.rating)}</p>
    </div>
  )
}

export default App`,
      validation: {
        includes: [
          '{product.name}',
          '{product.price}',
          '{getStarRating(product.rating)}',
          "import './styles.css'",
        ],
      },
    },
  ],

  // 互換性のため、最終的な完成形も残す
  initialFiles: {
    'App.jsx': `import './styles.css'

const App = () => {
  const productName = "スマートウォッチ";
  
  return (
    <div className="product-card">
      <h1>{productName}</h1>
    </div>
  )
}

export default App`,
    'styles.css': `/* 商品カード用のスタイル */
.product-card {
  max-width: 420px;
  margin: 2rem auto;
  padding: 0;
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  border-radius: 20px;
  border: none;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.1),
    0 1px 8px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 0;
  margin-bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.product-card h1 {
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 1.5rem 1.5rem 1rem 1.5rem;
  letter-spacing: -0.02em;
}

.price {
  font-size: 1rem;
  color: #a0aec0;
  margin: 0.5rem 1.5rem;
  text-decoration: line-through;
  font-weight: 500;
}

.discount-price {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0.5rem 1.5rem;
  letter-spacing: -0.01em;
}

.rating {
  font-size: 1.2rem;
  color: #4a5568;
  margin: 1rem 1.5rem 1.5rem 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rating::before {
  content: '';
  width: 4px;
  height: 4px;
  background: linear-gradient(135deg, #ffd700 0%, #ffb347 100%);
  border-radius: 50%;
}
`,
  },

  solutionFiles: {
    'App.jsx': `import './styles.css'

const App = () => {
  const getStarRating = (rating) => {
    return '⭐'.repeat(rating);
  }
  
  const product = {
    name: "スマートウォッチ",
    price: 12000,
    discountRate: 0.20,
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center",
    altText: "スマートウォッチの商品画像"
  };
  
  return (
    <div className="product-card">
      <img 
        className="product-image"
        src={product.imageUrl}
        alt={product.altText}
      />
      <h1>{product.name}</h1>
      <p className="price">定価: {product.price}円</p>
      <p className="discount-price">割引価格: {product.price - product.price * product.discountRate}円</p>
      <p className="rating">評価: {getStarRating(product.rating)}</p>
    </div>
  )
}

export default App`,
    'styles.css': `/* 商品カード用のスタイル */
.product-card {
  max-width: 420px;
  margin: 2rem auto;
  padding: 0;
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  border-radius: 20px;
  border: none;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.1),
    0 1px 8px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 0;
  margin-bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.product-card h1 {
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 1.5rem 1.5rem 1rem 1.5rem;
  letter-spacing: -0.02em;
}

.price {
  font-size: 1rem;
  color: #a0aec0;
  margin: 0.5rem 1.5rem;
  text-decoration: line-through;
  font-weight: 500;
}

.discount-price {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0.5rem 1.5rem;
  letter-spacing: -0.01em;
}

.rating {
  font-size: 1.2rem;
  color: #4a5568;
  margin: 1rem 1.5rem 1.5rem 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rating::before {
  content: '';
  width: 4px;
  height: 4px;
  background: linear-gradient(135deg, #ffd700 0%, #ffb347 100%);
  border-radius: 50%;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .product-card {
    margin: 1rem;
    max-width: 90%;
  }
  
  .product-card h1 {
    font-size: 1.5rem;
    margin: 1.25rem 1.25rem 0.75rem 1.25rem;
  }
  
  .price, .discount-price, .rating {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }
  
  .discount-price {
    font-size: 1.3rem;
  }
  
  .product-image {
    height: 240px;
  }
}`,
  },

  previousLessonId: 'react-basic-02',
  nextLessonId: 'react-basic-04',
};
