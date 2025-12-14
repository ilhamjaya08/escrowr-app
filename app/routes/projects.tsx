import type { Route } from "./+types/projects";
import { generateMeta, pageSEO } from "~/lib/seo";
import { Navbar, Footer, MobileNav } from "~/components/layout";
import { 
  ProjectsHero, 
  ProjectsFilters, 
  ProjectsGrid, 
  ProjectsStats,
  FeaturedProjects 
} from "~/components/projects";

export function meta({}: Route.MetaArgs) {
  return generateMeta(pageSEO.projects);
}

export default function Projects() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F8F8' }}>
      <Navbar />
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 pb-20 md:pb-8">
        {/* Hero Section */}
        <ProjectsHero />
        
        {/* Asymmetric Layout */}
        <div className="grid grid-cols-12 gap-6 mt-8">
          {/* Left Column - Filters & Stats */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <ProjectsFilters />
            <ProjectsStats />
          </div>
          
          {/* Right Column - Projects Grid */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            <FeaturedProjects />
            <ProjectsGrid />
          </div>
        </div>
      </main>
      
      <Footer />
      <MobileNav />
    </div>
  );
}