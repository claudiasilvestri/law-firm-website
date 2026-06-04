import fs from "fs";
import { articles } from "../src/data/articles.js";

const baseUrl = "https://www.federicadalessandroavvocato.it";

const staticPages = [
  "",
  "/about",
  "/services",
  "/contact",
  "/approfondimenti",
];

const staticUrls = staticPages.map(
  (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
);

const articleUrls = articles.map(
  (article) => `
  <url>
    <loc>${baseUrl}/approfondimenti/${article.id}</loc>
    <priority>0.5</priority>
  </url>`
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...articleUrls].join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);

console.log(`Sitemap generata con ${articles.length} articoli`);