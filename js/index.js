const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//Nav Bar
const services = document.querySelector("a:nth-of-type(1)")
services.textContent = siteContent["nav"]["nav-item-1"]
const product = document.querySelector("a:nth-of-type(2)")
product.textContent = siteContent["nav"]["nav-item-2"]
const vision = document.querySelector("a:nth-of-type(3)")
vision.textContent = siteContent["nav"]["nav-item-3"]
const features = document.querySelector("a:nth-of-type(4)")
features.textContent = siteContent["nav"]["nav-item-4"]
const about = document.querySelector("a:nth-of-type(5)")
about.textContent = siteContent["nav"]["nav-item-5"]
const contact = document.querySelector("a:nth-of-type(6)")
contact.textContent = siteContent["nav"]["nav-item-6"]

const home = document.createElement('a')
home.textContent = "Home"
home.href = "#"
document.querySelector('nav').prepend(home)

const lambda = document.createElement('a')
lambda.textContent = "Lambda"
lambda.href = "#"
document.querySelector('nav').appendChild(lambda)

const nav1 = document.querySelector('.container header nav a');
nav1.style.color = 'green';
const nav2 = document.querySelector('.container header nav a:nth-of-type(2)');
nav2.style.color = 'green';
const nav3 = document.querySelector('.container header nav a:nth-of-type(3)');
nav3.style.color = 'green';
const nav4 = document.querySelector('.container header nav a:nth-of-type(4)');
nav4.style.color = 'green';
const nav5 = document.querySelector('.container header nav a:nth-of-type(5)');
nav5.style.color = 'green';
const nav6 = document.querySelector('.container header nav a:nth-of-type(6)');
nav6.style.color = 'green';
const nav7 = document.querySelector('.container header nav a:nth-of-type(7)');
nav7.style.color = 'green';
const nav8 = document.querySelector('.container header nav a:nth-of-type(8)');
nav8.style.color = 'green';


// cta Section
let headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"])

const titleArea = document.querySelector(".cta .cta-text")
const titleText = titleArea.querySelector("h1")
titleText.textContent = siteContent["cta"]["h1"]
const titleButton = titleArea.querySelector("button")
titleButton.textContent = siteContent["cta"]["button"]

//Main Content Section
let midPageImage = document.getElementById("middle-img");
midPageImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const mainContent = document.querySelector(".main-content .top-content .text-content")
const featuresHead = mainContent.querySelector("h4")
featuresHead.textContent = siteContent ["main-content"]["features-h4"]
const featuresContent = featuresHead.nextElementSibling
featuresContent.textContent = siteContent["main-content"]["features-content"]
const mainContent2 = document.querySelector(".main-content .top-content .text-content:nth-of-type(2)")
const aboutHead = mainContent2.querySelector("h4")
aboutHead.textContent = siteContent ["main-content"]["about-h4"]
const aboutContent = aboutHead.nextElementSibling
aboutContent.textContent = siteContent["main-content"]["about-content"]

// Bottom Content Section
const bottomContent = document.querySelector(".bottom-content .text-content")
const servicesHead = bottomContent.querySelector("h4")
servicesHead.textContent = siteContent ["main-content"]["services-h4"]
const servicesContent = servicesHead.nextElementSibling
servicesContent.textContent = siteContent["main-content"]["services-content"]
const bottomContent2 = document.querySelector(".bottom-content .text-content:nth-of-type(2)")
const productHead = bottomContent2.querySelector("h4")
productHead.textContent = siteContent ["main-content"]["product-h4"]
const productContent = productHead.nextElementSibling
productContent.textContent = siteContent["main-content"]["product-content"]
const bottomContent3 = document.querySelector(".bottom-content .text-content:nth-of-type(3)")
const visionHead = bottomContent3.querySelector("h4")
visionHead.textContent = siteContent ["main-content"]["vision-h4"]
const visionContent = visionHead.nextElementSibling
visionContent.textContent = siteContent["main-content"]["vision-content"]

// Contact Section
const contactSection = document.querySelector(".contact")
const contactHead = contactSection.querySelector("h4")
contactHead.textContent = siteContent["contact"]["contact-h4"]
const contactParagraph1 = contactHead.nextElementSibling
contactParagraph1.textContent = siteContent["contact"]["address"]
const contactParagraph2 = contactParagraph1.nextElementSibling
contactParagraph2.textContent = siteContent["contact"]["phone"]
const contactParagraph3 = contactParagraph2.nextElementSibling
contactParagraph3.textContent = siteContent["contact"]["email"]


// footer
const footer = document.querySelector("footer")
const copyright = footer.querySelector("p")
copyright.textContent = siteContent["footer"]["copyright"]




