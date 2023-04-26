import * as S from './style';

const Footer = ({ isDark }: { isDark: boolean }) => {
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
