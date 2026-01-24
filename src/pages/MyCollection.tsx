import { useEffect, useState } from 'react';
import { getFavorites } from '../components/Favorites';
import { useNavigate, useLocation, type Location } from 'react-router-dom';
import type { ILoginNavigateState } from './Login';


export default function FavoritesPage() {
  const [savedImages, setSavedImages] = useState<string[]>([]);
  const location: Location<ILoginNavigateState> = useLocation();
  const navigate = useNavigate();

  const username = location.state?.username ?? "Guest";

  useEffect(() => {
    if (!location.state) navigate("/login");
  }, [location, navigate]);

  useEffect(() => {
    const favorites = getFavorites();
    setSavedImages(favorites);
  }, []);

  return (
    <div>
      <h2>{username}'s Favorites</h2>

      {savedImages.length === 0 ? (
        <p className="text-gray-500">You haven't liked any images yet!</p>
      ) : (
        <div>
          {savedImages.map((url) => (
            <div key={url}>
              <img
                src={url}
                alt="Favorite"
                style={{ marginTop: '20px', maxWidth: '100%', maxHeight: '600px', borderRadius: '10px' }}
              />
              <div>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline"
                >
                  View Full
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
