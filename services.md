--- 
layout: "/layout/services.njk"
title: "Services"
descriptiom: "Learn more about what I've been up to at work. Spolier alert: it includes volunteering!"
header: 
    logo: 
        src: "/images/logo.svg"
        altText: "header logo"
    nav: [
        {label: "Portfolio", link: "/portfolio"},
        {label: "Services", link: "/services", isActive: true},
        {label: "Experience", link: "/experience"},
        {label: "About", link: "/about"},
        {label: "Contact", link: "/contact"}
    ]
hero: 
    title: "Services"
    strapline: "Custom made, jaw dropping art at your fingertips"
    image: 
        src: "/images/hero/services-juice-box.svg"
        altText: "Illustration of a cat next to a vase"
    theme: "services"
    backgroundColour: "secondary"
    ctaButtons: [
        {label: "Branding", link: "/branding"},
        {label: "Graphics + Illustration", link: "/graphics"}
    ]
imageTexts:
    - theme: "services"
      image: 
          src: "/images/business-cards.jpg"
          altText: "Business Cards"
      title: "Branding"
      titleTheme: "tertiary-offset"
      subtitle: "Taking your brand from tired to desired."
      blurb: "<p>Just put something here that describes a potential client’s current branding and why/how I can help them move beyond the banality and into their “spectacular” era.</p>
      <p>And it needs to be at least 2-3 paragraphs long. Long enough to fit at least a square image next to it that is super brand-like and very suave.</p>
      <p>We go from sad to suave. We make things dishy and desirable. </p>
      <p>We inject your brand with a needed dose of fun whilst staying entirely functional. So it is art that serves a purpose... all whilst looking super cool as it does so. It’s giving personality, and we are here for it.</p>
      "
      leftToRight: false
      sectionButton: {
          text: "Click for whimsy",  
          link: "/portfolio",  
          backgroundColour: "tertiary", 
          border: true
      }
      ctaBoxes: [
          {
              title: "Phase 1 - Seek Whimsy",
              blurb: "<p>This is where we come together and I get to know more about you/your team and your brand. </p>
              <p>Using a questionnaire and follow-up chat, we will dive deep into the nitty gritty of your business’ operations, so that we can best determine which direction to take to make the biggest impact.</p>"
          },
          {
              title: "Phase 2 - Creation Station",
              blurb: "<p>This is the stage where I get to work my magic and craft up a beautiful treasure trove of branding that will dazzle. </p>
              <p>This is where the visual direction takes centre stage and ensures your brands strategy and messaging is made punchy and powerful.</p>"
          },
          {
              title: "Phase 3 - Unleash Whimsy",
              blurb: "<p>The final stage includes presenting your new brand identity/refresh to you and it gets signed off. </p>
              <p>Once this happens, your branding is ready to take pole position and make statements. I will provide you with a detailed set of brand guidelines and the resources you’ll need to wield your new branding.</p>",
          }
      ]
      ctaBoxesAlt: [
          {
              title: "Brand Identity",
              timeline: "8-10 weeks",
              blurb: "This is a full identity, designed from top to bottom. Ideal for new brands or brands shifting their direction.",
              included: [
                  "Brand Strategy",
                  "Visual Direction",
                  "Brand Narrative",
                  "Logo Suite",
                  "Custom Graphics + Illustrations",
                  "Brand Patterns",
                  "Font Pairings",
                  "Colour Palette",
                  "Packaging (if required)",
                  "UX UI Design"
              ]
          }, 
          {
              title: "Brand Refresh",
              timeline: "4-6 weeks",
              blurb: "This is a “makeover”, designed to spruce up and update a company’s existing branding but not their brand strategy or messaging. It’s ideal for established brands who need to bring back their pep. Less strategy, more visual direction.",
              included: [
                  "Visual Direction",
                  "Logo Suite",
                  "Custom Graphics + Illustrations",
                  "Brand Patterns",
                  "Font Pairings",
                  "Colour Palette",
                  "Packaging (if required)"
              ]
          }
      ]
    - title: "Graphics + Illustration"
      titleTheme: "tertiary"
      subtitle: "Cultivating art that empowers."
      backgroundColour: "black"
      blurb: "<p>I absolutely love making art. And the world needs more of it.</p>
    <p>So if you’re a musician or a band that is looking for some funky cover art, an author who wants a bewitching book cover or a magazine editor that is looking to give their next issue some pep, I’ve got you covered.</p>
    <p>Our first step is to get together and discuss your aims and overall project. Next, I will work my magic by crafting up something gorgeous just for you. And the final step is sitting back and watching as it goes for gold.</p>"
      image: 
          src: "/images/painting-example.jpg"
          altText: "Painting example"
      leftToRight: true
      ctaBoxesAlt: [
        {
            title: "Album Artwork",
            timeline: "4-6 weeks",
            blurb: "For musicians wanting tailor made artwork for their upcoming album, EP or single. My preferred genres are Rock, Indie, Hip Hop and EDM, but I am open to other genres.",
            included: [
                "Art Direction",
                "Custom Artwork/Photography",
                "Typography",
                "Colour Palette",
                "Packaging",
                "UX UI Design (if required)",
            ],
            disclaimer: "*Your investment id dependent on project scope"
        }, 
        {
            title: "Book Covers",
            timeline: "3-6 weeks",
            blurb: "For authors with upcoming releases who want custom designed cover art. My style is best suited for books that have elements of play, whimsy and adventure, but I am open to any genre.",
            included: [
                "Art Direction",
                "Marketing Strategy",
                "Custom Artwork",
                "Typography",
                "Colour Palette",
                "Formatting + Composition"
            ],
            disclaimer: "*Your investment is dependent on project scope."
        },
        {
            title: "Magazine Art",
            timeline: "1-4 weeks",
            blurb: "For magazine publishers looking for one-off art illustrations to be paired with a future article or for an upcoming issue cover. I take on both print and digital commissions.",
            included: [
                "Concept",
                "Art Direction",
                "Custom Artwork",
                "Typography",
                "Formatting + Composition"
            ],
            disclaimer: "*Your investment is dependent on project scope, as is the timeline."
        }
        ]
featuredProjects: 
    title: "<span>Check out the </span>Cool Stuff"
    projects: ["Those Darjeeling Days", "MyEirene Ltd", "Sandancer EP"]
    backgroundColour: "black"
    cardTheme: "secondary"
    buttonTheme: "secondary"
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



