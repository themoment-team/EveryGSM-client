import * as C from 'components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EveryGSM',
  description:
    'GSM의 프로젝트들을 한 곳에 모아 트래픽을 집중 시키기 위한 서비스입니다.',
  openGraph: {
    type: 'website',
    url: 'https://every.hellogsm.kr/',
    title: 'EveryGSM',
    description:
      'GSM의 프로젝트들을 한 곳에 모아 트래픽을 집중 시키기 위한 서비스입니다.',
    images: [
      {
        url: '/images/LogoIcon.svg',
        width: 800,
        height: 400,
      },
    ],
  },
};

function Home() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const { replace } = useRouter();

  return (
    <>
      <C.Nav />
      <C.MainContainer />
      <C.Footer />
    </>
  );
}

export default Home;
