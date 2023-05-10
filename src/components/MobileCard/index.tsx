import * as S from './style';
import projectData from 'interface/projectData';
import Link from 'next/link';

const MobileCard = ({
  data,
  index,
  isDark,
}: {
  data: projectData;
  index: number;
  isDark: Boolean;
}) => {
  return (
    <S.Card>
      <Link href={data.projectUrl} target="_blank"></Link>
      <S.CardContents></S.CardContents>
    </S.Card>
  );
};

export default MobileCard;
