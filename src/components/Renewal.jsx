import axios from 'axios'
import React, { useState } from 'react'

const Renewal = () => {


    const [selectedFile, setSelectedFile] = useState(null)
    const [message, setMessage] = useState('')

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file && file.type === 'application/pdf' && file.size <= 200 * 1024) {
            setSelectedFile(file)
            setMessage('File Uploaded Successfully')
        } else if (file && file.size > 200 * 1024) {
            window.alert('File size should be less than 200KB.')
            setSelectedFile(null)
        } else {
            window.alert('Please select a valid PDF file.')
            setSelectedFile(null)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!selectedFile) {
            window.alert('No file selected.')
            return
        }

        const formData = new FormData()
        formData.append('File', selectedFile)

        try {
            const response = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (response.status === 200) {
                window.alert('File uploaded successfully.')
            }
            
        } catch (error) {
            window.alert('File upload failed.')
            setSelectedFile(null)
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