/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/countries-list',
        permanent: true // Kalıcı bir yönlendirme (HTTP 301) yapmak için true, geçici bir yönlendirme (HTTP 302) yapmak için false
      }
    ]
  }
}

export default nextConfig
