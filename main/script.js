(function () {
  const entradas = document.getElementById("entradas");
  const indice = document.getElementById("indice");
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbLegenda = document.getElementById("lb-legenda");
  const btnFechar = document.getElementById("fechar");

  document.getElementById("ano").textContent = new Date().getFullYear();

  // Ordena os posts da maior semana para a menor
  const posts = [...POSTS].sort((a, b) => parseFloat(b.semana) - parseFloat(a.semana));

  if (posts.length === 0) {
    entradas.innerHTML =
      '<p class="vazio">Ainda não há entradas. Adiciona a primeira semana em posts.js.</p>';
    return;
  }

  function el(tag, classe, texto) {
    const e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto !== undefined) e.textContent = texto;
    return e;
  }

  // =========================================================================
  // MOTOR DE GRÁFICOS E DIAGRAMAS SVG REUTILIZÁVEIS
  // =========================================================================
  function gerarSvgDataUri(g) {
    let svg = "";

    if (g.tipo === "barras_empilhadas") {
      const largura = 760;
      const altura = 145 + g.linhas.length * 66;
      const larguraBarra = largura - 68;
      let linhasSvg = "";

      // Legenda
      let lx = 34;
      g.series.forEach((s) => {
        linhasSvg += `<rect x="${lx}" y="82" width="12" height="12" rx="3" fill="${s.cor}"/>`;
        linhasSvg += `<text x="${lx + 18}" y="93" fill="#e2e8f0" font-family="Segoe UI, Arial, sans-serif" font-size="13">${s.nome}</text>`;
        lx += 150;
      });

      // Barras
      let y = 130;
      g.linhas.forEach((linha) => {
        linhasSvg += `<text x="34" y="${y}" fill="#f8fafc" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600">${linha.label}</text>`;
        linhasSvg += `<text x="${largura - 34}" y="${y}" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="12" text-anchor="end">${linha.extra || ""}</text>`;
        linhasSvg += `<rect x="34" y="${y + 8}" width="${larguraBarra}" height="26" rx="6" fill="#334155"/>`;

        let bx = 34;
        linha.valores.forEach((val, idx) => {
          const w = (val / 100) * larguraBarra;
          if (w > 0) {
            linhasSvg += `<rect x="${bx.toFixed(1)}" y="${y + 8}" width="${w.toFixed(1)}" height="26" fill="${g.series[idx].cor}"/>`;
            if (val >= 6) {
              linhasSvg += `<text x="${(bx + w / 2).toFixed(1)}" y="${y + 25}" fill="#0f172a" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">${val}%</text>`;
            }
            bx += w;
          }
        });
        y += 66;
      });

      svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${largura}" height="${altura}" viewBox="0 0 ${largura} ${altura}">
        <rect width="100%" height="100%" rx="14" fill="#1e293b"/>
        <text x="34" y="40" fill="#f8fafc" font-family="Segoe UI, Arial, sans-serif" font-size="19" font-weight="bold">${g.titulo}</text>
        <text x="34" y="62" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="13">${g.subtitulo || ""}</text>
        ${linhasSvg}
      </svg>`;
    }

    else if (g.tipo === "diagrama_arquitetura") {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" width="820" height="360" viewBox="0 0 820 360">
        <defs>
          <marker id="seta" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8"/>
          </marker>
          <marker id="seta-verde" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e"/>
          </marker>
        </defs>
        <rect width="100%" height="100%" rx="14" fill="#0f172a"/>
        <text x="410" y="38" fill="#f8fafc" font-family="Segoe UI, Arial, sans-serif" font-size="19" font-weight="bold" text-anchor="middle">${g.titulo}</text>

        <rect x="35" y="75" width="210" height="115" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="140" y="102" fill="#38bdf8" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">1. Perceções &amp; Sensores</text>
        <text x="140" y="125" fill="#e2e8f0" font-family="Segoe UI, Arial, sans-serif" font-size="12" text-anchor="middle">• Visão Ortogonal (Ultrassons)</text>
        <text x="140" y="145" fill="#e2e8f0" font-family="Segoe UI, Arial, sans-serif" font-size="12" text-anchor="middle">• Radar EM (Manhattan ≤ 2)</text>
        <text x="140" y="165" fill="#e2e8f0" font-family="Segoe UI, Arial, sans-serif" font-size="12" text-anchor="middle">• Estado do Alarme &amp; Itens</text>

        <line x1="245" y1="132" x2="298" y2="132" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#seta)"/>

        <rect x="305" y="75" width="210" height="115" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="410" y="102" fill="#c084fc" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">2. WorldModel (Crenças)</text>
        <text x="410" y="125" fill="#e2e8f0" font-family="Segoe UI, Arial, sans-serif" font-size="12" text-anchor="middle">• Grelha 6×6 de Probabilidades</text>
        <text x="410" y="145" fill="#e2e8f0" font-family="Segoe UI, Arial, sans-serif" font-size="12" text-anchor="middle">• Filtro de Difusão de Markov</text>
        <text x="410" y="165" fill="#e2e8f0" font-family="Segoe UI, Arial, sans-serif" font-size="12" text-anchor="middle">• Memória de Plantas &amp; Stuns</text>

        <line x1="515" y1="132" x2="568" y2="132" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#seta)"/>

        <rect x="575" y="75" width="210" height="115" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="680" y="102" fill="#fbbf24" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">3. Planner (Decisão)</text>
        <text x="680" y="125" fill="#e2e8f0" font-family="Segoe UI, Arial, sans-serif" font-size="12" text-anchor="middle">• Pesquisa A* Ponderada (Risco)</text>
        <text x="680" y="145" fill="#e2e8f0" font-family="Segoe UI, Arial, sans-serif" font-size="12" text-anchor="middle">• Penalização de Rotações 90°</text>
        <text x="680" y="165" fill="#e2e8f0" font-family="Segoe UI, Arial, sans-serif" font-size="12" text-anchor="middle">• Taser, EMP 360° &amp; Kiting</text>

        <rect x="245" y="235" width="330" height="85" rx="10" fill="#1e293b" stroke="#22c55e" stroke-width="2"/>
        <text x="410" y="262" fill="#4ade80" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">4. Execução de Ação (Simulador / EV3)</text>
        <text x="410" y="285" fill="#e2e8f0" font-family="Segoe UI, Arial, sans-serif" font-size="12" text-anchor="middle">Mover (1-2 passos) • Disparar Taser • Revistar • Ativar EMP</text>
        <text x="410" y="305" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="11" text-anchor="middle">Atualiza estado do tabuleiro e avança turno dos Robôs Anti-Vida</text>

        <path d="M 680 190 L 680 277 L 583 277" fill="none" stroke="#22c55e" stroke-width="2.5" marker-end="url(#seta-verde)"/>
        <path d="M 245 277 L 140 277 L 140 198" fill="none" stroke="#22c55e" stroke-width="2.5" marker-end="url(#seta-verde)"/>
      </svg>`;
    }

    else if (g.tipo === "mapa_astar") {
      // Visualização abstrata do A* na grelha 6x6 sem expor código fonte
      const cel = 48;
      const ox = 45;
      const oy = 75;
      let grelhaSvg = "";

      // Riscos probabilísticos (heatmap) e entidades
      const riscos = {
        "2,2": "#ef4444", "2,3": "#dc2626", "3,2": "#f87171", "1,2": "#f87171", "2,1": "#fca5a5"
      };

      for (let x = 0; x < 6; x++) {
        for (let y = 0; y < 6; y++) {
          const px = ox + x * cel;
          const py = oy + (5 - y) * cel;
          const chave = `${x},${y}`;
          const corFundo = riscos[chave] || "#1e293b";
          const opacidade = riscos[chave] ? "0.45" : "1";
          grelhaSvg += `<rect x="${px}" y="${py}" width="${cel - 3}" height="${cel - 3}" rx="6" fill="${corFundo}" fill-opacity="${opacidade}" stroke="#334155" stroke-width="1"/>`;
        }
      }

      // Rota ótima A* (contornando a mancha de risco em (2,2))
      const pontos = [
        [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 4], [2, 4], [3, 4], [4, 4]
      ].map(([x, y]) => `${ox + x * cel + 22},${oy + (5 - y) * cel + 22}`).join(" ");

      grelhaSvg += `<polyline points="${pontos}" fill="none" stroke="#22c55e" stroke-width="4" stroke-dasharray="6,4" stroke-linecap="round"/>`;

      // Ícones (Survivor, Inimigo, Planta)
      grelhaSvg += `<text x="${ox + 0 * cel + 22}" y="${oy + 5 * cel + 28}" fill="#38bdf8" font-family="Segoe UI, Arial" font-size="16" font-weight="bold" text-anchor="middle">^</text>`;
      grelhaSvg += `<text x="${ox + 2 * cel + 22}" y="${oy + 3 * cel + 28}" fill="#fca5a5" font-family="Segoe UI, Arial" font-size="15" font-weight="bold" text-anchor="middle">E</text>`;
      grelhaSvg += `<text x="${ox + 4 * cel + 22}" y="${oy + 1 * cel + 28}" fill="#4ade80" font-family="Segoe UI, Arial" font-size="15" font-weight="bold" text-anchor="middle">P</text>`;

      svg = `<svg xmlns="http://www.w3.org/2000/svg" width="780" height="390" viewBox="0 0 780 390">
        <rect width="100%" height="100%" rx="14" fill="#0f172a"/>
        <text x="390" y="38" fill="#f8fafc" font-family="Segoe UI, Arial, sans-serif" font-size="19" font-weight="bold" text-anchor="middle">${g.titulo}</text>
        ${grelhaSvg}

        <!-- Painel Explicativo da Função de Custo -->
        <rect x="365" y="75" width="375" height="285" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <text x="385" y="105" fill="#fbbf24" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="bold">Função de Avaliação: f(n) = g(n) + h(n)</text>

        <text x="385" y="138" fill="#38bdf8" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="bold">• Heurística h(n) — Distância de Manhattan:</text>
        <text x="395" y="158" fill="#cbd5e1" font-family="Segoe UI, Arial, sans-serif" font-size="12">Estimativa mínima até à Planta (P) ou Nave-Mãe (G).</text>

        <text x="385" y="190" fill="#f87171" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="bold">• Penalização de Risco Markov (45 × P_risco):</text>
        <text x="395" y="210" fill="#cbd5e1" font-family="Segoe UI, Arial, sans-serif" font-size="12">Células próximas de E (vermelho) têm custo elevado,</text>
        <text x="395" y="227" fill="#cbd5e1" font-family="Segoe UI, Arial, sans-serif" font-size="12">forçando o A* a contornar zonas de emboscada.</text>

        <text x="385" y="259" fill="#4ade80" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="bold">• Custo de Rotação EV3 (+0.45 por viragem 90°):</text>
        <text x="395" y="279" fill="#cbd5e1" font-family="Segoe UI, Arial, sans-serif" font-size="12">Prefere trajetórias retilíneas (linha verde tracejada)</text>
        <text x="395" y="296" fill="#cbd5e1" font-family="Segoe UI, Arial, sans-serif" font-size="12">para reduzir o erro acumulado nas lagartas físicas.</text>

        <text x="385" y="332" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-style="italic">^ Survivor   |   E Robô Anti-Vida   |   P Planta Alvo</text>
      </svg>`;
    }

    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  // =========================================================================
  // RENDERIZAÇÃO DOS POSTS
  // =========================================================================
  posts.forEach((p) => {
    const id = "semana-" + String(p.semana).replace(".", "-");

    // Índice Lateral
    const li = el("li");
    const a = el("a", "", "Semana " + p.semana);
    a.href = "#" + id;
    li.appendChild(a);
    indice.appendChild(li);

    // Cartão da Semana
    const art = el("article", "entrada");
    art.id = id;

    // Cabeçalho
    const cab = el("header", "entrada-cab");
    cab.appendChild(el("span", "num", "Semana " + p.semana));
    const bloco = el("div");
    bloco.appendChild(el("h2", "", p.titulo));
    bloco.appendChild(el("p", "data", p.data));
    cab.appendChild(bloco);
    art.appendChild(cab);

    // Lista de Objetivos
    if (p.objetivos && p.objetivos.length) {
      const objBox = el("div", "objetivos-box");
      objBox.appendChild(el("h3", "", "🎯 Objetivos de Desenvolvimento"));
      const ul = el("ul", "lista-objetivos");

      p.objetivos.forEach((obj) => {
        const liObj = el("li");
        liObj.textContent = `${obj.feito ? '✅ [Concluído]' : '⏳ [Em Curso]'} ${obj.texto}`;
        ul.appendChild(liObj);
      });

      objBox.appendChild(ul);
      art.appendChild(objBox);
    }

    // Texto de Descrição
    const texto = el("div", "texto");
    String(p.descricao || "")
      .split(/\n\s*\n/)
      .filter(Boolean)
      .forEach((par) => texto.appendChild(el("p", "", par.trim())));
    art.appendChild(texto);

    // Gráficos / Diagramas Gerados Dinamicamente (aparecem como imagens ampliáveis!)
    if (p.graficos && p.graficos.length) {
      const galeriaGraficos = el("div", "galeria");
      p.graficos.forEach((g) => {
        const fig = el("figure");
        const btn = el("button", "foto");
        btn.type = "button";
        btn.setAttribute("aria-label", "Ampliar: " + (g.legenda || g.titulo));
        const img = document.createElement("img");
        img.src = gerarSvgDataUri(g);
        img.alt = g.legenda || g.titulo || "";
        btn.appendChild(img);
        btn.addEventListener("click", () => abrir(img.src, g.legenda || g.titulo));
        fig.appendChild(btn);
        if (g.legenda) fig.appendChild(el("figcaption", "", g.legenda));
        galeriaGraficos.appendChild(fig);
      });
      art.appendChild(galeriaGraficos);
    }

    // Galeria de Imagens Físicas / Prints
    if (p.fotos && p.fotos.length) {
      const galeria = el("div", "galeria");
      p.fotos.forEach((f) => {
        const fig = el("figure");
        const btn = el("button", "foto");
        btn.type = "button";
        btn.setAttribute("aria-label", "Ampliar: " + (f.legenda || f.ficheiro));
        const img = document.createElement("img");
        img.src = "imagens/" + f.ficheiro;
        img.alt = f.legenda || "";
        img.loading = "lazy";
        btn.appendChild(img);
        btn.addEventListener("click", () => abrir(img.src, f.legenda));
        fig.appendChild(btn);
        if (f.legenda) fig.appendChild(el("figcaption", "", f.legenda));
        galeria.appendChild(fig);
      });
      art.appendChild(galeria);
    }

    // Galeria / Secção de Vídeos
    if (p.videos && p.videos.length) {
      const galeriaVideos = el("div", "galeria galeria-videos");
      p.videos.forEach((v) => {
        const fig = el("figure", "fig-video");
        const video = document.createElement("video");
        video.controls = true;
        video.preload = "metadata";

        const source = document.createElement("source");
        source.src = "videos/" + v.ficheiro;
        source.type = "video/mp4";

        video.appendChild(source);
        fig.appendChild(video);

        if (v.legenda) fig.appendChild(el("figcaption", "", v.legenda));
        galeriaVideos.appendChild(fig);
      });
      art.appendChild(galeriaVideos);
    }

    // Botão de Pedir Feedback ao Professor
    const footerEntrada = el("div", "entrada-footer");
    const mailLink = el(
      "a",
      "btn-semana-feedback",
      "✉️ Enviar dúvida / sugestão de feedback sobre esta semana em específico."
    );
    mailLink.href = `mailto:2145523@student.uma.pt?cc=2132423@student.uma.pt,2122123@student.uma.pt,2172524@student.uma.pt,2103523@student.uma.pt&subject=Feedback%20Survivor-Bot%20-%20Semana%20${p.semana}`;
    footerEntrada.appendChild(mailLink);
    art.appendChild(footerEntrada);

    entradas.appendChild(art);
  });

  // Funções da Lightbox
  function abrir(src, legenda) {
    lbImg.src = src;
    lbImg.alt = legenda || "";
    lbLegenda.textContent = legenda || "";
    lightbox.hidden = false;
    btnFechar.focus();
  }
  function fechar() {
    lightbox.hidden = true;
    lbImg.src = "";
  }
  btnFechar.addEventListener("click", fechar);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) fechar();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) fechar();
  });
})();