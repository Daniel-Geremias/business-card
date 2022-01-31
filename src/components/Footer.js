import React from "react"
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="footer">
            <FaTwitter className="social-icon" onClick={() => {window.open("https://twitter.com/danielv19")}} />
            <FaFacebook className="social-icon" onClick={() => {window.open("https://www.facebook.com/daniel.v19")}} />
            <FaInstagram className="social-icon" onClick={() => {window.open("https://www.instagram.com/danielv19/")}} />
            <FaGithub className="social-icon" onClick={() => {window.open("https://github.com/Daniel-Geremias")}} />
        </div>
    )
}