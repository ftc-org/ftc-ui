/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
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
