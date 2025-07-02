/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Next.js 15 specific optimizations
  experimental: {
    // Enable React 19 features
    reactCompiler: false, // Set to true if you want to use React Compiler
    // Optimize bundle size
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Improved performance settings
  poweredByHeader: false,
  compress: true,
}

export default nextConfig
