import Head from 'next/head'

export default function Home() {
  return (
      <div class="container" onload="startClock()">
        <Head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/styles.scss" />
          {/* <meta property="og:image" content="/og.png" /> */}
          <meta name="description" content="Designer." />
          <meta name="keywords" content="benjamin hoppe, ben hoppe, designer, design, hoppe" />
          <meta name="author" content="Benjamin Hoppe" />
          {/* <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" /> */}
          <meta name="viewport" content="width=device-width,initial-scale=1.0" />
          <title>Benjamin Hoppe</title>
        </Head>

        <div class="header">
          <a class="label-m" href="/">Benjamin Hoppe</a>
          <p class="label-m gray" id="current-time"></p>
        </div>
        <div class="section">
          <div class="section-header">
            <p class="label-m">Selected Work</p>
            <p class="paragraph-m gray">
              I design & build software with the goal of reducing friction  & creating unique user expierences. Below are some attempts of that in practice.
            </p>
          </div>
    
        </div>

        <div class="accordion">
          <div class="accordion-item">
            <div class="button" id="accordion-button-1" aria-expanded="false">
              <span class="left">
                <span class="label-m item-number">001</span>
                <span class="label-m item-title">Owl</span>
              </span>
              <span class="right">
                <span class="label-m item-year">2022</span>
                <span class="icon" aria-hidden="true"></span>
              </span>
             </div>
           
            <div class="accordion-content">
              <p>Hello World</p>
            </div>
          </div>
          
          <div class="accordion-item">
            <div class="button" id="accordion-button-1" aria-expanded="false">
              <span class="left">
                <span class="label-m item-number">002</span>
                <span class="label-m item-title">Able</span>
              </span>
              <span class="right">
                <span class="label-m item-year">2022</span>
                <span class="icon" aria-hidden="true"></span>
              </span>
             </div>
           
            <div class="accordion-content">
              <p>Hello World</p>
            </div>
          </div>
          
          <div class="accordion-item">
            <div class="button" id="accordion-button-1" aria-expanded="false">
              <span class="left">
                <span class="item-number">003</span>
                <span class="item-title">Common</span>
              </span>
              <span class="right">
                <span class="item-year">2022</span>
                <span class="icon" aria-hidden="true"></span>
              </span>
             </div>
           
            <div class="accordion-content">
              <p>Hello World</p>
            </div>
          </div>
          
       
        </div>
        <div class="footer">
          <div class="footer-links">
            <a href="https://twitter.com/mrbenjaminhoppe" target="_blank">Follow me on Twitter ↗︎</a>
            <a href="mailto:benjamin@benjaminhoppe.co">Email me ↗︎</a>
          </div>
          <p class="lable-m gray">© 2022. No rights reserved.</p>
        </div>
      </div>

  
    
    
    
    

    
  )
}

// Dark mode toggle
// function toggleMode() {
//   var element = document.body;
//   element.classList.toggle("darkMode",);
//   console.log("click")
// }

// $(window).load(function() {
//   $("body").removeClass("preload");
// });

// Current time

if(typeof document === "object")  {
  const startClock = () => {
    const now = new Date();
    const h = padWithZeroes(now.getHours(), 2);
    const m = padWithZeroes(now.getMinutes(), 2);
    const s = padWithZeroes(now.getSeconds(), 2);
    document.getElementById("current-time").innerHTML = `Toronto / ${h}:${m}:${s} (GMT-4)`;
    setTimeout(startClock, 500);
  };
  
  const padWithZeroes = (input, length) => {
    let padded = input;
    if (typeof input !== "string") padded = input.toString();
    return padded.padStart(length, "0");
  };
}


// toggle code 

if(typeof document === "object") {
  const items = document.querySelectorAll(".accordion .button");

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    
    
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }

  items.forEach(item => item.addEventListener('click', toggleAccordion));
} 





