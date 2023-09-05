'use client';

import StyledComponentsRegistry from 'lib/register';
import { GlobalStyle } from '../global/theme';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI-Fusion',
  description: 'Design of various UI components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
