// app/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'th'], // Add your supported locales here
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'], // Adjust this matcher if needed
};
