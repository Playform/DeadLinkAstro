import { deepmerge as e } from "deepmerge-ts";
import n from "./options/index.js";
var p=(r={})=>{var t;const o=e(n(),r);return o.url=(t=o.url)!=null&&t.endsWith("/")?o.url:`${o.url}/`,{name:"astro-dead-urls",hooks:{"astro:build:done":async()=>{}}}};export { p as default };

