/* ============================================================
   COMO ADICIONAR UMA SEMANA
   1. Copia as fotos para a pasta "imagens/"
   2. Copia um bloco { ... } abaixo e cola-o NO TOPO da lista
   3. Muda os campos. Grava. Atualiza a página.

   - semana:    número da semana
   - titulo:    título curto
   - data:      texto livre, ex.: "30 de setembro de 2026"
   - descricao: texto; deixa uma linha em branco para novo parágrafo
   - fotos:     lista de { ficheiro, legenda }  (pode ficar vazia: [])
   ============================================================ */

const POSTS = [
  {
    semana: 2,
    titulo: "Título da semana 2",
    data: "Data da semana 2",
    descricao:
      "Escreve aqui o que fizeste e aprendeste nesta semana.\n\n" +
      "Podes usar vários parágrafos. Deixa uma linha em branco entre eles.",
    fotos: [
      // { ficheiro: "semana2-exemplo.jpg", legenda: "Legenda da foto" },
    ],
  },
  {
    semana: 1,
    titulo: "Título da semana 1",
    data: "Data da semana 1",
    descricao:
      "Primeira entrada de exemplo. Substitui este texto pelo teu.",
    fotos: [
      // { ficheiro: "semana1-exemplo.jpg", legenda: "Legenda da foto" },
    ],
  },
];
