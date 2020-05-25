import React from 'react'
import { FaGithub, FaLinkedin, FaRegEnvelope, FaRegCopyright } from 'react-icons/fa'


const style = {
    "fontSize": "305%",
    "color":"black"
}

const copyright = {
    "fontSize": "170%"
}

export default function Footer(){
    return(
        <div id="#footer">
            <a href="https://www.github.com/jameka23" target="_blank" rel="noopener noreferrer"> <FaGithub style={style} /></a>
            <a href="https://www.linkedin.com/in/jameka-echols/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={style}/></a>
            <a href="mailto:jameka.echols@gmail.com" target="_blank" rel="noopener noreferrer"><FaRegEnvelope style={style}/></a>
            <div>
               Copyright <FaRegCopyright style={copyright} /> Jameka Echols Website 2020 
            </div>
        </div>
    )
}