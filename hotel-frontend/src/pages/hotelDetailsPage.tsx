import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../components/headerFooter/navigationBar";
import Footer from "../components/headerFooter/footer";
import HotelDetails from '../components/detailsOfHotel/hotelDetails';
import {Hotel} from "../types/hotel";
import api from '../services/api'
import '../styles/hotelDetails.css'
import "../styles/headerFooter.css"

const HotelDetailsPage: React.FC = () => {
    const{ id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [hotel, setHotel] = useState<Hotel | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null >(null);

    useEffect(() => {
        setLoading(true);

        const fetchHotel = async () => {
            try {
                const response = await api.get(`/hotels/${id}`);
                setHotel(response.data);
            } catch (error:any) {
                if (error.response && error.response.status === 404) {
                    setError('Hotel not found');
                } else {
                    setError('Failed to fetch hotel details');
        }
        setHotel(null);
    } finally{
        setTimeout(() => setLoading(false), 500);
    }
    };

    fetchHotel();
    }, [id]);

    return(
        <div id="root">
            <Header />
            <main className='hotel-details-main'>
                {loading && <p>Loading hotel details...</p>}
                {!loading && error &&(
                    <div className='error-message'>
                        <p>{error}</p>
                        <button
                            onClick={() => navigate(`/hotels`)}
                            className='go-back-button'
                        >
                            Go Back
                        </button>
                    </div>
                )}
                {!loading && hotel && <HotelDetails hotel={hotel}/>}
            </main>
            <Footer />
        </div>
        );
};

export default HotelDetailsPage;
