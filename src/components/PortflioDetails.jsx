import './AuthorPortfolio.css';
import React, { useEffect, useState } from "react";

const PortfolioDetails = ({ portfolioId }) => {
    const [portfolio, setPortfolio] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const response = await axios.get("http://localhost:5001/api/resumes/:id");
                const data = await response.json();
                setPortfolio(data);
            } catch (err) {
                setError(err.response?.data?.error || err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolio();
    }, [portfolioId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="container">
            <div className="container1">
                <div className="leftPanel">
                    <div>
                        {portfolio.images.map((image) => (
                            <img key={image.id} src={image.imageUrl} alt="Profile" className="image" />
                        ))}
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
                        <h2>{portfolio.portfolio.name}</h2>
                        <h5>{portfolio.portfolio.describeYou}</h5>
                    </div>
                    <div id="contact">
                        <h6>Description</h6>
                        <p>
                            {portfolio.portfolio.description}
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h6 id="education">Contact Info</h6>
                        <ul>
                            <li><strong>Gmail:</strong>{contact.gmail}</li>
                            <li><strong>Phone:</strong>{contact.contact}</li>
                            <li><strong>Address:</strong>{contact.address}</li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <h6 id="expertise">Education Info</h6>
                        <ul>
                            <li><strong>College:</strong>{education.institute}</li>
                            <li><strong>Course:</strong>{institute.course}</li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <h6 id="interest">Skills</h6>
                        <ul>
                            <li>
                                {portfolio.skills.map((skill) => (
                                    <li key={skill.id}>{skill.name}</li>
                                ))}
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <h6 id="language">Interests</h6>
                        <ul>
                            {portfolio.interests.map((interest) => (
                                <li key={interest.id}>{interest.name}</li>
                            ))}
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <h6>Languages Known</h6>
                        <ul>
                            {portfolio.languages.map((lang) => (
                                <li key={lang.id}>{lang.name}</li>
                            ))}
                        </ul>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default PortfolioDetails;