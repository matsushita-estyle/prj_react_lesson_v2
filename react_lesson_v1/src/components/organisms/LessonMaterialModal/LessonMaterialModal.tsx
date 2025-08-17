import React from 'react'
import Modal from '@/components/molecules/Modal'
import { Lesson } from '@/lib/types/lesson'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface LessonMaterialModalProps {
  isOpen: boolean
  onClose: () => void
  lesson: Lesson | null
}

const LessonMaterialModal: React.FC<LessonMaterialModalProps> = ({ isOpen, onClose, lesson }) => {
  if (!lesson) return null

  const renderMarkdownContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: React.ReactNode[] = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i]

      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={i} className="mt-6 mb-4 text-2xl font-bold text-gray-900">
            {line.slice(2)}
          </h1>
        )
        i++
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="mt-5 mb-3 text-xl font-semibold text-gray-800">
            {line.slice(3)}
          </h2>
        )
        i++
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="mt-4 mb-2 text-lg font-medium text-gray-700">
            {line.slice(4)}
          </h3>
        )
        i++
      } else if (line.startsWith('```')) {
        // コードブロックの開始
        const codeLines = []
        const language = line.slice(3).trim() // 言語指定を取得
        i++ // ```行をスキップ

        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i])
          i++
        }

        if (i < lines.length) {
          i++ // 終了の```行をスキップ
        }

        const codeContent = codeLines.join('\n')

        elements.push(
          <div key={`code-${i}`} className="mb-4 overflow-hidden rounded-lg border border-gray-700">
            <div className="bg-gray-800 px-4 py-2 text-sm text-white">
              {language ? `${language.toUpperCase()} コード例` : 'コード例'}
            </div>
            <SyntaxHighlighter
              language={language || 'javascript'}
              style={oneDark}
              customStyle={{
                margin: 0,
                borderRadius: 0,
                fontSize: '14px'
              }}
            >
              {codeContent}
            </SyntaxHighlighter>
          </div>
        )
      } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
        elements.push(
          <p key={i} className="mb-3 font-semibold text-gray-800">
            {line.slice(2, -2)}
          </p>
        )
        i++
      } else if (line.trim() === '') {
        i++
        continue
      } else {
        elements.push(
          <p key={i} className="mb-3 leading-relaxed text-gray-700">
            {line}
          </p>
        )
        i++
      }
    }

    return elements
  }

  const materialContent = `# React とは

Reactは、Facebook（現 Meta Platforms） によって開発された JavaScript のライブラリーの一つで、Web 上の部品（コンポーネント）を作るためのものです。
特に、複雑な Web サイトや、ユーザーがたくさん操作するページを簡単に作るために、React はとても便利です。

## JavaScript だけじゃ、それはできないの？

JavaScript だけでももちろんページは作れます。でも、ページが大きくなったり複雑になったりすると、その管理や更新が難しくなります。
Reactでは、ページを小さな「コンポーネント」という部品に分けて考えることで、純粋な JavaScript だけを使うよりも簡単に作ることができるんです。

## コンポーネントとは

React では、画面に表示する部品のことを「コンポーネント」と呼びます。
たとえば、ボタンやテキストボックスなどの小さな部品から、ヘッダーやフッターのような大きな部分まで、何でもコンポーネントとして作ることができます。

そして、一度作ったコンポーネントは、他の場所でも簡単に使い回すことができるのが魅力です。

## React の基本的な書き方

Web ページに表示される内容は、通常 HTML という言語で書かれています。
たとえば、<div>Hello</div>というコードは、画面に「Hello」と表示するための HTML の一部です。

## コンポーネントをつくる

React では、この HTML を表示するために関数を作ります。この関数を「関数コンポーネント（Function Component）」と呼びます。
下のApp関数（コンポーネント）は、「Hello」という文字を画面に表示するためのコンポーネント（部品）です。

${'```'}jsx
function App() {
  return <div>Hello</div>;
}
${'```'}

このコードでは、Appという名前の関数を定義し、<div>Hello</div>という HTML のようなものを返しています。

このようにJavaScriptでHTMLのような書き方をすることをJSXと呼びます。

## React の入れ子構造

Reactでは、HTMLでタグを入れ子にするように、小さな要素やコンポーネントを大きなパーツに埋め込むことができます。

${'```'}jsx
function App() {
  return (
    <main>
      <div>ヘッダー</div>
      <div>メインコンテンツ</div>
      <div>フッター</div>
    </main>
  );
}
${'```'}

このコードでは、コンポーネントがmain要素の中にdiv要素を入れ子にして配置しています。

## コンポーネントにクラスを追加する

HTMLでは、「クラス」を使ってWebページの見た目をきれいに整えます。
React でも同じように、私たちが作るコンポーネントにクラスを追加して、見た目をオシャレにすることができます。

HTML ではclass属性を使いますが、JSX ではclassName（クラスネーム）属性を使います。

${'```'}jsx
function App() {
  return (
    <div className="hello">Hello</div>
  );
}
${'```'}

クラスを追加する場合は、className = "クラス名" のように書きます。

このようにクラスを追加することで、CSS を使ってスタイルを適用することができるようになります。

**今回のレッスンはここまで！**`

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${lesson.title} - 教材`}>
      <div className="prose max-w-none">{renderMarkdownContent(materialContent)}</div>
    </Modal>
  )
}

export default LessonMaterialModal
