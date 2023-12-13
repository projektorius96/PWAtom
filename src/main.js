import './web-components/pwa-ui/toolbar-btn.js';
import { 
    document_body$css,
    draggableRegion$css,
} from "./css/pwa-ui.js";

document.adoptedStyleSheets.push(...[
    document_body$css,
    draggableRegion$css,
])