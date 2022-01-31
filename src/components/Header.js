import React from "react"
import pfp from "../images/profile-pic.jpeg"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function Header() {
    return (
        <div className="header">
            <img src={pfp} alt="profile" className="profilepic"/>
            <h1 className="name">Daniel Geremias</h1>
            <h2 className="occupation">Frontend Developer</h2>
            <p className="personal-website">danielgeremias.website</p>
            <div className="header-buttons">
                <button className="email" onClick={() => {window.open("mailto:daniel.vg19@gmail.com")}}>
                    <MdEmail className="button-icon"/>  Email
                </button>
                <button className="linkedin" onClick={() => {window.open("https://www.linkedin.com/in/daniel-geremias/")}}>
                    <FaLinkedin className="button-icon" />  LinkedIn
                </button>
            </div>
        </div>
    )
}