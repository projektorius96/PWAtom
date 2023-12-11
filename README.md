# Project name: PWAtom

> ### **DISCLAIMER**: Tested only on x64 Windows 11 (and onwards) machine

---

### **Motivation**

> This is a "minimum" (hence "Atom" for **PWAtom**) prototype I would like to see in the future for (a standardised, if possible) browser of choice PWA UI.

Progressive Web Apps (hereinafter – PWA) nowadays tries to offer vendor-specific native alike user experience for end-users (hereinafter – UX/UI), quite frankly I am still not happy about its current developer-as-a-user (hereinafter – DX/UI) experience, at least the results of what generic PWA can offer today. I do understand possible security concerns and from DX/UI perspective appreciate the bite of experience vendors do share with us, however I decided to try to prototype my own PWA-like experience using Electron@28.0.0 frameless window as a base adding with a draggable region – _that's a light grey toolbar i.e._ `<nav>` _element containing three aribtrarily-defined window's controls that listen for events (examine codebase for its functionality)_.

### **To initiate the process**

Prerequisites: `npm ci`

Run command: `npx electron index.mjsW`
