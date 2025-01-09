import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MyLoader from "./MyLoader";

const PortfolioDetails = () => {
    const { id } = useParams(); // Get the dynamic id from the URL
    const [portfolio, setPortfolio] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/resumes/portfolio/${id}`);
                setPortfolio(response.data.portfolio);
            } catch (err) {
                setError(err.message || "Error fetching portfolio.");
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolio();
    }, [id]);

    if (loading) return <><MyLoader></MyLoader></>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="container">
            <div className="container1">
                <div className="leftPanel">
                    <div>
                        {portfolio.images?.length > 0 ? (
                            portfolio.images.map(image => (
                                <img
                                    key={image.id}
                                    src={`http://localhost:5001/${image.imageUrl}`}
                                    alt={image.imageName}
                                    className="image"
                                />
                            ))
                        ) : (
                            <p>No images available</p>
                        )}
                    </div>
                    <div>
                        <button
                            className="nav-link"
                            onClick={() =>
                                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Contact
                        </button>
                        <button
                            className="nav-link"
                            onClick={() =>
                                document.getElementById('education').scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Education
                        </button>
                        <button
                            className="nav-link"
                            onClick={() =>
                                document.getElementById('expertise').scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Expertise
                        </button>
                        <button
                            className="nav-link"
                            onClick={() =>
                                document.getElementById('interest').scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Interest
                        </button>
                        <button
                            className="nav-link"
                            onClick={() =>
                                document.getElementById('language').scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Language
                        </button>
                    </div>
                </div>
                <div className="rightPanel">
                    <div>
                        <h2>{portfolio.name || "Portfolio Name"}</h2>
                        <h5>{portfolio.describeYou || "No description available"}</h5>
                    </div>
                    <div id="contact">
                    <h6>Description</h6>
                        <p>
                        {portfolio.description || "No description available"}
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h6>Contact Info</h6>
                        <ul>
                            <li><strong>Gmail:</strong> {portfolio.contact?.gmail || "N/A"}</li>
                            <li><strong>Phone:</strong> {portfolio.contact?.contact || "N/A"}</li>
                            <li><strong>Address:</strong> {portfolio.contact?.address || "N/A"}</li>
                        </ul>
                    </div>
                    <hr />
                    <div id="education">
                        <h6>Education Info</h6>
                        <ul>
                            <li><strong>Institute:</strong> {portfolio.education?.institute || "N/A"}</li>
                            <li><strong>Course:</strong> {portfolio.education?.course || "N/A"}</li>
                        </ul>
                    </div>
                    <hr />
                    <div id="expertise">
                        <h6>Skills and Expertise</h6>
                        <ul>
                            {portfolio.skills?.length > 0 ? (
                                portfolio.skills.map(skill => <li key={skill.id}>{skill.skill}</li>)
                            ) : (
                                <li>No skills listed</li>
                            )}
                        </ul>
                    </div>
                    <hr />
                    <div id="interest">
                        <h6>Interests</h6>
                        <ul>
                            {portfolio.interest?.length > 0 ? (
                                portfolio.interest.map(interest => <li key={interest.id}>{interest.name}</li>)
                            ) : (
                                <li>No interests available</li>
                            )}
                        </ul>
                    </div>
                    <hr />
                    <div id="language">
                        <h6>Languages Known</h6>
                        <ul>
                            {portfolio.languages?.length > 0 ? (
                                portfolio.languages.map(lang => <li key={lang.id}>{lang.language}</li>)
                            ) : (
                                <li>No languages listed</li>
                            )}
                        </ul>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );    
}

export default PortfolioDetails;