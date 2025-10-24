import { useEffect } from 'react';

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

interface DocumentHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

export const useDocumentHead = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogType = 'website',
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
}: DocumentHeadProps) => {
  useEffect(() => {
    // Set document title
    if (title) {
      document.title = title;
    }

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, content: string) => {
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (selector.includes('name=')) {
          meta.name = selector.split('name="')[1].split('"')[0];
        } else if (selector.includes('property=')) {
          meta.setAttribute('property', selector.split('property="')[1].split('"')[0]);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update meta tags
    if (description) {
      updateMetaTag('meta[name="description"]', description);
    }

    if (keywords) {
      updateMetaTag('meta[name="keywords"]', keywords);
    }

    if (ogTitle) {
      updateMetaTag('meta[property="og:title"]', ogTitle);
    }

    if (ogDescription) {
      updateMetaTag('meta[property="og:description"]', ogDescription);
    }

    if (ogType) {
      updateMetaTag('meta[property="og:type"]', ogType);
    }

    if (ogUrl) {
      updateMetaTag('meta[property="og:url"]', ogUrl);
    }

    if (twitterCard) {
      updateMetaTag('meta[name="twitter:card"]', twitterCard);
    }

    if (twitterTitle) {
      updateMetaTag('meta[name="twitter:title"]', twitterTitle);
    }

    if (twitterDescription) {
      updateMetaTag('meta[name="twitter:description"]', twitterDescription);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogType, ogUrl, twitterCard, twitterTitle, twitterDescription]);
};
