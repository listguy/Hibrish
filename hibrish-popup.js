const template = `
    <span id="hibrish-popup">
    Hibrished!
    </span>
`;

const styled = ({ display = "none", left = 0, top = 0 }) => `
  #hibrish-popup {
    align-items: center;
    background-color: black;
    color: white;
    border-radius: 5px;
    display: ${display};
    justify-content: center;
    left: ${left - 20}px;
    padding: 2px 3px;
    position: fixed;
    top: ${top - 30}px;
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
