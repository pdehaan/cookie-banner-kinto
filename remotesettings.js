#!/usr/bin/env node

import { getRSRecords, getDomains, pretty } from "./lib.js";

const rules = await getRSRecords();
const domains = getDomains(rules.data);
console.log(pretty(domains));
