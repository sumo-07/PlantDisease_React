import React, { useState } from "react";
import "../css/diagnose.css";   // Import CSS

export const Diagnose = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            setPreview(URL.createObjectURL(file));
            setResult(null);
        }
    };

    const handleAnalyze = () => {
        if (!selectedImage) {
            alert("Please upload a plant image first.");
            return;
        }

        // Fake backend response with doctor data
        setTimeout(() => {
            setResult({
                disease: "Powdery Mildew",
                description:
                    "Powdery mildew is a fungal disease that forms white powder-like spots on leaves. It thrives in low humidity and poor ventilation.",
                solutions: [
                    "Remove all infected leaves immediately.",
                    "Improve airflow around the plant.",
                    "Spray neem oil on affected areas.",
                    "Avoid overhead watering."
                ],
                doctors: [
                    {
                        name: "Dr. Aman Sharma",
                        specialization: "Plant Pathologist - Fungal Diseases",
                        phone: "+91 98765 43210",
                        img: "https://randomuser.me/api/portraits/men/32.jpg"
                    },
                    {
                        name: "Dr. Priya Khanna",
                        specialization: "Botanist - Leaf Infection Specialist",
                        phone: "+91 77889 55001",
                        img: "https://randomuser.me/api/portraits/women/44.jpg"
                    },
                    {
                        name: "Dr. Rohit Verma",
                        specialization: "Agricultural Scientist - Crop Care",
                        phone: "+91 90909 12345",
                        img: "https://randomuser.me/api/portraits/men/76.jpg"
                    }
                ]
            });
        }, 1200);
    };

    return (
        <div className="diagnose-container">
            <h1 className="diagnose-heading">🌿 Diagnose Your Plant</h1>
            <p className="diagnose-subheading">
                Upload a plant image and get disease predictions with possible treatments.
            </p>

            <div className="upload-box">
                {!preview ? (
                    <label className="upload-label">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: "none" }}
                        />
                        📤 Click to Upload Image
                    </label>
                ) : (
                    <img src={preview} alt="preview" className="preview-image" />
                )}
            </div>

            <button className="analyze-btn" onClick={handleAnalyze}>
                🔍 Analyze Plant
            </button>

            {result && (
                <div className="result-section">
                    <h2 className="result-title">🩺 Detected Disease:</h2>
                    <h3 className="disease-name">{result.disease}</h3>

                    <p className="disease-description">{result.description}</p>

                    <h3 className="solution-title">✅ Solutions:</h3>
                    <ul className="solution-list">
                        {result.solutions.map((s, i) => (
                            <li key={i} className="solution-item">{s}</li>
                        ))}
                    </ul>

                    {/* Doctors Dashboard */}
                    <h3 className="doctor-section-title">👨‍⚕️ Recommended Plant Doctors</h3>

                    <div className="doctor-grid">
                        {result.doctors.map((doc, index) => (
                            <div className="doctor-card" key={index}>
                                <img src={doc.img} alt={doc.name} className="doctor-img" />
                                <h4 className="doctor-name">{doc.name}</h4>
                                <p className="doctor-specialty">{doc.specialization}</p>
                                <p className="doctor-phone">📞 {doc.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
