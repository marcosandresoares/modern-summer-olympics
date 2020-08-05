document.documentElement.className = 'js';

let supportCssVars = () => {
    let e, t = document.createElement('style');
    return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e
}

supportCssVars() || alert('Please view this project in a modern browser able to support CSS Variables')