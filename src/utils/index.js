export function stableTypeFromId(id) {
  const n = Number(String(id).replace(/\D/g, '')) || 0
  return n % 2 === 0 ? 'sale' : 'rent'
}
