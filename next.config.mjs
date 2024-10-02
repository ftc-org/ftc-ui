/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "staging.freethecitizens.org",
      },
      {
        hostname: "storage.googleapis.com",
      },
      {
        hostname: "source.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
