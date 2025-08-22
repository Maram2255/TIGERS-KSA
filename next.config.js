/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [{ loader: "url-loader" }]
    });
    return config;
  }
};

module.exports = nextConfig;
