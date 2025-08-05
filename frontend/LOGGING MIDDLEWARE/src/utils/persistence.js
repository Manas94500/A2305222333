
const STORAGE_KEY = 'affordmed-url-shortener-data';

function load() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { mappings: [] };
}

function save(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getAllMappings() {
  return load().mappings;
}

export function getMapping(shortcode) {
  const { mappings } = load();
  return mappings.find(m => m.shortcode === shortcode) || null;
}

export function addMapping(mapping) {
  const state = load();
  state.mappings.push(mapping);
  save(state);
}

export function updateMapping(shortcode, updater) {
  const state = load();
  const idx = state.mappings.findIndex(m => m.shortcode === shortcode);
  if (idx !== -1) {
    state.mappings[idx] = updater(state.mappings[idx]);
    save(state);
  }
}

export function incrementClick(shortcode, clickInfo) {
  updateMapping(shortcode, (mapping) => {
    if (!mapping.clickAnalytics) mapping.clickAnalytics = [];
    mapping.clickAnalytics.push(clickInfo);
    return mapping;
  });
}

export function getAllShortcodes() {
  return new Set(load().mappings.map(m => m.shortcode));
}
