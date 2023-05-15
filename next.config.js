/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    config.experiments = {
      asyncWebAssembly: true,
    };

    return config;
  },
};

module.exports = nextConfig;
