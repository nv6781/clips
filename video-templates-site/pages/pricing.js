import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '3 videos per month',
        'Basic templates',
        'Watermark on videos',
        '720p export quality',
        'Community support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      features: [
        'Unlimited videos',
        'All premium templates',
        'No watermark',
        '4K export quality',
        'Priority support',
        'Custom branding',
        'Advanced analytics'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Business',
      price: '$49',
      period: 'per month',
      features: [
        'Everything in Pro',
        'Team collaboration (5 users)',
        'API access',
        'Custom templates',
        'Dedicated support',
        'White-label option',
        'Advanced integrations'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <>
      <Head>
        <title>Pricing - Video Templates</title>
        <meta name="description" content="Choose the perfect plan for your video creation needs" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <Navbar />
        
        <main className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that's right for you. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-blue-600 to-blue-700 transform scale-105' 
                    : 'bg-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-300 ml-2">/ {plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.popular ? 'text-white' : 'text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-400">
                  Yes! You can cancel your subscription at any time. No questions asked.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-gray-400">
                  We offer a 14-day money-back guarantee. If you're not satisfied, we'll refund your payment.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-gray-400">
                  Yes, you can change your plan at any time. Changes take effect immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Ad Integration Info */}
          <div className="mt-20 bg-gray-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Free Plan Supported by Ads</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our free plan is supported by Google AdSense. Upgrade to Pro or Business to remove ads 
              and unlock premium features.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
