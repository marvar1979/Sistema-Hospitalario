export function newId(){return globalThis.crypto?.randomUUID?.()||`id-${Date.now()}-${Math.random().toString(36).slice(2)}`}
export function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
export function validatePatient(p){if(!p.name?.trim())return 'Ingresa el nombre del paciente.';if(!p.document?.trim())return 'Ingresa el documento.';if(!Number.isInteger(p.age)||p.age<0||p.age>120)return 'La edad debe estar entre 0 y 120.';return ''}
