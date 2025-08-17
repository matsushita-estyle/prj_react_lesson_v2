import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            React研修プラットフォーム
          </h1>
          <p className="text-xl text-gray-600">
            Reactの基礎から応用まで、段階的に学習しましょう
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            React基礎コース
          </h2>
          
          <div className="grid gap-4">
            <Link 
              href="/lessons/react-basic-01"
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    レッスン 1: Reactに触れてみよう
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Reactの基本概念を理解し、最初のReactコンポーネントを作成します
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      初級
                    </span>
                    <span>⏱️ 約15分</span>
                  </div>
                </div>
                <div className="text-blue-600">
                  →
                </div>
              </div>
            </Link>

            <Link 
              href="/lessons/react-basic-02"
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    レッスン 2: ReactDOMを使ってHTMLにコンポーネントを表示する
                  </h3>
                  <p className="text-gray-600 mb-3">
                    ReactDOMの役割と重要性を理解し、Reactアプリケーションの起動プロセスを学習します
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      初級
                    </span>
                    <span>⏱️ 約20分</span>
                  </div>
                </div>
                <div className="text-blue-600">
                  →
                </div>
              </div>
            </Link>

            {/* 他のレッスンは今後追加予定 */}
            <div className="bg-gray-100 rounded-lg p-6 border border-gray-200 opacity-60">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-500 mb-2">
                    レッスン 3: JSXをマスターしよう
                  </h3>
                  <p className="text-gray-400 mb-3">
                    JSXの基本文法とルールを学習します
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded">
                      初級
                    </span>
                    <span>⏱️ 約25分</span>
                  </div>
                </div>
                <div className="text-gray-400">
                  準備中
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-500">
          <p>© 2024 React研修プラットフォーム</p>
        </footer>
      </div>
    </div>
  )
}
