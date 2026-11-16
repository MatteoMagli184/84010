/** «Per *info* e *prenotazioni*» → «Per <em>info</em> e <em>prenotazioni</em>». */
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function rich(text: string): string {
  return esc(text).replace(/\*(.+?)\*/g, '<em>$1</em>');
}

/** Lo stesso testo senza asterischi (per aria-label, meta, schema). */
export function plain(text: string): string {
  return text.replace(/\*/g, '');
}
