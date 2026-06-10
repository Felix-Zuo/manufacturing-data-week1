(function () {
  const STORAGE = {
    view: "felix.week1.view",
    scroll: "felix.week1.scrollY",
    vocab: "felix.week1.vocab",
    notes: "felix.week1.notes",
    lastSection: "felix.week1.lastSection"
  };

  const library = window.COURSE_LIBRARY;
  const week = library.weeks.find((item) => item.id === library.currentWeekId) || library.weeks[0];
  const glossaryByLower = new Map(week.glossary.map((item) => [item.term.toLowerCase(), item]));

  const el = {
    overview: document.getElementById("overview-view"),
    course: document.getElementById("course-view"),
    english: document.getElementById("english-view"),
    vocab: document.getElementById("vocab-view"),
    notes: document.getElementById("notes-view"),
    tocPanel: document.getElementById("toc-panel"),
    tocList: document.getElementById("toc-list"),
    noteSheet: document.getElementById("note-sheet"),
    noteSource: document.getElementById("note-source"),
    noteInput: document.getElementById("note-input"),
    toast: document.getElementById("toast")
  };

  let activeNoteId = null;
  let saveScrollTimer = null;

  function readJson(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#96;");
  }

  function selectorValue(value) {
    return String(value).replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
  }

  function slug(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function getVocab() {
    return readJson(STORAGE.vocab, {});
  }

  function setVocab(vocab) {
    writeJson(STORAGE.vocab, vocab);
  }

  function getNotes() {
    return readJson(STORAGE.notes, {});
  }

  function setNotes(notes) {
    writeJson(STORAGE.notes, notes);
  }

  function paragraphHtml(text, noteId) {
    const notes = getNotes();
    const marked = notes[noteId] ? " has-note" : "";
    const mark = notes[noteId] ? "<span class=\"para-note-mark\">已收藏</span>" : "";
    return `<p class="para note-target${marked}" data-note-id="${escapeAttr(noteId)}">${escapeHtml(text)}${mark}</p>`;
  }

  function listHtml(items, className) {
    if (!items || !items.length) return "";
    return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function calloutHtml(title, body, type) {
    if (!body) return "";
    const className = type === "warning" ? "callout warning" : "callout";
    return `<div class="${className}"><h4>${escapeHtml(title)}</h4><p>${escapeHtml(body)}</p></div>`;
  }

  function codeHtml(code) {
    return code ? `<pre class="code-block"><code>${escapeHtml(code)}</code></pre>` : "";
  }

  function diagramHtml(type) {
    const diagrams = {
      context: `
        <svg viewBox="0 0 720 310" role="img" aria-label="系统上下文图">
          <rect x="260" y="86" width="200" height="120" rx="14" fill="#1e473f"/>
          <text x="360" y="136" text-anchor="middle" fill="#fffdf8" font-size="22" font-weight="800">库存风险系统</text>
          <text x="360" y="166" text-anchor="middle" fill="#dfece7" font-size="15">统一口径 · 查询 · 证据链</text>
          <g fill="#fff8e8" stroke="#ded7c7" stroke-width="2">
            <rect x="34" y="28" width="146" height="62" rx="12"/><rect x="34" y="220" width="146" height="62" rx="12"/>
            <rect x="540" y="28" width="146" height="62" rx="12"/><rect x="540" y="220" width="146" height="62" rx="12"/>
          </g>
          <g fill="#1e473f" font-size="18" font-weight="800">
            <text x="107" y="66" text-anchor="middle">生产计划</text><text x="107" y="258" text-anchor="middle">仓库</text>
            <text x="613" y="66" text-anchor="middle">采购</text><text x="613" y="258" text-anchor="middle">质量/管理</text>
          </g>
          <g stroke="#a36f10" stroke-width="3" fill="none" marker-end="url(#arrow-context)">
            <path d="M180 59 C225 70 240 95 260 112"/><path d="M180 251 C225 232 240 206 260 182"/>
            <path d="M540 59 C500 76 482 100 460 120"/><path d="M540 251 C500 230 482 205 460 178"/>
          </g>
          <defs><marker id="arrow-context" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8 Z" fill="#a36f10"/></marker></defs>
        </svg>`,
      entity: `
        <svg viewBox="0 0 720 320" role="img" aria-label="数据分类图">
          <g font-size="17" font-weight="800" text-anchor="middle">
            <rect x="38" y="50" width="148" height="92" rx="12" fill="#e4eee8" stroke="#b9d1c6"/>
            <text x="112" y="90" fill="#1e473f">主数据</text><text x="112" y="118" fill="#647067" font-size="13">物料/供应商/仓库</text>
            <rect x="214" y="50" width="148" height="92" rx="12" fill="#e4eff4" stroke="#bdd8e4"/>
            <text x="288" y="90" fill="#245e7a">事务数据</text><text x="288" y="118" fill="#647067" font-size="13">入库/出库/冻结</text>
            <rect x="390" y="50" width="148" height="92" rx="12" fill="#fff0c7" stroke="#efd181"/>
            <text x="464" y="90" fill="#a36f10">规则数据</text><text x="464" y="118" fill="#647067" font-size="13">安全库存/提前期</text>
            <rect x="566" y="50" width="116" height="92" rx="12" fill="#ffe7df" stroke="#f1c2b3"/>
            <text x="624" y="90" fill="#9f3f2e">结果数据</text><text x="624" y="118" fill="#647067" font-size="13">风险/证据</text>
          </g>
          <path d="M112 150 C150 220 250 245 360 245 C470 245 570 220 624 150" stroke="#1e473f" stroke-width="3" fill="none"/>
          <text x="360" y="274" text-anchor="middle" fill="#1e473f" font-size="18" font-weight="800">分层之后，查询口径才稳定</text>
        </svg>`,
      er: `
        <svg viewBox="0 0 720 360" role="img" aria-label="ER 模型图">
          <g fill="#fffdf8" stroke="#ded7c7" stroke-width="2">
            <rect x="42" y="38" width="160" height="86" rx="10"/><rect x="282" y="38" width="160" height="86" rx="10"/>
            <rect x="520" y="38" width="160" height="86" rx="10"/><rect x="158" y="226" width="180" height="86" rx="10"/>
            <rect x="390" y="226" width="180" height="86" rx="10"/>
          </g>
          <g fill="#1e473f" font-size="17" font-weight="800" text-anchor="middle">
            <text x="122" y="72">Material</text><text x="362" y="72">InventoryTransaction</text><text x="600" y="72">Warehouse</text>
            <text x="248" y="260">SafetyStockRule</text><text x="480" y="260">SupplierMaterial</text>
          </g>
          <g fill="#647067" font-size="13" text-anchor="middle">
            <text x="122" y="101">id · material_code</text><text x="362" y="101">material_id · qty · lot</text><text x="600" y="101">id · warehouse_code</text>
            <text x="248" y="289">material_id · min_qty</text><text x="480" y="289">supplier_id · lead_time</text>
          </g>
          <g stroke="#a36f10" stroke-width="3" fill="none">
            <path d="M202 82 H282"/><path d="M442 82 H520"/><path d="M144 124 C156 170 190 204 230 226"/>
            <path d="M176 124 C240 180 370 190 442 226"/>
          </g>
        </svg>`,
      bom: `
        <svg viewBox="0 0 720 360" role="img" aria-label="BOM 多层结构">
          <g fill="#e4eee8" stroke="#b9d1c6" stroke-width="2">
            <rect x="280" y="28" width="160" height="58" rx="12"/><rect x="110" y="136" width="150" height="58" rx="12"/>
            <rect x="292" y="136" width="136" height="58" rx="12"/><rect x="462" y="136" width="150" height="58" rx="12"/>
            <rect x="126" y="252" width="118" height="58" rx="12"/><rect x="300" y="252" width="118" height="58" rx="12"/><rect x="476" y="252" width="118" height="58" rx="12"/>
          </g>
          <g fill="#1e473f" text-anchor="middle" font-size="17" font-weight="800">
            <text x="360" y="64">成品 P-100</text><text x="185" y="172">半成品 S-200</text><text x="360" y="172">外壳 C-110</text><text x="537" y="172">螺丝 C-120</text>
            <text x="185" y="288">芯片 C-300</text><text x="359" y="288">PCB C-310</text><text x="535" y="288">焊料 C-320</text>
          </g>
          <g stroke="#a36f10" stroke-width="3" fill="none">
            <path d="M330 86 L210 136"/><path d="M360 86 L360 136"/><path d="M392 86 L520 136"/>
            <path d="M170 194 L185 252"/><path d="M210 194 L334 252"/><path d="M235 194 L505 252"/>
          </g>
        </svg>`,
      trace: `
        <svg viewBox="0 0 720 330" role="img" aria-label="来源追溯链">
          <g fill="#fff8e8" stroke="#ded7c7" stroke-width="2">
            <rect x="38" y="102" width="130" height="74" rx="12"/><rect x="210" y="102" width="130" height="74" rx="12"/>
            <rect x="382" y="102" width="130" height="74" rx="12"/><rect x="554" y="102" width="130" height="74" rx="12"/>
          </g>
          <g fill="#1e473f" text-anchor="middle" font-size="16" font-weight="800">
            <text x="103" y="134">采购批次</text><text x="103" y="158" font-size="13" fill="#647067">Lot A</text>
            <text x="275" y="134">领料事件</text><text x="275" y="158" font-size="13" fill="#647067">Issue</text>
            <text x="447" y="134">生产批次</text><text x="447" y="158" font-size="13" fill="#647067">Lot B</text>
            <text x="619" y="134">风险结论</text><text x="619" y="158" font-size="13" fill="#647067">Evidence</text>
          </g>
          <g stroke="#a36f10" stroke-width="3" fill="none" marker-end="url(#arrow-trace)">
            <path d="M168 139 H210"/><path d="M340 139 H382"/><path d="M512 139 H554"/>
          </g>
          <text x="360" y="242" text-anchor="middle" fill="#1e473f" font-size="18" font-weight="800">每个结论都能回到原始事件</text>
          <defs><marker id="arrow-trace" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8 Z" fill="#a36f10"/></marker></defs>
        </svg>`,
      query: `
        <svg viewBox="0 0 720 330" role="img" aria-label="查询能力图">
          <g fill="#e4eff4" stroke="#bdd8e4" stroke-width="2">
            <rect x="42" y="48" width="136" height="62" rx="12"/><rect x="42" y="138" width="136" height="62" rx="12"/><rect x="42" y="228" width="136" height="62" rx="12"/>
          </g>
          <g fill="#fff8e8" stroke="#ded7c7" stroke-width="2">
            <rect x="282" y="112" width="160" height="94" rx="14"/>
          </g>
          <g fill="#e4eee8" stroke="#b9d1c6" stroke-width="2">
            <rect x="540" y="48" width="136" height="62" rx="12"/><rect x="540" y="138" width="136" height="62" rx="12"/><rect x="540" y="228" width="136" height="62" rx="12"/>
          </g>
          <g fill="#1e473f" text-anchor="middle" font-size="16" font-weight="800">
            <text x="110" y="85">需求</text><text x="110" y="175">供应</text><text x="110" y="265">库存</text>
            <text x="362" y="151">风险查询</text><text x="362" y="180" font-size="13" fill="#647067">口径 + 证据</text>
            <text x="608" y="85">风险等级</text><text x="608" y="175">原因解释</text><text x="608" y="265">来源记录</text>
          </g>
          <g stroke="#a36f10" stroke-width="3" fill="none">
            <path d="M178 79 C225 82 245 117 282 137"/><path d="M178 169 H282"/><path d="M178 259 C225 235 245 202 282 181"/>
            <path d="M442 137 C480 116 500 84 540 79"/><path d="M442 159 H540"/><path d="M442 181 C480 204 500 235 540 259"/>
          </g>
        </svg>`,
      review: `
        <svg viewBox="0 0 720 330" role="img" aria-label="评审闭环图">
          <circle cx="360" cy="164" r="110" fill="#e4eee8" stroke="#b9d1c6" stroke-width="2"/>
          <g fill="#fffdf8" stroke="#ded7c7" stroke-width="2">
            <rect x="56" y="42" width="126" height="56" rx="12"/><rect x="296" y="16" width="126" height="56" rx="12"/><rect x="538" y="42" width="126" height="56" rx="12"/>
            <rect x="110" y="236" width="126" height="56" rx="12"/><rect x="486" y="236" width="126" height="56" rx="12"/>
          </g>
          <g fill="#1e473f" text-anchor="middle" font-size="16" font-weight="800">
            <text x="119" y="77">边界</text><text x="359" y="51">身份</text><text x="601" y="77">关系</text><text x="173" y="271">约束</text><text x="549" y="271">查询</text>
            <text x="360" y="158" font-size="20">模型评审</text><text x="360" y="187" fill="#647067" font-size="13">能解释，能查询，能追溯</text>
          </g>
        </svg>`
    };
    return `<figure class="diagram">${diagrams[type] || ""}</figure>`;
  }

  function renderOverview() {
    const roadmap = week.roadmap.map((item, index) => `
      <article class="overview-card" id="${escapeAttr(item.id)}">
        <div class="lesson-label">${escapeHtml(item.duration)}</div>
        <h3>${escapeHtml(item.title)}</h3>
        ${paragraphHtml(item.goal, `roadmap-${index + 1}-goal`)}
        <h4>必须掌握</h4>
        ${listHtml(item.mustKnow, "bullet-list")}
        <h4>项目动作</h4>
        ${listHtml(item.tasks, "task-list")}
        <h4>交付物</h4>
        ${listHtml(item.deliverables, "check-list")}
        ${calloutHtml("面试表达", item.interview, "normal")}
      </article>
    `).join("");

    const projects = week.portfolioProjects.map((project, index) => `
      <article class="overview-card">
        <div class="lesson-label">${escapeHtml(project.role)}</div>
        <h3>${escapeHtml(project.name)}</h3>
        ${paragraphHtml(project.pitch, `portfolio-${index + 1}-pitch`)}
        <h4>当前亮点</h4>
        ${listHtml(project.strengths, "check-list")}
        <h4>补强动作</h4>
        ${listHtml(project.upgrades, "task-list")}
      </article>
    `).join("");

    const interviews = week.interviewBank.map((item, index) => `
      <article class="overview-card">
        <div class="lesson-label">Question ${index + 1}</div>
        <h3>${escapeHtml(item.question)}</h3>
        ${paragraphHtml(item.answer60, `interview-${index + 1}-answer`)}
        ${listHtml(item.expansion, "bullet-list")}
      </article>
    `).join("");

    const templates = week.recordTemplates.map((item) => `
      <article class="overview-card">
        <h3>${escapeHtml(item.title)}</h3>
        ${listHtml(item.fields, "bullet-list")}
      </article>
    `).join("");

    const baseline = week.baselineDiagnosis;

    el.overview.innerHTML = `
      <section class="course-hero">
        <h2>完整学习路线</h2>
        ${paragraphHtml(week.programGoal, "program-goal")}
        <div class="meta-row">
          <span class="pill">8 周主线</span>
          <span class="pill">项目驱动</span>
          <span class="pill">面试可讲</span>
        </div>
      </section>

      <section class="lab-section">
        <h2>固定节奏</h2>
        ${listHtml(week.learningRhythm, "check-list")}
      </section>

      <section class="lab-section">
        <h2>当前基线</h2>
        ${paragraphHtml(baseline.summary, "baseline-summary")}
        <h4>优势</h4>
        ${listHtml(baseline.strengths, "check-list")}
        <h4>短板</h4>
        ${listHtml(baseline.gaps, "task-list")}
        <h4>目标岗位</h4>
        ${listHtml(baseline.targetRoles, "bullet-list")}
        <h4>必须证明的能力</h4>
        ${listHtml(baseline.proofPoints, "check-list")}
      </section>

      <section class="lab-section">
        <h2>计划优化原则</h2>
        ${listHtml(week.planPrinciples, "check-list")}
      </section>

      <section class="lab-section">
        <h2>记录模板</h2>
        <div class="overview-grid">${templates}</div>
      </section>

      <section class="lab-section">
        <h2>大章节</h2>
        <div class="overview-grid">${roadmap}</div>
      </section>

      <section class="lab-section">
        <h2>8 周最低成果</h2>
        ${listHtml(week.minimumOutcomes, "check-list")}
      </section>

      <section class="lab-section">
        <h2>作品集改造</h2>
        <div class="overview-grid">${projects}</div>
      </section>

      <section class="lab-section">
        <h2>面试表达题库</h2>
        <div class="overview-grid">${interviews}</div>
      </section>`;
  }

  function englishReviewHtml(lesson) {
    const review = (week.lessonEnglishReviews || []).find((item) => item.lessonId === lesson.id);
    if (!review) return "";
    const termChips = review.terms.map((term) => `<button class="term-button" type="button" data-term="${escapeAttr(term)}">${escapeHtml(term)}</button>`).join("");
    return `
      <section class="english-review">
        <div class="lesson-label">English Review</div>
        <h3>本章英文复习</h3>
        <div class="chip-row">${termChips}</div>
        <p class="english">${escapeHtml(review.en)}</p>
        <p>${escapeHtml(review.zh)}</p>
      </section>`;
  }

  function renderCourse() {
    const lessonHtml = week.lessons.map((lesson) => {
      const sections = lesson.sections.map((section, sectionIndex) => {
        const baseId = `${lesson.id}-s${sectionIndex + 1}`;
        return `
          <section class="subsection" id="${baseId}">
            <h3>${escapeHtml(section.heading)}</h3>
            ${(section.paragraphs || []).map((text, paragraphIndex) => paragraphHtml(text, `${baseId}-p${paragraphIndex + 1}`)).join("")}
            ${listHtml(section.bullets, "bullet-list")}
            ${listHtml(section.tasks, "task-list")}
            ${calloutHtml("例子", section.example, "normal")}
            ${calloutHtml("注意", section.warning, "warning")}
            ${calloutHtml("验收点", section.checkpoint, "normal")}
            ${codeHtml(section.code)}
          </section>`;
      }).join("");

      return `
        <article class="lesson" id="${lesson.id}">
          <div class="lesson-head">
            <div class="lesson-label">${escapeHtml(lesson.label)} · ${escapeHtml(lesson.duration)}</div>
            <h2>${escapeHtml(lesson.title)}</h2>
            <p class="lesson-summary">${escapeHtml(lesson.summary)}</p>
            ${listHtml(lesson.goals, "check-list")}
          </div>
          ${diagramHtml(lesson.diagram)}
          ${sections}
          ${englishReviewHtml(lesson)}
        </article>`;
    }).join("");

    el.course.innerHTML = `
      <section class="course-hero">
        <h2>${escapeHtml(week.title)}</h2>
        <p>${escapeHtml(week.subtitle)}</p>
        <div class="meta-row">
          <span class="pill">${escapeHtml(week.duration)}</span>
          <span class="pill">${escapeHtml(week.level)}</span>
          <span class="pill">可交付项目</span>
        </div>
        <p>${escapeHtml(week.outcome)}</p>
      </section>
      ${lessonHtml}`;
  }

  function renderToc() {
    el.tocList.innerHTML = week.lessons.map((lesson) => `
      <button class="toc-button" type="button" data-target="${escapeAttr(lesson.id)}">
        <strong>${escapeHtml(lesson.label)} · ${escapeHtml(lesson.title)}</strong>
        <span>${escapeHtml(lesson.summary)}</span>
      </button>
    `).join("");
  }

  function renderTerms() {
    const vocab = getVocab();
    const groups = week.glossary.reduce((acc, item) => {
      const key = item.category || "制造业数据库";
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});

    return Object.entries(groups).map(([category, items]) => `
      <section class="term-group">
        <h3>${escapeHtml(category)}</h3>
        <div class="term-grid">
          ${items.map((item) => {
            const saved = vocab[item.term.toLowerCase()];
            return `
              <article class="term-card">
                <div class="term-title">
                  <strong>${escapeHtml(item.term)}</strong>
                  <span>${escapeHtml(item.zh)}</span>
                </div>
                <p>${escapeHtml(item.definition)}</p>
                <p class="english">${escapeHtml(item.example)}</p>
                <button class="term-button" type="button" data-term="${escapeAttr(item.term)}">${saved ? "已加入" : "加入词本"}</button>
              </article>`;
          }).join("")}
        </div>
      </section>
    `).join("");
  }

  function markEnglishTerms(text, terms) {
    let html = escapeHtml(text);
    const sorted = [...terms].sort((a, b) => b.length - a.length);
    sorted.forEach((term) => {
      const escaped = escapeHtml(term);
      const pattern = new RegExp(`\\b${escaped.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
      html = html.replace(pattern, (match) => `<span class="word" data-term="${escapeAttr(term)}">${match}</span>`);
    });
    return html;
  }

  function renderEnglish() {
    const article = week.bilingualArticle;
    const pairs = article.paragraphs.map((pair, index) => {
      const noteId = `english-p${index + 1}`;
      const notes = getNotes();
      const marked = notes[noteId] ? " has-note" : "";
      const mark = notes[noteId] ? "<span class=\"para-note-mark\">已收藏</span>" : "";
      return `
        <article class="article-card note-target${marked}" data-note-id="${escapeAttr(noteId)}">
          <p class="english">${markEnglishTerms(pair.en, pair.terms)}</p>
          <p>${escapeHtml(pair.zh)}${mark}</p>
        </article>`;
    }).join("");

      el.english.innerHTML = `
        <section class="lab-section">
          <h2>术语</h2>
          <p class="lesson-summary">${escapeHtml(article.intro)}</p>
          ${renderTerms()}
        </section>
      <section class="lab-section">
        <h2>${escapeHtml(article.title)}</h2>
        <div class="article-pair">${pairs}</div>
      </section>`;
  }

  function renderVocab() {
    const vocab = Object.values(getVocab()).sort((a, b) => a.term.localeCompare(b.term));
    const cards = vocab.map((item) => `
      <article class="saved-card">
        <h3>${escapeHtml(item.term)} · ${escapeHtml(item.zh || "文章词汇")}</h3>
        <p>${escapeHtml(item.definition || "从英文文章加入，后续可以补充释义。")}</p>
        ${item.example ? `<p class="english">${escapeHtml(item.example)}</p>` : ""}
        <div class="saved-meta">加入时间：${escapeHtml(item.savedAt)}</div>
        <button class="small-action" type="button" data-remove-term="${escapeAttr(item.term)}">移出词本</button>
      </article>
    `).join("");

    el.vocab.innerHTML = `
      <section class="lab-section">
        <h2>词本</h2>
        <div class="vocab-toolbar">
          <input id="vocab-search" type="search" placeholder="搜索词汇">
          <button class="small-action" type="button" data-action="clear-vocab">清空</button>
        </div>
        <div id="vocab-list">${cards || "<div class=\"empty-state\">还没有词汇。</div>"}</div>
      </section>`;
  }

  function findNoteSource(noteId) {
    const target = document.querySelector(`[data-note-id="${selectorValue(noteId)}"]`);
    if (target) return target.textContent.replace("已收藏", "").trim();
    return "";
  }

  function renderNotes() {
    const notes = getNotes();
    const cards = Object.entries(notes).map(([id, note]) => `
      <article class="saved-card">
        <h3>${escapeHtml(note.title || "收藏段落")}</h3>
        <p>${escapeHtml(note.source)}</p>
        ${note.text ? `<p><strong>我的理解：</strong>${escapeHtml(note.text)}</p>` : ""}
        <div class="saved-meta">更新时间：${escapeHtml(note.updatedAt)}</div>
        <div class="sheet-actions">
          <button class="small-action" type="button" data-jump-note="${escapeAttr(id)}">定位</button>
          <button class="small-action" type="button" data-edit-note="${escapeAttr(id)}">编辑</button>
        </div>
      </article>
    `).join("");

    el.notes.innerHTML = `
      <section class="lab-section">
        <h2>收藏和笔记</h2>
        ${cards || "<div class=\"empty-state\">点击正文段落即可收藏并写笔记。</div>"}
      </section>`;
  }

  function rerenderAll() {
    renderOverview();
    renderCourse();
    renderEnglish();
    renderVocab();
    renderNotes();
    updateSavedWordMarks();
  }

  function setView(name) {
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.toggle("is-active", tab.dataset.view === name);
    });
    document.querySelectorAll(".view").forEach((view) => {
      view.classList.toggle("is-active", view.id === `${name}-view`);
    });
    localStorage.setItem(STORAGE.view, name);
    if (name === "vocab") renderVocab();
    if (name === "notes") renderNotes();
    updateSavedWordMarks();
  }

  function openToc() {
    el.tocPanel.classList.add("is-open");
    el.tocPanel.setAttribute("aria-hidden", "false");
  }

  function closeToc() {
    el.tocPanel.classList.remove("is-open");
    el.tocPanel.setAttribute("aria-hidden", "true");
  }

  function jumpToLesson(id) {
    setView("course");
    closeToc();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      localStorage.setItem(STORAGE.lastSection, id);
      setTimeout(saveScroll, 520);
    }
  }

  function normalizeTerm(term) {
    return String(term || "").toLowerCase();
  }

  function addTerm(term) {
    const key = normalizeTerm(term);
    const base = glossaryByLower.get(key);
    const vocab = getVocab();
    const now = new Date().toLocaleString("zh-CN", { hour12: false });
    vocab[key] = {
      term: base ? base.term : term,
      zh: base ? base.zh : "",
      definition: base ? base.definition : "",
      example: base ? base.example : "",
      savedAt: vocab[key] ? vocab[key].savedAt : now
    };
    setVocab(vocab);
    updateSavedWordMarks();
    renderVocab();
    renderEnglish();
    showToast("已加入词本");
  }

  function removeTerm(term) {
    const vocab = getVocab();
    delete vocab[normalizeTerm(term)];
    setVocab(vocab);
    renderVocab();
    renderEnglish();
    updateSavedWordMarks();
  }

  function updateSavedWordMarks() {
    const vocab = getVocab();
    document.querySelectorAll(".word").forEach((word) => {
      word.classList.toggle("is-saved", Boolean(vocab[normalizeTerm(word.dataset.term)]));
    });
  }

  function openNote(noteId) {
    activeNoteId = noteId;
    const notes = getNotes();
    const existing = notes[noteId];
    const source = existing ? existing.source : findNoteSource(noteId);
    el.noteSource.textContent = source;
    el.noteInput.value = existing ? existing.text : "";
    el.noteSheet.classList.add("is-open");
    el.noteSheet.setAttribute("aria-hidden", "false");
    setTimeout(() => el.noteInput.focus(), 80);
  }

  function closeNote() {
    activeNoteId = null;
    el.noteSheet.classList.remove("is-open");
    el.noteSheet.setAttribute("aria-hidden", "true");
  }

  function saveNote() {
    if (!activeNoteId) return;
    const source = el.noteSource.textContent.trim();
    const notes = getNotes();
    notes[activeNoteId] = {
      source,
      text: el.noteInput.value.trim(),
      title: source.slice(0, 28),
      updatedAt: new Date().toLocaleString("zh-CN", { hour12: false })
    };
    setNotes(notes);
    closeNote();
    rerenderAll();
    showToast("已保存");
  }

  function removeNote() {
    if (!activeNoteId) return;
    const notes = getNotes();
    delete notes[activeNoteId];
    setNotes(notes);
    closeNote();
    rerenderAll();
    showToast("已移除");
  }

  function jumpToNote(noteId) {
    const view = noteId.startsWith("english") ? "english" : "course";
    setView(view);
    setTimeout(() => {
      const nextTarget = document.querySelector(`[data-note-id="${selectorValue(noteId)}"]`);
      if (nextTarget) nextTarget.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 40);
  }

  function saveScroll() {
    if (localStorage.getItem(STORAGE.view) === "course") {
      localStorage.setItem(STORAGE.scroll, String(window.scrollY || 0));
    }
  }

  function scheduleSaveScroll() {
    clearTimeout(saveScrollTimer);
    saveScrollTimer = setTimeout(saveScroll, 120);
  }

  function restoreState() {
    const view = localStorage.getItem(STORAGE.view) || "overview";
    setView(view);
    if (view === "course") {
      const y = Number(localStorage.getItem(STORAGE.scroll) || "0");
      if (y > 0) {
        setTimeout(() => window.scrollTo(0, y), 80);
      }
    }
  }

  function showToast(message) {
    el.toast.textContent = message;
    el.toast.classList.add("is-visible");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => el.toast.classList.remove("is-visible"), 1300);
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const tab = event.target.closest(".tab");
      if (tab) {
        setView(tab.dataset.view);
        return;
      }

      const action = event.target.closest("[data-action]");
      if (action) {
        const name = action.dataset.action;
        if (name === "open-toc") openToc();
        if (name === "close-toc") closeToc();
        if (name === "close-note") closeNote();
        if (name === "save-note") saveNote();
        if (name === "remove-note") removeNote();
        if (name === "clear-vocab") {
          setVocab({});
          renderVocab();
          renderEnglish();
          updateSavedWordMarks();
        }
        return;
      }

      const tocButton = event.target.closest(".toc-button");
      if (tocButton) {
        jumpToLesson(tocButton.dataset.target);
        return;
      }

      const termButton = event.target.closest("[data-term]");
      if (termButton) {
        event.stopPropagation();
        addTerm(termButton.dataset.term);
        return;
      }

      const removeButton = event.target.closest("[data-remove-term]");
      if (removeButton) {
        removeTerm(removeButton.dataset.removeTerm);
        return;
      }

      const editNote = event.target.closest("[data-edit-note]");
      if (editNote) {
        openNote(editNote.dataset.editNote);
        return;
      }

      const jumpNote = event.target.closest("[data-jump-note]");
      if (jumpNote) {
        jumpToNote(jumpNote.dataset.jumpNote);
        return;
      }

      const noteTarget = event.target.closest(".note-target");
      if (noteTarget) {
        openNote(noteTarget.dataset.noteId);
      }
    });

    document.addEventListener("input", (event) => {
      if (event.target.id !== "vocab-search") return;
      const value = event.target.value.trim().toLowerCase();
      document.querySelectorAll("#vocab-list .saved-card").forEach((card) => {
        card.style.display = card.textContent.toLowerCase().includes(value) ? "" : "none";
      });
    });

    window.addEventListener("scroll", scheduleSaveScroll, { passive: true });
    window.addEventListener("beforeunload", saveScroll);
  }

  renderOverview();
  renderCourse();
  renderToc();
  renderEnglish();
  renderVocab();
  renderNotes();
  bindEvents();
  restoreState();
})();
