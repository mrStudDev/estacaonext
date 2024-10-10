/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '8000',  // Porta onde o backend está rodando
          pathname: '/media/**',  // Ajuste para o path das suas imagens no Django
        },
      ],
    },
  };
  
  export default nextConfig;
  