/* ============================================================
   ESTRUTURA DOS RELATÓRIOS DO SURVIVOR-BOT
   - semana:     número da semana
   - titulo:     título da fase do projeto
   - data:       intervalo de datas
   - objetivos:  lista de { texto, feito (true/false) }
   - descricao:  resumo técnico do que foi feito
   - fotos:      imagens do robô, algoritmos ou testes
   ============================================================ */

/* ============================================================
   REGISTO DE PROGRESSO DO PROJETO SURVIVOR-BOT
   ============================================================ */

const POSTS = [
  {
    semana: 2,
    titulo: "Análise das Regras de Movimento dos Zombies e Mecânica de Alarme",
    data: "14 de outubro de 2026",
    objetivos: [
      { texto: "Modelar o algoritmo de movimento aleatório dos Zombies (1 casa por turno)", feito: true },
      { texto: "Implementar desvio no sentido horário para colisões e bordas do tabuleiro", feito: true },
      { texto: "Programar a mudança de prioridade (←, ↑, ↓) quando o alarme da peça está ativo", feito: false }
    ],
    descricao:
      "Aprofundamos a implementação da lógica dos Zombies com base nos requisitos do enunciado[cite: 2]. " +
      "Segundo o enunciado, cada Zombie move-se uma casa de cada vez e dois Zombies não podem ocupar a mesma posição simultaneamente[cite: 2]. " +
      "Implementamos a verificação de limites do tabuleiro 6x6 e a rotação no sentido horário caso a célula pretendida esteja ocupada[cite: 1, 2].\n\n" +
      "Neste momento estamos a finalizar a transição de estado quando o Survivor-Bot recolhe uma peça e ativa o alarme[cite: 2]: " +
      "os Zombies passam a ser atraídos diretamente para o herói seguindo a ordem de prioridade definida pelo professor (←, ↑, ↓)[cite: 2].",
    fotos: [],
  },
  {
    semana: 1,
    titulo: "Análise do Enunciado e Modelação do Tabuleiro 6x6",
    data: "7 de outubro de 2026",
    objetivos: [
      { texto: "Estruturar o mapa do jogo num array 6x6", feito: true },
      { texto: "Definir coordenadas iniciais do Survivor-Bot (1,1) e da Mota (6,6)", feito: true },
      { texto: "Implementar o sorteio de coordenadas (I, J) via dados para peças e munição", feito: true }
    ],
    descricao:
      "Apresentação e análise detalhada do enunciado do projeto 'Survivor-Bot' para a disciplina de Inteligência Artificial[cite: 1]. " +
      "Iniciamos a construção da simulação configurando o ambiente do jogo[cite: 1]: " +
      "posicionamos o Survivor-Bot na coordenada (1,1), a Mota avariada em (6,6) e os dois Zombies nas posições opostas (1,6) e (6,1)[cite: 1, 2].\n\n" +
      "Também codificamos a lógica de sorteio através do lançamento virtual de 2 dados para distribuir aleatoriamente no tabuleiro as 2 peças e a munição de pistola no arranque do jogo[cite: 1, 2].",
    fotos: [],
  }
];