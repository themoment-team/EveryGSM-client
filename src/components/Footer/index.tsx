import * as S from './style';

interface Props {
  isDark: boolean;
}

const Footer = ({ isDark }: Props) => {
  return (
    <div>
      <S.FooterContainer id="footer">
        <S.FootText>Copyright 2023. the moment All rights reserved.</S.FootText>
      </S.FooterContainer>
    </div>
  );
};

export default Footer;
