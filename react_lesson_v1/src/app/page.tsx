import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">React研修プラットフォーム</h1>
          <p className="text-xl text-gray-600">Reactの基礎から応用まで、段階的に学習しましょう</p>
        </header>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">React基礎コース</h2>

          <div className="grid gap-4">
            <Link
              href="/lessons/react-basic-01"
              className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    レッスン 1: Reactに触れてみよう
                  </h3>
                  <p className="mb-3 text-gray-600">
                    Reactの基本概念を理解し、最初のReactコンポーネントを作成します
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="rounded bg-green-100 px-2 py-1 text-green-800">初級</span>
                    <span>⏱️ 約15分</span>
                  </div>
                </div>
                <div className="text-blue-600">→</div>
              </div>
            </Link>

            <Link
              href="/lessons/react-basic-02"
              className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    レッスン 2: JSXの中にJavaScriptを埋め込む
                  </h3>
                  <p className="mb-3 text-gray-600">
                    JSXの中でJavaScriptの式や変数を使う方法を学び、動的なコンテンツの表示を習得します
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="rounded bg-green-100 px-2 py-1 text-green-800">初級</span>
                    <span>⏱️ 約20分</span>
                  </div>
                </div>
                <div className="text-blue-600">→</div>
              </div>
            </Link>

            {/* 他のレッスンは今後追加予定 */}
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-6 opacity-60">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-500">
                    レッスン 3: JSXをマスターしよう
                  </h3>
                  <p className="mb-3 text-gray-400">JSXの基本文法とルールを学習します</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="rounded bg-gray-200 px-2 py-1 text-gray-600">初級</span>
                    <span>⏱️ 約25分</span>
                  </div>
                </div>
                <div className="text-gray-400">準備中</div>
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
