/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  distDir: "out",
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
