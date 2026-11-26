export const pessoas = [
  { id: 1, nome: "Ana Souza", tipo: "cliente", whatsapp: "(66) 99999-1111", nascimento: "2008-03-14", responsavel: "(66) 99999-0000" },
  { id: 2, nome: "Bruno Lima", tipo: "cliente", whatsapp: "(66) 99999-2222", nascimento: "2007-11-02", responsavel: "" },
  { id: 3, nome: "Carla Mendes", tipo: "convidado", whatsapp: "(66) 99999-3333", nascimento: "", responsavel: "" },
  { id: 4, nome: "Diego Rocha", tipo: "cliente", whatsapp: "(66) 99999-4444", nascimento: "2009-07-21", responsavel: "(66) 99999-4000" },
  { id: 5, nome: "Elisa Prado", tipo: "cliente", whatsapp: "(66) 99999-5555", nascimento: "1985-01-30", responsavel: "" },
  { id: 6, nome: "Fábio (visitante)", tipo: "convidado", whatsapp: "", nascimento: "", responsavel: "" },
];

export const produtos = [
  { id: 1, nome: "Pastel", preco: 6 },
  { id: 2, nome: "Refrigerante", preco: 5 },
  { id: 3, nome: "Brigadeiro", preco: 3 },
  { id: 4, nome: "Camiseta do trote", preco: 35 },
];

// O preço fica copiado dentro de cada item (regra RN06: preço congelado na venda)
export const vendas = [
  { id: 1, pessoaId: 1, troteiro: "Marcos", data: "2026-10-20", pagamento: "fiado",
    itens: [{ produtoId: 4, nome: "Camiseta do trote", preco: 35, qtd: 1 }] },
  { id: 2, pessoaId: 1, troteiro: "Marcos", data: "2026-10-30", pagamento: "fiado",
    itens: [{ produtoId: 1, nome: "Pastel", preco: 6, qtd: 2 }] },
  { id: 3, pessoaId: 2, troteiro: "Julia", data: "2026-11-02", pagamento: "avista",
    itens: [{ produtoId: 2, nome: "Refrigerante", preco: 5, qtd: 1 }] },
  { id: 4, pessoaId: 3, troteiro: "Julia", data: "2026-10-31", pagamento: "fiado",
    itens: [{ produtoId: 3, nome: "Brigadeiro", preco: 3, qtd: 5 }] },
  { id: 5, pessoaId: 4, troteiro: "Marcos", data: "2026-10-12", pagamento: "fiado",
    itens: [{ produtoId: 4, nome: "Camiseta do trote", preco: 35, qtd: 2 }] },
  { id: 6, pessoaId: 5, troteiro: "Julia", data: "2026-11-05", pagamento: "avista",
    itens: [{ produtoId: 1, nome: "Pastel", preco: 6, qtd: 3 }] },
  { id: 7, pessoaId: 6, troteiro: "Marcos", data: "2026-11-06", pagamento: "avista",
    itens: [{ produtoId: 2, nome: "Refrigerante", preco: 5, qtd: 2 }] },
];

export const pagamentos = [
  { id: 1, pessoaId: 4, valor: 30, data: "2026-10-25", troteiro: "Julia" },
];

export const HOJE = "2026-11-07"; // fixo para testar; depois vira new Date()