import { toolbar$css } from './web-components/navigation/toolbar-btn/index.js';
import { 
    document_body$css,
    draggableRegion$css,
} from "./css/global.js";

document.adoptedStyleSheets.push(...[
    document_body$css,
    draggableRegion$css,
    toolbar$css
])