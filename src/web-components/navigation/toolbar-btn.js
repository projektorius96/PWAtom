// DEV_NOTE # filesystem-based web constant "__filename" with stripped format (stripping format is optional [TESTED])
const __filename = import.meta.url.split('/').pop().replace(".js", "");

customElements.define(__filename, 
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

const button_minimize = Reflect.construct(customElements.get(__filename), [RegExp('\u{1F5D5}').source])
    button_minimize.addEventListener('click', __preload__toolbarControls.minimize.bind())
const button_close = Reflect.construct(customElements.get(__filename), [RegExp('\u{1F5D9}').source])
    button_close.addEventListener('click', window.close.bind())
const button_maximize = Reflect.construct(customElements.get(__filename), [RegExp('\u{1F5D6}').source])
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

const toolbar = document.body.children.toolbar;
const toolbar$css = new CSSStyleSheet()
    toolbar$css.insertRule(`
        #${toolbar.id} {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            background-color: #efefef;
        }
`)

toolbar.append(
    button_minimize,
    button_maximize,
    button_close,
)

export {
    toolbar$css
}