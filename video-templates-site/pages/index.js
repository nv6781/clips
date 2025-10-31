import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import TemplateCard from '../components/TemplateCard'

export default function Home() {
  const templates = [
    {
      id: 'top5',
      title: 'Top 5 Video',
      description: 'Create engaging countdown videos',
      image: '/templates/top5-preview.jpg',
      href: '/templates/top5'
    },
    {
      id: 'reddit',
      title: 'Reddit Stories',
      description: 'Turn Reddit posts into videos',
      image: '/templates/reddit-preview.jpg',
      href: '/templates/reddit'
    },
    {
      id: 'comparison',
      title: 'VS Comparison',
      description: 'Side-by-side comparison videos',
      image: '/templates/comparison-preview.jpg',
      href: '/templates/comparison'
    },
    {
      id: 'tutorial',
      title: 'Tutorial Video',
      description: 'Step-by-step tutorial creator',
      image: '/templates/tutorial-preview.jpg',
      href: '/templates/tutorial'
    },
    {
      id: 'quote',
      title: 'Quote Video',
      description: 'Animated quote videos',
      image: '/templates/quote-preview.jpg',
      href: '/templates/quote'
    },
    {
      id: 'facts',
      title: 'Did You Know',
      description: 'Interesting facts videos',
      image: '/templates/facts-preview.jpg',
      href: '/templates/facts'
    }
  ]

  return (
    <>
      <Head>
        <title>Video Templates - Create Viral Content 100x Faster</title>
        <meta name="description" content="Create professional viral videos with our easy-to-use templates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <Navbar />
        
        {/* Announcement Banner */}
        <div className="bg-blue-600 text-white text-center py-2 px-4 text-sm">
          🎉 New Templates Available! Create Professional Videos in Minutes
        </div>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-800 rounded-full px-6 py-2 mb-6">
              <span className="text-gray-300">🚀 Join 750,000+ Creators</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Viral Videos <span className="text-blue-500">100x</span> Faster
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Create stunning video content with our professional templates. No experience needed.
            </p>
            
            <Link 
              href="/templates" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Get Started Now →
            </Link>
          </div>

          {/* Quick Tools Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">⚡</span> Quick Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/tools/scary-story-generator" className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors cursor-pointer block border-2 border-red-900 hover:border-red-600">
                <div className="w-12 h-12 bg-red-600 rounded-lg mb-4 flex items-center justify-center text-2xl">
                  👻
                </div>
                <h3 className="text-xl font-semibold mb-2">Scary Story Generator</h3>
                <p className="text-gray-400">Create AI horror stories with voiceovers</p>
              </Link>
              
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center text-2xl">
                  🎨
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Image Generator</h3>
                <p className="text-gray-400">Generate images from text with AI</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-orange-600 rounded-lg mb-4 flex items-center justify-center text-2xl">
                  📦
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Compressor</h3>
                <p className="text-gray-400">Compress videos online for free</p>
              </div>
              
              <Link href="/tools/video-clipper" className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors cursor-pointer block">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center text-2xl">
                  ✂️
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Clipper</h3>
                <p className="text-gray-400">Trim and cut your videos</p>
              </Link>
            </div>
          </section>

          {/* Templates Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="mr-2">📈</span> Trending Templates
              </h2>
              <button className="text-blue-500 hover:text-blue-400">
                View All →
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Go Viral?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Start creating professional videos in minutes
            </p>
            <Link 
              href="/templates" 
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Get Started Free
            </Link>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2025 Video Templates. All rights reserved.</p>
            <div className="mt-4 space-x-6">
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
              <Link href="/features" className="hover:text-white">Features</Link>
              <Link href="/support" className="hover:text-white">Support</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
