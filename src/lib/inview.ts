/**
 * "È in pagina?" senza IntersectionObserver.
 * Misura il rettangolo su scroll/resize con un solo timer condiviso: costo
 * trascurabile e comportamento identico anche in webview/anteprime dove le
 * callback dell'observer a volte non arrivano.
 */
type Callback = (visible: boolean) => void;

interface Watcher {
  el: Element;
  cb: Callback;
  once: boolean;
  state: boolean;
}

const watchers: Watcher[] = [];
let queued = false;

function run() {
  queued = false;
  const h = window.innerHeight || document.documentElement.clientHeight;
  for (const w of [...watchers]) {
    const r = w.el.getBoundingClientRect();
    const visible = r.top < h * 0.95 && r.bottom > 0 && r.width > 0;
    if (visible === w.state) continue;
    w.state = visible;
    w.cb(visible);
    if (visible && w.once) watchers.splice(watchers.indexOf(w), 1);
  }
}

function schedule() {
  if (queued) return;
  queued = true;
  setTimeout(run, 16);
}

export function inView(el: Element, cb: Callback, once = false) {
  watchers.push({ el, cb, once, state: false });
  schedule();
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  document.addEventListener('DOMContentLoaded', schedule);
  setTimeout(schedule, 400);
  setTimeout(schedule, 1200);
}
