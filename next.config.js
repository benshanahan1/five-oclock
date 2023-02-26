const debug = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // github pages defaults to /five-oclock/ subdir (name of repo) which results in 404s for assets, override this in prod
  assetPrefix: !debug ? "https://fiveoclock.app/" : undefined,
};

module.exports = nextConfig;
