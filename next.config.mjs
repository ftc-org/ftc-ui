/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "staging.freethecitizens.org",
      },
    ],
  },
};

export default nextConfig;
