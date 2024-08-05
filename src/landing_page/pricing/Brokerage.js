import React from 'react';
function Brokerage() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5 mx-5'>
                <div className='col-4 text-center'>
                    <img src='media/images/pricing-eq.svg' style={{width:'100%'}}></img>
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 text-center'>
                    <img src='media/images/other-trades.svg' style={{width:'100%'}}></img>
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 text-center'>
                    <img src='media/images/pricing-eq.svg' style={{width:'100%'}}></img>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;