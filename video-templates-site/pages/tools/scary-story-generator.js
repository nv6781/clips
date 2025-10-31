import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'

export default function ScaryStoryGenerator() {
  const [appState, setAppState] = useState({
    selectedDuration: 60,
    storyPrompt: '',
    generatedStory: '',
    selectedVoice: null,
    audioUrl: null,
    images: [],
    aspectRatio: 'vertical'
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState({
    story: false,
    voice: false,
    images: false
  })

  const mockVoices = [
    { id: 'voice1', name: 'Dark Whisper', description: 'Deep, ominous male voice' },
    { id: 'voice2', name: 'Haunting Echo', description: 'Ethereal female voice' },
    { id: 'voice3', name: 'Creepy Child', description: 'Unsettling child voice' },
    { id: 'voice4', name: 'Ancient Evil', description: 'Raspy, ancient voice' },
    { id: 'voice5', name: 'Sinister Narrator', description: 'Smooth, menacing voice' },
    { id: 'voice6', name: 'Ghostly Moan', description: 'Spectral, echoing voice' }
  ]

  const generateStoryContent = (prompt, duration) => {
    const stories = {
      short: `The old house at the end of Maple Street had been abandoned for decades. Local children whispered tales of the family that once lived there—a family that vanished without a trace one Halloween night.

Sarah didn't believe in ghost stories. As a journalist, she dealt in facts, not folklore. But when she pushed open the creaking front door, a chill ran down her spine that had nothing to do with the autumn air.

Inside, the house was frozen in time. A half-eaten dinner sat on the table, now covered in dust and cobwebs. Children's toys lay scattered across the floor, as if dropped mid-play. And on the wall, written in what looked like dried blood, were the words: "WE'RE STILL HERE."

Sarah's camera flashed, capturing the eerie scene. But in the photograph, she saw something that made her blood run cold—shadowy figures standing in the doorway behind her, figures that hadn't been there when she took the shot.

She ran from that house and never returned. But sometimes, late at night, she still hears the whispers: "Come back, Sarah. Come play with us."`,

      medium: `The old house at the end of Maple Street had been abandoned for decades. Local children whispered tales of the family that once lived there—a family that vanished without a trace one Halloween night. The Hendersons, they were called. A mother, father, and three young children who simply ceased to exist.

Sarah didn't believe in ghost stories. As a journalist for the local paper, she dealt in facts, not folklore. But the anniversary of the disappearance was approaching, and her editor wanted a story. So on a gray October afternoon, she found herself standing before the decrepit Victorian mansion, its windows like hollow eyes staring back at her.

The front door hung slightly ajar, as if inviting her in. Sarah pushed it open with a long creak that echoed through the empty halls. Inside, the house was frozen in time. A half-eaten dinner sat on the dining table, now covered in decades of dust and cobwebs. Children's toys lay scattered across the parlor floor, as if dropped mid-play. A child's laughter seemed to echo from somewhere upstairs.

Sarah climbed the stairs, each step groaning under her weight. The laughter grew louder, more distinct. It was coming from the nursery at the end of the hall. The door was closed, but light flickered beneath it—candlelight, dancing and wavering.

She reached for the doorknob. It was ice cold. As she turned it, the laughter stopped abruptly. The door swung open to reveal a room full of candles, all lit, all burning. And on the wall, written in what looked like dried blood, were the words: "WE'RE STILL HERE. WE'VE BEEN WAITING."

Sarah's camera flashed automatically, capturing the scene. But when she looked at the photograph on her camera's screen, she saw something that made her blood run cold—shadowy figures of children standing in a circle around where she stood, their faces pale and eyes hollow, all staring directly at the camera.

She ran from that house, stumbling down the stairs and bursting through the front door. She didn't stop running until she reached her car. But as she drove away, she glanced in her rearview mirror and saw them—the Henderson children, standing in the upstairs window, waving goodbye.

Sarah never wrote that story. She left town the next day. But sometimes, late at night, she still hears the whispers: "Come back, Sarah. Come play with us. We're so lonely here."`,

      long: `The old house at the end of Maple Street had been abandoned for decades, a rotting monument to tragedy and mystery. Local children whispered tales of the family that once lived there—the Hendersons, a seemingly perfect family that vanished without a trace one Halloween night in 1952. A mother, father, and three young children who simply ceased to exist, leaving behind a house full of their belongings and a community full of questions.

Sarah Mitchell didn't believe in ghost stories. As an investigative journalist for the local paper, she dealt in facts, evidence, and rational explanations. She'd covered murders, corruption, and scandals, but never anything supernatural. When her editor assigned her to write a piece about the Henderson disappearance for its 70th anniversary, she saw it as just another cold case, not a haunted house story.

On a gray October afternoon, with storm clouds gathering overhead, Sarah found herself standing before the decrepit Victorian mansion. Its paint had long since peeled away, revealing gray, weathered wood beneath. The windows were like hollow eyes staring back at her, some broken, others covered with decades of grime. The wraparound porch sagged dangerously, and the yard was overgrown with thorny bushes and dead grass.

The front door hung slightly ajar, as if inviting her in—or warning her away. Sarah pushed it open with a long, mournful creak that echoed through the empty halls. She stepped inside, her footsteps disturbing dust that had settled for generations.

The interior was a time capsule of 1950s America, frozen at the moment of the family's disappearance. In the dining room, a half-eaten dinner still sat on the table, now covered in decades of dust and cobwebs. The plates held the desiccated remains of what had once been pot roast and vegetables. Crystal glasses stood half-full of liquid that had long since evaporated, leaving only dark stains.

In the parlor, children's toys lay scattered across the floor—a wooden train set, a porcelain doll with cracked face, building blocks spelling out incomplete words. A child's laughter seemed to echo from somewhere upstairs, faint but distinct. Sarah told herself it was just the wind whistling through broken windows, but the sound had an unmistakably human quality.

She pulled out her camera and began documenting everything, her journalist's instincts taking over. Flash after flash illuminated the decay and abandonment. But with each photograph, she felt increasingly uneasy, as if unseen eyes were watching her every move.

The laughter came again, louder this time, more insistent. It was definitely coming from upstairs. Sarah climbed the grand staircase, each step groaning under her weight, threatening to give way. The banister was sticky with something she didn't want to identify. The laughter grew louder, more distinct—the sound of children playing, giggling, having fun.

At the top of the stairs, a long hallway stretched before her, lined with closed doors. The laughter was coming from the last door on the right—the nursery, according to the floor plans she'd studied. The door was closed, but light flickered beneath it—candlelight, dancing and wavering in a way that electric light never could.

Sarah's rational mind screamed at her to leave, but her curiosity—the same curiosity that had made her a good journalist—pushed her forward. She walked down the hallway, her footsteps echoing. Family portraits lined the walls, their subjects' eyes seeming to follow her movement. In one photograph, she recognized the Hendersons: a handsome couple with three beautiful children, all smiling at the camera, frozen in a moment of happiness that would soon end in mystery.

She reached the nursery door. The doorknob was ice cold, so cold it burned her hand. As she turned it, the laughter stopped abruptly, replaced by an oppressive silence that was somehow worse. The door swung open with a creak.

The room was full of candles—dozens of them, all lit, all burning with steady flames despite the drafts that whistled through the house. They were arranged in a circle on the floor, and in the center of that circle was a child's rocking horse, moving slowly back and forth as if recently occupied. And on the wall, written in what looked like dried blood, were the words: "WE'RE STILL HERE. WE'VE BEEN WAITING FOR YOU."

Sarah's camera flashed automatically, her finger pressing the shutter button out of pure instinct. But when she looked at the photograph on her camera's screen, she saw something that made her blood run cold and her heart stop—shadowy figures of children standing in a circle around where she stood, their faces pale and eyes hollow, all staring directly at the camera. And in the background, two adult figures stood in the doorway, watching.

She heard breathing behind her—slow, raspy breathing that couldn't be her own. She spun around, but the doorway was empty. When she turned back, the candles had all gone out, plunging the room into darkness. In that darkness, she heard whispers—children's voices, speaking in unison: "Play with us. Stay with us. Be our friend."

Sarah ran. She stumbled through the dark hallway, nearly falling down the stairs in her panic. She burst through the front door and didn't stop running until she reached her car. Her hands shook so badly she could barely get the key in the ignition. As she drove away, she glanced in her rearview mirror and saw them—the Henderson children, standing in the upstairs window, their pale faces pressed against the glass, waving goodbye with slow, deliberate movements.

Sarah never wrote that story. She couldn't. How could she explain what she'd seen? Who would believe her? She left town the next day, taking a job at a paper three states away. But she could never escape what happened in that house. Sometimes, late at night, she still hears the whispers: "Come back, Sarah. Come play with us. We're so lonely here. We've been waiting so long."

And sometimes, when she looks at her reflection in a mirror or a dark window, she sees them standing behind her—the Henderson children, still waiting, still watching, still hoping she'll come back to play.`
    }

    if (duration <= 60) return stories.short
    if (duration <= 180) return stories.medium
    return stories.long
  }

  const generateStory = async () => {
    if (!appState.storyPrompt.trim()) {
      alert('Please enter a story prompt!')
      return
    }

    setLoading({ ...loading, story: true })
    await new Promise(resolve => setTimeout(resolve, 2000))

    const story = generateStoryContent(appState.storyPrompt, appState.selectedDuration)
    setAppState({ ...appState, generatedStory: story })
    setLoading({ ...loading, story: false })
  }

  const generateVoiceover = async () => {
    setLoading({ ...loading, voice: true })
    await new Promise(resolve => setTimeout(resolve, 3000))
    setAppState({ ...appState, audioUrl: 'demo-audio' })
    setLoading({ ...loading, voice: false })
  }

  const generateImages = async () => {
    setLoading({ ...loading, images: true })
    await new Promise(resolve => setTimeout(resolve, 4000))

    const creepyImageUrls = [
      'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1574116294517-f0f6ab8b6e6e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1635667808276-a8c9c6c6f1d3?w=400&h=400&fit=crop'
    ]

    const sentences = appState.generatedStory.split(/[.!?]+/).filter(s => s.trim().length > 20)
    const sceneCount = Math.min(6, Math.max(3, Math.floor(sentences.length / 3)))
    const images = []
    
    const interval = Math.floor(sentences.length / sceneCount)
    for (let i = 0; i < sceneCount; i++) {
      const index = i * interval
      if (sentences[index]) {
        images.push({
          url: creepyImageUrls[i % creepyImageUrls.length],
          caption: sentences[index].trim().substring(0, 100) + '...'
        })
      }
    }

    setAppState({ ...appState, images })
    setLoading({ ...loading, images: false })
  }

  const exportStory = () => {
    const exportData = {
      story: appState.generatedStory,
      duration: appState.selectedDuration,
      voice: appState.selectedVoice,
      images: appState.images,
      aspectRatio: appState.aspectRatio,
      metadata: {
        createdAt: new Date().toISOString(),
        wordCount: appState.generatedStory.split(/\s+/).length
      }
    }
    
    const dataStr = JSON.stringify(exportData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `scary-story-${Date.now()}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    
    alert('Story data exported successfully!')
  }

  return (
    <>
      <Head>
        <title>👻 Scary Story Generator - AI Horror Stories</title>
        <meta name="description" content="Create spine-chilling tales with AI-generated voiceovers and creepy visuals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <Navbar />

        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <header className="text-center mb-12 p-8 bg-gray-800 rounded-2xl border-2 border-red-900 shadow-2xl shadow-red-900/30">
            <h1 className="text-5xl font-bold text-red-600 mb-4" style={{ textShadow: '0 0 20px rgba(139, 0, 0, 0.8)' }}>
              👻 SCARY STORY GENERATOR
            </h1>
            <p className="text-gray-400 text-lg">Create spine-chilling tales with AI-generated voiceovers and creepy visuals</p>
          </header>

          {/* Step 1: Story Generation */}
          <div className={`bg-gray-800 rounded-2xl p-8 mb-8 border ${currentStep === 1 ? 'border-red-600 shadow-lg shadow-red-600/30' : 'border-gray-700'} ${currentStep > 1 ? 'opacity-75' : ''}`}>
            <div className="flex items-center mb-6 pb-4 border-b-2 border-gray-700">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl mr-4">1</div>
              <h2 className="text-2xl font-bold">Generate Your Story</h2>
            </div>

            <div className="mb-6">
              <label className="block text-gray-400 mb-3 font-medium">What kind of scary story do you want? 🎃</label>
              <textarea
                value={appState.storyPrompt}
                onChange={(e) => setAppState({ ...appState, storyPrompt: e.target.value })}
                placeholder="Example: A haunted doll that comes alive at midnight, or a mysterious fog that makes people disappear..."
                className="w-full p-4 bg-gray-900 border-2 border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none min-h-[120px]"
                disabled={currentStep > 1}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-400 mb-3 font-medium">Estimated Voiceover Length ⏱️</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[30, 60, 120, 300].map((duration) => (
                  <button
                    key={duration}
                    onClick={() => setAppState({ ...appState, selectedDuration: duration })}
                    disabled={currentStep > 1}
                    className={`p-4 rounded-lg font-medium transition-all ${
                      appState.selectedDuration === duration
                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                        : 'bg-gray-900 text-gray-300 border-2 border-gray-700 hover:border-red-600'
                    }`}
                  >
                    {duration < 60 ? `${duration}s` : `${duration / 60}min`}
                  </button>
                ))}
              </div>
            </div>

            {!appState.generatedStory && (
              <button
                onClick={generateStory}
                disabled={loading.story || currentStep > 1}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading.story ? 'Generating...' : 'Generate Story 📖'}
              </button>
            )}

            {loading.story && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-700 border-t-red-600 mr-4"></div>
                <span className="text-gray-400">Crafting your terrifying tale...</span>
              </div>
            )}

            {appState.generatedStory && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-red-600 mb-4">Your Scary Story:</h3>
                <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-700 max-h-96 overflow-y-auto mb-4">
                  <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{appState.generatedStory}</p>
                </div>
                <div className="bg-red-900/20 border border-red-600 rounded-lg p-4 mb-4">
                  <strong className="text-red-400">📊 Story Stats:</strong>
                  <div className="text-gray-400 mt-2">
                    📝 Word Count: {appState.generatedStory.split(/\s+/).length} words<br />
                    ⏱️ Estimated Duration: ~{Math.round(appState.generatedStory.split(/\s+/).length / 2.5)} seconds<br />
                    🎯 Target Duration: {appState.selectedDuration} seconds
                  </div>
                </div>
                {currentStep === 1 && (
                  <div className="flex gap-4">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all"
                    >
                      Confirm Story ✓
                    </button>
                    <button
                      onClick={() => setAppState({ ...appState, generatedStory: '' })}
                      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all"
                    >
                      Regenerate 🔄
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Step 2: Voice Selection */}
          <div className={`bg-gray-800 rounded-2xl p-8 mb-8 border ${currentStep === 2 ? 'border-red-600 shadow-lg shadow-red-600/30' : 'border-gray-700'} ${currentStep < 2 ? 'opacity-50 pointer-events-none' : ''} ${currentStep > 2 ? 'opacity-75' : ''}`}>
            <div className="flex items-center mb-6 pb-4 border-b-2 border-gray-700">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl mr-4">2</div>
              <h2 className="text-2xl font-bold">Select Voice 🎙️</h2>
            </div>

            <div className="mb-6">
              <label className="block text-gray-400 mb-3 font-medium">Choose a Voice</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {mockVoices.map((voice) => (
                  <button
                    key={voice.id}
                    onClick={() => setAppState({ ...appState, selectedVoice: voice })}
                    disabled={currentStep > 2}
                    className={`p-4 rounded-lg text-left transition-all ${
                      appState.selectedVoice?.id === voice.id
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-900 text-gray-300 border-2 border-gray-700 hover:border-red-600'
                    }`}
                  >
                    <div className="font-semibold mb-1">{voice.name}</div>
                    <div className="text-sm opacity-80">{voice.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {!appState.audioUrl && appState.selectedVoice && (
              <button
                onClick={generateVoiceover}
                disabled={loading.voice || currentStep > 2}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all disabled:opacity-50"
              >
                {loading.voice ? 'Generating...' : 'Generate Voiceover 🔊'}
              </button>
            )}

            {loading.voice && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-700 border-t-red-600 mr-4"></div>
                <span className="text-gray-400">Creating voiceover...</span>
              </div>
            )}

            {appState.audioUrl && currentStep === 2 && (
              <div className="mt-6">
                <div className="bg-green-900/20 border border-green-600 rounded-lg p-4 mb-4">
                  <strong className="text-green-400">✓ Voiceover Generated Successfully!</strong>
                </div>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all"
                >
                  Continue to Images →
                </button>
              </div>
            )}
          </div>

          {/* Step 3: Image Generation */}
          <div className={`bg-gray-800 rounded-2xl p-8 mb-8 border ${currentStep === 3 ? 'border-red-600 shadow-lg shadow-red-600/30' : 'border-gray-700'} ${currentStep < 3 ? 'opacity-50 pointer-events-none' : ''} ${currentStep > 3 ? 'opacity-75' : ''}`}>
            <div className="flex items-center mb-6 pb-4 border-b-2 border-gray-700">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl mr-4">3</div>
              <h2 className="text-2xl font-bold">Generate Images 🎨</h2>
            </div>

            <div className="bg-red-900/20 border border-red-600 rounded-lg p-4 mb-6">
              <strong className="text-red-400">🖼️ Image Style:</strong> Creepy cartoon style images will be generated to match your story's key scenes.
            </div>

            {appState.images.length === 0 && (
              <button
                onClick={generateImages}
                disabled={loading.images || currentStep > 3}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all disabled:opacity-50"
              >
                {loading.images ? 'Generating...' : 'Generate Images 🎨'}
              </button>
            )}

            {loading.images && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-700 border-t-red-600 mr-4"></div>
                <span className="text-gray-400">Creating creepy visuals...</span>
              </div>
            )}

            {appState.images.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-red-600 mb-4">Generated Images:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  {appState.images.map((image, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border-2 border-gray-700 hover:border-red-600 transition-all">
                      <img src={image.url} alt={`Scene ${index + 1}`} className="w-full h-48 object-cover" />
                      <div className="p-4 text-sm text-gray-400">{image.caption}</div>
                    </div>
                  ))}
                </div>
                {currentStep === 3 && (
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all"
                  >
                    Continue to Preview →
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Step 4: Preview & Export */}
          <div className={`bg-gray-800 rounded-2xl p-8 mb-8 border ${currentStep === 4 ? 'border-red-600 shadow-lg shadow-red-600/30' : 'border-gray-700'} ${currentStep < 4 ? 'opacity-50 pointer-events-none' : ''}`}>
            <div className="flex items-center mb-6 pb-4 border-b-2 border-gray-700">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl mr-4">4</div>
              <h2 className="text-2xl font-bold">Preview & Export 📹</h2>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setAppState({ ...appState, aspectRatio: 'vertical' })}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  appState.aspectRatio === 'vertical'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-900 text-gray-300 border-2 border-gray-700'
                }`}
              >
                9:16 (Vertical)
              </button>
              <button
                onClick={() => setAppState({ ...appState, aspectRatio: 'horizontal' })}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  appState.aspectRatio === 'horizontal'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-900 text-gray-300 border-2 border-gray-700'
                }`}
              >
                16:9 (Horizontal)
              </button>
            </div>

            <div className="flex justify-center mb-6">
              <div className={`bg-black rounded-lg overflow-hidden shadow-2xl ${
                appState.aspectRatio === 'vertical' ? 'w-80 h-[568px]' : 'w-full max-w-2xl aspect-video'
              }`}>
                {appState.images.length > 0 && (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <img src={appState.images[0].url} alt="Preview" className="max-w-full max-h-[70%] object-contain mb-4" />
                    <p className="text-white text-sm">{appState.images[0].caption}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-all">
                ▶️ Play Preview
              </button>
              <button
                onClick={exportStory}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all"
              >
                📥 Export Story Data
              </button>
              <button
                onClick={() => {
                  setAppState({
                    selectedDuration: 60,
                    storyPrompt: '',
                    generatedStory: '',
                    selectedVoice: null,
                    audioUrl: null,
                    images: [],
                    aspectRatio: 'vertical'
                  })
                  setCurrentStep(1)
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all"
              >
                🔄 Start Over
              </button>
            </div>

            <div className="bg-blue-900/20 border border-blue-600 rounded-lg p-4">
              <strong className="text-blue-400">ℹ️ Export Info:</strong>
              <p className="text-gray-400 mt-2">This demo exports story data as JSON. In a production environment, this would render a video file with synchronized audio and images.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}