import React from "react"

const Entry = props => {
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default Entry;