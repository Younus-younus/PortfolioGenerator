import './HomePage.css';
import React, { useEffect, useState } from 'react';
import logo from "../assets/Logo.jpg"

export default function Portfolios() {
    const [portfolios, setPortfolios] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/resumes/portfolios'); // Ensure this matches your backend route
                const data = await response.json();
                setPortfolios(data.portfolios);
            } catch (error) {
                console.error('Error fetching portfolios:', error);
                setError(error.message);
            }
        };
        fetchPortfolios();
    }, []);

    
    useEffect(() => {
        console.log('Portfolios state:', portfolios);
    }, [portfolios]);
    return (
        <div className='mt-3'>
        <a href="/author-portfolio">
                        <div className="card mb-3 mx-5 lists" >
                            <div className="row g-0">
                                <div className="col-md-2">
                                    <img src={logo} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className="card-title">Younus</h5>
                                        <p className="card-text">
                                            FullStack Developer
                                        </p>
                                        <span>
                                            <i>View This</i>&nbsp; <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
        {portfolios.map((portfolio, index) => {
            return(
            <a href={`/api/resumes/${portfolio.id}`} key={portfolio.id}>
                <div className="card mb-3 mx-5 lists">
                    <div className="row g-0">
                        <div className="col-md-2">
                            <img src={portfolio.image_url} className="img-fluid rounded-start " alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">{portfolio.name}</h5>
                                <p className="card-text">{portfolio.describeYou}</p>
                                <span>
                                    <p><i className="fa-regular fa-thumbs-up"></i> {portfolio.like_count}</p>
                                    <i>View This</i>&nbsp; <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            )
    })}
</div>
);
}