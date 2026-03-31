import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vigia.app';
  
  const legalPages = [
    'terminos-y-condiciones',
    'politica-de-privacidad',
    'politica-tratamiento-datos'
  ].map(slug => ({
    url: `${baseUrl}/legal/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...legalPages,
  ]
}
