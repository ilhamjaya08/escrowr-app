/**
 * SEO Configuration for Escrowr
 * Centralized SEO management with TypeScript
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
}

export const defaultSEO: SEOConfig = {
  title: 'Escrowr - Professional Freelance Network',
  description: 'Connect with verified professionals through secure smart contract escrow. Transparent, reliable, and efficient freelance marketplace.',
  keywords: [
    'freelance marketplace',
    'smart contract escrow',
    'professional network',
    'secure payments',
    'verified freelancers',
    'project management',
    'talent marketplace',
    'blockchain escrow'
  ],
  image: '/og-image.png',
  type: 'website',
  twitterCard: 'summary_large_image'
};

export const siteConfig = {
  name: 'Escrowr',
  description: defaultSEO.description,
  url: 'https://escrowr.com', // Update with actual domain
  ogImage: '/og-image.png',
  creator: '@escrowr',
  keywords: defaultSEO.keywords,
  authors: [
    {
      name: 'Escrowr Team',
      url: 'https://escrowr.com'
    }
  ]
};

/**
 * Generate meta tags for React Router
 */
export function generateMeta(config: Partial<SEOConfig> = {}): Array<{ title?: string; name?: string; property?: string; content?: string }> {
  const seo = { ...defaultSEO, ...config };
  
  const meta = [
    { title: seo.title },
    { name: 'description', content: seo.description },
    { name: 'keywords', content: seo.keywords?.join(', ') },
    
    // Open Graph
    { property: 'og:title', content: seo.title },
    { property: 'og:description', content: seo.description },
    { property: 'og:type', content: seo.type || 'website' },
    { property: 'og:site_name', content: siteConfig.name },
    
    // Twitter
    { name: 'twitter:card', content: seo.twitterCard || 'summary_large_image' },
    { name: 'twitter:title', content: seo.title },
    { name: 'twitter:description', content: seo.description },
    { name: 'twitter:creator', content: siteConfig.creator },
    
    // Additional meta
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: siteConfig.authors[0].name },
    { name: 'language', content: 'id-ID' },
    { name: 'geo.region', content: 'ID' },
    { name: 'geo.country', content: 'Indonesia' }
  ];

  // Add image if provided
  if (seo.image) {
    meta.push(
      { property: 'og:image', content: seo.image },
      { name: 'twitter:image', content: seo.image }
    );
  }

  // Add URL if provided
  if (seo.url) {
    meta.push({ property: 'og:url', content: seo.url });
  }

  return meta.filter(Boolean);
}

/**
 * Page-specific SEO configurations
 */
export const pageSEO = {
  home: {
    title: 'Escrowr - Professional Freelance Network',
    description: 'Connect with verified professionals through secure smart contract escrow. Find quality projects and talented freelancers in a transparent marketplace.',
    keywords: [
      'freelance marketplace',
      'professional network',
      'smart contract escrow',
      'verified freelancers',
      'secure payments',
      'project marketplace',
      'talent network',
      'blockchain escrow'
    ] as string[]
  },
  
  projects: {
    title: 'Browse Projects - Escrowr',
    description: 'Discover quality freelance projects with secure escrow payments. Find your next opportunity in our professional marketplace.',
    keywords: ['freelance projects', 'remote work', 'project marketplace', 'secure escrow', 'professional opportunities'] as string[]
  },
  
  workers: {
    title: 'Find Workers - Escrowr',
    description: 'Cari freelancer terpercaya di Indonesia dengan sistem reputasi SBT dan pembayaran escrow yang aman.',
    keywords: ['freelancer indonesia', 'cari freelancer', 'worker terpercaya', 'sbt reputation'] as string[]
  }
};