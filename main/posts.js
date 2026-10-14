/* ============================================================
   ESTRUTURA DOS RELATÓRIOS DO SURVIVOR-BOT
   - semana:     número da semana
   - titulo:     título da fase do projeto
   - data:       intervalo de datas
   - objetivos:  lista de { texto, feito (true/false) }
   - descricao:  resumo técnico do que foi feito
   - fotos:      imagens do robô, algoritmos ou testes
   ============================================================ */

const POSTS = [
  {
    semana: 2,
    titulo: "Lógica dos Zombies e Leitura do Cheiro",
    data: "7 de outubro de 2026",
    objetivos: [
      { texto: "Implementar movimentação aleatória dos Zombies (sentido horário em colisão)", feito: true },
      { texto: "Criar lógica do alarme ao apanhar a peça da mota", feito: true },
      { texto: "Testar deteção de cheiro (1 vs 2 casas de distância)", feito: false }
    ],
    descricao:
      "Nesta semana focamo-nos na lógica dos Zombies. Definimos a movimentação aleatória de 1 casa por turno e a regra de desvio no sentido horário quando tentam ocupar uma casa inválida ou sair do tabuleiro 6x6.\n\n" +
      "Também começamos a tratar o estado do alarme: quando o Survivor-Bot apanha uma peça, os zombies mudam a sua prioridade de movimento para ←, ↑, ↓ em direção ao herói.",
    fotos: [
      // { ficheiro: "semana2-zombie-logic.png", legenda: "Simulação do caminho dos zombies com alarme ativo" }
    ],
  },
  {
    semana: 1,
    titulo: "Modelação do Ambiente 6x6 e Regras do Jogo",
    data: "30 de setembro de 2026",
    objetivos: [
      { texto: "Criar a grelha de simulação 6x6", feito: true },
      { texto: "Posicionar Survivor-Bot em (1,1) e Mota em (6,6)", feito: true },
      { texto: "Implementar distribuição aleatória das 2 Peças e da Munição", feito: true }
    ],
    descricao:
      "Arrancamos com o projeto Survivor-Bot definindo as estruturas base do jogo por turnos.\n\n" +
      "Configuramos as posições iniciais fixas segundo o enunciado: Survivor-Bot em (1,1), Mota em (6,6) e os dois Zombies em (1,6) e (6,1). Lançamos os dados para a geração aleatória das coordenadas (I,J) para as peças e munição.",
    fotos: [
      // { ficheiro: "semana1-tabuleiro.png", legenda: "Representação inicial do tabuleiro 6x6" }
    ],
  }
];