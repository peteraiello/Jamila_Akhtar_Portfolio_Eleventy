--- 
layout: "/layout/portfolio.njk"
title: "Portfolio"
description: "You've come to the right place. This is the right place to check out all the cool things I've been creating!"
header: 
    logo: 
        src: "/images/logo.svg"
        altText: "header logo"
    nav: [
        {label: "Portfolio", link: "/portfolio", isActive: true},
        {label: "Services", link: "/services"},
        {label: "Experience", link: "/experience"},
        {label: "About", link: "/about"},
        {label: "Contact", link: "/contact"}
    ]
hero: 
    title: "Portfolio"
    strapline: "You've struck gold! This is the spot where all the cool stuff I've created dwells. Enjoy the loot!"
    image: 
        src: "/images/hero/portfolio-soda-can.svg"
        altText: "Illustration of a cat next to a vase"
    backgroundColour: "secondary"
    theme: "portfolio"
projectsWrapper: 
    title: ""
    filterButtons: [
        {label: "All", id: "/all"}, 
        {label: "Branding", id: "/branding"},
        {label: "Graphics", id: "/graphics"},
        {label: "Illustration", id: "/illustration"},
]
form: 
    title: "Keen to work with me? <span>Then please get in touch!</span>"
    backgroundColour: "secondary"
    theme: "portfolio"
    graphic: true
footer: 
    footerLogo: 
        src: "/images/Footer_logo.svg"
        altText: "Footer Logo"
    copyright: ""
    footerLinks: [
        {label: "FAQs", link: "/faqs", target: "_self"},        {label: "Privacy Policy", link: "https://www.iubenda.com/privacy-policy/49373695", target: "_blank"},
        {label: "Cookie Policy", link: "https://www.iubenda.com/privacy-policy/49373695/cookie-policy", target: "_blank"}
    ]
   
---
