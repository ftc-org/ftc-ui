/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        hostname: "staging.freethecitizens.org",
      },
    ],
  },
};

export default nextConfig;
