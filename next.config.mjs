/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.GITHUB_ACTION ? "export" : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "staging.freethecitizens.org",
      },
      {
        hostname: "storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
