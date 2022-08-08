/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   rewrites: async () => [
      {
         source: "/public/info/privacy.policy.html",
         destination: "/pages/api/privacy.policy.js",
      },
   ],
};

module.exports = nextConfig;
