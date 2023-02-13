import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class Ist256Card extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--ist256-card-background-color);
    }
// start
    main {
      flex-grow: 1;
    }

    .card {
      padding: 16px;
      border: 4px solid #ae8625;
      margin: 8px;
      position: relative;
      border-radius: 8px;
      background: linear-gradient(#a8a9ad, #fff, #a8a9ad);
    }
    .card-title {
      text-align: center;
      background: #e5e5e5;
      border-radius: 4px;
      border: 2px solid #ae8625;
    }
  
    .details-button {
      background-color: #e5e5e5;
      color: #ae8625;
      padding: 8px 16px;
      border-radius: 4px;
      text-decoration: none;
      position: absolute;
      bottom: 16px;
      right: 16px;
      border: 2px solid #ae8625;
    }
  
    @media (max-width: 800px) and (min-width: 500px) {
      .details-button {
        display: none;
      }
    }
  
    @media (max-width: 500px) {
      .card {
        width: 90%;
      }
    }
  img {
        width: 100%;
        height: 100%;
        padding: 0px 0px 0px 57px;
  }
  .dup-button{
    height: 40px;
    width: 100px;
    position: absolute;
    top: 30px;
    right: -115px;
  }
  .dup-button:hover,
  .dup-button:focus {
    background-color: blue;
    transform: scale(1.1);
  }
  .toggle-button{
    height: 40px;
    width: 100px;
    position: absolute;
    top: 30px;
    right: -220px;
  }
  .changeText-button{
    height: 40px;
    width: 100px;
    position: absolute;
    top: 30px;
    right: -325px;
  }
  .del-button{
    height: 40px;
    width: 100px;
    position: absolute;
    top: 30px;
    right: -430px;
  }
    }
  `;

  constructor() {
    super();
    this.header = 'editing';
  }

  render() {
    return html`
      <main>
      
      <div class="card" style="width: 400px;">
  <h2 class="card-title">Let Him Cook!</h2>
  <img src="https://i.kym-cdn.com/entries/icons/facebook/000/041/943/1aa1blank.jpg" alt="image" style="width: 70%; height: auto;">
  <p class="card-description">Woody holding Sora back to let someone cook</p>
  <button class="dup-button" id="dup-imgbutton">Duplicate Card</button>
  <button class="toggle-button" id="toggle-imgbutton">Toggle Color</button>
  <button class="changeText-button" id="changeText-imgbutton">Change Text</button>
  <button class="del-button" id="del-imgbutton">Delete</button>
  <button class="details-button" id="details-imgbutton">Details</button>
</div>
    `;
  }
}

customElements.define('ist256-card', Ist256Card);