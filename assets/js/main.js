  // ---------- Mobile nav ----------
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));

  // ---------- Scroll reveal ----------
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));

  // ---------- i18n ----------
  const i18n = {
    en: {
      "a11y.skip":"Skip to content",
      "nav.services":"Services","nav.expertwitness":"Expert witness","nav.method":"Methodology","nav.sectors":"Sectors","nav.team":"Team","nav.contact":"Contact",
      "hero.eyebrow":"Migration · Governance · Risk Detection · Forensic Audit",
      "hero.title":"Smart data solutions, <em>built to withstand scrutiny.</em>",
      "hero.lede":"TRACKSAN migrates legacy on-premise systems to modern cloud infrastructure such as Microsoft Azure and Fabric, governs the result under DAMA-DMBOK, deploys risk and fraud detection models, and adds a forensic-standard traceability layer — built for banks, government agencies, large taxpayers, and other regulated organizations whose data has to hold up to an examiner, an auditor, or a court.",
      "hero.lede.short":"We migrate, govern, monitor and audit regulated data, so every figure can be traced to its origin before an examiner, an auditor or a court.",
      "hero.cta1":"Request a consultation","hero.cta2":"View services",
      "map.title":"Migration map — on-prem to Azure, and beyond",
      "map.legacyTag":"LEGACY · ON-PREM",
      "map.moreChip":"+ more engines",
      "map.hubCaption":"extract → validate → load",
      "map.azureTag":"PREFERRED TARGET",
      "map.azureMore":"+ more of the stack",
      "map.otherTag":"ALSO SUPPORTED",
      "map.otherTitle":"Other cloud platforms",
      "map.verified":"✓ verified",
      "map.compatible":"✓ compatible on request",
      "map.foot1":"Any legacy engine · one validation standard","map.foot2":"Azure-first",
      "trust.migration":"Data migration <span class=\"dash\">·</span>",
      "trust.governance":"Integration & governance <span class=\"dash\">·</span>",
      "trust.risk":"Risk & fraud detection <span class=\"dash\">·</span>",
      "trust.forensic":"Forensic AI auditability",
      "practice.kicker":"What we do","practice.sectiontitle":"Four services, one sequence: migrate, integrate, detect, audit.",
      "practice.sectionsub":"No line stands alone. Migration without governance doesn't solve auditability, and AI without forensic traceability won't survive regulatory examination.",
      "svc.migration.name":"Data migration","svc.migration.desc":"Legacy on-premise systems — Oracle, SQL Server, Sybase and equivalent platforms — moved to modern cloud infrastructure like Microsoft Azure and Fabric on a lakehouse architecture, with a methodology that preserves full historical integrity and lineage from source to destination.",
      "svc.governance.name":"Integration & governance","svc.governance.desc":"Integration pipelines built under the DAMA-DMBOK framework, with data-quality, completeness and consistency metrics and full lineage documentation — turning scattered data into a trustworthy, auditable asset.",
      "svc.risk.name":"Risk & fraud detection","svc.risk.desc":"Risk-classification and anomaly-detection models — unsupervised learning, multivariate alerting — applied to tax and benefits administration as much as to financial institutions.",
      "svc.forensic.name":"Forensic traceability & AI auditability","svc.forensic.desc":"The differentiator: a lineage-control layer built to a forensic evidentiary standard, able to reconstruct the origin, transformation, and use of any data behind an AI model or regulatory report — so it holds up to a bank examiner, an auditor, or a court.",
      "ew.kicker":"Expert witness & litigation support","ew.title":"Expert witness and litigation support, in tax and criminal matters.",
      "ew.sub":"Combined with our data team, every expert opinion rests on data whose origin can be reconstructed and defended in court.",
      "ew.item1":"Tax controversy and litigation support","ew.item2":"Transfer pricing disputes",
      "ew.item3":"Criminal tax and white-collar matters: expert reports and testimony",
      "ew.item4":"Court-ordered tax computations and quantifications","ew.item5":"Consulting expert support for legal counsel",
      "method.kicker":"How we work","method.title":"Migrate. Integrate. Detect. Audit.",
      "method.sub":"The same sequence in every engagement — each step depends on the one before it, and none is offered on its own.",
      "method.n1":"Node 01 · Migrate","method.t1":"Legacy systems, moved intact",
      "method.p1":"On-premises Oracle, SQL Server, and Sybase systems migrated to modern cloud infrastructure like Microsoft Azure and Fabric on a lakehouse architecture, preserving full historical integrity and lineage.",
      "method.n2":"Node 02 · Integrate & Govern","method.t2":"Data governed under DAMA-DMBOK",
      "method.p2":"Pipelines built with data-quality, completeness, and consistency controls, and full lineage documentation from source to destination.",
      "method.n3":"Node 03 · Detect","method.t3":"Risk and fraud, made visible",
      "method.p3":"Unsupervised risk-classification and multivariate fraud-alert models applied to the now-governed data.",
      "method.n4":"Node 04 · Audit","method.t4":"Built to survive examination",
      "method.p4":"A forensic-standard traceability layer that reconstructs the origin, transformation, and use of any data behind an AI model or regulatory report.",
      "sectors.kicker":"Who we serve","sectors.title":"Regulated sectors where data, tax, and audit exposure converge.",
      "sec1.h":"Community banks, credit unions & specialty finance","sec1.p":"Financial institutions undergoing digital and operational transformation, where fragmented data environments and regulatory requirements create challenges for compliance, reporting, and informed decision-making. Success depends on establishing trusted data foundations, stronger governance, and scalable modernization strategies.",
      "sec2.h":"State revenue & unemployment insurance agencies","sec2.p":"Public-sector organizations seeking to strengthen compliance, fraud detection, and fiscal oversight through better data integration, governance, and analytics. Success depends on creating trusted, interconnected data environments that enable faster decisions, improved risk management, and greater public accountability.",
      "sec3.h":"Other regulated industries","sec3.p":"This challenge extends beyond financial institutions and government agencies to any organization operating in a highly regulated environment, where data quality, governance, and traceability directly influence compliance outcomes, operational resilience, and executive decision-making.",
      "why.kicker":"Why TRACKSAN","why.title":"Built on a track record, not a pitch.",
      "why1.h":"One standard, for every kind of scrutiny","why1.p":"Every model and pipeline is built to reconstruct its own lineage — the same rigor a bank examiner, a state auditor, or a court would demand, documented once.",
      "why2.h":"Experience proven in public institutions","why2.p":"Our experience spans large-scale data modernization, migration, compliance, and risk-management initiatives across public-sector and financial-services organizations. At Ecuador’s national tax authority, these capabilities helped support risk-based revenue recovery and reduce fraud-review cycles. Today, the same principles are applied to U.S. state agencies, financial institutions, and other highly regulated organizations seeking stronger governance, auditability, and decision-making.",
      "why3.h":"Two forensic disciplines under one roof","why3.p":"Fernando Bastidas, a court-certified forensic IT expert, leads the data and forensic technology team. Mariela Buitrón, an accredited tax and financial expert witness with 25 years of experience, leads the tax and criminal expert witness team. Data forensics and tax and financial expert work, applied together.",
      "why4.h":"Azure-first, governed by DAMA-DMBOK","why4.p":"Built on Microsoft Azure and Fabric, under the same data-governance framework applied as a consultant to the Inter-American Development Bank — not a generic tools stack.",
      "team.kicker":"Leadership & teams","team.title":"Experienced leaders in front. Specialized teams behind every engagement.",
      "team.sub":"Every TRACKSAN engagement is led by senior professionals and delivered by two specialized teams working as one: data and forensic technology, and tax and criminal expert witness work.",
      "team.fernando.role":"Partner, Data & Forensic Technology",
      "team.fernando.bio":"Fernando leads TRACKSAN's data engineering and forensic-technology practice. A senior data engineer with more than 20 years of experience, he has led enterprise data-migration and governance programs on Microsoft Azure and Fabric, and previously worked at Ecuador's national tax authority (SRI) and the Inter-American Development Bank. He is a court-certified forensic IT expert recognized by Ecuador's Consejo de la Judicatura.",
      "team.mariela.role":"Head of Tax & Criminal Expert Witness Practice",
      "team.mariela.bio":"Mariela leads TRACKSAN's tax and criminal expert witness team. With 25 years of experience, she previously led the national team of tax expert witnesses for large taxpayers at Ecuador's tax authority. She is an expert witness accredited by Ecuador's Judiciary Council (Consejo de la Judicatura) and has defended expert reports in tax disputes, transfer pricing cases and criminal proceedings.",
      "team.unit1.name":"Data & Forensic Technology Team",
      "team.unit1.desc":"Data migration to Microsoft Azure and Fabric, governance under DAMA-DMBOK, risk and fraud analytics, and forensic-grade lineage that reconstructs where every figure came from.",
      "team.unit2.name":"Tax & Criminal Expert Witness Team",
      "team.unit2.desc":"Testifying and consulting experts in tax disputes, transfer pricing and criminal tax and white-collar matters, led by Mariela Buitrón.",
      "contact.kicker":"Contact","contact.title":"Every engagement starts with a confidential conversation.",
      "contact.body":"Tell us about the context of your case or project. We'll respond with next steps and, where relevant, a confidentiality agreement ahead of any information exchange.",
      "contact.email":"Email","contact.scope":"Scope","contact.scopeval":"International projects and cases","contact.response":"Response","contact.responseval":"Within 1 business day","contact.whatsapp":"Message us on WhatsApp","contact.schedule":"Schedule a call",
      "contact.linkedin":"Follow TRACKSAN on LinkedIn for insights on auditable data, fraud analytics and forensic traceability.",
      "foot.services":"Services","foot.s1":"Data migration","foot.s2":"Integration & governance","foot.s3":"Risk & fraud detection","foot.s4":"Forensic traceability & AI auditability","foot.s5":"Expert witness & litigation support",
      "foot.company":"Company","foot.c1":"Methodology","foot.c2":"Sectors","foot.c3":"Team",
      "foot.contact":"Contact","foot.form":"Get in touch","foot.linkedin":"LinkedIn",
      "foot.rights":"© 2026 TRACKSAN. All rights reserved.","foot.tag":"Data, Risk & Forensic Infrastructure"
    },
    es: {
      "a11y.skip":"Saltar al contenido",
      "nav.services":"Servicios","nav.expertwitness":"Peritajes","nav.method":"Metodología","nav.sectors":"Sectores","nav.team":"Equipo","nav.contact":"Contacto",
      "hero.eyebrow":"Migración · Gobernanza · Detección de Riesgo · Auditoría Forense",
      "hero.title":"Soluciones inteligentes de datos, <em>diseñadas para resistir cualquier escrutinio.</em>",
      "hero.lede":"TRACKSAN migra sistemas legados on-premise hacia infraestructura de nube moderna como Microsoft Azure y Fabric, gobierna el resultado bajo DAMA-DMBOK, despliega modelos de detección de riesgo y fraude, y agrega una capa de trazabilidad con estándar forense — pensada para bancos, agencias de gobierno, grandes contribuyentes y otras organizaciones reguladas cuyos datos deben resistir el escrutinio de un examinador, un auditor o un tribunal.",
      "hero.lede.short":"Migramos, gobernamos, monitoreamos y auditamos datos regulados para que cada cifra pueda rastrearse hasta su origen ante un supervisor, un auditor o un tribunal.",
      "hero.cta1":"Solicitar una consulta","hero.cta2":"Ver servicios",
      "map.title":"Mapa de migración — de on-prem a Azure, y más allá",
      "map.legacyTag":"LEGADO · ON-PREM",
      "map.moreChip":"+ más motores",
      "map.hubCaption":"extraer → validar → cargar",
      "map.azureTag":"DESTINO PREFERIDO",
      "map.azureMore":"+ más del stack",
      "map.otherTag":"TAMBIÉN SOPORTADO",
      "map.otherTitle":"Otras plataformas cloud",
      "map.verified":"✓ verificado",
      "map.compatible":"✓ compatible bajo pedido",
      "map.foot1":"Cualquier motor legado · un solo estándar de validación","map.foot2":"Azure-first",
      "trust.migration":"Migración de datos <span class=\"dash\">·</span>",
      "trust.governance":"Integración y gobernanza <span class=\"dash\">·</span>",
      "trust.risk":"Detección de riesgo y fraude <span class=\"dash\">·</span>",
      "trust.forensic":"Auditabilidad forense de IA",
      "practice.kicker":"Qué hacemos","practice.sectiontitle":"Cuatro servicios, una secuencia: migrar, integrar, detectar, auditar.",
      "practice.sectionsub":"Ningún servicio se ofrece de forma aislada. La migración sin gobernanza no resuelve la auditabilidad, y la IA sin trazabilidad forense no resiste un examen regulatorio.",
      "svc.migration.name":"Migración de datos","svc.migration.desc":"Sistemas legados on-premise — Oracle, SQL Server, Sybase y plataformas equivalentes — migrados a infraestructura de nube moderna como Microsoft Azure y Fabric sobre arquitectura lakehouse, con una metodología que preserva la integridad histórica completa y el linaje desde el origen hasta el destino.",
      "svc.governance.name":"Integración y gobernanza","svc.governance.desc":"Pipelines de integración construidos bajo el marco DAMA-DMBOK, con métricas de calidad, completitud y consistencia de datos, y documentación completa de linaje — convirtiendo datos dispersos en un activo confiable y auditable.",
      "svc.risk.name":"Detección de riesgo y fraude","svc.risk.desc":"Modelos de clasificación de riesgo y detección de anomalías — aprendizaje no supervisado, alertas multivariables — aplicables tanto a administración tributaria y de beneficios como a instituciones financieras.",
      "svc.forensic.name":"Trazabilidad forense y auditabilidad de IA","svc.forensic.desc":"El diferenciador: una capa de control de linaje construida con estándar probatorio forense, capaz de reconstruir el origen, la transformación y el uso de cualquier dato detrás de un modelo de IA o un reporte regulatorio — para que resista el escrutinio de un examinador bancario, un auditor o un tribunal.",
      "ew.kicker":"Peritajes y soporte pericial en litigios","ew.title":"Peritajes y soporte pericial en litigios, en materia tributaria y penal.",
      "ew.sub":"En conjunto con nuestro equipo de datos, cada dictamen pericial se apoya en datos cuyo origen puede reconstruirse y defenderse ante un tribunal.",
      "ew.item1":"Peritajes en controversias tributarias","ew.item2":"Controversias de precios de transferencia",
      "ew.item3":"Peritajes en procesos penales tributarios y financieros: informes y sustentación",
      "ew.item4":"Cuantificaciones y liquidaciones ordenadas judicialmente","ew.item5":"Soporte pericial a los abogados patrocinadores",
      "method.kicker":"Cómo trabajamos","method.title":"Migrar. Integrar. Detectar. Auditar.",
      "method.sub":"La misma secuencia en cada proyecto — cada paso depende del anterior, y ninguno se ofrece por separado.",
      "method.n1":"Nodo 01 · Migrar","method.t1":"Sistemas legados, movidos intactos",
      "method.p1":"Sistemas Oracle, SQL Server y Sybase on-premise migrados a infraestructura de nube moderna como Microsoft Azure y Fabric sobre arquitectura lakehouse, preservando la integridad histórica completa y el linaje.",
      "method.n2":"Nodo 02 · Integrar y Gobernar","method.t2":"Datos gobernados bajo DAMA-DMBOK",
      "method.p2":"Pipelines construidos con controles de calidad, completitud y consistencia de datos, y documentación completa de linaje desde el origen hasta el destino.",
      "method.n3":"Nodo 03 · Detectar","method.t3":"Riesgo y fraude, hechos visibles",
      "method.p3":"Modelos de clasificación de riesgo no supervisados y de alertas de fraude multivariables aplicados sobre los datos ya gobernados.",
      "method.n4":"Nodo 04 · Auditar","method.t4":"Construido para resistir un examen",
      "method.p4":"Una capa de trazabilidad con estándar forense que reconstruye el origen, la transformación y el uso de cualquier dato detrás de un modelo de IA o un reporte regulatorio.",
      "sectors.kicker":"A quién servimos","sectors.title":"Sectores regulados donde convergen los datos, lo tributario y la exposición a auditoría.",
      "sec1.h":"Community banks, cooperativas de crédito y specialty finance","sec1.p":"Instituciones financieras en proceso de transformación digital y operativa, donde entornos de datos fragmentados y requisitos regulatorios generan retos para el cumplimiento, el reporte y la toma de decisiones informada. El éxito depende de establecer bases de datos confiables, una gobernanza más sólida y estrategias de modernización escalables.",
      "sec2.h":"Agencias estatales de rentas y de seguro de desempleo","sec2.p":"Organizaciones del sector público que buscan fortalecer el cumplimiento, la detección de fraude y la fiscalización mediante una mejor integración de datos, gobernanza y analítica. El éxito depende de crear entornos de datos confiables e interconectados que permitan decisiones más rápidas, una mejor gestión de riesgo y mayor rendición de cuentas pública.",
      "sec3.h":"Otras industrias reguladas","sec3.p":"Este reto va más allá de las instituciones financieras y las agencias de gobierno, y alcanza a cualquier organización que opere en un entorno altamente regulado, donde la calidad de los datos, la gobernanza y la trazabilidad influyen directamente en los resultados de cumplimiento, la resiliencia operativa y la toma de decisiones ejecutivas.",
      "why.kicker":"Por qué TRACKSAN","why.title":"Construido sobre un historial, no sobre un discurso.",
      "why1.h":"Un mismo estándar, para cualquier tipo de escrutinio","why1.p":"Cada modelo y cada pipeline se construyen para reconstruir su propio linaje — el mismo rigor que exigiría un examinador bancario, un auditor estatal o un tribunal, documentado una sola vez.",
      "why2.h":"Experiencia probada en instituciones públicas","why2.p":"Nuestra experiencia abarca iniciativas de modernización de datos a gran escala, migración, cumplimiento y gestión de riesgo en organizaciones del sector público y de servicios financieros. En el Servicio de Rentas Internas del Ecuador, estas capacidades ayudaron a respaldar la recuperación de ingresos basada en riesgo y a reducir los ciclos de revisión de fraude. Hoy, los mismos principios se aplican a agencias estatales, instituciones financieras y otras organizaciones altamente reguladas de Estados Unidos que buscan una gobernanza, auditabilidad y toma de decisiones más sólidas.",
      "why3.h":"Dos disciplinas forenses bajo un mismo equipo","why3.p":"Fernando Bastidas, perito informático acreditado, dirige el equipo de datos y tecnología forense. Mariela Buitrón, perito tributaria y financiera acreditada con 25 años de experiencia, dirige el equipo de peritajes tributarios y penales. Forense de datos y pericia tributaria y financiera, aplicados en conjunto.",
      "why4.h":"Azure-first, gobernado bajo DAMA-DMBOK","why4.p":"Construido sobre Microsoft Azure y Fabric, bajo el mismo marco de gobernanza de datos aplicado como consultor del Banco Interamericano de Desarrollo — no una pila de herramientas genérica.",
      "team.kicker":"Liderazgo y equipos","team.title":"Líderes con trayectoria al frente. Equipos especializados detrás de cada encargo.",
      "team.sub":"Cada encargo de TRACKSAN está dirigido por profesionales con trayectoria y lo ejecutan dos equipos especializados que trabajan como uno solo: datos y tecnología forense, y peritajes tributarios y penales.",
      "team.fernando.role":"Socio, Datos y Tecnología Forense",
      "team.fernando.bio":"Fernando lidera la práctica de ingeniería de datos y tecnología forense de TRACKSAN. Ingeniero de datos senior con más de 20 años de experiencia, ha liderado programas empresariales de migración y gobernanza de datos sobre Microsoft Azure y Fabric, y trabajó previamente en el Servicio de Rentas Internas del Ecuador y en el Banco Interamericano de Desarrollo. Es perito informático judicial certificado por el Consejo de la Judicatura del Ecuador.",
      "team.mariela.role":"Directora de Peritajes Tributarios y Penales",
      "team.mariela.bio":"Mariela dirige el equipo de peritajes tributarios y penales de TRACKSAN. Con 25 años de experiencia, dirigió el equipo nacional de peritos tributarios para grandes contribuyentes del Servicio de Rentas Internas del Ecuador. Es perito acreditada por el Consejo de la Judicatura y ha sustentado informes periciales en controversias tributarias, casos de precios de transferencia y procesos penales.",
      "team.unit1.name":"Equipo de Datos y Tecnología Forense",
      "team.unit1.desc":"Migración de datos a Microsoft Azure y Fabric, gobierno bajo DAMA-DMBOK, analítica de riesgo y fraude, y un linaje con estándar forense que reconstruye el origen de cada cifra.",
      "team.unit2.name":"Equipo de Peritajes Tributarios y Penales",
      "team.unit2.desc":"Peritos que elaboran y sustentan informes en controversias tributarias, precios de transferencia y procesos penales en materia tributaria y financiera, bajo la dirección de Mariela Buitrón.",
      "contact.kicker":"Contacto","contact.title":"Cada proyecto comienza con una conversación confidencial.",
      "contact.body":"Cuéntenos el contexto de su caso o proyecto. Responderemos con los siguientes pasos y, si corresponde, un acuerdo de confidencialidad previo a cualquier intercambio de información.",
      "contact.email":"Correo","contact.scope":"Alcance","contact.scopeval":"Proyectos y casos internacionales","contact.response":"Respuesta","contact.responseval":"Dentro de 1 día hábil","contact.whatsapp":"Escríbenos por WhatsApp","contact.schedule":"Agendar una llamada",
      "contact.linkedin":"Siga a TRACKSAN en LinkedIn para conocer análisis sobre datos auditables, prevención del fraude y trazabilidad forense.",
      "foot.services":"Servicios","foot.s1":"Migración de datos","foot.s2":"Integración y gobernanza","foot.s3":"Detección de riesgo y fraude","foot.s4":"Trazabilidad forense y auditabilidad de IA","foot.s5":"Peritajes y soporte pericial en litigios",
      "foot.company":"Empresa","foot.c1":"Metodología","foot.c2":"Sectores","foot.c3":"Equipo",
      "foot.contact":"Contacto","foot.form":"Contáctanos","foot.linkedin":"LinkedIn",
      "foot.rights":"© 2026 TRACKSAN. Todos los derechos reservados.","foot.tag":"Data, Risk & Forensic Infrastructure"
    }
  };

  function applyLang(lang){
    const dict = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    document.getElementById('htmlRoot').setAttribute('lang', lang);
  }

  function setLang(lang){
    document.getElementById('langEN').classList.toggle('active', lang === 'en');
    document.getElementById('langES').classList.toggle('active', lang === 'es');
    applyLang(lang);
  }

  // Language is determined by the URL path (/ = English, /es/ = Spanish),
  // each served pre-rendered in its own language for indexing. This just
  // keeps the EN/ES toggle highlighted correctly and re-applies the dict
  // (harmless no-op on a correctly pre-rendered page, useful fallback otherwise).
  (function initLang(){
    const lang = location.pathname.indexOf('/es/') === 0 ? 'es' : 'en';
    setLang(lang);
  })();

  // ---------- Migration map reveal ----------
  (function(){
    const mapEl = document.getElementById('migrationMap');
    if (!mapEl) return;
    let started = false;
    function reveal(){
      if (started) return;
      started = true;
      const badges = mapEl.querySelectorAll('.map-badge');
      badges.forEach((el, i) => setTimeout(() => el.classList.add('show'), 600 + i * 500));
      setTimeout(() => {
        const dot = document.getElementById('mapDot');
        if (dot) { dot.style.background = 'var(--signal)'; dot.style.animation = 'none'; }
      }, 600 + (badges.length - 1) * 500 + 350);
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) reveal(); });
    }, { threshold: 0.3 });
    obs.observe(mapEl);
  })();
