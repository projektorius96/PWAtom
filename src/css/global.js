const document_body$css = new CSSStyleSheet();
    document_body$css.insertRule(
    /* style */`
            body 
            {
                height: 100vh;
            }
    `.trim())
    document_body$css.insertRule(
    /* style */`
            body, 
            body * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
    `.trim())

const draggableRegion$css = new CSSStyleSheet();
    draggableRegion$css.insertRule(
    /* style */`
            nav {
                -webkit-app-region: drag;
                & > button {
                    -webkit-app-region: no-drag;
                }
            }
    `.trim())

export {
    document_body$css,
    draggableRegion$css,
}