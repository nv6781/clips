import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

export default function RedditTemplate() {
  return (
    <>
      <Head>
        <title>Reddit Stories Video Template - Video Templates</title>
        <meta name="description" content="Turn Reddit posts into engaging videos" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <Navbar />
        
        <main className="container mx-auto px-4 py-16">
          <div className="mb-8 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <span className="text-gray-600 mx-2">/</span>
            <Link href="/templates" className="text-gray-400 hover:text-white">Templates</Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-white">Reddit Stories</span>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-orange-600 text-white px-4 py-1 rounded-full text-sm mb-4">
              TRENDING
            </div>
            
            <h1 className="text-5xl font-bold mb-4">Reddit Stories Template</h1>
            
            <p className="text-xl text-gray-400 mb-8">
              Transform popular Reddit posts into viral video content. Add text-to-speech, 
              background gameplay, and more.
            </p>

            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl mb-2 block">📱</span>
                  <p className="text-white font-semibold">Reddit Story Template</p>
                  <p className="text-gray-200 text-sm">Coming Soon</p>
                </div>
              </div>
            </div>

            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all">
              Start Creating →
            </button>
          </div>
        </main>
      </div>
    </>
  )
}
