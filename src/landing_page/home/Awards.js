import React from 'react';
function Awards() {
    return (
        <div className='container p-5'>
            <div className='row p-5 align-items-center'>
                <div className='col'>
                    <img src='media/images/largestBroker.png' style={{width:'90%'}}></img>
                </div>
                <div className='col  p-5'>
                    <h2 className='mb-3'>Largest stock broker in India</h2>
                    <p>We've combined the power of the Following 
                        feed with the For you feed so there’s one
                         place to discover content on GitHub.
                    </p>
                    <div className='row'>
                        <div className='col'>
                            <ul>
                                <li>Future and Options</li>
                                <li>Future and Options</li>
                                <li>Future and Options</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <ul>
                                <li>Future and Options</li>
                                <li>Future and Options</li>
                                <li>Future and Options</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/PressLogos.png' style={{display:"block" ,margin:'0 auto', width:'100%'}}></img>
                </div>
            </div>
        </div>
    );
}

export default Awards;