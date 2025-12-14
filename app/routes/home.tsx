import type { Route } from "./+types/home";
import { generateMeta, pageSEO } from "~/lib/seo";
import { Navbar, Footer } from "~/components/layout";
import { HeroSection, CategoriesSection, ProjectCards, TopWorkers } from "~/components/dashboard";

export function meta({}: Route.MetaArgs) {
  return generateMeta(pageSEO.home);
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Dashboard */}
      <main className="container mx-auto px-6 py-8">
        {/* Top Section - Hero & Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left - Hero Section */}
          <div className="lg:col-span-2">
            <HeroSection />
          </div>
          
          {/* Right - Categories & Quick Actions */}
          <div className="lg:col-span-1">
            <CategoriesSection />
          </div>
        </div>

        {/* Bottom Section - Projects & Workers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Project Cards */}
          <div className="lg:col-span-2">
            <ProjectCards />
          </div>
          
          {/* Right - Top Workers */}
          <div className="lg:col-span-1">
            <TopWorkers />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
