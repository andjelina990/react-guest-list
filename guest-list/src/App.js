import './App.css';
import React, { useState } from 'react';
const url = 'http://localhost:4000/guests/';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const addGuest = () => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    });
    setFirstName('');
    setLastName('');
  };

  return (
    <div className="container py-5" data-test-id="guest">
      <div className="row">
        <div className="col-6 offset-3">
          <input
            className="form-control mb-3"
            type="text"
            placeholder="First name"
            onInput={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
          />
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Last name"
            onInput={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
          />
          <button className="btn btn-primary form-control" onClick={addGuest}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
