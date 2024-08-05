import React from 'react';
function Universe() {
    return ( 
        <div className='container p-5 '>
            <div className='row text-center mt-3'>
                <p className='mb-2 fs-4'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
                <h1 className='mt-5 mb-4'>The Zerodha Universe</h1>
                <p className='mb-2 text-muted'>Sleek, modern, and intuitive trading platforms</p>
            </div>
            <div className='row text-center mt-3 mx-5'>
                <div className='col-4 mb-2'>
                    <img src='media/images/smallcase-logo.png'  style={{width:'70%',height:'60%'}}></img>
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className='col-4 mb-2'>
                    <img src='media/images/streak-logo.png'   style={{width:'70%',height:'60%'}}></img>
                    <p className='text-small text-muted'>Algo & strategy platform</p>
                </div>
                <div className='col-4 mb-2'>
                    <img src='media/images/sensibull-logo.svg' style={{width:'70%',height:'60%'}}></img>
                    <p className='text-small text-muted'>Options trading platform</p>
                </div>
                <div className='col-4 mb-2'>
                    <img src='media/images/zerodhafundhouse.png' style={{width:'70%',height:'60%'}}></img>
                    <p className='text-small text-muted'>Asset management</p>
                </div>
                <div className='col-4 mb-2'>
                    <img src='media/images/tijori.svg' style={{width:'70%',height:'60%'}}></img>
                    <p className='text-small text-muted'>Insurance</p>
                </div>
                <div className='col-4 mb-2'>
                    <img src='media/images/ditto-logo.png' style={{width:'70%',height:'60%'}}></img>
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <button className='btn pl-2 pr-2 fs-5 my-5 text-white' style={{ width: '20%', margin: '0 auto', backgroundColor:'#387ed1'}}>Signup now</button>
            </div>

        </div>
     );
}

export default Universe;