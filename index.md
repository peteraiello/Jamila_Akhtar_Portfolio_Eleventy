--- 
layout: "/layout/home.njk"
title: Jamila Akhtar Portfolio! 
hero: 
    titleOne: "Branding."
    titleTwo: "Graphics."
    titleThree: "Illustration."
    image: "/images/hero.png"
    strapline: "Where beauty meets utility"
---

# {{ title }}

## Posts

{%- for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url}})
{%- endfor %}

