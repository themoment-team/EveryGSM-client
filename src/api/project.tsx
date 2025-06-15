import type { DataType } from 'interface';

export async function fetchDisplayProjects(): Promise<DataType[]> {
  const res = await fetch(
    'https://s3.ap-northeast-2.amazonaws.com/every.hellogsm.kr/display-projects.json',
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data: DataType[] = await res.json();
  return data;
}
