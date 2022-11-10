#!/usr/bin/env node

import { getRSRecords, getDomains, pretty } from "./lib.mjs";

const rules = await getRSRecords();
const domains = getDomains(rules.data);
console.log(pretty(domains));
