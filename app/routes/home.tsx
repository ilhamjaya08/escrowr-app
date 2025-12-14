import type { Route } from "./+types/home";
import { generateMeta, pageSEO } from "~/lib/seo";
import { Navbar } from "~/components/layout";
import { Button, Card, CardContent, CardHeader, CardTitle } from "~/components/ui";

export function meta({}: Route.MetaArgs) {
  return generateMeta(pageSEO.home);
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Secure Freelance
            <br />
            <span className="text-blue-600">Marketplace</span>
            <br />
            for Indonesia
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Platform escrow freelance terpercaya dengan teknologi blockchain Base L2. 
            Aman, transparan, dan mudah digunakan untuk semua.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>🛡️ Base Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>💰 IDRX Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>⚡ Instant Escrow</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Join as Freelancer
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Post a Project
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card variant="elevated" className="text-center p-6">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-blue-600">1,234</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Active Projects</p>
            </CardContent>
          </Card>
          
          <Card variant="elevated" className="text-center p-6">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-green-600">567</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Verified Workers</p>
            </CardContent>
          </Card>
          
          <Card variant="elevated" className="text-center p-6">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-purple-600">89M</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">IDRX Secured</p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How Escrowr Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Create Project</h3>
              <p className="text-gray-600">Post your project and lock funds in secure escrow smart contract</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Get Proposals</h3>
              <p className="text-gray-600">Receive bids from verified workers with SBT reputation badges</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Secure Payment</h3>
              <p className="text-gray-600">Automatic payment release when project is completed successfully</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-gray-900 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of Indonesian freelancers and clients using secure escrow
          </p>
          <Button size="lg" variant="secondary" className="px-8">
            Get Started Now
          </Button>
        </div>
      </main>
    </div>
  );
}
