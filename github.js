#!/usr/bin/env node

import { getGHRecords, getDomains, pretty } from "./lib.js";

const rules = await getGHRecords();
const domains = getDomains(rules.data);
console.log(pretty(domains));
