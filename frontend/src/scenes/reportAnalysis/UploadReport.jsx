import React, { useState } from "react";
import axios from "axios";
import { marked } from "marked";
import "./UploadReport.css"; // Import CSS for styling

const UploadReport = () => {
    const [file, setFile] = useState(null);
    const [analysis, setAnalysis] = useState("");
    const [isUploading, setIsUploading] = useState(false); // Track upload status

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first!");
            return;
        }

        setIsUploading(true); // Disable the button and change text
        setAnalysis(""); // Clear previous analysis

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://127.0.0.1:8000/reports/upload/", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setAnalysis(response.data.analysis);
        } catch (error) {
            console.error("Error uploading file:", error);
        } finally {
            setIsUploading(false); // Re-enable the button after analysis is received
        }
    };

    return (
        <div className="container">
            <h2 className="upload-heading">Upload Test Report</h2>

            <div className="file-upload-container">
                <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    style={{ display: "none" }} // Hide the input
                />
                <label htmlFor="fileInput" className="file-upload-text">
                    Choose File
                </label>
                <button 
                    onClick={handleUpload} 
                    className="upload-btn" 
                    disabled={isUploading} // Disable button while uploading
                >
                    {isUploading ? "Uploading..." : "Upload"} {/* Change button text */}
                </button>
            </div>

            {analysis && (
                <div className="analysis-container">
                    <h3 className="analysis-heading">Analysis:</h3>
                    <div style={{ textAlign: "left" }} dangerouslySetInnerHTML={{ __html: marked(analysis) }} />
                </div>
            )}
        </div>
    );
};

export default UploadReport;
