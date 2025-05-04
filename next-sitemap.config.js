/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://frankcamp.tech", // ← your live domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/private"], // optional
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
