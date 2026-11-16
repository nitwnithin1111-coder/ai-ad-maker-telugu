import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { BRAND } from '@/data/constants';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  // Build JSON-LD structured data for BreadcrumbList
  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BRAND.domain,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.path ? `${BRAND.domain}${item.path.startsWith('/') ? item.path : `/${item.path}`}` : undefined,
      })),
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(breadcrumbListSchema)}</script>

      <nav
        aria-label="Breadcrumb"
        className="py-3 px-4 sm:px-6 max-w-7xl mx-auto w-full flex items-center text-xs sm:text-sm text-zinc-400 overflow-x-auto whitespace-nowrap"
      >
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-cyan-400 transition-colors focus:outline-none focus:text-cyan-400"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;

            return (
              <li key={idx} className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0" />
                {isLast || !item.path ? (
                  <span className="text-zinc-200 font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-cyan-400 transition-colors focus:outline-none focus:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
