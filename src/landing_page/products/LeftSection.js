import React from "react";
function LeftSection({ imageUrl, productName, productDescription }) {
    return (
        <div className="container">
            <div className="row mx-5 mt-2 align-items-center">
                <div className="col-6">
                    <img src={imageUrl} style={{ width: "100%" }}></img>
                </div>
                <div className="col-1"></div>
                <div className="col-5  p-5">
                    <h2 className="mb-3">{productName}</h2>
                    <p>
                        {productDescription}
                    </p>
                    <div className="row">
                        <div className="col-6 mb-3"><a href="#" style={{textDecoration:"none"}}>Try Demo →</a></div>
                        <div className="col-6 mb-3"><a href="#" style={{ textDecoration: "none" }}>Learn More →</a></div>
                        <div className="col-6"><img src="media/images/googlePlay.svg"></img></div>
                        <div className="col-6"><img src="media/images/appstore.svg"></img></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
