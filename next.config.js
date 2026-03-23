/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return {
      // לפני קבצי public — מבטיח ש-Mailjet יקבל 200 + text/plain גם אם יש בעיה בפריסת static
      beforeFiles: [
        {
          source: '/1bafaf7b2e84a626ea96aec089273714.txt',
          destination: '/api/mailjet-domain-verify',
        },
      ],
    }
  },
}

