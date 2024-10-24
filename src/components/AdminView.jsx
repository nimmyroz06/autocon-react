import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminView = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUploadedFiles = async () => {
            try {
                const response = await axios.get('http://localhost:3030/files');
                setUploadedFiles(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load uploaded files');
                setLoading(false);
            }
        };

        fetchUploadedFiles();
    }, []);

    if (loading) {
        return <p>Loading files...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="admin-uploads-container">
            <h2>Uploaded Files</h2>
            {uploadedFiles.length === 0 ? (
                <p>No files uploaded yet.</p>
            ) : (
                <table className="files-table">
                    <thead>
                        <tr>
                            <th>File Name</th>
                            <th>File Type</th>
                            <th>File Size (KB)</th>
                            <th>Uploaded On</th>
                            <th>Download Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {uploadedFiles.map((file, index) => (
                            <tr key={index}>
                                <td>{file.fileName}</td>
                                <td>{file.fileType}</td>
                                <td>{(file.fileSize / 1024).toFixed(2)}</td>
                                <td>{new Date(file.uploadDate).toLocaleString()}</td>
                                <td>
                                    <a href={`http://localhost:3030/uploads/${file.fileName}`} download>
                                        Download
                                    </a>
                                </td>
                                {/* Display local path with backslashes for reference */}
                                <td>
                                    <p>{`C:\\path\\to\\your\\uploads\\${file.fileName}`}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default AdminView;
