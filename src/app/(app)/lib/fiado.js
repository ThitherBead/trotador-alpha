import { vendas, pagamentos, HOJE } from "../data/mock";

export function totalDaVenda(venda) {
  return preco * qtd;
}

export function diasDeAtraso(dataVenda, hoje) {
  dataVenda = Date(dataVenda);
  hoje = Date(hoje);
  
  return dataVenda - hoje;

}

export function acrescimo(venda, hoje) {
  if (venda.pagamento == "fiado") {
    
  }
  // calcular os dias de atraso (chamando a função acima)
  // R$ 2 por dia depois do 7º, e nunca negativo
}

export function dividaDaPessoa(pessoaId) {
  // 1. filtrar as vendas fiadas dessa pessoa
  // 2. somar total + acréscimo de cada uma
  // 3. subtrair os pagamentos dessa pessoa
}