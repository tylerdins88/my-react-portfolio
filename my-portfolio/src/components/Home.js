import React from "react";
import Rubicon from "../assets/rubicon-peak-splitboard.jpg"
import Leo from "../assets/king-leo-cliff.jpg"
import Tahoe from "../assets/lake-tahoe-sunset.jpg"
import TylerAndLeo from "../assets/tylerandleo.jpg"
import Tallac from "../assets/tallac.jpg"
import Lake from "../assets/rubicon-lake.jpg"
import Christmas from "../assets/christmastyler.jpg"
import Burn from "../assets/leo-burn.jpg"
import Red from "../assets/red-mountain.jpg"

export default function Home() {
    return (
        <>
            <div className="imagerow">
                <img className="img1" alt="rubiconlake" src={Tallac} />
                <img className="img2" alt="burnleo" src={Burn} />
                <img className="img3" alt="tallacmountain" src={Red} />
            </div>
            <div className="imagerow">
                <img className="img4" alt="christmas" src={Rubicon} />
                <img className="img5" alt="tylerandleo" src={TylerAndLeo} />
                <img className="img6" alt="redmountain" src={Lake} />
            </div>
            <div className="imagerow">
                <img className="img7" alt="rubicon" src={Christmas} />
                <img className="img8" alt="cliffleo" src={Leo} />
                <img className="img9" alt="laketahoe" src={Tahoe} />
            </div>
        </>
    )
}