import React from 'react';
import useFetchSitemap from '@/hooks/scanner';

const SitemapViewer = (props) => {

  if (props.loading) {
    return <p>Loading...</p>;
  }

  if (props.error) {
    return <p>Error: {props.error.message}</p>;
  }

  return (
    <div>
      <h1>Sitemap</h1>
      <pre>{props.url}</pre>
      <pre>{props.sitemap}</pre>
      <pre>{JSON.stringify(props.xmlData)}</pre>
    </div>
  );
};

export default SitemapViewer;
