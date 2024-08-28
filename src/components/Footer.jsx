import React from "react"

const date = new Date()
const year = date.getFullYear()

function Footer() {
    return (
        <footer>
            <p className="footer">
                Copyright 
                <span>&#169;</span>  
                {year}
            </p>
        </footer>
    )
}

export default Footer;