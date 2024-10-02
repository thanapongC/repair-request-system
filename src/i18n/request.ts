// import {notFound} from 'next/navigation';
// import {getRequestConfig} from 'next-intl/server';
// import {routing} from './routing';
 
// // Can be imported from a shared config
// const locales = ['en', 'th'];
 
// export default getRequestConfig(async ({locale}) => {
//   // Validate that the incoming `locale` parameter is valid
//   if (!locales.includes(locale as any)) notFound();
 
//   return {
//     messages: (await import(`../../messages/${locale}.json`)).default
//   };
// });

import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});