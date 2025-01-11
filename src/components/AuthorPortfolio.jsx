import './AuthorPortfolio.css';
import logo from "../assets/Logo.jpg"

export default function AuthorPortfolio() {
    return (
        <div className="container">
            <div className="container1">
                <div className="leftPanel">
                    <div>
                        <img src={logo} alt="Profile" className="image" />
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
                        <h2>Younus</h2>
                        <h5>FullStack Developer</h5>
                    </div>
                    <div id="contact">
                        <h6>Description</h6>
                        <p>
                            As a passionate fullstack developer, I have experience building dynamic and responsive web
                            applications from front to back. I am proficient in HTML, CSS, JavaScript, and React.js for
                            creating user-friendly interfaces and the backend to make it fully functional and usable.
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h6 id="education">Contact Info</h6>
                        <ul>
                            <li><strong>Gmail:</strong> sayeedataj37@gmail.com</li>
                            <li><strong>Phone:</strong> 8123412145</li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <h6 id="expertise">Education Info</h6>
                        <ul>
                            <li><strong>PUC:</strong> Sacred Heart PU College</li>
                            <li><strong>Course:</strong> CEBA</li>
                            <li><strong>Degree:</strong> St. Francis College</li>
                            <li><strong>Course:</strong> BCA</li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <h6 id="interest">Skills and Expertise</h6>
                        <ul>
                            <li>
                                <strong>Frontend Development:</strong>
                                <ul>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                    <li>Responsive Design (Bootstrap, CSS Grid, Flexbox)</li>
                                    <li>Version Control (Git, GitHub)</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Backend Development:</strong>
                                <ul>
                                    <li>Node.js & Express.js</li>
                                    <li>SQL Databases (MySQL, PostgreSQL)</li>
                                    <li>API Development (RESTful APIs)</li>
                                    <li>Authentication & Authorization (JWT, OAuth)</li>
                                    <li>Database Management (Design, Queries, Optimization)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <h6 id="language">Interests</h6>
                        <ul>
                            <li>Chess</li>
                            <li>Cricket</li>
                            <li>Online games</li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <h6>Languages Known</h6>
                        <ul>
                            <li>English</li>
                            <li>Hindi</li>
                            <li>Kannada</li>
                        </ul>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}
