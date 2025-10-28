import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showToolsDropdown, setShowToolsDropdown] = useState(false)

  return (
    <nav className="bg-black/50 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <span className="text-xl font-bold text-white">VideoTemplates</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors flex items-center">
                Features
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown menu can be added here */}
            </div>
            <div 
              className="relative"
              onMouseEnter={() => setShowToolsDropdown(true)}
              onMouseLeave={() => setShowToolsDropdown(false)}
            >
              <button className="text-gray-300 hover:text-white transition-colors flex items-center">
                Free Tools
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown Menu */}
              {showToolsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2">
                  <Link 
                    href="/tools/video-clipper"
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="mr-3 text-xl">✂️</span>
                      <div>
                        <div className="font-semibold">Video Clipper</div>
                        <div className="text-xs text-gray-400">Trim your videos</div>
                      </div>
                    </div>
                  </Link>
                  <Link 
                    href="/tools/video-compressor"
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="mr-3 text-xl">📦</span>
                      <div>
                        <div className="font-semibold">Video Compressor</div>
                        <div className="text-xs text-gray-400">Reduce file size</div>
                      </div>
                    </div>
                  </Link>
                  <Link 
                    href="/tools/image-generator"
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="mr-3 text-xl">🎨</span>
                      <div>
                        <div className="font-semibold">AI Image Generator</div>
                        <div className="text-xs text-gray-400">Create with AI</div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/signup" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/pricing" className="block text-gray-300 hover:text-white">
              Pricing
            </Link>
            <Link href="/features" className="block text-gray-300 hover:text-white">
              Features
            </Link>
            <div className="border-t border-gray-700 pt-2">
              <div className="text-gray-400 text-sm font-semibold mb-2">Free Tools</div>
              <Link href="/tools/video-clipper" className="block text-gray-300 hover:text-white pl-4 py-1">
                ✂️ Video Clipper
              </Link>
              <Link href="/tools/video-compressor" className="block text-gray-300 hover:text-white pl-4 py-1">
                📦 Video Compressor
              </Link>
              <Link href="/tools/image-generator" className="block text-gray-300 hover:text-white pl-4 py-1">
                🎨 AI Image Generator
              </Link>
            </div>
            <Link 
              href="/signup" 
              className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
