import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './renewal.css'; // Adjust the path to your CSS file as necessary
import Navbar from './Navbar';

const Ownershipview = () => {
    const [transfers, setTransfers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTransfers = async () => {
            try {
                const response = await axios.get('http://localhost:3030/ownershiptransfers');
                setTransfers(response.data);
            } catch (err) {
                setError('Error fetching ownership transfers');
            } finally {
                setLoading(false);
            }
        };

        fetchTransfers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='background-div'>
            <Navbar/>
            <center>
                <h1><b>Ownership Transfer Records</b></h1>
            </center>
            <div className='container2'>
                <div className="card">
                    <div className="card-body2">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Owner's Name</th>
                                    <th>Registration Certificate</th>
                                    <th>Buyer's Aadhaar</th>
                                    <th>Form 29</th>
                                    <th>Form 30</th>
                                    <th>Transfer Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transfers.map((transfer, index) => (
                                    <tr key={index}>
                                        <td>{transfer.ownerName}</td>
                                        <td><a href={`http://localhost:3030/${transfer.registrationCertificate}`} target="_blank" rel="noopener noreferrer">View</a></td>
                                        <td><a href={`http://localhost:3030/${transfer.buyersAadhaar}`} target="_blank" rel="noopener noreferrer">View</a></td>
                                        <td><a href={`http://localhost:3030/${transfer.form29}`} target="_blank" rel="noopener noreferrer">View</a></td>
                                        <td><a href={`http://localhost:3030/${transfer.form30}`} target="_blank" rel="noopener noreferrer">View</a></td>
                                        <td>{new Date(transfer.transferDate).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ownershipview;
