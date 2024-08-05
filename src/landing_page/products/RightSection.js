import React from 'react';
function RightSection({productName,productDescription,imageUrl}) {
    return (
        <div className="container">
            <div className="row mx-5 mt-2 align-items-center">
                <div className="col-5  p-5">
                    <h2 className="mb-3">{productName}</h2>
                    <p>
                        {productDescription}
                    </p>
                    <div className="row">
                        <div className="col-6 mb-3"><a href="#" style={{ textDecoration: "none" }}>Kite Connect →</a></div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    <img src={imageUrl} style={{ width: "100%" }}></img>
                </div>
            </div>
        </div>
    );
}

export default RightSection;