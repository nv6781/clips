import Link from 'next/link'

export default function TemplateCard({ template }) {
  return (
    <Link href={template.href}>
      <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer group">
        {/* Placeholder for template preview image */}
        <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
          <span className="text-6xl">{getTemplateEmoji(template.id)}</span>
          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
            Most Popular
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
            {template.title}
          </h3>
          <p className="text-gray-400 text-sm">
            {template.description}
          </p>
        </div>
      </div>
    </Link>
  )
}

function getTemplateEmoji(id) {
  const emojis = {
    'top5': '🏆',
    'reddit': '📱',
    'comparison': '⚡',
    'tutorial': '📚',
    'quote': '💭',
    'facts': '🧠'
  }
  return emojis[id] || '🎬'
}
