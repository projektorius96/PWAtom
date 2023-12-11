document.body.style.boxSizing = 'border-box';
document.body.style.margin = 0;

customElements.define('window-control-btn', 
class extends HTMLButtonElement {
    constructor(symbol){
        super()
        this.textContent = symbol;
        this.style.padding = "0.5em";
        return this;
    }
},
{
    extends: 'button'
})

const button_minimize = Reflect.construct(customElements.get('window-control-btn'), [RegExp('\u{1F5D5}').source])
    button_minimize.addEventListener('click', __preload__toolbarControls.minimize.bind())
const button_close = Reflect.construct(customElements.get('window-control-btn'), [RegExp('\u{1F5D9}').source])
    button_close.addEventListener('click', window.close.bind())
const button_maximize = Reflect.construct(customElements.get('window-control-btn'), [RegExp('\u{1F5D6}').source])
    let isMinimizedReady = false;
    button_maximize.addEventListener('click', ()=>{
        isMinimizedReady = !isMinimizedReady;
        if (isMinimizedReady){
            window.resizeTo(800, 600)
        }
        else {
            window.resizeTo(screen.availWidth, screen.availHeight)
        }
    })

const toolbar = document.getElementById("toolbar");
toolbar.style.display = 'flex';
toolbar.style.justifyContent = 'flex-end';
toolbar.style.width = "100%";
toolbar.style.backgroundColor = "#efefef";
toolbar.append(
    button_minimize,
    button_maximize,
    button_close,
)