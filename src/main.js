import package_json from '../package.json' with {type: "json"}
import { appbar$css } from './web-components/navigation/toolbar-btn/index.js';
import { 
    document_body$css,
    draggableRegion$css,
} from "./css/global.js";

document.addEventListener('DOMContentLoaded', ()=>{
    document.title = package_json.name
})

document.adoptedStyleSheets.push(...[
    document_body$css,
    draggableRegion$css,
    appbar$css
])