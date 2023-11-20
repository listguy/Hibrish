const template = `
  <div id="hibrish-popup" dir="rtl">
  <h3>בוצע!</h3>
  <p>הטקסט הומר והועתק אל ה clipboard</p>
  </div>
`;

const styled = ({ display = "none", right = 0, top = 0 }) => `
  #hibrish-popup {
    align-items: center;
    background-color: rgba(32,32,32,0.9);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: white;
    border-radius: 8px;
    display: ${display};
    right: ${right}px;
    padding: 0px 12px;
    position: fixed;
    top: ${top}px;
    z-index: 9999;
  }
`;

class HibrishPopup extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  get position() {
    return JSON.parse(this.getAttribute("position") || "{}");
  }

  get styleElement() {
    return this.shadowRoot.querySelector("style");
  }

  static get observedAttributes() {
    return ["position"];
  }

  render() {
    this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = styled({});
    this.shadowRoot.appendChild(style);
    this.shadowRoot.innerHTML += template;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "position") {
      this.styleElement.textContent = styled(this.position);
    }
  }
}

window.customElements.define("hibrish-popup", HibrishPopup);
