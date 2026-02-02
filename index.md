--- 
layout: "/layout/home.njk"
header: 
    logo: 
        src: "/images/logo.svg"
        altText: "header logo"
    nav: [
        {label: "Portfolio", link: "/portfolio"},
        {label: "Experience", link: "/experience"},
        {label: "About", link: "/about"},
        {label: "Contact", link: "/contact"}
    ]
hero: 
    title: "Design Studio"
    backgroundImage: 
        src: "/images/hero/creative-juice.png"
    strapline: "Branding | Graphics | Illustration"
    backgroundColour: "white"
    theme: "home"
imageText: 
    image: 
        src: "/images/jamila.jpg"
        altText: "Jamila portrait"
    title: "Hello There!"
    blurb: "<p>I'm Jamila, an Ottawa-based designer specializing in branding, grapics and illustration. My work seeks to create harmony between strategy and art, allowing for seamless narratives full of purpose to be creafted. It is form and function on even footing.</p>"
    button: 
        text: "Discover more"
        link: "/about"
    leftToRight: true
quickLinks: 
    title: "Work"
    cards: [{
        title: "Portfolio",
        image: 
            {
                src: "/images/portfolio_thumb.jpg",
                altText: "Illustration of window and picture frames"
            },
        button: 
            {
                text: "Click here",
                link: "/portfolio"
            }
    },
    {
        title: "Experience",
        image: 
            {
                src: "/images/experience_thumb.jpg",
                altText: "Illustration of cat with certificate"
            },
        button: 
            {
                text: "Click here",
                link: "/experience"
            }
    }]
    posts: [{title: "post one"}, 
            {title: "post two"}]
footer: 
    footerLogo: 
        src: "/images/Footer_logo.svg"
        altText: "Footer Logo"
    copyright: "Jamila Y Akhtar 2025 All Rights Reserved"
    footerLinks: [
        {label: "FAQs", link: "/faqs"},
        {label: "Privacy Policy", link: "/privacy-policy"},
        {label: "Terms", link: "/terms-and-conditions"}
    ]
    footerSocial: [
        {label: "twitter", link: "#"},
        {label: "instagram", link: "#"},
        {label: "youtube", link: "#"},
        {label: "linkedin", link: "#"}
    ]
---



