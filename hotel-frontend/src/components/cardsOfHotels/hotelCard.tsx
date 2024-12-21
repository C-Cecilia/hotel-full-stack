import React from "react";
import { useNavigate } from "react-router-dom";
import { Hotel } from "../../types/hotel";
import '../../styles/hotelCard.css'

interface HotelCardProps {
    hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
    const{id, name, location, rating, imageUrl, datesOfTravel, boardBasis, rooms } = hotel;
    const navigate = useNavigate();
    
    // Calculating the total rooms of the hotel
    const totalRooms = rooms.reduce((sum, room) => sum + room.amount, 0);

    const handleClick = () => {
        navigate(`/hotels/${id}`);
    }
    
    return(
        <div
            className="hotel-card"
            onClick={handleClick}
            role = "button"
            tabIndex={0}
            onKeyPress={(e) => {
                    if (e.key === "Enter") handleClick();
            }}
            style={ {cursor:"pointer"}}>
                <img
                src={imageUrl}
                alt={name}
                className = "hotel-card-image"
                onError={(e) => {e.currentTarget.src = "https://via.placeholder.com/150"}}/>
                <div className="hotel-card-details">
                    <h3 className="hotel-card-name">{name}</h3>
                    <p><strong>Location: </strong>{location}</p>
                    <p><strong>Rating: </strong>{rating}</p>
                    <p><strong>Dates of Travel: </strong>{datesOfTravel.join(" to ")}</p>
                    <p><strong>Board Basis: </strong>{boardBasis}</p>
                    <p><strong>Total Rooms: </strong>{totalRooms}</p>
                    <ul>
                        {rooms.map((room, index) =>(
                            <li key={index}>{room.roomType}: {room.amount}</li>
                        ))}
                    </ul>
                </div>
            </div>
            
    )
}
export default HotelCard;
