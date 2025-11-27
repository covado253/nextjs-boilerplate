'use client'
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function Dashboard() {
  const supabase = createClientComponentClient()
  const [points, setPoints] = useState(0)

  const connectX = () => {
    // X OAuth flow here
    window.location.href = 'https://twitter.com/i/oauth2/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=https://p.fikratuljannah.co.ke&scope=tweet.read users.read offline.access&state=state&code_challenge=challenge&code_challenge_method=plain'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-petra-green to-petra-yellow p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">PetraEx Pioneers Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Your Points: {points}</h2>
        <button onClick={connectX} className="bg-petra-yellow text-black px-4 py-2 rounded mb-2 w-full">
          Connect with X
        </button>
        <button className="bg-petra-green text-white px-4 py-2 rounded mb-2 w-full">
          Connect with YouTube
        </button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded w-full">
          Join Telegram
        </button>
      </div>
    </div>
  )
}
