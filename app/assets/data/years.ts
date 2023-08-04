export default Array.from(
  { length: 50 }, (_, i) => new Date().getFullYear() - i
)