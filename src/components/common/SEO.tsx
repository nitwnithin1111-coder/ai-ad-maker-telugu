import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND } from '@/data/constants';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'profile';
  articleDate?: string;
  structuredData?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  ogImage = '/og/og-default.svg',
  type = 'website',
  articleDate,
  structuredData,
}) => {
  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const fullUrl = `${BRAND.domain}${cleanPath === '/' ? '' : cleanPath}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BRAND.domain}${ogImage}`;

  // Base Organization & LocalBusiness JSON-LD
  const defaultOrgSchema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'Organization'],
    name: BRAND.name,
    url: BRAND.domain,
    logo: `${BRAND.domain}/images/logo/ai-ad-maker-telugu-logo.jpg`,
    image: `${BRAND.domain}/og/og-default.svg`,
    description: BRAND.tagline,
    priceRange: '₹300 - ₹5000',
    areaServed: [
      {
        '@type': 'State',
        name: 'Telangana',
      },
      {
        '@type': 'State',
        name: 'Andhra Pradesh',
      },
    ],
    sameAs: [BRAND.instagram],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Telugu'],
    },
  };

  const allSchemas: object[] = [defaultOrgSchema];
  if (structuredData) {
    if (Array.isArray(structuredData)) {
      allSchemas.push(...structuredData);
    } else {
      allSchemas.push(structuredData);
    }
  }

  return (
    <Helmet>
      {/* HTML Language attribute */}
      <html lang="en" />

      {/* Primary Titles and Descriptions */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={BRAND.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Article publication date if present */}
      {articleDate && <meta property="article:published_time" content={articleDate} />}

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">{JSON.stringify(allSchemas)}</script>
    </Helmet>
  );
};

export default SEO;
