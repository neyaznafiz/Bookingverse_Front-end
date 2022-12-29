import useFetch from "../../Hooks/useFetch";
import React, { useState } from "react";
import { TbCircleX } from "react-icons/tb";

const ReserveModal = ({ setOpenBookModal, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading } = useFetch(
    `http://localhost:5000/api/hotels/room/${hotelId}`
  );

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
    
    const handleReserve = () => {
    
}

  return (
    <div>
      <div>
        <TbCircleX
          onClick={() => setOpenBookModal(false)}
          className="text-5xl text-black cursor-pointer"
        />

        <span>Select your rooms: </span>
        {data.map((item) => (
          <div>
            <div>
              <div>{item.title}</div>
              <div>{item.desc}</div>
              <div>
                Max People: <b>{item.maxPeople}</b>
              </div>
              <div>{item.price}</div>
            </div>

            {item.roomNumbers.map((roomNumber) => (
              <div>
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={handleSelect}
                />
              </div>
            ))}
          </div>
        ))}
              
              <button onClick={handleReserve}>Reserve Now</button>
      </div>
    </div>
  );
};

export default ReserveModal;
