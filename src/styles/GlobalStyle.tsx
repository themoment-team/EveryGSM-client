'use client';

import { Global, css, useTheme } from '@emotion/react';

import emotionReset from 'emotion-reset';

export function GlobalStyle() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        ${emotionReset}

        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css');
        @import url('https://use.typekit.net/cei0oyt.css');

        body,
        * {
          font-family:
            'Pretendard Variable',
            Pretendard,
            -apple-system,
            BlinkMacSystemFont,
            system-ui,
            Roboto,
            'Helvetica Neue',
            'Segoe UI',
            'Apple SD Gothic Neo',
            'Noto Sans KR',
            'Malgun Gothic',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            sans-serif;
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        html,
        body {
          max-width: 100vw;
          overflow-x: hidden;
          background-color: ${theme.gray[0]};
          transition: background-color 0.3s ease-in-out;
        }

        @media all and (min-width: 1150px) and (min-height: 1000px) {
          html,
          body {
            overflow-y: hidden;
          }
        }

        @media all and (max-width: 620px) {
          html,
          body {
            overflow-y: hidden;
          }
        }

        @media (prefers-color-scheme: #F1F1F5) {
          html {
            color-scheme: #f1f1f5;
          }
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .roboto {
          font-family: 'Roboto';
        }

        ::-webkit-scrollbar {
          display: none;
        }
      `}
    />
  );
}
