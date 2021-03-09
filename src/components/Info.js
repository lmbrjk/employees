import React from "react"
import { useParams } from "react-router-dom"


function Info(){
    let {info} = useParams();

    return (
        <div>{info}</div>
    )
}
export default Info;