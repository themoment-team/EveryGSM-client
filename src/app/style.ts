import styled from '@emotion/styled';
import theme from 'assets/theme';

export const Container = styled.div`
  .dark {
    background-color: ${theme.color.gray[4]};
  }
  .dark h2,
  .dark footer p {
    color: white;
  }
  .dark footer {
    background-color: ${theme.color.gray[3]};
  }
`;
