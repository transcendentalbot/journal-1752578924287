/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_TABLE_NAME: process.env.DATABASE_TABLE_NAME,
    AWS_REGION: process.env.AWS_REGION || 'us-east-1',
  },
}

module.exports = nextConfig