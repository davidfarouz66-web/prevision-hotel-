let projects = [
  {
    id: "marrakech",
    status: "active",
    type: "Séjour",
    name: "Marrakech Pessah",
    date: "12 avr.",
    people: 86,
    sold: 78000,
    collected: 41500,
    notes: [
      { text: "Confirmer le nombre final de chambres avec l'hôtel", done: false },
      { text: "Vérifier le deuxième acompte nourriture", done: false },
      { text: "Contrat hôtel reçu", done: true }
    ],
    budget: [
      { label: "Hôtel - total du séjour", category: "Hôtel", planned: 36000, paid: 18000, icon: "H", details: [
        { name: "Acompte réservation", info: "Payé à la signature", planned: 12000, paid: 12000 },
        { name: "Deuxième échéance hôtel", info: "À payer avant arrivée", planned: 6000, paid: 6000 },
        { name: "Solde hôtel", info: "Dernière échéance", planned: 18000, paid: 0 }
      ] },
      { label: "Nourriture - commandes prévues", category: "Nourriture", planned: 14200, paid: 5300, icon: "N", details: [
        { name: "Viande et volaille", info: "Commande principale", planned: 5200, paid: 2500 },
        { name: "Épicerie sèche", info: "Base séjour", planned: 3100, paid: 1800 },
        { name: "Fruits, légumes, frais", info: "À ajuster selon participants", planned: 3900, paid: 1000 },
        { name: "Boissons et extras", info: "Prévu large", planned: 2000, paid: 0 }
      ] },
      { label: "Employés - animateurs et cuisine", category: "Employés", planned: 9800, paid: 4200, icon: "E", details: [
        { name: "Chef cuisine", info: "10 jours x 280 €", planned: 2800, paid: 1400 },
        { name: "Second cuisine", info: "10 jours x 180 €", planned: 1800, paid: 900 },
        { name: "2 animateurs", info: "Forfait séjour", planned: 3000, paid: 1500 },
        { name: "Responsable terrain", info: "Forfait organisation", planned: 2200, paid: 400 }
      ] },
      { label: "Transferts et navettes", category: "Transport", planned: 4100, paid: 900, icon: "T", details: [
        { name: "Navettes aéroport", info: "Allers/retours familles", planned: 2200, paid: 900 },
        { name: "Bus activité", info: "Sortie groupe", planned: 1200, paid: 0 },
        { name: "Taxis imprévus", info: "Marge prévue", planned: 700, paid: 0 }
      ] },
      { label: "Marge de sécurité / oublis", category: "Imprévus", planned: 2500, paid: 0, icon: "I", details: [
        { name: "Réserve urgence", info: "Pour ce qui n'est pas encore connu", planned: 2500, paid: 0 }
      ] }
    ],
    payments: [
      { label: "Payer le solde hôtel", amount: 18000, date: "05 juil.", status: "soon", direction: "out" },
      { label: "Recevoir acompte famille Benhamou", amount: 6500, date: "02 juil.", status: "soon", direction: "in" },
      { label: "Payer avance équipe cuisine", amount: 2800, date: "08 juil.", status: "open", direction: "out" }
    ]
  },
  {
    id: "cohen",
    status: "active",
    type: "Réception",
    name: "Réception Cohen",
    date: "21 juil.",
    people: 140,
    sold: 24500,
    collected: 12000,
    notes: [
      { text: "Confirmer la location vaisselle", done: false },
      { text: "Valider le nombre final d'invités", done: false },
      { text: "Menu validé avec le client", done: true }
    ],
    budget: [
      { label: "Produits frais et viande", category: "Achats traiteur", planned: 6200, paid: 2100, icon: "A", details: [
        { name: "Boucherie", info: "Viande réception", planned: 3200, paid: 1500 },
        { name: "Poisson", info: "Entrées", planned: 900, paid: 0 },
        { name: "Primeur", info: "Légumes et fruits", planned: 1300, paid: 600 },
        { name: "Boissons", info: "Soft et eau", planned: 800, paid: 0 }
      ] },
      { label: "Serveurs pour la réception", category: "Employés", planned: 2800, paid: 800, icon: "S", details: [
        { name: "Chef de salle", info: "Forfait événement", planned: 500, paid: 300 },
        { name: "6 serveurs", info: "6 x 300 €", planned: 1800, paid: 500 },
        { name: "Plonge et rangement", info: "Fin de soirée", planned: 500, paid: 0 }
      ] },
      { label: "Équipe cuisine", category: "Cuisine", planned: 1900, paid: 900, icon: "C", details: [
        { name: "Chef cuisine", info: "Préparation + jour J", planned: 900, paid: 500 },
        { name: "Aide cuisine", info: "Préparation", planned: 600, paid: 400 },
        { name: "Dressage plateaux", info: "Extra possible", planned: 400, paid: 0 }
      ] },
      { label: "Livraison et installation", category: "Transport", planned: 650, paid: 0, icon: "L", details: [
        { name: "Camionnette", info: "Transport aller/retour", planned: 350, paid: 0 },
        { name: "Installation buffet", info: "Temps sur place", planned: 300, paid: 0 }
      ] },
      { label: "Vaisselle et matériel loué", category: "Matériel", planned: 1700, paid: 0, icon: "V", details: [
        { name: "Vaisselle", info: "140 couverts", planned: 900, paid: 0 },
        { name: "Buffets et maintien chaud", info: "Location", planned: 600, paid: 0 },
        { name: "Casse / marge", info: "Sécurité", planned: 200, paid: 0 }
      ] }
    ],
    payments: [
      { label: "Recevoir solde du client", amount: 12500, date: "18 juil.", status: "open", direction: "in" },
      { label: "Payer boucherie / produits frais", amount: 2100, date: "10 juil.", status: "soon", direction: "out" },
      { label: "Payer serveurs après réception", amount: 2000, date: "22 juil.", status: "open", direction: "out" }
    ]
  },
  {
    id: "deauville",
    status: "done",
    type: "Séjour",
    name: "Week-end Deauville",
    date: "18 août",
    people: 34,
    sold: 18500,
    collected: 9000,
    notes: [
      { text: "Confirmer l'activité groupe", done: false },
      { text: "Vérifier horaires d'arrivée", done: false }
    ],
    budget: [
      { label: "Hôtel - chambres et salle", category: "Hôtel", planned: 7900, paid: 3900, icon: "H", details: [
        { name: "Acompte hôtel", info: "Déjà versé", planned: 3900, paid: 3900 },
        { name: "Solde hôtel", info: "Avant arrivée", planned: 4000, paid: 0 }
      ] },
      { label: "Repas du week-end", category: "Nourriture", planned: 3200, paid: 1200, icon: "R", details: [
        { name: "Repas vendredi soir", info: "34 personnes", planned: 1100, paid: 500 },
        { name: "Repas samedi", info: "Midi + soir", planned: 1500, paid: 700 },
        { name: "Petit déjeuner", info: "Dimanche", planned: 600, paid: 0 }
      ] },
      { label: "Animateur", category: "Employés", planned: 1200, paid: 0, icon: "A", details: [
        { name: "Animateur week-end", info: "Forfait 2 jours", planned: 1200, paid: 0 }
      ] },
      { label: "Activités prévues", category: "Activités", planned: 950, paid: 0, icon: "S", details: [
        { name: "Activité groupe", info: "À confirmer", planned: 700, paid: 0 },
        { name: "Petits extras", info: "Marge", planned: 250, paid: 0 }
      ] }
    ],
    payments: [
      { label: "Payer deuxième acompte hôtel", amount: 2000, date: "01 août", status: "open", direction: "out" },
      { label: "Recevoir solde client", amount: 9500, date: "08 août", status: "open", direction: "in" }
    ]
  }
];

let currentProject = projects[0];
let currentBudgetIndex = null;
let currentDetailIndex = null;
let currentScheduleIndex = null;
let formMode = "budget";
let projectFormMode = "create";

const money = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

const homeScreen = document.querySelector("#homeScreen");
const detailScreen = document.querySelector("#detailScreen");
const projectList = document.querySelector("#projectList");
const completedProjectList = document.querySelector("#completedProjectList");
const metrics = document.querySelector("#metrics");
const resultCard = document.querySelector("#resultCard");
const fullBudget = document.querySelector("#fullBudget");
const urgentPayments = document.querySelector("#urgentPayments");
const noteList = document.querySelector("#noteList");
const projectMenu = document.querySelector("#projectMenu");
const projectMenuBtn = document.querySelector("#projectMenuBtn");
const saveStatus = document.querySelector("#saveStatus");
const bottomSheet = document.querySelector("#bottomSheet");
const detailSheet = document.querySelector("#detailSheet");
const clientSheet = document.querySelector("#clientSheet");
const projectSheet = document.querySelector("#projectSheet");
const sheetBackdrop = document.querySelector("#sheetBackdrop");
const categorySelect = document.querySelector("#categorySelect");
const employeePricing = document.querySelector("#employeePricing");
const dayRateField = document.querySelector("#dayRateField");
const rangePicker = document.querySelector("#rangePicker");
const workCalendar = document.querySelector("#workCalendar");
const calendarGrid = document.querySelector("#calendarGrid");
const calendarMonth = document.querySelector("#calendarMonth");
const rangeHint = document.querySelector("#rangeHint");
let calendarCursor = new Date();
let rangeStart = null;
let rangeEnd = null;
let checkedWorkDays = null;

const SUPABASE_URL = "https://aykbzbeerstjmhworody.supabase.co";
const SUPABASE_KEY = "sb_publishable_vioHpKZRfR_EcTgDuzyBJQ_l9xNxV5I";
const APP_STATE_ID = "odem-event";
const LOCAL_STATE_KEY = "odem-event-projects";
let saveTimer = null;
let isLoadingCloudData = false;
let lastLocalUpdatedAt = null;
let removedTestDataOnLoad = false;

function setSaveStatus(message, state = "idle") {
  if (!saveStatus) return;
  saveStatus.textContent = message;
  saveStatus.dataset.state = state;
}

function readProjectsFromLocal() {
  try {
    const raw = window.localStorage.getItem(LOCAL_STATE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (!Array.isArray(saved.projects) || !saved.projects.length) return null;
    return saved;
  } catch (error) {
    console.warn("Sauvegarde locale illisible.", error);
    return null;
  }
}

function removeTestDataFromProjects(projectList) {
  let changed = false;
  const isTestText = (value) => typeof value === "string" && value.includes("TEST SAUVEGARDE LOCALE");
  projectList.forEach((project) => {
    if (Array.isArray(project.budget)) {
      const beforeBudget = project.budget.length;
      project.budget = project.budget.filter((item) => !isTestText(item.label) && !isTestText(item.category));
      changed = changed || project.budget.length !== beforeBudget;
      project.budget.forEach((item) => {
        if (!Array.isArray(item.details)) return;
        const beforeDetails = item.details.length;
        item.details = item.details.filter((detail) => !isTestText(detail.name) && !isTestText(detail.info));
        changed = changed || item.details.length !== beforeDetails;
      });
    }
    if (Array.isArray(project.payments)) {
      const beforePayments = project.payments.length;
      project.payments = project.payments.filter((payment) => !isTestText(payment.label));
      changed = changed || project.payments.length !== beforePayments;
    }
    if (Array.isArray(project.notes)) {
      const beforeNotes = project.notes.length;
      project.notes = project.notes.filter((note) => !isTestText(note.text));
      changed = changed || project.notes.length !== beforeNotes;
    }
  });
  return changed;
}

function applySavedProjects(saved) {
  if (!saved || !Array.isArray(saved.projects) || !saved.projects.length) return false;
  removedTestDataOnLoad = removeTestDataFromProjects(saved.projects) || removedTestDataOnLoad;
  projects = saved.projects;
  currentProject = projects[0];
  lastLocalUpdatedAt = saved.updatedAt || lastLocalUpdatedAt;
  return true;
}

function saveProjectsToLocal(updatedAt = new Date().toISOString()) {
  try {
    lastLocalUpdatedAt = updatedAt;
    window.localStorage.setItem(LOCAL_STATE_KEY, JSON.stringify({ projects, updatedAt }));
    setSaveStatus("Sauvegardé sur ce téléphone", "local");
  } catch (error) {
    console.warn("Impossible de sauvegarder sur ce téléphone.", error);
    setSaveStatus("Sauvegarde téléphone bloquée", "error");
  }
}

async function supabaseRequest(path, options = {}) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
  if (!response.ok) {
    const error = new Error(`Supabase ${response.status}`);
    error.status = response.status;
    throw error;
  }
  return response;
}

async function loadProjectsFromCloud() {
  isLoadingCloudData = true;
  const localSave = readProjectsFromLocal();
  const hasLocalSave = applySavedProjects(localSave);
  if (hasLocalSave) {
    setSaveStatus("Sauvegarde du téléphone chargée", "local");
  }

  try {
    const response = await supabaseRequest(`app_state?id=eq.${APP_STATE_ID}&select=data,updated_at`);
    const rows = await response.json();
    const savedProjects = rows?.[0]?.data?.projects;
    const cloudUpdatedAt = rows?.[0]?.updated_at || rows?.[0]?.data?.updatedAt || null;
    const cloudIsNewer = cloudUpdatedAt && (!lastLocalUpdatedAt || new Date(cloudUpdatedAt) > new Date(lastLocalUpdatedAt));
    if (Array.isArray(savedProjects) && savedProjects.length) {
      if (!hasLocalSave || cloudIsNewer) {
        applySavedProjects({ projects: savedProjects, updatedAt: cloudUpdatedAt });
        saveProjectsToLocal(cloudUpdatedAt || new Date().toISOString());
        setSaveStatus("Sauvegarde en ligne chargée", "online");
      } else {
        setSaveStatus("Version téléphone gardée", "local");
      }
    }
    await keepSupabaseAwake();
  } catch (error) {
    console.warn("Sauvegarde en ligne non disponible pour l'instant.", error);
    if (error.status === 404) {
      setSaveStatus(hasLocalSave ? "Téléphone OK, en ligne à configurer" : "En ligne à configurer", hasLocalSave ? "local" : "error");
    } else {
      setSaveStatus(hasLocalSave ? "Sauvegardé sur ce téléphone" : "Hors ligne", hasLocalSave ? "local" : "error");
    }
  } finally {
    isLoadingCloudData = false;
  }

  if (removedTestDataOnLoad) {
    removedTestDataOnLoad = false;
    saveProjectsToLocal();
  }

  if (hasLocalSave && lastLocalUpdatedAt) {
    window.setTimeout(saveProjectsToCloud, 250);
  }
}

async function saveProjectsToCloud() {
  if (isLoadingCloudData) return;
  setSaveStatus("Sauvegarde en ligne...", "saving");
  try {
    const updatedAt = lastLocalUpdatedAt || new Date().toISOString();
    await supabaseRequest("app_state", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates" },
      body: JSON.stringify({
        id: APP_STATE_ID,
        data: { projects, updatedAt },
        updated_at: updatedAt
      })
    });
    setSaveStatus("Sauvegardé en ligne", "online");
  } catch (error) {
    console.warn("Impossible de sauvegarder en ligne pour l'instant.", error);
    setSaveStatus(error.status === 404 ? "Téléphone OK, en ligne à configurer" : "Sauvegardé sur ce téléphone", "local");
  }
}

function scheduleCloudSave() {
  if (isLoadingCloudData) return;
  saveProjectsToLocal();
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(saveProjectsToCloud, 450);
}

async function keepSupabaseAwake() {
  try {
    await supabaseRequest("app_status", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates" },
      body: JSON.stringify({
        id: APP_STATE_ID,
        last_active: new Date().toISOString()
      })
    });
  } catch (error) {
    console.warn("Keepalive Supabase indisponible.", error);
  }
}

function isoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function displayDate(value) {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "short",
    day: "2-digit",
    month: "short"
  }).format(new Date(`${value}T12:00:00`));
}

function parseDisplayDate(value) {
  if (!value || value === "À fixer") return isoDate(new Date());
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const monthMap = {
    janv: 0, févr: 1, mars: 2, avr: 3, mai: 4, juin: 5,
    juil: 6, août: 7, sept: 8, oct: 9, nov: 10, déc: 11
  };
  const [dayText, monthText] = value.replace(".", "").split(" ");
  const month = monthMap[monthText];
  if (month === undefined) return isoDate(new Date());
  const now = new Date();
  return isoDate(new Date(now.getFullYear(), month, Number(dayText)));
}

function shortDate(value) {
  if (!value) return "À fixer";
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short"
  }).format(new Date(`${value}T12:00:00`)).replace(".", "");
}

function projectStatusLabel(status) {
  return status === "done" ? "Terminé" : "Actif";
}

function makeProjectId(name) {
  return `${name.toLowerCase().replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "")}-${Date.now()}`;
}

function starterBudget(type) {
  const lines = type === "Réception" ? [
    ["Produits frais et achats traiteur", "Achats traiteur", "A"],
    ["Serveurs et équipe salle", "Employés", "S"],
    ["Équipe cuisine", "Cuisine", "C"],
    ["Livraison et installation", "Transport", "L"],
    ["Vaisselle et matériel loué", "Matériel", "V"],
    ["Marge de sécurité / oublis", "Imprévus", "I"]
  ] : [
    ["Hôtel - total du séjour", "Hôtel", "H"],
    ["Nourriture - commandes prévues", "Nourriture", "N"],
    ["Employés - animateurs et cuisine", "Employés", "E"],
    ["Transferts et navettes", "Transport", "T"],
    ["Activités prévues", "Activités", "A"],
    ["Marge de sécurité / oublis", "Imprévus", "I"]
  ];
  return lines.map(([label, category, icon]) => ({
    label,
    category,
    planned: 0,
    paid: 0,
    icon,
    details: []
  }));
}

function selectedDateRange() {
  const startValue = rangeStart;
  const endValue = rangeEnd;
  if (!startValue || !endValue) return [];
  const start = new Date(`${startValue}T12:00:00`);
  const end = new Date(`${endValue}T12:00:00`);
  if (end < start) return [];
  const days = [];
  for (let cursor = new Date(start); cursor <= end; cursor = addDays(cursor, 1)) {
    days.push(isoDate(cursor));
  }
  return days;
}

function monthLabel(date) {
  return new Intl.DateTimeFormat("fr-FR", {
    month: "long",
    year: "numeric"
  }).format(date);
}

function isSameDate(a, b) {
  return a && b && a === b;
}

function isInsideRange(day) {
  return rangeStart && rangeEnd && day > rangeStart && day < rangeEnd;
}

function setHiddenRangeInputs() {
  document.querySelector('[name="startDate"]').value = rangeStart || "";
  document.querySelector('[name="endDate"]').value = rangeEnd || "";
}

function employeeInfo(priceMode, startDate, endDate, selectedDays, dayRate, employeeCount) {
  const peopleText = employeeCount > 1 ? `${employeeCount} personnes · ` : "";
  return priceMode === "day" && selectedDays.length
    ? `${peopleText}${displayDate(startDate)} - ${displayDate(endDate)} · ${selectedDays.length} jours x ${money.format(dayRate)}`
    : `${peopleText}Forfait global`;
}

function detailPaid(detail) {
  if (Array.isArray(detail.payments)) {
    return detail.payments.reduce((sum, payment) => sum + payment.amount, 0);
  }
  return detail.paid || 0;
}

function ensureClientPayments(project) {
  if (!Array.isArray(project.clientPayments)) {
    project.clientPayments = project.collected ? [{ label: "Déjà reçu", amount: project.collected, date: "Déjà noté" }] : [];
  }
  project.collected = project.clientPayments.reduce((sum, payment) => sum + payment.amount, 0);
  return project.clientPayments;
}

function ensureDetailPayments(detail) {
  if (!Array.isArray(detail.payments)) {
    detail.payments = detail.paid ? [{ label: "Paiement déjà noté", amount: detail.paid }] : [];
  }
  detail.paid = detailPaid(detail);
  return detail.payments;
}

function syncBudgetPaid(item) {
  item.paid = (item.details || []).reduce((sum, detail) => sum + detailPaid(detail), 0);
}

function isEmployeeItem(item) {
  return item && /employ|équipe|cuisine|serveur|animateur/i.test(`${item.category} ${item.label}`);
}

function resetEmployeePricing() {
  employeePricing.classList.add("is-hidden");
  dayRateField.classList.add("is-hidden");
  rangePicker.classList.add("is-hidden");
  workCalendar.classList.add("is-hidden");
  document.querySelector('[name="amount"]').readOnly = false;
  document.querySelector('[name="amount"]').placeholder = "450";
  document.querySelectorAll('[name="priceMode"]').forEach((input) => {
    input.checked = input.value === "global";
  });
  document.querySelector('[name="dayRate"]').value = "";
  document.querySelector('[name="employeeCount"]').value = "1";
  const today = new Date();
  calendarCursor = new Date(today.getFullYear(), today.getMonth(), 1);
  rangeStart = null;
  rangeEnd = null;
  checkedWorkDays = null;
  setHiddenRangeInputs();
  workCalendar.innerHTML = "";
}

function setupEmployeePricing() {
  employeePricing.classList.remove("is-hidden");
  updateEmployeeMode();
}

function renderWorkCalendar() {
  const days = selectedDateRange();
  workCalendar.innerHTML = days.length ? days.map((day) => `
    <label>
      <input type="checkbox" name="workDay" value="${day}" ${!checkedWorkDays || checkedWorkDays.has(day) ? "checked" : ""} />
      <span>${displayDate(day)}</span>
    </label>
  `).join("") : `<p class="calendar-empty">Choisis une date de fin après la date de début.</p>`;
  updateEmployeeTotal();
}

function renderRangePicker() {
  calendarMonth.textContent = monthLabel(calendarCursor);
  setHiddenRangeInputs();
  rangeHint.textContent = rangeStart && rangeEnd
    ? `${displayDate(rangeStart)} au ${displayDate(rangeEnd)}`
    : rangeStart
      ? `${displayDate(rangeStart)} sélectionné. Clique sur la date de fin.`
      : "Clique sur la date de début, puis sur la date de fin.";

  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const firstWeekday = (firstOfMonth.getDay() + 6) % 7;
  const gridStart = addDays(firstOfMonth, -firstWeekday);
  const today = isoDate(new Date());
  const days = Array.from({ length: 42 }, (_, index) => {
    const date = addDays(gridStart, index);
    const value = isoDate(date);
    const isCurrentMonth = date.getMonth() === month;
    const classes = [
      "calendar-day",
      isCurrentMonth ? "" : "is-muted",
      isSameDate(value, today) ? "is-today" : "",
      isSameDate(value, rangeStart) ? "is-range-edge" : "",
      isSameDate(value, rangeEnd) ? "is-range-edge" : "",
      isInsideRange(value) ? "is-in-range" : ""
    ].filter(Boolean).join(" ");
    return `<button type="button" class="${classes}" data-date="${value}">${date.getDate()}</button>`;
  });

  calendarGrid.innerHTML = days.join("");
  calendarGrid.querySelectorAll("[data-date]").forEach((button) => {
    button.addEventListener("click", () => selectCalendarDate(button.dataset.date));
  });
}

function selectCalendarDate(value) {
  if (!rangeStart || rangeEnd || value < rangeStart) {
    rangeStart = value;
    rangeEnd = null;
  } else {
    rangeEnd = value;
  }
  checkedWorkDays = null;
  renderRangePicker();
  renderWorkCalendar();
}

function updateEmployeeMode() {
  const mode = document.querySelector('[name="priceMode"]:checked')?.value || "global";
  const isDayMode = mode === "day";
  dayRateField.classList.toggle("is-hidden", !isDayMode);
  rangePicker.classList.toggle("is-hidden", !isDayMode);
  workCalendar.classList.toggle("is-hidden", !isDayMode);
  document.querySelector('[name="amount"]').readOnly = isDayMode;
  if (isDayMode) {
    if (!rangeStart) {
      const today = new Date();
      calendarCursor = new Date(today.getFullYear(), today.getMonth(), 1);
    }
    renderRangePicker();
    renderWorkCalendar();
  }
}

function updateEmployeeTotal() {
  const mode = document.querySelector('[name="priceMode"]:checked')?.value || "global";
  if (mode !== "day") return;
  const rate = Number(document.querySelector('[name="dayRate"]').value || 0);
  const employeeCount = Math.max(Number(document.querySelector('[name="employeeCount"]').value || 1), 1);
  const days = document.querySelectorAll('[name="workDay"]:checked').length;
  document.querySelector('[name="amount"]').value = rate * days * employeeCount;
}

function totals(project) {
  ensureClientPayments(project);
  const planned = project.budget.reduce((sum, item) => sum + item.planned, 0);
  const paid = project.budget.reduce((sum, item) => sum + item.paid, 0);
  const remainingToPay = Math.max(planned - paid, 0);
  const remainingToCollect = Math.max(project.sold - project.collected, 0);
  const profit = project.sold - planned;
  const margin = project.sold ? Math.round((profit / project.sold) * 100) : 0;
  return { planned, paid, remainingToPay, remainingToCollect, profit, margin };
}

function renderHome() {
  const renderProjectCard = (project) => {
    const total = totals(project);
    const progress = Math.min(Math.round((project.collected / project.sold) * 100), 100);
    return `
      <button class="project-card" data-project="${project.id}">
        <div class="project-main">
          <span class="type-pill">${project.type}</span>
          <h3>${project.name}</h3>
          <p>${project.date} · ${project.people} personnes · reste à payer ${money.format(total.remainingToPay)}</p>
          <div class="progress"><i style="width:${progress}%"></i></div>
        </div>
        <div class="project-side">
          <strong>${money.format(total.profit)}</strong>
          <span>marge prévue</span>
        </div>
      </button>
    `;
  };

  projectList.innerHTML = projects.filter((project) => project.status !== "done").map(renderProjectCard).join("");
  completedProjectList.innerHTML = projects.filter((project) => project.status === "done").map(renderProjectCard).join("");

  document.querySelectorAll("[data-project]").forEach((card) => {
    card.addEventListener("click", () => {
      currentProject = projects.find((project) => project.id === card.dataset.project);
      openDetail();
    });
  });
}

function renderDetail() {
  const total = totals(currentProject);
  document.querySelector("#projectType").textContent = currentProject.type;
  document.querySelector("#projectName").textContent = currentProject.name;
  metrics.innerHTML = [
    ["Client", [
      ["Total à recevoir", currentProject.sold],
      ["Déjà reçu", currentProject.collected],
      ["Reste à recevoir", total.remainingToCollect]
    ]],
    ["Dépenses", [
      ["Total prévu", total.planned],
      ["Déjà payé", total.paid],
      ["Reste à payer", total.remainingToPay]
    ]],
    ["Résultat", [
      ["Prix client", currentProject.sold],
      ["Dépenses prévues", total.planned],
      ["Bénéfice prévu", total.profit]
    ]]
  ].map(([title, rows], index) => `
    <button class="summary-block ${index === 0 ? "client-block" : ""} ${index === 2 ? "profit-summary-block" : "expense-block"}" ${index === 0 ? 'id="clientSummaryBtn" type="button"' : 'type="button"'}>
      <h3>${title}</h3>
      ${rows.map(([label, value], rowIndex) => `
        <div class="${rowIndex === 2 ? "summary-balance" : ""}">
          <span>${label}</span>
          <strong>${money.format(value)}</strong>
        </div>
      `).join("")}
    </button>
  `).join("");

  resultCard.innerHTML = `
    <div>
      <span>Prix client</span>
      <strong>${money.format(currentProject.sold)}</strong>
    </div>
    <div>
      <span>Dépenses prévues</span>
      <strong>${money.format(total.planned)}</strong>
    </div>
    <div class="result-main">
      <span>Bénéfice prévu</span>
      <strong>${money.format(total.profit)}</strong>
    </div>
  `;

  fullBudget.innerHTML = currentProject.budget.map((item, index) => renderBudgetRow(item, index)).join("");
  const renderPayment = (payment, index) => `
    <button class="timeline-item" data-schedule-index="${index}" type="button">
      <div class="timeline-date ${payment.status === "late" ? "late" : ""}">${payment.date}</div>
      <div>
        <strong>${payment.label}</strong>
        <p>${payment.direction === "in" ? "Le client doit payer" : "Nous devons payer"} · toucher pour modifier</p>
      </div>
      <div class="budget-amount">
        <strong>${money.format(payment.amount)}</strong>
      </div>
    </button>
  `;
  urgentPayments.innerHTML = currentProject.payments.slice(0, 3).map(renderPayment).join("");
  renderNotes();

  categorySelect.innerHTML = currentProject.budget.map((item) => (
    `<option value="${item.category}">${item.category}</option>`
  )).join("") + `<option value="Ajout manuel">Ajout manuel</option>`;

  document.querySelectorAll("[data-budget-index]").forEach((row) => {
    row.addEventListener("click", () => openLineDetail(Number(row.dataset.budgetIndex)));
  });
  document.querySelectorAll("[data-schedule-index]").forEach((row) => {
    row.addEventListener("click", () => openScheduleSheet(Number(row.dataset.scheduleIndex)));
  });
  document.querySelector("#clientSummaryBtn")?.addEventListener("click", openClientSheet);
}

function renderNotes() {
  const notes = Array.isArray(currentProject.notes) ? currentProject.notes : [];
  const sortedNotes = notes
    .map((note, index) => ({ ...note, index }))
    .sort((a, b) => Number(a.done) - Number(b.done));
  noteList.innerHTML = sortedNotes.length ? sortedNotes.map((note) => `
    <button class="note-card ${note.done ? "is-done" : ""}" data-note-index="${note.index}" type="button">
      <span class="note-check">${note.done ? "✓" : ""}</span>
      <p>${note.text}</p>
    </button>
  `).join("") : `<p class="empty-notes">Aucune note pour l'instant.</p>`;
  noteList.querySelectorAll("[data-note-index]").forEach((card) => {
    card.addEventListener("click", () => toggleNote(Number(card.dataset.noteIndex)));
  });
}

function toggleNote(index) {
  currentProject.notes[index].done = !currentProject.notes[index].done;
  renderNotes();
  scheduleCloudSave();
}

function addNote() {
  const text = window.prompt("Nouvelle note");
  if (!text?.trim()) return;
  if (!Array.isArray(currentProject.notes)) currentProject.notes = [];
  currentProject.notes.unshift({ text: text.trim(), done: false });
  renderNotes();
  scheduleCloudSave();
}

function exportCurrentProject() {
  const total = totals(currentProject);
  ensureClientPayments(currentProject);
  const perPerson = (value) => currentProject.people ? value / currentProject.people : 0;
  const cell = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  const moneyCell = (value) => Math.round((Number(value) || 0) * 100) / 100;
  const tableRows = (rows) => rows.map((row) => `<tr>${row.map((value) => `<td>${cell(value)}</td>`).join("")}</tr>`).join("");
  const expenseRows = [];
  currentProject.budget.forEach((item) => {
    syncBudgetPaid(item);
    expenseRows.push([item.category, item.label, moneyCell(item.planned), moneyCell(item.paid), moneyCell(Math.max(item.planned - item.paid, 0)), moneyCell(perPerson(item.planned))]);
    item.details?.forEach((detail) => {
      const paid = detailPaid(detail);
      expenseRows.push(["", `  - ${detail.name}`, moneyCell(detail.planned), moneyCell(paid), moneyCell(Math.max(detail.planned - paid, 0)), moneyCell(perPerson(detail.planned))]);
    });
  });

  const html = `
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Arial, sans-serif; }
          h1 { color: #203238; }
          h2 { margin-top: 24px; color: #203238; }
          table { border-collapse: collapse; width: 100%; margin-bottom: 18px; }
          th { background: #203238; color: #fff; text-align: left; }
          th, td { border: 1px solid #cfd8d3; padding: 8px; }
          .highlight td { background: #dff3e8; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>${cell(currentProject.name)} - prévisionnel</h1>
        <table>
          ${tableRows([
            ["Type", currentProject.type],
            ["Date", currentProject.date],
            ["Participants / invités", currentProject.people]
          ])}
        </table>

        <h2>Résumé financier</h2>
        <table>
          <tr><th>Indicateur</th><th>Total</th><th>Par participant</th></tr>
          ${tableRows([
            ["Prix client", moneyCell(currentProject.sold), moneyCell(perPerson(currentProject.sold))],
            ["Dépenses prévues", moneyCell(total.planned), moneyCell(perPerson(total.planned))],
            ["Bénéfice prévu", moneyCell(total.profit), moneyCell(perPerson(total.profit))],
            ["Déjà reçu client", moneyCell(currentProject.collected), ""],
            ["Reste à recevoir", moneyCell(total.remainingToCollect), ""],
            ["Déjà payé fournisseurs", moneyCell(total.paid), ""],
            ["Reste à payer fournisseurs", moneyCell(total.remainingToPay), ""]
          ])}
        </table>

        <h2>Encaissements client</h2>
        <table>
          <tr><th>Nom</th><th>Montant</th><th>Date</th></tr>
          ${tableRows((currentProject.clientPayments || []).map((payment) => [payment.label, moneyCell(payment.amount), payment.date || ""]))}
        </table>

        <h2>Dépenses détaillées</h2>
        <table>
          <tr><th>Catégorie</th><th>Ligne</th><th>Prévu</th><th>Payé</th><th>Reste</th><th>Prévu / participant</th></tr>
          ${tableRows(expenseRows)}
        </table>

        <h2>Échéances à suivre</h2>
        <table>
          <tr><th>Nom</th><th>Type</th><th>Montant</th><th>Date</th></tr>
          ${tableRows(currentProject.payments.map((payment) => [payment.label, payment.direction === "in" ? "À encaisser" : "À payer", moneyCell(payment.amount), payment.date]))}
        </table>
      </body>
    </html>
  `;
  const blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${currentProject.name.replace(/[^a-z0-9]+/gi, "_").toLowerCase()}_previsionnel.xls`;
  link.click();
  URL.revokeObjectURL(url);
}

function renderBudgetRow(item, index) {
  const percent = item.planned ? Math.min(Math.round((item.paid / item.planned) * 100), 100) : 0;
  const rest = Math.max(item.planned - item.paid, 0);
  return `
    <button class="budget-row" data-budget-index="${index}" type="button">
      <div class="budget-icon">${item.icon}</div>
      <div class="budget-content">
        <strong>${item.label}</strong>
        <p class="budget-meta">${item.category} · payé ${percent}% · toucher pour détails</p>
        <div class="progress"><i style="width:${percent}%"></i></div>
      </div>
      <div class="budget-amount">
        <strong>${money.format(item.planned)}</strong>
        <span>reste ${money.format(rest)}</span>
      </div>
    </button>
  `;
}

function openLineDetail(index) {
  currentBudgetIndex = index;
  const item = currentProject.budget[index];
  syncBudgetPaid(item);
  const percent = item.planned ? Math.min(Math.round((item.paid / item.planned) * 100), 100) : 0;
  const rest = Math.max(item.planned - item.paid, 0);
  const details = item.details?.length ? item.details : [
    { name: item.label, info: "Ajout manuel", planned: item.planned, paid: item.paid }
  ];
  details.forEach(ensureDetailPayments);

  document.querySelector("#lineCategory").textContent = item.category;
  document.querySelector("#lineTitle").textContent = item.label;
  document.querySelector("#lineSummary").innerHTML = `
    <article class="summary-main">
      <p>Total prévu</p>
      <strong>${money.format(item.planned)}</strong>
    </article>
    <article>
      <p>Déjà payé dessus</p>
      <strong>${money.format(item.paid)}</strong>
    </article>
    <article>
      <p>Encore à payer</p>
      <strong>${money.format(rest)}</strong>
    </article>
  `;
  document.querySelector("#lineDetails").innerHTML = `
    <div class="progress detail-progress"><i style="width:${percent}%"></i></div>
    ${details.map((detail, detailIndex) => {
      const paid = detailPaid(detail);
      const detailRest = Math.max(detail.planned - paid, 0);
      const paymentText = Array.isArray(detail.payments) && detail.payments.length
        ? detail.payments.map((payment) => money.format(payment.amount)).join(" + ")
        : "Aucun paiement";
      return `
        <button class="detail-row" data-detail-index="${detailIndex}" type="button">
          <div>
            <strong>${detail.name}</strong>
            <p>${detail.info} · toucher pour ajouter un paiement</p>
            <span class="payment-mini">${paymentText}</span>
          </div>
          <div class="detail-money-block">
            <strong>${money.format(detail.planned)}</strong>
            <span>Déjà payé : ${money.format(paid)}</span>
            <span>Reste : ${money.format(detailRest)}</span>
          </div>
        </button>
      `;
    }).join("")}
  `;

  document.querySelectorAll("[data-detail-index]").forEach((row) => {
    row.addEventListener("click", () => openEditDetail(Number(row.dataset.detailIndex)));
  });

  sheetBackdrop.classList.add("is-open");
  detailSheet.classList.add("is-open");
}

function openDetail() {
  closeProjectMenu();
  renderDetail();
  homeScreen.classList.remove("is-active");
  detailScreen.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openHome() {
  closeProjectMenu();
  detailScreen.classList.remove("is-active");
  homeScreen.classList.add("is-active");
  renderHome();
}

function showTab(tabName) {
  document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-selected"));
  document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("is-active"));
  document.querySelector(`[data-tab="${tabName}"]`)?.classList.add("is-selected");
  document.querySelector(`#${tabName}Panel`)?.classList.add("is-active");
}

function openSheet(mode = "budget") {
  closeProjectMenu();
  formMode = mode;
  currentDetailIndex = null;
  if (mode !== "edit-schedule") currentScheduleIndex = null;
  resetEmployeePricing();
  const isDetailMode = mode === "detail";
  const isEditMode = mode === "edit-detail";
  const isScheduleMode = mode === "schedule" || mode === "edit-schedule";
  const currentItem = currentBudgetIndex !== null ? currentProject.budget[currentBudgetIndex] : null;
  document.querySelector("#paymentHistory").classList.add("is-hidden");
  document.querySelector("#paymentHistory").innerHTML = "";
  document.querySelector("#deleteDetailBtn").classList.add("is-hidden");
  document.querySelector("#deleteDetailBtn").textContent = "Supprimer cette ligne";
  document.querySelector("#quickTitle").textContent = isEditMode
    ? "Ajouter un paiement"
    : isScheduleMode
      ? (mode === "edit-schedule" ? "Modifier l'échéance" : "Ajouter une échéance")
      : isDetailMode
        ? "Ajouter dans cette catégorie"
        : "Ajouter une ligne";
  document.querySelector("#submitQuickForm").textContent = isEditMode ? "Ajouter le paiement" : (isScheduleMode ? "Enregistrer" : "Ajouter");
  document.querySelector("#labelField").firstChild.textContent = isDetailMode ? "Nom du détail" : "Nom de la dépense ou de l'encaissement";
  if (isEditMode) {
    document.querySelector("#labelField").firstChild.textContent = "Nom";
  }
  if (isScheduleMode) {
    document.querySelector("#labelField").firstChild.textContent = "Nom de l'échéance";
  }
  document.querySelector("#amountLabel").firstChild.textContent = isScheduleMode ? "Montant de l'échéance" : "Prix prévu";
  document.querySelector("#paidLabel").firstChild.textContent = isEditMode ? "Nouveau paiement" : "Déjà payé";
  document.querySelector("#paidLabel").classList.toggle("is-hidden", isScheduleMode);
  document.querySelector("#kindField").classList.toggle("is-hidden", isDetailMode || isEditMode);
  document.querySelector("#dueDateField").classList.toggle("is-hidden", !isScheduleMode);
  document.querySelector("#categoryField").classList.toggle("is-hidden", isDetailMode || isEditMode || isScheduleMode);
  if (isDetailMode && isEmployeeItem(currentItem)) {
    setupEmployeePricing();
  }
  renderDetail();
  sheetBackdrop.classList.add("is-open");
  bottomSheet.classList.add("is-open");
}

function openScheduleSheet(index = null) {
  closeProjectMenu();
  currentScheduleIndex = index;
  openSheet(index === null ? "schedule" : "edit-schedule");
  const payment = index === null ? {
    label: "",
    amount: "",
    date: shortDate(isoDate(new Date())),
    direction: "out"
  } : currentProject.payments[index];
  document.querySelector('[name="label"]').value = payment.label;
  document.querySelector('[name="amount"]').value = payment.amount;
  document.querySelector('[name="kind"]').value = payment.direction === "in" ? "income" : "expense";
  document.querySelector('[name="dueDate"]').value = parseDisplayDate(payment.date);
  if (index !== null) {
    document.querySelector("#deleteDetailBtn").textContent = "Supprimer cette échéance";
    document.querySelector("#deleteDetailBtn").classList.remove("is-hidden");
  }
}

function openClientSheet() {
  closeProjectMenu();
  const clientPayments = ensureClientPayments(currentProject);
  const received = currentProject.collected;
  const rest = Math.max(currentProject.sold - received, 0);
  document.querySelector('[name="clientTotal"]').value = currentProject.sold;
  document.querySelector('[name="projectPeople"]').value = currentProject.people;
  document.querySelector('[name="newClientPayment"]').value = "";
  document.querySelector('[name="newClientPaymentDate"]').value = isoDate(new Date());
  document.querySelector("#clientPaymentHistory").innerHTML = `
    <p>Encaissements déjà reçus</p>
    ${clientPayments.length ? clientPayments.map((payment, index) => `
      <div class="payment-edit-row">
        <span>${payment.label || `Encaissement ${index + 1}`}</span>
        <label class="payment-input-wrap">
          <span>✎</span>
          <input type="number" min="0" step="0.01" inputmode="decimal" value="${payment.amount}" data-client-payment-index="${index}" />
        </label>
        <button type="button" data-delete-client-payment="${index}" aria-label="Supprimer l'encaissement">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5"/><path d="M14 11v5"/></svg>
        </button>
      </div>
    `).join("") : "<em>Aucun encaissement pour l'instant</em>"}
    <footer id="clientPaymentTotals">
      <span>Total reçu</span>
      <strong>${money.format(received)}</strong>
      <span>Reste</span>
      <strong>${money.format(rest)}</strong>
    </footer>
  `;
  document.querySelectorAll("[data-client-payment-index]").forEach((input) => {
    input.addEventListener("input", () => updateClientPayment(Number(input.dataset.clientPaymentIndex), Number(input.value || 0)));
  });
  document.querySelectorAll("[data-delete-client-payment]").forEach((button) => {
    button.addEventListener("click", () => deleteClientPayment(Number(button.dataset.deleteClientPayment)));
  });
  sheetBackdrop.classList.add("is-open");
  clientSheet.classList.add("is-open");
}

function refreshClientTotals() {
  ensureClientPayments(currentProject);
  const rest = Math.max(currentProject.sold - currentProject.collected, 0);
  const totalsNode = document.querySelector("#clientPaymentTotals");
  if (totalsNode) {
    totalsNode.innerHTML = `
      <span>Total reçu</span>
      <strong>${money.format(currentProject.collected)}</strong>
      <span>Reste</span>
      <strong>${money.format(rest)}</strong>
    `;
  }
}

function updateClientPayment(index, value) {
  ensureClientPayments(currentProject);
  currentProject.clientPayments[index].amount = Math.max(value, 0);
  refreshClientTotals();
  scheduleCloudSave();
}

function deleteClientPayment(index) {
  ensureClientPayments(currentProject);
  currentProject.clientPayments.splice(index, 1);
  openClientSheet();
  scheduleCloudSave();
}

function openEditDetail(detailIndex) {
  currentDetailIndex = detailIndex;
  formMode = "edit-detail";
  const item = currentProject.budget[currentBudgetIndex];
  const detail = item.details[detailIndex];
  resetEmployeePricing();
  const isEmployeeDetail = isEmployeeItem(item);
  const existingPayments = ensureDetailPayments(detail);
  const paid = detailPaid(detail);
  const rest = Math.max(detail.planned - paid, 0);
  detailSheet.classList.remove("is-open");
  document.querySelector("#quickTitle").textContent = isEmployeeDetail ? "Modifier l'employé" : "Ajouter un paiement";
  document.querySelector("#submitQuickForm").textContent = isEmployeeDetail ? "Enregistrer" : "Ajouter le paiement";
  document.querySelector("#deleteDetailBtn").classList.remove("is-hidden");
  document.querySelector("#labelField").firstChild.textContent = "Nom";
  document.querySelector("#amountLabel").firstChild.textContent = "Prix prévu";
  document.querySelector("#paidLabel").firstChild.textContent = "Nouveau paiement";
  document.querySelector("#kindField").classList.add("is-hidden");
  document.querySelector("#categoryField").classList.add("is-hidden");
  document.querySelector('[name="label"]').value = detail.name;
  document.querySelector('[name="amount"]').value = detail.planned;
  document.querySelector('[name="paid"]').value = "";
  document.querySelector('[name="paid"]').placeholder = rest ? `reste ${rest}` : "soldé";
  if (isEmployeeDetail) {
    employeePricing.classList.remove("is-hidden");
    const mode = detail.priceMode || "global";
    document.querySelector(`[name="priceMode"][value="${mode}"]`).checked = true;
    document.querySelector('[name="dayRate"]').value = detail.dayRate || "";
    document.querySelector('[name="employeeCount"]').value = detail.employeeCount || 1;
    if (mode === "day") {
      rangeStart = detail.startDate || isoDate(new Date());
      rangeEnd = detail.endDate || rangeStart;
      checkedWorkDays = new Set(detail.workDays?.length ? detail.workDays : selectedDateRange());
      calendarCursor = new Date(`${rangeStart}T12:00:00`);
      calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth(), 1);
    }
    updateEmployeeMode();
  }
  document.querySelector("#paymentHistory").classList.remove("is-hidden");
  document.querySelector("#paymentHistory").innerHTML = `
    <p>Paiements déjà saisis</p>
    ${existingPayments.length ? existingPayments.map((payment, index) => `
      <div class="payment-edit-row">
        <span>Virement ${index + 1}</span>
        <label class="payment-input-wrap">
          <span>✎</span>
          <input type="number" min="0" step="0.01" inputmode="decimal" value="${payment.amount}" data-payment-index="${index}" />
        </label>
        <button type="button" data-delete-payment="${index}" aria-label="Supprimer le virement">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5"/><path d="M14 11v5"/></svg>
        </button>
      </div>
    `).join("") : "<em>Aucun paiement pour l'instant</em>"}
    <footer id="paymentHistoryTotals">
      <span>Total payé</span>
      <strong>${money.format(paid)}</strong>
      <span>Reste</span>
      <strong>${money.format(rest)}</strong>
    </footer>
  `;
  document.querySelectorAll("[data-payment-index]").forEach((input) => {
    input.addEventListener("input", () => updateExistingPayment(Number(input.dataset.paymentIndex), Number(input.value || 0)));
  });
  document.querySelectorAll("[data-delete-payment]").forEach((button) => {
    button.addEventListener("click", () => deleteExistingPayment(Number(button.dataset.deletePayment)));
  });
  sheetBackdrop.classList.add("is-open");
  bottomSheet.classList.add("is-open");
}

function refreshPaymentHistoryTotals() {
  if (currentBudgetIndex === null || currentDetailIndex === null) return;
  const item = currentProject.budget[currentBudgetIndex];
  const detail = item.details[currentDetailIndex];
  const paid = detailPaid(detail);
  const rest = Math.max(detail.planned - paid, 0);
  const totalsNode = document.querySelector("#paymentHistoryTotals");
  if (totalsNode) {
    totalsNode.innerHTML = `
      <span>Total payé</span>
      <strong>${money.format(paid)}</strong>
      <span>Reste</span>
      <strong>${money.format(rest)}</strong>
    `;
  }
}

function updateExistingPayment(paymentIndex, value) {
  if (currentBudgetIndex === null || currentDetailIndex === null) return;
  const item = currentProject.budget[currentBudgetIndex];
  const detail = item.details[currentDetailIndex];
  ensureDetailPayments(detail);
  detail.payments[paymentIndex].amount = Math.max(value, 0);
  detail.paid = detailPaid(detail);
  syncBudgetPaid(item);
  refreshPaymentHistoryTotals();
  scheduleCloudSave();
}

function deleteExistingPayment(paymentIndex) {
  if (currentBudgetIndex === null || currentDetailIndex === null) return;
  const item = currentProject.budget[currentBudgetIndex];
  const detail = item.details[currentDetailIndex];
  ensureDetailPayments(detail);
  detail.payments.splice(paymentIndex, 1);
  detail.paid = detailPaid(detail);
  syncBudgetPaid(item);
  openEditDetail(currentDetailIndex);
  scheduleCloudSave();
}

function closeSheet() {
  sheetBackdrop.classList.remove("is-open");
  bottomSheet.classList.remove("is-open");
  detailSheet.classList.remove("is-open");
  clientSheet.classList.remove("is-open");
  projectSheet.classList.remove("is-open");
  document.querySelector("#quickForm").reset();
  resetEmployeePricing();
  projectFormMode = "create";
}

function openProjectSheet() {
  closeProjectMenu();
  projectFormMode = "create";
  document.querySelector("#projectForm").reset();
  document.querySelector("#projectSheetEyebrow").textContent = "Nouveau";
  document.querySelector("#projectSheetTitle").textContent = "Créer un projet";
  document.querySelector("#projectSubmitBtn").textContent = "Créer";
  document.querySelector('[name="projectStatus"]').value = "active";
  document.querySelector('[name="projectDate"]').value = isoDate(new Date());
  sheetBackdrop.classList.add("is-open");
  projectSheet.classList.add("is-open");
}

function openEditProjectSheet() {
  closeProjectMenu();
  projectFormMode = "edit";
  const form = document.querySelector("#projectForm");
  form.reset();
  document.querySelector("#projectSheetEyebrow").textContent = "Projet";
  document.querySelector("#projectSheetTitle").textContent = "Modifier le projet";
  document.querySelector("#projectSubmitBtn").textContent = "Enregistrer";
  document.querySelector('[name="projectType"]').value = currentProject.type;
  document.querySelector('[name="projectStatus"]').value = currentProject.status || "active";
  document.querySelector('[name="projectName"]').value = currentProject.name;
  document.querySelector('[name="projectDate"]').value = parseDisplayDate(currentProject.date);
  document.querySelector('[name="projectPeopleNew"]').value = currentProject.people || 0;
  document.querySelector('[name="projectSold"]').value = currentProject.sold || 0;
  sheetBackdrop.classList.add("is-open");
  projectSheet.classList.add("is-open");
}

function confirmProjectChanges(nextProject) {
  const changes = [];
  if (currentProject.type !== nextProject.type) changes.push(`Type : ${currentProject.type} → ${nextProject.type}`);
  if ((currentProject.status || "active") !== nextProject.status) changes.push(`Statut : ${projectStatusLabel(currentProject.status)} → ${projectStatusLabel(nextProject.status)}`);
  if (currentProject.name !== nextProject.name) changes.push(`Nom : ${currentProject.name} → ${nextProject.name}`);
  if (currentProject.date !== nextProject.date) changes.push(`Date : ${currentProject.date} → ${nextProject.date}`);
  if (Number(currentProject.people || 0) !== nextProject.people) changes.push(`Participants : ${currentProject.people || 0} → ${nextProject.people}`);
  if (Number(currentProject.sold || 0) !== nextProject.sold) changes.push(`Prix client : ${money.format(currentProject.sold || 0)} → ${money.format(nextProject.sold)}`);
  if (!changes.length) return { hasChanges: false, confirmed: true };
  return {
    hasChanges: true,
    confirmed: window.confirm(`Confirmer les modifications ?\n\n${changes.join("\n")}`)
  };
}

function applyProjectChanges(nextProject) {
  currentProject.type = nextProject.type;
  currentProject.status = nextProject.status;
  currentProject.name = nextProject.name;
  currentProject.date = nextProject.date;
  currentProject.people = nextProject.people;
  currentProject.sold = nextProject.sold;
  ensureClientPayments(currentProject);
  closeSheet();
  renderHome();
  renderDetail();
  scheduleCloudSave();
}

function toggleProjectMenu() {
  const isOpen = projectMenu.classList.toggle("is-open");
  projectMenuBtn.setAttribute("aria-expanded", String(isOpen));
}

function closeProjectMenu() {
  projectMenu.classList.remove("is-open");
  projectMenuBtn.setAttribute("aria-expanded", "false");
}

function handleProjectMenuAction(action) {
  closeProjectMenu();
  if (action === "edit") {
    openEditProjectSheet();
  } else if (action === "client") {
    openClientSheet();
  } else if (action === "expense") {
    showTab("budget");
    openSheet("budget");
  } else if (action === "schedule") {
    openScheduleSheet(null);
  } else if (action === "note") {
    showTab("notes");
    addNote();
  } else if (action === "export") {
    exportCurrentProject();
  } else if (action === "new") {
    openProjectSheet();
  } else if (action === "home") {
    openHome();
  }
}

document.querySelector("#backBtn").addEventListener("click", openHome);
projectMenuBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleProjectMenu();
});
projectMenu.querySelectorAll("[data-menu-action]").forEach((button) => {
  button.addEventListener("click", () => handleProjectMenuAction(button.dataset.menuAction));
});
document.querySelector("#floatingAdd").addEventListener("click", () => openSheet());
document.querySelector("#addForgottenBtn").addEventListener("click", () => openSheet());
document.querySelectorAll(".addLineBtn").forEach((button) => button.addEventListener("click", () => openSheet()));
document.querySelector("#newProjectBtn").addEventListener("click", openProjectSheet);
document.querySelector("#closeSheet").addEventListener("click", closeSheet);
document.querySelector("#closeDetailSheet").addEventListener("click", closeSheet);
document.querySelector("#closeClientSheet").addEventListener("click", closeSheet);
document.querySelector("#closeClientSheetBottom").addEventListener("click", closeSheet);
document.querySelector("#closeProjectSheet").addEventListener("click", closeSheet);
document.querySelector("#closeProjectSheetBottom").addEventListener("click", closeSheet);
document.querySelector("#deleteDetailBtn").addEventListener("click", () => {
  if (formMode === "edit-schedule" && currentScheduleIndex !== null) {
    const confirmed = window.confirm(`Supprimer "${currentProject.payments[currentScheduleIndex].label}" ?`);
    if (!confirmed) return;
    currentProject.payments.splice(currentScheduleIndex, 1);
    currentScheduleIndex = null;
    closeSheet();
    renderDetail();
    scheduleCloudSave();
    return;
  }
  if (currentBudgetIndex === null || currentDetailIndex === null) return;
  const item = currentProject.budget[currentBudgetIndex];
  const detail = item.details[currentDetailIndex];
  const confirmed = window.confirm(`Supprimer "${detail.name}" ?`);
  if (!confirmed) return;
  item.details.splice(currentDetailIndex, 1);
  item.planned = item.details.reduce((sum, entry) => sum + entry.planned, 0);
  syncBudgetPaid(item);
  currentDetailIndex = null;
  closeSheet();
  renderDetail();
  openLineDetail(currentBudgetIndex);
  scheduleCloudSave();
});
document.querySelector("#addDetailBtn").addEventListener("click", () => {
  detailSheet.classList.remove("is-open");
  openSheet("detail");
});
document.querySelector("#deleteCategoryBtn").addEventListener("click", () => {
  if (currentBudgetIndex === null) return;
  const item = currentProject.budget[currentBudgetIndex];
  const confirmed = window.confirm(`Supprimer toute la catégorie "${item.label}" ?`);
  if (!confirmed) return;
  currentProject.budget.splice(currentBudgetIndex, 1);
  currentBudgetIndex = null;
  closeSheet();
  renderDetail();
  document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-selected"));
  document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("is-active"));
  document.querySelector('[data-tab="budget"]').classList.add("is-selected");
  document.querySelector("#budgetPanel").classList.add("is-active");
  scheduleCloudSave();
});
sheetBackdrop.addEventListener("click", closeSheet);
document.addEventListener("click", (event) => {
  if (!projectMenu.classList.contains("is-open")) return;
  if (projectMenu.contains(event.target) || projectMenuBtn.contains(event.target)) return;
  closeProjectMenu();
});
window.addEventListener("beforeunload", () => {
  if (!isLoadingCloudData) saveProjectsToLocal(lastLocalUpdatedAt || new Date().toISOString());
});

document.querySelectorAll('[name="priceMode"]').forEach((input) => {
  input.addEventListener("change", updateEmployeeMode);
});
document.querySelector('[name="dayRate"]').addEventListener("input", updateEmployeeTotal);
document.querySelector('[name="employeeCount"]').addEventListener("input", updateEmployeeTotal);
document.querySelector("#prevMonth").addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
  renderRangePicker();
});
document.querySelector("#nextMonth").addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
  renderRangePicker();
});
workCalendar.addEventListener("change", updateEmployeeTotal);

document.querySelector("#clientForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  currentProject.sold = Number(form.get("clientTotal") || 0);
  currentProject.people = Number(form.get("projectPeople") || 0);
  const newPayment = Number(form.get("newClientPayment") || 0);
  const newDate = form.get("newClientPaymentDate")?.toString();
  ensureClientPayments(currentProject);
  if (newPayment > 0) {
    currentProject.clientPayments.push({
      label: `Encaissement ${currentProject.clientPayments.length + 1}`,
      amount: newPayment,
      date: shortDate(newDate)
    });
  }
  ensureClientPayments(currentProject);
  closeSheet();
  renderDetail();
  scheduleCloudSave();
});

document.querySelector("#projectForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const type = form.get("projectType").toString();
  const status = form.get("projectStatus").toString();
  const name = form.get("projectName").toString().trim();
  const dateValue = form.get("projectDate").toString();
  const people = Number(form.get("projectPeopleNew") || 0);
  const sold = Number(form.get("projectSold") || 0);
  if (!name) return;

  if (projectFormMode === "edit") {
    const nextProject = {
      type,
      status,
      name,
      date: shortDate(dateValue),
      people,
      sold
    };
    const confirmation = confirmProjectChanges(nextProject);
    if (!confirmation.confirmed) return;
    if (confirmation.hasChanges) {
      applyProjectChanges(nextProject);
    } else {
      closeSheet();
    }
    return;
  }

  const project = {
    id: makeProjectId(name),
    status,
    type,
    name,
    date: shortDate(dateValue),
    people,
    sold,
    collected: 0,
    clientPayments: [],
    notes: [],
    budget: starterBudget(type),
    payments: []
  };

  projects.unshift(project);
  currentProject = project;
  closeSheet();
  renderHome();
  openDetail();
  scheduleCloudSave();
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    closeProjectMenu();
    showTab(tab.dataset.tab);
  });
});

document.querySelector("#quickForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const shouldReopenDetail = formMode === "detail" || formMode === "edit-detail";
  const detailIndexToReopen = currentBudgetIndex;
  const form = new FormData(event.currentTarget);
  const label = form.get("label").toString().trim();
  const amount = Number(form.get("amount"));
  const paid = Math.min(Number(form.get("paid") || 0), amount);
  const kind = form.get("kind");
  const category = form.get("category").toString();
  const dueDate = form.get("dueDate")?.toString();
  const priceMode = form.get("priceMode");
  const selectedDays = form.getAll("workDay");
  const dayRate = Number(form.get("dayRate") || 0);
  const employeeCount = Math.max(Number(form.get("employeeCount") || 1), 1);
  const startDate = form.get("startDate")?.toString();
  const endDate = form.get("endDate")?.toString();
  let detailInfo = "Ajouté manuellement";

  if (formMode === "schedule" || formMode === "edit-schedule") {
    const schedule = {
      label,
      amount,
      date: shortDate(dueDate),
      status: "open",
      direction: kind === "income" ? "in" : "out"
    };
    if (formMode === "edit-schedule" && currentScheduleIndex !== null) {
      currentProject.payments[currentScheduleIndex] = schedule;
    } else {
      currentProject.payments.unshift(schedule);
    }
  } else if (formMode === "detail" && currentBudgetIndex !== null) {
    const item = currentProject.budget[currentBudgetIndex];
    if (isEmployeeItem(item)) {
      detailInfo = employeeInfo(priceMode, startDate, endDate, selectedDays, dayRate, employeeCount);
    }
    item.details = item.details || [];
    item.details.push({
      name: label,
      info: detailInfo,
      planned: amount,
      paid,
      priceMode,
      employeeCount: isEmployeeItem(item) ? employeeCount : null,
      dayRate: priceMode === "day" ? dayRate : null,
      startDate: priceMode === "day" ? startDate : null,
      endDate: priceMode === "day" ? endDate : null,
      workDays: priceMode === "day" ? selectedDays : [],
      payments: paid ? [{ label: "Paiement 1", amount: paid }] : []
    });
    item.planned += amount;
    item.paid += paid;
    currentProject.payments.unshift({
      label,
      amount: Math.max(amount - paid, 0),
      date: "À fixer",
      status: "open",
      direction: "out"
    });
  } else if (formMode === "edit-detail" && currentBudgetIndex !== null && currentDetailIndex !== null) {
    const item = currentProject.budget[currentBudgetIndex];
    const detail = item.details[currentDetailIndex];
    const isEmployeeDetail = isEmployeeItem(item);
    if (isEmployeeDetail) {
      detailInfo = employeeInfo(priceMode, startDate, endDate, selectedDays, dayRate, employeeCount);
    }
    const oldPlanned = detail.planned;
    const oldPaid = detail.paid;
    ensureDetailPayments(detail);
    const currentPaid = detailPaid(detail);
    const newPayment = Math.min(Number(form.get("paid") || 0), Math.max(amount - currentPaid, 0));
    detail.name = label;
    detail.planned = amount;
    if (isEmployeeDetail) {
      detail.info = detailInfo;
      detail.priceMode = priceMode;
      detail.employeeCount = employeeCount;
      detail.dayRate = priceMode === "day" ? dayRate : null;
      detail.startDate = priceMode === "day" ? startDate : null;
      detail.endDate = priceMode === "day" ? endDate : null;
      detail.workDays = priceMode === "day" ? selectedDays : [];
    }
    if (newPayment > 0) {
      detail.payments.push({
        label: `Virement ${detail.payments.length + 1}`,
        amount: newPayment
      });
    }
    detail.paid = detailPaid(detail);
    item.planned += amount - oldPlanned;
    item.paid += detail.paid - oldPaid;
  } else if (kind === "income") {
    currentProject.sold += amount;
    currentProject.collected += paid;
    currentProject.payments.unshift({
      label,
      amount: Math.max(amount - paid, 0),
      date: "À fixer",
      status: "open",
      direction: "in"
    });
  } else {
    currentProject.budget.push({
      label,
      category,
      planned: amount,
      paid,
      icon: label.charAt(0).toUpperCase(),
      details: [
        { name: label, info: "Ajouté manuellement", planned: amount, paid, payments: paid ? [{ label: "Paiement 1", amount: paid }] : [] }
      ]
    });
    currentProject.payments.unshift({
      label,
      amount: Math.max(amount - paid, 0),
      date: "À fixer",
      status: "open",
      direction: "out"
    });
  }

  closeSheet();
  renderDetail();
  if (shouldReopenDetail && detailIndexToReopen !== null) {
    openLineDetail(detailIndexToReopen);
  }
  scheduleCloudSave();
});

document.querySelector("#addNoteBtn").addEventListener("click", addNote);

async function initApp() {
  await loadProjectsFromCloud();
  renderHome();
}

initApp();
