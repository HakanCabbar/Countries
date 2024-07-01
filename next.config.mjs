/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/country-list',
        permanent: true
      }
    ]
  }
}

export default nextConfig
