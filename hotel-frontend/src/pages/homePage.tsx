import React, { useState, useEffect } from 'react';
import HotelCardList from '../components/cardsOfHotels/hotelCardList';
import Header from '../components/headerFooter/navigationBar';
import Footer from '../components/headerFooter/footer';
import { Hotel } from '../types/hotel';
import api from '../services/api';
import '../styles/hotelCard.css'

const HomePage: React.FC = () => {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHotels = async () => {
            setLoading(true);
            
            const fetchTimeout = new Promise((resolve) =>
                setTimeout(resolve, 500));
            const fetchHotels = api.get('/hotels')
                .then((response) => {
                    setHotels(response.data);
                    setError(null);
                })
                .catch(() => {
                    setError("Failed to fetch hotels");
                });

                await Promise.all([fetchTimeout, fetchHotels]);

                setLoading(false);
            };
            fetchHotels();
        },[]);

    return(
        <div>
            <Header />
            <main className={`content-container ${loading ? 'loading-state' : ''}`}>
                {loading && <div className="loading-message">Loading hotels...</div>}
                {!loading && error && <p>{error}</p>}
                {!loading && !error && <HotelCardList hotels={hotels} />}
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
