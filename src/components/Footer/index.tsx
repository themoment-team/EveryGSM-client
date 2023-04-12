/** @jsxImportSource @emotion/react */
import * as S from './style';
import theme from 'styles/theme';
import { css } from '@emotion/react';

interface Props {
  isDark: boolean;
}

const Footer = ({ isDark }: Props) => {
  const dark = theme.dark.dark_footer;
  const darkText = theme.dark.dark_text;
  return (
    <div>
      <S.FooterContainer
        css={css`
          ${isDark && dark}
        `}
        id="footer"
      >
        <S.FootText
          css={css`
            ${isDark && darkText}
          `}
        >
          Copyright 2022. the moment All rights reserved.
        </S.FootText>
      </S.FooterContainer>
    </div>
  );
};

export default Footer;
