const __dirname = import.meta.url.split('/').at(-2);

customElements.define(__dirname, 
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

const button_minimize = Reflect.construct(customElements.get(__dirname), [RegExp('\u{1F5D5}').source])
    button_minimize.addEventListener('click', __preload__appbarControls.minimize.bind())
const button_close = Reflect.construct(customElements.get(__dirname), [RegExp('\u{1F5D9}').source])
    button_close.addEventListener('click', window.close.bind())
const button_maximize = Reflect.construct(customElements.get(__dirname), [RegExp('\u{1F5D6}').source])
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

const appbar = document.body.children.appbar;
const appbar$css = new CSSStyleSheet()
    appbar$css.insertRule(/* style */`
        #${appbar.id} {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            background-color: #efefef;
        }
    `.trim())

appbar.append(...[
    button_minimize,
    button_maximize,
    button_close,
])

export {
    appbar$css
}