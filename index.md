--- 
layout: "/layout/home.njk"
title: "Home"
description: "You've arrived at the portfolio of Jamila; Ottawa-based designer and illustrator for the whimsically adventurous looking for something off the beaten track."
header: 
    logo: 
        src: "/images/logo.svg"
        altText: "header logo"
    nav: [
        {label: "Portfolio", link: "/portfolio"},
        {label: "Services", link: "/services"}, 
        {label: "Experience", link: "/experience"},
        {label: "About", link: "/about"},
        {label: "Contact", link: "/contact"}
    ]
hero: 
    title: "Design for the"
    typewriter: ["whimsical", "feisty", "playful", "edgy"]
    backgroundImage: 
        src: "/images/hero/creative-juice.svg"
    backgroundColour: "white"
    theme: "home"
    ctaButtons: [
        {
            label: "Let's Collaborate", 
            link: "/contact", 
            theme: "tertiary",  
            border: true
        },
    ]
imageText: 
    theme: "home"
    backgroundColour: "secondary"
    image: 
        src: "/images/jamila-portrait.jpg"
        altText: "Jamila portrait"
        orientation: "portrait"
    title: "Hello there!"
    blurb: "<p>I'm Jamila, an Ottawa-based designer who specializes in branding, graphics and illustration, where I focus on balancing form and function. I work closely with colour to produce striking, identifiable pieces of art.</p>"
    graphic: true
    button: 
        text: "Learn more"
        link: "/about"
        backgroundColour: "tertiary-offset"
        border: true
    leftToRight: true
quickLinks: 
    title: ""
    backgroundColour: "primary-offset"
    cards: [{
        title: "Portfolio",
        theme: "quick-link",
        blurb: "<p>Check out all the cool paraphernalia I've constructed.</p>",
        image: {
            src: "images/portfolio.svg",
            altText: "drink up"
        },
        button: 
            {
                text: "Quench your curiosity",
                link: "/portfolio",
                theme: "tertiary",
                border: true
            }
    },
    {
        title: "Experience",
        theme: "quick-link",
        blurb: "<p>The cultivation of my professional garden, AKA my career history.</p>",
        image: {
            src: "images/experience.svg",
            altText: "Watering plant"
        },
        button: 
            {
                text: "Ramble through",
                link: "/experience",
                theme: "tertiary",
                border: true
            }
    }]
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



