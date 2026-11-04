/* ============================================================
   REGISTO DE PROGRESSO DO PROJETO SURVIVOR-BOT
   ============================================================ */

const POSTS = [
  /* ============================================================
   REGISTO DE PROGRESSO DO PROJETO SURVIVOR-BOT
   ============================================================ */
  {
    semana: 3,
    titulo: "Reestruturação da Base, Integração Completa do EV3 e Primeiros Testes no Tabuleiro",
    data: "2 de novembro a 6 de novembro de 2026",
    objetivos: [
      { texto: "Reformulação da base física devido a incompatibilidades de encaixe do bloco EV3", feito: true },
      { texto: "Fixação definitiva do bloco EV3 com distribuição equilibrada de peso", feito: true },
      { texto: "Conexão e cablagem de todos os motores e sensores ao EV3", feito: true },
      { texto: "Primeiros testes de locomoção e rotação em grelha 6x6 (com registo de vídeo)", feito: true },
      { texto: "Ajuste fino dos parâmetros de travagem e viragens de 90°", feito: false }
    ],
    descricao:
      "Durante esta semana enfrentámos o desafio de ter de reformular a base física do robô. " +
      "Devido a problemas de estabilidade e ao encaixe do próprio bloco (brick) EV3 na estrutura anterior, optámos por reconstruir o chassis, garantindo que o tijolo programável ficasse perfeitamente ancorado e com acesso direto às portas de ligação.\n\n" +
      "Após a conclusão da montagem, estabelecemos todas as ligações de cablagem entre os motores, sensores e o EV3. " +
      "Realizámos com sucesso os primeiros testes práticos de navegação no tabuleiro 6x6, onde se comprovou a excelente mobilidade do robô ao realizar avanços de casa em casa e rotações precisas sobre a grelha.",
    fotos: [
      { 
        ficheiro: "ev3_acoplado_frente.jpg", 
        legenda: "Estrutura Frontal Final: Bloco EV3 totalmente integrado acima do módulo de sensores." 
      },
      { 
        ficheiro: "ev3_acoplado_perfil_esquerdo.jpg", 
        legenda: "Vista de Perfil Esquerdo: Alinhamento da tração de lagartas com a passagem dos cabos de dados." 
      },
      { 
        ficheiro: "ev3_acoplado_perfil_direito.jpg", 
        legenda: "Vista de Perfil Direito: Fixação firme do brick no chassis reconstruído para evitar desequilíbrios." 
      },
      { 
        ficheiro: "ev3_acoplado_traseira.jpg", 
        legenda: "Vista Traseira/Superior: Organização da cablagem ligada às portas de motores e sensores do EV3." 
      },
      { 
        ficheiro: "ev3_acoplado_baixo.jpg", 
        legenda: "Vista Inferior: Base do robô reforçada para resistir aos esforços mecânicos." 
      },
      { 
        ficheiro: "logica_base_movimentacao.jpg", 
        legenda: "Logica de Movimentação: Diagrama usando os blocos de progamação disponiblizados pela LEGO Mindstorms EV3." 
      }
    ],
    videos: [
      { 
        ficheiro: "teste_tracao.mp4", 
        legenda: "Teste de Arranque e Movimento Retilíneo: Verificação da tração de lagartas na grelha." 
      },
      { 
        ficheiro: "teste_rotacao.mp4", 
        legenda: "Teste de Rotação em Eixo: Manobra de viragem de 90° sobre a interseção do tabuleiro." 
      },
      { 
        ficheiro: "teste_movimentacao_basica.mp4", 
        legenda: "Navegação Contínua: Teste prático de deslocação entre células do tabuleiro de jogo." 
      }
    ],
  },
  {
    semana: "2.2",
    titulo: "Integração do Suporte Superior e Instalação Definitiva do Bloco de Sensores",
    data: "26 de outubro a 30 de outubro de 2026",
    objetivos: [
      { texto: "Montagem do suporte físico superior para encaixe e fixação do bloco EV3", feito: true },
      { texto: "Instalação do módulo frontal de sensores (Ultrassónico, Giroscópico e Toque)", feito: true },
      { texto: "Alinhamento das portas de ligação e arrumação dos pontos de fiação", feito: true },
      { texto: "Conceção estética e física da cabeça do robô (WALL-E)", feito: true },
      { texto: "Definição do ecossistema de software e linguagens de programação a utilizar", feito: true }
    ],
    descricao:
      "Nesta segunda fase da Semana 2, concretizámos a montagem do suporte superior do chassis, criando uma plataforma estável e segura para acoplar o tijolo programável EV3.\n\n" +
      "Além disso, fixámos na parte frontal o módulo principal de sensores, integrando o Sensor Ultrassónico centralmente ladeado pelos Sensores de Toque e o Sensor Giroscópico. " +
      "Esta configuração garante excelente visibilidade frontal e facilidade no encaminhamento dos cabos para as respetivas portas de entrada do EV3.\n\n" +
      "Com a estrutura do corpo praticamente concluída, o próximo passo centra-se no desenho da cabeça inspirada no WALL-E e na tomada de decisão sobre a stack de software a implementar.",
    fotos: [
      { 
        ficheiro: "suporte_ev3_e_sensores_frente.jpg", 
        legenda: "Módulo Frontal de Sensores: Sensor Ultrassónico central, Sensores de Toque e Giroscópio integrados." 
      },
      { 
        ficheiro: "suporte_ev3_e_sensores_perspectiva.jpg", 
        legenda: "Perspectiva Frontal/Lateral: Estrutura do suporte superior para acoplamento do tijolo EV3." 
      },
      { 
        ficheiro: "suporte_ev3_e_sensores_tras.jpg", 
        legenda: "Vista Posterior do Suporte: Disposição das portas de ligação dos sensores e passagem de fiação." 
      },
      { 
        ficheiro: "suporte_ev3_superior.jpg", 
        legenda: "Plataforma Superior do Chassis: Base reforçada com travamentos Technic para suporte do bloco EV3." 
      },
      { 
        ficheiro: "vista_topo_estrutura_completa.jpg", 
        legenda: "Vista Superior Geral: Alinhamento das lagartas com o torso e o novo módulo de suporte." 
      },
      { 
        ficheiro: "vista_baixo_estrutura.jpg", 
        legenda: "Vista Inferior: Reforços estruturais inferiores e alinhamento dos motores de tração." 
      }
    ],
  },
  {
    semana: "2.1",
    titulo: "Construção do Torso, Fixação dos Motores e Reorganização dos Sensores",
    data: "26 de outubro a 30 de outubro de 2026",
    objetivos: [
      { texto: "Montagem do torso do robô (painéis frontal e traseiro)", feito: true },
      { texto: "Fixação definitiva dos servomotores de tração na estrutura", feito: true },
      { texto: "Ajuste e reposicionamento estratégico dos sensores na base", feito: true }
    ],
    descricao:
      "Avançámos significativamente na construção física do robô durante esta fase inicial da semana. " +
      "Concentrámo-nos no desenvolvimento do torso do WALL-E, construindo com sucesso as estruturas principal, frontal e traseira.\n\n" +
      "Os servomotores de tração já se encontram oficialmente fixos de forma sólida ao chassis. " +
      "Aproveitámos também esta fase para reavaliar a disposição do hardware e mudar a posição de alguns sensores, garantindo melhores leituras e menor interferência durante a navegação.",
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