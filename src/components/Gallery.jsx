// src/components/Gallery.jsx
import { useEffect, useState } from 'react';
import TourCard from './TourCard';

const url = 'https://course-api.com/react-tours-project';

function Gallery({ tours, setTours, onRemove }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch tours on component mount
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchTours();
  }, [setTours]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching tours. Try again later.</h2>;

  return (
    <section className="gallery">
      {tours.map(tour => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
}

export default Gallery;
