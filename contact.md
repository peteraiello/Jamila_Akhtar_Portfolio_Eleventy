--- 
layout: "/layout/contact.njk"
title: "Contact"
description: "I'm always open to a coffee chat! Get in touch to learn more about my work."
header: 
    logo: 
        src: "/images/logo.svg"
        altText: "header logo"
    nav: [
        {label: "Portfolio", link: "/portfolio"},
        {label: "Services", link: "/services"},
        {label: "Experience", link: "/experience"},
        {label: "About", link: "/about"},
        {label: "Contact", link: "/contact", isActive: true}
    ]
hero: 
    title: "Contact"
    strapline: "If you have a project in mind or simply have a query, fill out the form below to get in touch!"
    image: 
        src: "/images/hero/creative_battery.svg"
        altText: "Illustration of a cat next to a vase"
    theme: "contact"
    backgroundColour: "secondary"
form: 
    title: "Ready to <span>amp up</span> your <span>whimsy?</span><br />Then <span>till her up</span> so the <span>work</span> can <span>begin!</span>"
    backgroundColour: "tertiary"
    theme: "contact"
featuredProjects: 
    title: "Check out the <span>cool stuff</span>"
    projects: ["Those Darjeeling Days", "MyEirene Ltd", "Sandancer EP"]
    backgroundColour: "white"
    cardTheme: "project-card"
footer: 
    footerLogo: 
        src: "/images/Footer_logo.svg"
        altText: "Footer Logo"
    copyright: ""
    footerLinks: [
        {label: "FAQs", link: "/faqs", target: "_self"},        
        {label: "Privacy Policy", link: "https://www.iubenda.com/privacy-policy/49373695", target: "_blank"},
        {label: "Cookie Policy", link: "https://www.iubenda.com/privacy-policy/49373695/cookie-policy", target: "_blank"}
    ]
---