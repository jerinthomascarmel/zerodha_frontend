import React from 'react';
function Hero() {
    return (
        <div className='container-fluid supportPortal'>
            <div className='container p-5'>
                <div className='row p-5'>
                    <div className='col-7 supportWrapper p-5'>
                        <h3 className='fs-4 mb-4'>Support Portal</h3>
                        <h3 className='fs-4 fw-normal mb-4'>Search for an answer or browse help topics to create a ticket</h3>
                        <input style={{ width: '100%', height: '30%', borderRadius: '5px', border: 'none' ,padding:'0 25px'}} placeholder='how do i activate F&O,why is my order getting rejected...' />
                        <a href='#' className='text-white me-3'>Track account opening </a>
                        <a href='#' className='text-white me-3'>Track segment activation </a>
                        <a href='#' className='text-white me-3'>Intraday margins</a>
                        <a href='#' className='text-white me-3'> Kite user manual</a>
                    </div>
                    <div className='col-4'>
                        <div className='d-flex justify-content-end'>
                            <h5><a href='#' className='text-white fs-5 fw-normal'>Track tickets</a></h5>
                        </div>
                        <h3 className='fs-4 mt-5'>Featured</h3>
                        <ol>
                            <li>Latest Intraday leverages and Square-off timings</li>
                            <li>Surveillance measure on scrips - June 2024</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;