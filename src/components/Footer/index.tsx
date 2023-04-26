import * as S from './style';
import useDarkState from 'Stores/useDarkStore';

const Footer = () => {
  const { isDark } = useDarkState();

  return (
    <div>
      <S.FooterContainer id="footer">
        <S.FootText isDark={isDark}>
          Copyright 2023. the moment All rights reserved.
        </S.FootText>
      </S.FooterContainer>
    </div>
  );
};

export default Footer;
