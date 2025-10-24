import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

export default function ComparisonTemplate() {
  return (
    <>
      <Head>
        <title>VS Comparison Video Template - Video Templates</title>
        <meta name="description" content="Create side-by-side comparison videos" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <Navbar />
        
        <main className="container mx-auto px-4 py-16">
          <div className="mb-8 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <span className="text-gray-600 mx-2">/</span>
            <Link href="/templates" className="text-gray-400 hover:text-white">Templates</Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-white">VS Comparison</span>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-purple-600 text-white px-4 py-1 rounded-full text-sm mb-4">
              POPULAR
            </div>
            
            <h1 className="text-5xl font-bold mb-4">VS Comparison Template</h1>
            
            <p className="text-xl text-gray-400 mb-8">
              Create engaging side-by-side comparison videos. Perfect for product reviews, 
              tech comparisons, and more.
            </p>

            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl mb-2 block">⚡</span>
                  <p className="text-white font-semibold">Comparison Template</p>
                  <p className="text-gray-200 text-sm">Coming Soon</p>
                </div>
              </div>
            </div>

            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all">
              Start Creating →
            </button>
          </div>
        </main>
      </div>
    </>
  )
}
