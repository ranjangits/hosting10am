class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
            <a href='index.html'>Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            
        `

    }
}
customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="hanuman";>
        Address - Maliyabgh (Semri Bihar) <br>
        district - Rohtas <br>
        pin-code =802211 <br>
        p.s - Dawath <br>
        contact-no= +91 6283667285 / +91 8102076330 <br>
        <div id="saras";>
        Copyright (c) 2022 Ranjan kumar  </div>
         
         </div>
       
        `

    }
}
customElements.define('my-footer', MyFooter)