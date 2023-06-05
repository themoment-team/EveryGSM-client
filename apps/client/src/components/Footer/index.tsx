import * as S from './style';
import useDarkState from '../../Stores/useDarkStore';

const Footer = ({ isDark }: { isDark: boolean }) => {
  // const { isDark, setIsDark } = useDarkState();

  return (
    <div>
      <S.FooterContainer id="footer">
        <S.FootText>Copyright 2023. the moment All rights reserved.</S.FootText>
      </S.FooterContainer>
    </div>
  );
};

export default Footer;
