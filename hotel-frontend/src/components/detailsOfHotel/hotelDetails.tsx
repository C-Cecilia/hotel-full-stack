import React from 'react';
import { Hotel } from '../../types/hotel';
import '../../styles/hotelDetails.css';

interface HotelDetailsProps {
    hotel: Hotel;
}

const HotelDetails: React.FC<HotelDetailsProps> = ({ hotel }) => {
    return(
        <div className="hotel-details-page">
            <h1 className='hotel-details-header'>{hotel.name}</h1>
            <img
        src={hotel.imageUrl}
        alt={hotel.name}
        className="hotel-details-image"
        onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/300";
        }}
        />
            <div className="hotel-details-content">
                <p><strong>Location:</strong> {hotel.location}</p>
                <p><strong>Rating:</strong> {hotel.rating}</p>
                <p><strong>Dates of Travel:</strong> {hotel.datesOfTravel.join(" to ")}</p>
                <p><strong>Board Basis:</strong> {hotel.boardBasis}</p>
                <p><strong>Total Rooms:</strong> {hotel.rooms.reduce((sum, room) => sum + room.amount, 0)}</p>
                <ul>
                    {hotel.rooms.map((room, index) => (
                        <li key={index}>{room.roomType}: {room.amount}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HotelDetails;
