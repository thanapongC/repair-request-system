// === old settings === 
// /** @type {import('next').NextConfig} */
// const nextConfig = {
// }

// module.exports = nextConfig

const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);


