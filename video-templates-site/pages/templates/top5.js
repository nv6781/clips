import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

export default function Top5Template() {
  return (
    <>
      <Head>
        <title>Top 5 Video Template - Video Templates</title>
        <meta name="description" content="Create engaging Top 5 countdown videos" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <Navbar />
        
        <main className="container mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <span className="text-gray-600 mx-2">/</span>
            <Link href="/templates" className="text-gray-400 hover:text-white">Templates</Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-white">Top 5 Video</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Template Info */}
            <div>
              <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm mb-4">
                MOST POPULAR
              </div>
              
              <h1 className="text-5xl font-bold mb-4">Top 5 Video Template</h1>
              
              <p className="text-xl text-gray-400 mb-8">
                Create engaging countdown videos that keep viewers watching until the end. 
                Perfect for ranking lists, product reviews, and more.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Customizable Rankings</h3>
                    <p className="text-gray-400">Add your own items, images, and descriptions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Smooth Animations</h3>
                    <p className="text-gray-400">Professional reveal animations for each item</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Multiple Styles</h3>
                    <p className="text-gray-400">Choose from modern, classic, or minimal designs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Background Music</h3>
                    <p className="text-gray-400">Add royalty-free music from our library</p>
                  </div>
                </div>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 w-full lg:w-auto">
                Start Creating →
              </button>
            </div>

            {/* Right Column - Preview */}
            <div>
              <div className="bg-gray-800 rounded-lg p-8 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Template Preview</h3>
                
                {/* Video preview placeholder */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg aspect-video flex items-center justify-center mb-4">
                  <div className="text-center">
                    <span className="text-6xl mb-2 block">🏆</span>
                    <p className="text-white font-semibold">Video Preview</p>
                    <p className="text-gray-200 text-sm">Click "Start Creating" to begin</p>
                  </div>
                </div>

                {/* Example items */}
                <div className="space-y-3">
                  <div className="bg-gray-700 p-3 rounded">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">#5</span>
                      <span className="text-gray-400">First Item</span>
                    </div>
                  </div>
                  <div className="bg-gray-700 p-3 rounded">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">#4</span>
                      <span className="text-gray-400">Second Item</span>
                    </div>
                  </div>
                  <div className="bg-gray-700 p-3 rounded">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">#3</span>
                      <span className="text-gray-400">Third Item</span>
                    </div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded border-2 border-blue-500">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">#2</span>
                      <span className="text-white">Fourth Item</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-3 rounded">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">#1</span>
                      <span className="font-bold">Top Item 🎉</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
