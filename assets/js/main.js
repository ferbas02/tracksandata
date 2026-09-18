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
      "nav.services":"Services","nav.method":"Methodology","nav.sectors":"Sectors","nav.contact":"Contact",
      "hero.eyebrow":"Migration · Governance · Risk Detection · Forensic Audit",
      "hero.title":"Smart data solutions, <em>built to withstand scrutiny.</em>",
      "hero.lede":"TRACKSAN migrates legacy on-premise systems to Microsoft Azure and Fabric, governs the result under DAMA-DMBOK, deploys risk and fraud detection models, and adds a forensic-standard traceability layer — built for banks, government agencies, large taxpayers, and other regulated organizations whose data has to hold up to an examiner, an auditor, or a court.",
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
      "svc.migration.name":"Data migration","svc.migration.desc":"Legacy on-premise systems — Oracle, SQL Server, Sybase and equivalent platforms — moved to Microsoft Azure and Fabric on a lakehouse architecture, with a methodology that preserves full historical integrity and lineage from source to destination.",
      "svc.governance.name":"Integration & governance","svc.governance.desc":"Integration pipelines built under the DAMA-DMBOK framework, with data-quality, completeness, and consistency metrics and full lineage documentation — turning scattered data into a trustworthy, auditable asset.",
      "svc.risk.name":"Risk & fraud detection","svc.risk.desc":"Risk-classification and anomaly-detection models — unsupervised learning, multivariate alerting — applied to tax and benefits administration as much as to financial institutions.",
      "svc.forensic.name":"Forensic traceability & AI auditability","svc.forensic.desc":"The differentiator: a lineage-control layer built to a forensic evidentiary standard, able to reconstruct the origin, transformation, and use of any data behind an AI model or regulatory report — so it holds up to a bank examiner, an auditor, or a court.",
      "method.kicker":"How we work","method.title":"Migrate. Integrate. Detect. Audit.",
      "method.sub":"The same sequence in every engagement — each step depends on the one before it, and none is offered on its own.",
      "method.n1":"Node 01 · Migrate","method.t1":"Legacy systems, moved intact",
      "method.p1":"On-premise Oracle, SQL Server, and Sybase systems migrated to Microsoft Azure and Fabric on a lakehouse architecture, preserving full historical integrity and lineage.",
      "method.n2":"Node 02 · Integrate & Govern","method.t2":"Data governed under DAMA-DMBOK",
      "method.p2":"Pipelines built with data-quality, completeness, and consistency controls, and full lineage documentation from source to destination.",
      "method.n3":"Node 03 · Detect","method.t3":"Risk and fraud, made visible",
      "method.p3":"Unsupervised risk-classification and multivariate fraud-alert models applied to the now-governed data.",
      "method.n4":"Node 04 · Audit","method.t4":"Built to survive examination",
      "method.p4":"A forensic-standard traceability layer that reconstructs the origin, transformation, and use of any data behind an AI model or regulatory report.",
      "sectors.kicker":"Who we serve","sectors.title":"Regulated sectors where data, tax, and audit exposure converge.",
      "sec1.h":"Community banks, credit unions & specialty finance","sec1.p":"Institutions between USD 500M and USD 5B in assets — regulated enough to carry real compliance weight, small enough to lack an internal data-architecture team — facing the retirement of legacy core-banking platforms by Fiserv, FIS, and Jack Henry.",
      "sec2.h":"State revenue & unemployment insurance agencies","sec2.p":"Agencies still running decades-old mainframe systems, unable to cross-check data in real time — a gap tied to USD 100–135B in undetected pandemic-era unemployment fraud, and to state tax gaps most states have never even measured.",
      "sec3.h":"Large taxpayers & other regulated industries","sec3.p":"Transfer-pricing cases, extractive industries such as mining, and any organization whose tax position or data practices face sustained regulatory or judicial scrutiny — a structural gap that isn't unique to banks and government.",
      "why.kicker":"Why TRACKSAN","why.title":"Built on a track record, not a pitch.",
      "why1.h":"One standard, for every kind of scrutiny","why1.p":"Every model and pipeline is built to reconstruct its own lineage — the same rigor a bank examiner, a state auditor, or a court would demand, documented once.",
      "why2.h":"A track record with numbers behind it","why2.p":"At Ecuador's national tax authority, a risk-classification model projected roughly USD 1.8B in recovered tax revenue, and a fraud-alert pipeline cut review time by 50% — the same discipline now applied to U.S. state agencies and mid-market banks.",
      "why3.h":"Two forensic disciplines under one roof","why3.p":"A court-certified forensic IT expert and a tax-litigation lead who has defended expert reports before Ecuador's tax courts for two decades — including transfer-pricing and extractive-industry cases for the country's largest taxpayers — work as one team. Data forensics and financial/tax forensics, applied together.",
      "why4.h":"Azure-first, governed by DAMA-DMBOK","why4.p":"Built on Microsoft Azure and Fabric, under the same data-governance framework applied as a consultant to the Inter-American Development Bank — not a generic tools stack.",
      "contact.kicker":"Contact","contact.title":"Every engagement starts with a confidential conversation.",
      "contact.body":"Tell us about the context of your case or project. We'll respond with next steps and, where relevant, a confidentiality agreement ahead of any information exchange.",
      "contact.email":"Email","contact.scope":"Scope","contact.scopeval":"International projects and cases","contact.response":"Response","contact.responseval":"Within 1 business day",
      "form.tag":"Contact form","form.name":"Full name","form.name.ph":"Full name","form.org":"Organization","form.org.ph":"Company / firm",
      "form.email":"Email","form.email.ph":"name@company.com","form.service":"Service of interest",
      "form.opt1":"Data migration","form.opt2":"Integration & governance","form.opt3":"Risk & fraud detection","form.opt4":"Forensic traceability & AI auditability",
      "form.opt6":"Other / not sure",
      "form.msg":"Brief description of the case or project","form.msg.ph":"Context, jurisdiction if applicable, and relevant timelines",
      "form.submit":"Send request","form.note":"Information shared is treated as confidential.",
      "foot.services":"Services","foot.s1":"Data migration","foot.s2":"Integration & governance","foot.s3":"Risk & fraud detection","foot.s4":"Forensic traceability & AI auditability",
      "foot.company":"Company","foot.c1":"Methodology","foot.c2":"Sectors",
      "foot.contact":"Contact","foot.form":"Contact form",
      "foot.rights":"© 2026 TRACKSAN. All rights reserved.","foot.tag":"Data, Risk & Forensic Infrastructure"
    },
    es: {
      "nav.services":"Servicios","nav.method":"Metodología","nav.sectors":"Sectores","nav.contact":"Contacto",
      "hero.eyebrow":"Migración · Gobernanza · Detección de Riesgo · Auditoría Forense",
      "hero.title":"Soluciones inteligentes de datos, <em>diseñadas para resistir cualquier escrutinio.</em>",
      "hero.lede":"TRACKSAN migra sistemas legados on-premise hacia Microsoft Azure y Fabric, gobierna el resultado bajo DAMA-DMBOK, despliega modelos de detección de riesgo y fraude, y agrega una capa de trazabilidad con estándar forense — pensada para bancos, agencias de gobierno, grandes contribuyentes y otras organizaciones reguladas cuyos datos deben resistir el escrutinio de un examinador, un auditor o un tribunal.",
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
      "svc.migration.name":"Migración de datos","svc.migration.desc":"Sistemas legados on-premise — Oracle, SQL Server, Sybase y plataformas equivalentes — migrados a Microsoft Azure y Fabric sobre arquitectura lakehouse, con una metodología que preserva la integridad histórica completa y el linaje desde el origen hasta el destino.",
      "svc.governance.name":"Integración y gobernanza","svc.governance.desc":"Pipelines de integración construidos bajo el marco DAMA-DMBOK, con métricas de calidad, completitud y consistencia de datos, y documentación completa de linaje — convirtiendo datos dispersos en un activo confiable y auditable.",
      "svc.risk.name":"Detección de riesgo y fraude","svc.risk.desc":"Modelos de clasificación de riesgo y detección de anomalías — aprendizaje no supervisado, alertas multivariables — aplicables tanto a administración tributaria y de beneficios como a instituciones financieras.",
      "svc.forensic.name":"Trazabilidad forense y auditabilidad de IA","svc.forensic.desc":"El diferenciador: una capa de control de linaje construida con estándar probatorio forense, capaz de reconstruir el origen, la transformación y el uso de cualquier dato detrás de un modelo de IA o un reporte regulatorio — para que resista el escrutinio de un examinador bancario, un auditor o un tribunal.",
      "method.kicker":"Cómo trabajamos","method.title":"Migrar. Integrar. Detectar. Auditar.",
      "method.sub":"La misma secuencia en cada proyecto — cada paso depende del anterior, y ninguno se ofrece por separado.",
      "method.n1":"Nodo 01 · Migrar","method.t1":"Sistemas legados, movidos intactos",
      "method.p1":"Sistemas on-premise en Oracle, SQL Server y Sybase migrados a Microsoft Azure y Fabric sobre arquitectura lakehouse, preservando la integridad histórica completa y el linaje.",
      "method.n2":"Nodo 02 · Integrar y Gobernar","method.t2":"Datos gobernados bajo DAMA-DMBOK",
      "method.p2":"Pipelines construidos con controles de calidad, completitud y consistencia de datos, y documentación completa de linaje desde el origen hasta el destino.",
      "method.n3":"Nodo 03 · Detectar","method.t3":"Riesgo y fraude, hechos visibles",
      "method.p3":"Modelos de clasificación de riesgo no supervisados y de alertas de fraude multivariables aplicados sobre los datos ya gobernados.",
      "method.n4":"Nodo 04 · Auditar","method.t4":"Construido para resistir un examen",
      "method.p4":"Una capa de trazabilidad con estándar forense que reconstruye el origen, la transformación y el uso de cualquier dato detrás de un modelo de IA o un reporte regulatorio.",
      "sectors.kicker":"A quién servimos","sectors.title":"Sectores regulados donde convergen los datos, lo tributario y la exposición a auditoría.",
      "sec1.h":"Community banks, cooperativas de crédito y specialty finance","sec1.p":"Instituciones entre USD 500M y USD 5.000M en activos — suficientemente reguladas para tener un peso real de cumplimiento, suficientemente pequeñas para no tener un equipo interno de arquitectura de datos — frente al retiro de plataformas de core bancario legado por parte de Fiserv, FIS y Jack Henry.",
      "sec2.h":"Agencias estatales de rentas y de seguro de desempleo","sec2.p":"Agencias que aún operan sistemas mainframe de décadas de antigüedad, sin capacidad de verificación cruzada en tiempo real — una brecha ligada a entre USD 100.000 y 135.000 millones en fraude no detectado durante la pandemia, y a brechas tributarias estatales que la mayoría de los estados nunca ha medido.",
      "sec3.h":"Grandes contribuyentes y otras industrias reguladas","sec3.p":"Casos de precios de transferencia, industrias extractivas como la minería, y cualquier organización cuya posición tributaria o prácticas de datos enfrenten un escrutinio regulatorio o judicial sostenido — una brecha estructural que no es exclusiva de bancos ni de gobierno.",
      "why.kicker":"Por qué TRACKSAN","why.title":"Construido sobre un historial, no sobre un discurso.",
      "why1.h":"Un mismo estándar, para cualquier tipo de escrutinio","why1.p":"Cada modelo y cada pipeline se construyen para reconstruir su propio linaje — el mismo rigor que exigiría un examinador bancario, un auditor estatal o un tribunal, documentado una sola vez.",
      "why2.h":"Un historial con cifras detrás","why2.p":"En el Servicio de Rentas Internas del Ecuador, un modelo de clasificación de riesgo proyectó una recuperación tributaria de aproximadamente USD 1.800 millones, y un pipeline de alertas de fraude redujo en 50% el tiempo de revisión — la misma disciplina aplicada hoy a agencias estatales y bancos de mercado medio en Estados Unidos.",
      "why3.h":"Dos disciplinas forenses bajo un mismo equipo","why3.p":"Un perito informático judicial certificado y una líder en litigio tributario que ha defendido informes periciales ante los tribunales fiscales del Ecuador durante dos décadas — incluyendo casos de precios de transferencia y de industrias extractivas para los mayores contribuyentes del país — trabajan como un solo equipo. Forense de datos y forense contable-tributario, aplicados en conjunto.",
      "why4.h":"Azure-first, gobernado bajo DAMA-DMBOK","why4.p":"Construido sobre Microsoft Azure y Fabric, bajo el mismo marco de gobernanza de datos aplicado como consultor del Banco Interamericano de Desarrollo — no una pila de herramientas genérica.",
      "contact.kicker":"Contacto","contact.title":"Cada proyecto comienza con una conversación confidencial.",
      "contact.body":"Cuéntenos el contexto de su caso o proyecto. Responderemos con los siguientes pasos y, si corresponde, un acuerdo de confidencialidad previo a cualquier intercambio de información.",
      "contact.email":"Correo","contact.scope":"Alcance","contact.scopeval":"Proyectos y casos internacionales","contact.response":"Respuesta","contact.responseval":"Dentro de 1 día hábil",
      "form.tag":"Formulario de contacto","form.name":"Nombre completo","form.name.ph":"Nombre completo","form.org":"Organización","form.org.ph":"Empresa / estudio",
      "form.email":"Correo electrónico","form.email.ph":"nombre@empresa.com","form.service":"Servicio de interés",
      "form.opt1":"Migración de datos","form.opt2":"Integración y gobernanza","form.opt3":"Detección de riesgo y fraude","form.opt4":"Trazabilidad forense y auditabilidad de IA",
      "form.opt6":"Otro / no estoy seguro",
      "form.msg":"Descripción breve del caso o proyecto","form.msg.ph":"Contexto, jurisdicción si aplica, y plazos relevantes",
      "form.submit":"Enviar solicitud","form.note":"La información compartida se trata de forma confidencial.",
      "foot.services":"Servicios","foot.s1":"Migración de datos","foot.s2":"Integración y gobernanza","foot.s3":"Detección de riesgo y fraude","foot.s4":"Trazabilidad forense y auditabilidad de IA",
      "foot.company":"Empresa","foot.c1":"Metodología","foot.c2":"Sectores",
      "foot.contact":"Contacto","foot.form":"Formulario de contacto",
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
    try { localStorage.setItem('tracksan-lang', lang); } catch(e) {}
  }

  (function initLang(){
    let saved = 'en';
    try { saved = localStorage.getItem('tracksan-lang') || 'en'; } catch(e) {}
    setLang(saved);
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
