'use client';

import StyledComponentsRegistry from '../../lib/register';
import { GlobalStyle } from '@global/theme';
import * as S from '@styles/layout'
import { componentsList } from 'data/components';
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
          <GlobalStyle />
          <S.Container>
          
           <S.ComponentsList>
            <header>FUSION UI</header>

            <ul>
              {componentsList.map(component => (
                <S.ComponentItem href={component.path} key={component.path}>{component.name}</S.ComponentItem>
              ))}
            </ul>
           </S.ComponentsList>
           <S.View>{children}</S.View>
          </S.Container>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
