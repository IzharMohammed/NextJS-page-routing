/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
},
images : {
  remotePatterns : [
    {
      protocol : 'https',
      hostname : '*.google.com'
    //  pathname: '/wordpress/wp-content/uploads/**', 
    }
  ]
}
};

export default nextConfig;
