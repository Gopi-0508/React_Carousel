import React from "react";
import Eligible from "./eli";
import BGrade from "./not";
function Vote(gan) {
    const Grade=gan.grade;
    if (Grade>90){
        return <AGrade />
        
    }
    else{
        return <BGrade/>
    }
}
export default Vote;