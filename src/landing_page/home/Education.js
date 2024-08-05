import React from 'react';
function Education() {
    return (
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col'>
                    <img src='media/images/educationsvg.svg'></img>
                </div>
                <div className='col'>
                    <h2 className='fs-4 mb-4'>Free and open market education</h2>
                    <p className='text-muted mb-3' >Varsity, the largest online stock market education book
                        in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' style={{ textDecoration: 'none' }} >Varsity  <i className="fa-solid fa-arrow-right mx-1"></i></a>
                    <p className='text-muted mb-3 mt-3'>TradingQ&A, the most active trading and inves
                        tment community in India for all your market related queries.</p>
                    <a href='#' style={{ textDecoration: 'none' }}>TradingQ&A  <i className="fa-solid fa-arrow-right mx-1"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;