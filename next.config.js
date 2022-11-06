/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '/deltechmun',
  },
  basePath:'/deltechmun',
  assetPrefix:'/deltechmun'
}

module.exports = nextConfig