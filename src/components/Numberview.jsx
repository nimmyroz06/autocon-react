import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Numberview = () => {
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllUploads = async () => {
    setError(null); // Reset error state before fetching
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await axios.get('http://localhost:3030/numberupload/getAllUploads');
      setUploads(response.data);
      setLoading(false); // Set loading to false after fetching
    } catch (error) {
      setError('Error retrieving upload data.'); // Set error message on failure
      setLoading(false); // Set loading to false if there's an error
    }
  };

  useEffect(() => {
    fetchAllUploads(); // Fetch uploads on component mount
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return (
    <div>
      <p>{error}</p>
      <button onClick={fetchAllUploads} style={{ marginTop: '10px' }}>Retry</button>
    </div>
  );

  return (
    <div>
      <Navbar/>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>All Phone Number Update Documents</h2>
      {uploads.length === 0 ? (
        <p>No upload data available.</p>
      ) : (
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '20px',
          border: '1px solid #ddd'
        }}>
          <thead>
            <tr>
              <th style={{
                border: '1px solid #ddd',
                padding: '12px',
                backgroundColor: '#f2f2f2',
                fontWeight: 'bold',
                textAlign: 'left'
              }}>#</th>
              <th style={{
                border: '1px solid #ddd',
                padding: '12px',
                backgroundColor: '#f2f2f2',
                fontWeight: 'bold',
                textAlign: 'left'
              }}>Registration Certificate</th>
              <th style={{
                border: '1px solid #ddd',
                padding: '12px',
                backgroundColor: '#f2f2f2',
                fontWeight: 'bold',
                textAlign: 'left'
              }}>E-Aadhaar</th>
              <th style={{
                border: '1px solid #ddd',
                padding: '12px',
                backgroundColor: '#f2f2f2',
                fontWeight: 'bold',
                textAlign: 'left'
              }}>Application Form</th>
              <th style={{
                border: '1px solid #ddd',
                padding: '12px',
                backgroundColor: '#f2f2f2',
                fontWeight: 'bold',
                textAlign: 'left'
              }}>Uploaded At</th>
            </tr>
          </thead>
          <tbody>
            {uploads.map((upload, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{index + 1}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>
                  <a href={`http://localhost:3030/${upload.registrationCertificate}`} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
                    View PDF
                  </a>
                </td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>
                  <a href={`http://localhost:3030/${upload.eAadhaar}`} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
                    View PDF
                  </a>
                </td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>
                  <a href={`http://localhost:3030/${upload.applicationForm}`} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
                    View PDF
                  </a>
                </td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>
                  {new Date(upload.uploadedAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default Numberview;
