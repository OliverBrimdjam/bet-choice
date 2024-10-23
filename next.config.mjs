/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.jornalopcao.com.br"
            }, 
            {
                protocol: "https",
                hostname: "www.israelhayom.com"
            }, 
            {
                protocol: "https",
                hostname: "thehill.com"
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org"
            }
        ]
    }
};

export default nextConfig;
