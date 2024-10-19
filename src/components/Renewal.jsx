import axios from 'axios'
import React, { useState } from 'react'

const Renewal = () => {


    const [selectedFile, setSelectedFile] = useState(null)
    const [message, setMessage] = useState('')

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf' && file.size <= 200 * 1024) {
            setSelectedFile(file)
            setMessage('File Uploaded Successfully')
        } else {
            setMessage('Please select a valid PDF file less than 200KB.')
            setSelectedFile(null);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            setMessage('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setMessage(response.data.message)
        } catch (error) {
            setMessage('File upload failed')
        }
    }


    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h5 className="card-title">Upload Renewal Document</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="file" accept=".pdf" onChange={handleFileChange} className="form-control-file" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Upload</button>
                    </form>
                    {message && <p className="mt-3">{message}</p>}
                </div>
            </div>
        </div>
    )
}

export default Renewal