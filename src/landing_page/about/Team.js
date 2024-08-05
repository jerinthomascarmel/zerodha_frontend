import React from "react";

function Team() {
    return (
        <div className="container p-5 ">
            <h1 className="text-center mb-5">People</h1>
            <div className="row mx-5">
                <div className="col text-center">
                    <img
                        src="media/images/nithin-kamath.jpg"
                        style={{ borderRadius: "100%",width:"295px" }}
                    ></img>
                    <p className="fs-4">Nithin Kamath</p>
                    <p className="fs-5">Founder, CEO</p>
                </div>
                <div className="col me-5">
                    <p className="mt-4">
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade long stint as a trader. Today,
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
    );
}

export default Team;
