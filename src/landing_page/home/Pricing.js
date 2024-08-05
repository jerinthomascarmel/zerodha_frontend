import React from 'react';

function Pricing() {
    return (
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col'>
                    <h1 className='fs-2 mb-3'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price<br></br>
                        transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#' style={{ textDecoration: 'none' }}>See Pricing <i className="fa-solid fa-arrow-right mx-1"></i></a>
                </div>
                <div className='col'>
                    <div className='row'>
                        <div className='col text-center border p-3'>
                            <h1 className='fs-2 mb-3'>₹0</h1>
                            <p className='text-muted'>Free equity delivery and <br></br> direct mutual funds</p>
                        </div>
                        <div className='col text-center border p-3'>
                            <h1 className='fs-2 mb-3'>₹20</h1>
                            <p className='text-muted'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;