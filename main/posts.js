/* ============================================================
   REGISTO DE PROGRESSO DO PROJETO SURVIVOR-BOT
   ============================================================ */

const POSTS = [
  {
    semana: 2,
    titulo: "Construção do Torso, Fixação dos Motores e Reorganização dos Sensores",
    data: "26 de outubro a 30 de outubro de 2026",
    objetivos: [
      { texto: "Montagem do torso do robô (painéis frontal e traseiro)", feito: true },
      { texto: "Fixação definitiva dos servomotores de tração na estrutura", feito: true },
      { texto: "Ajuste e reposicionamento estratégico dos sensores na base", feito: true },
      { texto: "Desenvolvimento do suporte para fixação do bloco EV3", feito: false },
      { texto: "Conceção e montagem da cabeça do robô (WALL-E)", feito: false },
      { texto: "Definição do ecossistema de software e linguagens de programação a utilizar", feito: false }
    ],
    descricao:
      "Avançámos significativamente na construção física do robô durante esta semana. " +
      "Concentrámo-nos no desenvolvimento do torso do WALL-E, construindo com sucesso as estruturas principal, frontal e traseira.\n\n" +
      "Os servomotores de tração já se encontram oficialmente fixos de forma sólida ao chassis. " +
      "Aproveitámos também esta fase para reavaliar a disposição do hardware e mudar a posição de alguns sensores, garantindo melhores leituras e menor interferência durante a navegação.\n\n" +
      "Nas próximas sessões, o foco estará em criar o suporte para acoplar o bloco EV3 ao torso, desenhar a cabeça do robô e tomar as decisões finais relativamente às linguagens e tecnologias de programação a implementar no projeto.",
    fotos: [
      { 
        ficheiro: "frente_final.jpg", 
        legenda: "Estrutura Frontal do Torso: Detalhe do chassis com motores integrados e suporte reforçado." 
      },
      { 
        ficheiro: "frente_final_angulo2.jpg", 
        legenda: "Vista Frontal Alternativa: Alinhamento das lagartas e alocação de espaço para os componentes." 
      },
      { 
        ficheiro: "tras_final.jpg", 
        legenda: "Parte Traseira Concluída: Grelha estrutural e fecho do torso para maior rigidez." 
      },
      { 
        ficheiro: "tras_final_angulo2.jpg", 
        legenda: "Perspectiva Traseira/Superior: Posicionamento dos motores e passagens para fiação." 
      },
      { 
        ficheiro: "vista_baixo_construcao.jpg", 
        legenda: "Vista Inferior do Chassis: Disposição interna dos sensores e ponto de fixação central." 
      },
      { 
        ficheiro: "vista_cima_final.jpg", 
        legenda: "Vista Superior da Base: Área reservada para a montagem futura do bloco EV3 e da cabeça." 
      }
    ],
  },
  {
    semana: "1.2",
    titulo: "Storytelling WALL-E e Montagem das Lagartas de Tração",
    data: "19 de outubro a 23 de outubro de 2026",
    objetivos: [
      { texto: "Reinterpretação da narrativa: transição para temática WALL-E, robôs patrulha e recolha de plantas", feito: true },
      { texto: "Conceção e montagem do sistema de tração por lagartas triangulares", feito: true },
      { texto: "Testes práticos de resistência e mobilidade das lagartas", feito: true }
    ],
    descricao:
      "Para dar uma identidade única ao projeto, decidimos adaptar o cenário original do enunciado para o universo do WALL-E!\n\n" +
      "Em vez da temática tradicional de zombies e peças de mota, o nosso robô assume o papel de um explorador num planeta deserto. " +
      "O objetivo passa por usar algoritmos de IA para navegar no tabuleiro 6x6, evitar robôs patrulha (antigos zombies) e recolher plantas para salvar a Terra.\n\n" +
      "Inspirados no próprio WALL-E, desenhámos e montámos um sistema de tração com lagartas em formato triangular. " +
      "Esta estrutura física já se encontra totalmente montada e testada, garantindo elevada estabilidade e aderência.",
    fotos: [
      { 
        ficheiro: "lagarta-triangular-angulo1.jpg", 
        legenda: "Estrutura de Lagartas Triangulares: Design robusto e funcional inspirado no robô WALL-E." 
      },
      { 
        ficheiro: "lagarta-triangular-perspectiva.jpg", 
        legenda: "Perspectiva de Montagem: Testes de encaixe dos eixos Technic e módulos de lagarta." 
      }
    ],
  },
  {
    semana: "1.1",
    titulo: "Análise do Enunciado, Inventário de Hardware e Início da Base Física",
    data: "19 de outubro a 23 de outubro de 2026",
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
        ficheiro: "motor-pequeno.jpg", 
        legenda: "Servomotor Pequeno EV3 (x1): Responsável por pecas que não requerem tanta potência." 
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
        legenda: "Sensor de Toque (x2): Botão mecânico para contacto físico ou confirmação de ações." 
      }
    ],
  }
];