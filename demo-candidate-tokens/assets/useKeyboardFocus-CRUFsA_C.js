/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const t={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowRight:"ArrowRight",ArrowLeft:"ArrowLeft",Home:"Home",End:"End"},b=["a[href]:not([disabled])","button:not([disabled])","textarea:not([disabled])",'input[type="text"]:not([disabled])','input[type="radio"]:not([disabled])','input[type="checkbox"]:not([disabled])',"select:not([disabled])"],p=(c,w)=>{const{rotating:l=!1,directChildrenOnly:f=!1,horizontally:a=!1}=w,u=a?t.ArrowRight:t.ArrowDown,y=a?t.ArrowLeft:t.ArrowUp;return{keyDown:r=>{if(c.current){const A=c.current,{activeElement:n}=window.document,d=f?":scope > ":"",e=Array.from(A.querySelectorAll(`${d}${b.join(`, ${d}`)}`)),s=i=>i&&e.includes(i)?e.indexOf(i):0;let o;switch(r.key){case u:{s(n)!==e.length-1?(o=e[s(n)+1],n&&!e.includes(n)&&(o=e[0])):l&&(o=e[0]);break}case y:{s(n)!==0?o=e[s(n)-1]:l&&(o=e[e.length-1]);break}case t.Home:{o=e[0];break}case t.End:{o=e[e.length-1];break}}(r.key===t.ArrowDown||r.key===t.ArrowUp||r.key===t.ArrowLeft||r.key===t.ArrowRight||r.key===t.Home||r.key===t.End)&&o instanceof HTMLElement&&(o.focus(),r.preventDefault())}}}};export{p as u};
