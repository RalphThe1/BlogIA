(function () {
  const entradas = document.getElementById("entradas");
  const indice = document.getElementById("indice");
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbLegenda = document.getElementById("lb-legenda");
  const btnFechar = document.getElementById("fechar");

  document.getElementById("ano").textContent = new Date().getFullYear();

  // Ordena os posts da maior semana para a menor
  const posts = [...POSTS].sort((a, b) => b.semana - a.semana);

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

  posts.forEach((p) => {
    const id = "semana-" + p.semana;

    // Índice Lateral
    const li = el("li");
    const a = el("a", "", "Semana " + p.semana);
    a.href = "#" + id;
    li.appendChild(a);
    indice.appendChild(li);

    // Cartão da Semana
    const art = el("article", "entrada");
    art.id = id;

    // Cabecalho
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

    // Galeria de Imagens
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
    
    // Botão de Pedir Feedback ao Professor
    const footerEntrada = el("div", "entrada-footer");
    const mailLink = el("a", "btn-semana-feedback", "✉️ Enviar dúvida / sugestão de feedback sobre esta semana em específico.");
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