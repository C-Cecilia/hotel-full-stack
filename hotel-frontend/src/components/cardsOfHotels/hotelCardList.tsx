import React from 'react';
import HotelCard from './hotelCard';
import { Hotel } from '../../types/hotel';
import '../../styles/hotelCard.css';

interface HotelCardListProps {
    hotels: Hotel[];
}

const HotelCardList: React.FC<HotelCardListProps> = ({ hotels }) => (
    <div className="hotel-card-list">
        {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
        ))}
    </div>
);

export default HotelCardList;
