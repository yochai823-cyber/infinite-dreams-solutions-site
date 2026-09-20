/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/1bafaf7b2e84a626ea96aec089273714.txt',
          destination: '/api/mailjet-domain-verify',
        },
      ],
    }
  },
}
