import React from 'react';
import Guest from './Guest';
function AllGuests({ guests }) {
  let allGuests = guests.map((guest, index) => {
    return (
      <Guest
        firstName={guest.firstName}
        lastName={guest.lastName}
        attending={guest.attending}
        id={guest.id}
        key={index}
      />
    );
  });
  return allGuests;
}
export default AllGuests;
