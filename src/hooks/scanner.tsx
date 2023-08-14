import { useState, useEffect } from "react";
import axios from "axios";

const useFetchSitemap = (url) => {
  const [sitemap, setSitemap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSitemap = async () => {
    try {
      const response = await axios.get(`${url}/sitemap.xml`);
      setSitemap(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { sitemap, loading, error, fetchSitemap };
};

export default useFetchSitemap;
