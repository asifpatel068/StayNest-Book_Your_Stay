import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const HostAccount = () => {
  const { hostId } = useParams();

  const [host, setHost] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

 
  useEffect(() => {
    fetch(`https://staynest.onrender.com/hosts/${hostId}`)
      .then((response) => response.json())
      .then((data) => {
        setHost(data);
        setFormData(data);
      })
      .catch((error) => console.error('Error fetching host:', error));
  }, [hostId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditSaveToggle = () => {
    setEditMode((prev) => !prev);
  };

  const handleSave = () => {
   
    fetch(`http://localhost:5000/hosts/${hostId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(() => {
   
        fetch(`http://localhost:5000/hosts/${hostId}`)
          .then((response) => response.json())
          .then((data) => {
            setHost(data);
            setFormData(data);
            alert("success")
          })
          .catch((error) => console.error('Error fetching host:', error));
        setEditMode(false);
      })
      .catch((error) => console.error('Error updating host:', error));
  };

  return (
    <div>
      <h1>Host Account</h1>
      {host && (
        <div>
          <div>
            <label>Name:</label>
            {editMode ? (
              <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
            ) : (
              <span>{host.name}</span>
            )}
          </div>
          {/* Add other fields here */}
          <div>
            <label>Host Status:</label>
            {editMode ? (
              <input
                type="checkbox"
                name="host_status"
                checked={formData.host_status || false}
                onChange={handleChange}
              />
            ) : (
              <span>{host.host_status ? 'Active' : 'Inactive'}</span>
            )}
          </div>
          <div>
            {editMode ? (
              <button onClick={handleSave}>Save</button>
            ) : (
              <button onClick={handleEditSaveToggle}>Edit</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HostAccount;
