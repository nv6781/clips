import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { useState, useRef, useEffect } from 'react'

export default function VideoClipper() {
  const [videoFile, setVideoFile] = useState(null)
  const [videoUrl, setVideoUrl] = useState(null)
  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [statusType, setStatusType] = useState('')
  
  const videoRef = useRef(null)
  const timelineRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setVideoFile(file)
      const url = URL.createObjectURL(file)
      setVideoUrl(url)
      setStatusMessage('')
    }
  }

  const handleVideoLoaded = () => {
    if (videoRef.current) {
      const dur = videoRef.current.duration
      setDuration(dur)
      setEndTime(dur)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const setCurrentAsStart = () => {
    if (videoRef.current) {
      setStartTime(videoRef.current.currentTime)
    }
  }

  const setCurrentAsEnd = () => {
    if (videoRef.current) {
      setEndTime(videoRef.current.currentTime)
    }
  }

  const previewClip = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime
      videoRef.current.play()
    }
  }

  useEffect(() => {
    if (videoRef.current && currentTime >= endTime && videoRef.current.played.length > 0) {
      videoRef.current.pause()
    }
  }, [currentTime, endTime])

  const downloadClip = async () => {
    if (!videoRef.current) return
    
    if (endTime <= startTime) {
      setStatusMessage('End time must be greater than start time')
      setStatusType('error')
      return
    }

    setIsProcessing(true)
    setStatusMessage('Processing video clip...')
    setStatusType('info')

    try {
      const stream = videoRef.current.captureStream()
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp8,opus'
      })
      
      const chunks = []
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data)
        }
      }
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `clip_${startTime.toFixed(0)}_to_${endTime.toFixed(0)}.webm`
        a.click()
        URL.revokeObjectURL(url)
        setStatusMessage('Clip downloaded successfully!')
        setStatusType('success')
        setIsProcessing(false)
      }
      
      videoRef.current.currentTime = startTime
      
      videoRef.current.onseeked = () => {
        mediaRecorder.start()
        videoRef.current.play()
        
        const checkTime = setInterval(() => {
          if (videoRef.current.currentTime >= endTime) {
            videoRef.current.pause()
            mediaRecorder.stop()
            clearInterval(checkTime)
          }
        }, 100)
      }
      
    } catch (error) {
      setStatusMessage('Error creating clip: ' + error.message)
      setStatusType('error')
      setIsProcessing(false)
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const clipDuration = endTime - startTime

  return (
    <>
      <Head>
        <title>Video Clipper - Free Online Video Trimmer | VideoTemplates</title>
        <meta name="description" content="Trim and clip your videos online for free. No watermarks, no sign-up required." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <Navbar />
        
        <main className="container mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-white">Video Clipper</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm mb-4">
              FREE TOOL
            </div>
            <h1 className="text-5xl font-bold mb-4">Video Clipper</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Trim and clip your videos quickly and easily. Select start and end times, preview your clip, and download.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Upload Section */}
            <div className="bg-gray-800 rounded-lg p-8 mb-6">
              <label 
                htmlFor="videoUpload" 
                className="block w-full p-8 border-2 border-dashed border-gray-600 rounded-lg text-center cursor-pointer hover:border-blue-500 transition-colors"
              >
                <div className="text-5xl mb-4">📁</div>
                <p className="text-xl font-semibold mb-2">
                  {videoFile ? videoFile.name : 'Choose Video File'}
                </p>
                <p className="text-gray-400">
                  Click to upload or drag and drop
                </p>
                <input
                  id="videoUpload"
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Video Player Section */}
            {videoUrl && (
              <div className="bg-gray-800 rounded-lg p-8 mb-6">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  controls
                  onLoadedMetadata={handleVideoLoaded}
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full rounded-lg mb-6"
                />

                {/* Time Controls */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Start Time (seconds)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max={duration}
                      step="0.1"
                      value={startTime}
                      onChange={(e) => setStartTime(Math.min(parseFloat(e.target.value) || 0, endTime))}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      End Time (seconds)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max={duration}
                      step="0.1"
                      value={endTime}
                      onChange={(e) => setEndTime(Math.max(parseFloat(e.target.value) || 0, startTime))}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Timeline Visualization */}
                <div className="mb-6">
                  <div className="h-2 bg-gray-700 rounded-full relative overflow-hidden">
                    <div 
                      className="absolute h-full bg-blue-600 opacity-50"
                      style={{
                        left: `${(startTime / duration) * 100}%`,
                        width: `${((endTime - startTime) / duration) * 100}%`
                      }}
                    />
                    <div 
                      className="absolute h-full w-1 bg-blue-400"
                      style={{ left: `${(currentTime / duration) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>{formatTime(startTime)}</span>
                    <span className="font-semibold text-white">
                      Clip Duration: {clipDuration.toFixed(1)}s
                    </span>
                    <span>{formatTime(endTime)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button
                    onClick={setCurrentAsStart}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Set as Start
                  </button>
                  <button
                    onClick={setCurrentAsEnd}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Set as End
                  </button>
                  <button
                    onClick={previewClip}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Preview Clip
                  </button>
                  <button
                    onClick={downloadClip}
                    disabled={isProcessing}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? 'Processing...' : 'Download Clip'}
                  </button>
                </div>

                {/* Status Message */}
                {statusMessage && (
                  <div className={`mt-6 p-4 rounded-lg ${
                    statusType === 'success' ? 'bg-green-900/30 border border-green-600' :
                    statusType === 'error' ? 'bg-red-900/30 border border-red-600' :
                    'bg-blue-900/30 border border-blue-600'
                  }`}>
                    <p className="font-semibold">{statusMessage}</p>
                  </div>
                )}
              </div>
            )}

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold mb-2">Fast Processing</h3>
                <p className="text-gray-400 text-sm">
                  Clip your videos directly in your browser. No uploads to servers.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-lg font-semibold mb-2">100% Private</h3>
                <p className="text-gray-400 text-sm">
                  Your videos never leave your device. Complete privacy guaranteed.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-3xl mb-3">💯</div>
                <h3 className="text-lg font-semibold mb-2">No Watermarks</h3>
                <p className="text-gray-400 text-sm">
                  Free forever with no watermarks. No sign-up required.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
