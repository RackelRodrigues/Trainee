export function formatCNPJ(CNPJ: string) {
  if (!CNPJ) return "";

  const cnpj = CNPJ.replace(/\D/g, "");

  const limited = cnpj.slice(0, 14);

  return limited
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}
