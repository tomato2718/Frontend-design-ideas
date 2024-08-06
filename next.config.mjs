/** @type {import('next').NextConfig} */
const nextConfig = process.env.DEV_MODE
  ? {}
  : {
      output: "export",
      basePath: "/Frontend-design-ideas",
    };

export default nextConfig;
