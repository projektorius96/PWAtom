const document_body$css = new CSSStyleSheet();
    document_body$css.insertRule(
        `
            body, 
            body * {
                margin: 0;
                box-sizing: border-box;
            }
`)

const draggableRegion$css = new CSSStyleSheet();
    draggableRegion$css.insertRule(
        `

            nav {
                -webkit-app-region: drag;
                & > button {
                    -webkit-app-region: no-drag;
                }
            }

`)

export {
    document_body$css,
    draggableRegion$css,
}