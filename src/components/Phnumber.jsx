import axios from 'axios'
import React, { useState } from 'react'
import './renewal.css'

const Phnumber = () => {

  const [selectedFiles, setSelectedFiles] = useState([null, null, null]);
  const [messages, setMessages] = useState([]);
  const [isUploading, setIsUploading] = useState(false)


  const fileUploadTexts = [
      "Registration Certificate ",
      "E-Aadhaar",
      "Application Form of Phone Number Updation"
  ];

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    const newMessages = [...messages];
    if (file) {
        if (file.type === 'application/pdf' && file.size <= 200 * 1024) {
            const updatedFiles = [...selectedFiles];
            updatedFiles[index] = file;
            setSelectedFiles(updatedFiles);
            newMessages[index] = `Selected file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
            setMessages(newMessages);
        } else if (file.size > 200 * 1024) {
            newMessages[index] = 'File size should be less than 200KB.';
            alert("Upload file size less than 200KB");
            setSelectedFiles(prev => {
                const updatedFiles = [...prev];
                updatedFiles[index] = null;
                return updatedFiles;
            });
        } else {
            newMessages[index] = 'Please select a valid PDF file.';
            setSelectedFiles(prev => {
                const updatedFiles = [...prev];
                updatedFiles[index] = null;
                return updatedFiles;
            });
        }
    }
    setMessages(newMessages);
};

const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFiles.every(file => file === null)) {
        setMessages(['No files selected.']);
        return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file, index) => {
        if (file) {
            formData.append(`file${index + 1}`, file);
        }
    });

    try {
        setIsUploading(true);
        setMessages(['Uploading...']);

        const response = await axios.post('http://localhost:3030/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 200) {
            setMessages(['Files uploaded successfully.']);
            alert("Files Uploaded Successfully")
            setSelectedFiles([null, null, null]); // Reset the selected files
        } else {
            setMessages(['File upload failed. Please try again.']);
        }
    } catch (error) {
        console.error('Upload error:', error);
        if (error.response) {
            setMessages([`File upload failed: ${error.response.data.message || error.message}`]);
        } else {
            setMessages(['File upload failed: No response received from the server.']);
        }
    } finally {
        setIsUploading(false);
    }
};

const allFilesSelected = selectedFiles.every(file => file !== null)


  return (
    <div className='background-div'>
            <center>
                <br />
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1><b>REGISTRATION RENEWAL</b></h1>
                </div>
            </center>
            <div className='container2'>
            <div className="card">
                <div className="card-body2"><br></br>
                    <center>
                        <h4 className="card-title"><u>Upload Documents For Registration Renewal</u></h4>
                        <br />
                        <form onSubmit={handleSubmit}>
                            {selectedFiles.map((file, index) => (
                                <div className="form-group mt-3" key={index}>
                                    <br></br>
                                    <label>{fileUploadTexts[index]}</label>
                                    <br></br><br></br>
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={(e) => handleFileChange(e, index)}
                                        className="form-control-file"
                                        disabled={isUploading}
                                    />
                                    {/* {messages[index] && <small className="text-danger">{messages[index]}</small>} */}
                                </div>
                            ))}<br></br>
                            <button type="submit" className="btn btn-primary mt-3" disabled={isUploading || !allFilesSelected}>
                                {isUploading ? 'Uploading...' : 'Upload'}
                            </button>
                        </form>
                        {messages.length > 0 && (
                            <div className="mt-3">
                                {messages.map((msg, idx) => (
                                    <p key={idx}>{msg}</p>
                                ))}
                            </div>
                        )}
                        {/* {messages.length > 3 && <p className="mt-3">{messages.join(', ')}</p>} */}
                    </center>
                </div><br></br>
            </div>
            </div>
        </div>
    );
}


export default Phnumber