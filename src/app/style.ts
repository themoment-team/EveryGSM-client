import styled from '@emotion/styled';

export const Container = styled.div`
  .dark {
    background-color: ${props => props.theme.color.gray[4]};
  }
  .dark h2,
  .dark footer p {
    color: white;
  }
  .dark footer {
    background-color: ${props => props.theme.color.gray[3]};
  }
`;
