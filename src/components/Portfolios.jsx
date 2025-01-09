import './HomePage.css';
import React, { useEffect, useState } from 'react';
import logo from "../assets/Logo.jpg"
import { Link } from "react-router-dom";
import MyLoader from "./MyLoader";

export default function Portfolios() {
    const [portfolios, setPortfolios] = useState([]);
    const [loading, setLoading] = useState(true);
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
            }finally {
                setLoading(false);
            }
        };
        fetchPortfolios();
    }, []);
    
    useEffect(() => {
        console.log('Portfolios state:', portfolios);
    }, [portfolios]);
    if (loading) return <><MyLoader></MyLoader></>;

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
                                        <p className="card-text opacity-50">
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
                <Link to={`/portfolio/${portfolio.id}`} key={portfolio.id}>
                <div className="card mb-3 mx-5 lists">
                    <div className="row g-0">
                        <div className="col-md-2">
                            <img src={`http://localhost:5001/${portfolio.image_url}`} className="img-fluid rounded-start image-porfolio" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">{portfolio.name}</h5>
                                <p className="card-text opacity-50">{portfolio.describeYou}</p>
                                <span>
                                    <span><i className="fa-regular fa-thumbs-up"></i> {portfolio.like_count}</span>
                                    &nbsp;&nbsp;&nbsp;
                                    <i>View This</i>&nbsp; <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            )
    })}
</div>
);
}