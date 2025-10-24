import Head from 'next/head'
import Navbar from '../components/Navbar'
import TemplateCard from '../components/TemplateCard'

export default function Templates() {
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
        <title>Video Templates - All Templates</title>
        <meta name="description" content="Browse all video templates" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <Navbar />
        
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">All Templates</h1>
          <p className="text-gray-400 mb-12 text-lg">
            Choose from our collection of professional video templates
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
