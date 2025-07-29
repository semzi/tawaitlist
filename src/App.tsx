import React, { useState, useEffect } from 'react'
import './index.css'
import FormInput from './FormInput'

// Custom hook to fetch random profile pictures
const useRandomProfilePictures = (count: number) => {
  const [profilePictures, setProfilePictures] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfilePictures = async () => {
      try {
        // Using DiceBear API for reliable avatar generation
        const pictures = []
        for (let i = 0; i < count; i++) {
          // Generate random avatars using DiceBear API
          const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`
          pictures.push(avatarUrl)
        }
        setProfilePictures(pictures)
      } catch (error) {
        console.error('Error fetching profile pictures:', error)
        // Fallback to default colored circles if API fails
        setProfilePictures([])
      } finally {
        setLoading(false)
      }
    }

    fetchProfilePictures()
  }, [count])

  return { profilePictures, loading }
}

function App(): React.JSX.Element {
  // const [email, setEmail] = useState('')
  const { profilePictures, loading } = useRandomProfilePictures(4)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:')
  }

  return (
    <div className="min-h-screen bg-white">
     
      {/* Header */}
      <header className="text-center py-8">
        <div className="page-padding-x">
          <img src="/logo-text.png" alt="logo" className='h-20 max-w-lg mx-auto' />
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
            Graduation in Early 2025
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pb-12">
        <div className="page-padding-x">
          <h2 className="md:text-4xl text-3xl max-w-lg mx-auto text-center font-bold text-gray-800 mb-8 animate-glass-shine">
            Get early access to a Game-Changing Platform
          </h2>
          <p className="text-gray-600 text-md mb-10 max-w-2xl mx-auto text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-3">
            <div className="mb-4">
                <FormInput
                  type="email"
                  id="email"
                  label='Email Address'
                  placeholder="example@gmail.com"
                  icon='/Vector.png'
                  required
                />
              
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-6 rounded-sm hover:bg-blue-700 transition-colors"
            >
              JOIN THE WAITLIST
            </button>
          </form>

          {/* Social Proof */}
          <div className="flex items-center max-w-lg mx-auto gap-2 text-gray-600">
            <div className="flex -space-x-1">
              {loading ? (
                <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
              ) : (
                profilePictures.map((picture, index) => (
                  <img
                    key={index}
                    src={picture}
                    alt={`Profile ${index + 1}`}
                    className="w-6 h-6 rounded-full border-2 border-white"
                  />
                ))
              )}
            </div>
            <span className='text-sm' >Join 234+ others in the waitlist</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="page-padding-x">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Everything you available need in product
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* AI Chat Feature */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">AI Chat</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Sport Varieties Feature */}
            <div className="bg-blue-600 p-8 rounded-lg shadow-sm text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Sport Varieties</h4>
              <p className="text-blue-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Top News Feature */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Top News</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Screenshot Section */}
      
      {/* Footer */}
      <footer className="py-8 text-center">
        <div className="page-padding-x">
          <p className="text-gray-500 text-sm">
            Copyright © 2025 TikiX. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App 