import * as S from './style';
import theme from 'styles/theme';
import { css } from '@emotion/react';

interface Props {
  isDark: boolean;
}

const Footer = ({ isDark }: Props) => {
  const dark = theme.dark.color;
  const basic = theme.basic.color;

  return (
    <div>
      <S.FooterContainer
        css={css`
          background-color: ${isDark ? dark.slate_gray : basic.light_silver};
        `}
        id="footer"
      >
        <S.FootText
          css={css`
            color: ${isDark ? dark.white : basic.charcoal};
          `}
        >
          Copyright 2022. the moment All rights reserved.
        </S.FootText>
      </S.FooterContainer>
    </div>
  );
};

export default Footer;
