

import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { DatabaseProvider } from "@/contexts/dbContext";
import { Prompt } from "next/font/google";

// import mutiMassages next-intl
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const dynamic = 'force-dynamic';

const prompt = Prompt({
  subsets: ["thai", "latin"], // Specify subsets if needed
  weight: ["400", "700"], // Specify the font weights you need
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={prompt.className}>
        <ThemeProvider theme={baselightTheme}>
          <CssBaseline />
          <DatabaseProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
          </DatabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
