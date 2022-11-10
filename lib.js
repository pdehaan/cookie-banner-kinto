import axios from "axios";

async function _fetchRules(url) {
  const { data } = await axios.get(url);
  return data;
}

export function getDomains(rules = []) {
  const domains = rules.map((r) => r.domain).sort();
  return new Set(domains);
}

export async function getGHRecords() {
  const GH_URL = `https://raw.githubusercontent.com/mozilla/cookie-banner-rules-list/main/cookie-banner-rules-list.json`;
  return _fetchRules(GH_URL);
}

export async function getRSRecords() {
  const COLLECTION = "cookie-banner-rules-list";
  const RS_URL = `https://firefox.settings.services.mozilla.com/v1/buckets/main/collections/${COLLECTION}/records`;
  return _fetchRules(RS_URL);
}

export function pretty(arr = []) {
  const indent = ["true", "1"].includes(process.env.PRETTY) ? 2 : 0;
  return JSON.stringify([...arr], null, indent);
}
