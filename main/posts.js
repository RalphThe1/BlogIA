/* ============================================================
   REGISTO DE PROGRESSO DO PROJETO SURVIVOR-BOT
   ============================================================ */

const POSTS = [
  {
    semana: 2,
    titulo: "Próxima Fase: Modelação do Algoritmo e Regras de Jogo",
    data: "A publicar em breve",
    objetivos: [
      { texto: "Testar o movimento da base robótica no tabuleiro 6x6", feito: false },
      { texto: "Implementar a lógica de turnos e movimento dos Zombies", feito: false },
      { texto: "Programar o sensor giroscópico para viragens de 90° precisas", feito: false }
    ],
    descricao:
      "Na próxima semana vamos iniciar a integração da lógica de IA do enunciado com a base física do robô. " +
      "Iremos focar-nos no controlo de movimento dos motores e no algoritmo de navegação pelas casas do tabuleiro.",
    fotos: [],
  },
  {
    semana: 1,
    titulo: "Análise do Enunciado, Inventário de Hardware e Início da Base Física",
    data: "7 de outubro de 2026",
    objetivos: [
      { texto: "Análise detalhada do enunciado e requisitos do projeto Survivor-Bot", feito: true },
      { texto: "Inventariação e teste dos motores e sensores recebidos no kit", feito: true },
      { texto: "Planificação da estrutura física e início da montagem da base de tração (2 motores + roda caster)", feito: true }
    ],
    descricao:
      "Arrancamos com a disciplina de Inteligência Artificial analisando o enunciado do 'Survivor-Bot'[cite: 1]. " +
      "Compreendemos as regras do jogo por turnos num tabuleiro 6x6, os papéis do Survivor-Bot, Mota e Zombies, bem como as mecânicas de alarme e cheiro[cite: 1, 2].\n\n" +
      "Paralelamente, fizemos a triagem de todo o hardware fornecido (componentes LEGO Mindstorms EV3). " +
      "Identificámos os servomotores, o sensor giroscópico, o sensor ultrassónico, o sensor de cor/luz e os botões de toque.\n\n" +
      "Iniciamos também a planificação da estrutura física do robô: desenhámos a base diferencial equipada com 2 Servomotores Grandes para a tração e 1 Roda Esférica Caster para apoio e estabilização de movimento.",
    fotos: [
      { 
        ficheiro: "motor-grande.jpg", 
        legenda: "Servomotor Grande EV3 (x2): Responsável pela tração e movimento exato das rodas." 
      },
      { 
        ficheiro: "roda-caster.jpg", 
        legenda: "Esfera Caster (Roda de Apoio): Dá equilíbrio à base e permite virar 360° no próprio eixo." 
      },
      { 
        ficheiro: "sensor-giroscopio.jpg", 
        legenda: "Sensor Giroscópico: Mede a rotação do robô para garantir viragens perfeitas de 90°." 
      },
      { 
        ficheiro: "sensor-ultrassons.jpg", 
        legenda: "Sensor de Ultrassons: Usado para medir distâncias e simular o reconhecimento / binóculos." 
      },
      { 
        ficheiro: "sensor-cor.jpg", 
        legenda: "Sensor de Cor: Permite detetar as linhas ou casas marcadas no chão do tabuleiro 6x6." 
      },
      { 
        ficheiro: "sensor-toque.jpg", 
        legenda: "Sensor de Toque (x3): Botão mecânico para contacto físico ou confirmação de ações." 
      }
    ],
  }
];