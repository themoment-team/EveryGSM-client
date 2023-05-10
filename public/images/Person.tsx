import { css } from '@emotion/react';
const Person = ({ isDark }: { isDark: boolean }) => {
  return (
    <svg
      css={css`
        width: 1.5625rem;
        height: 1.5rem;
        margin-right: 0.8125rem;
        transition: ease-in-out 0.3s;
        @media screen and (max-width: 52.125rem) {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
        }
      `}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {' '}
      <path
        d="M9 3.5C9 5.433 7.433 7 5.5 7C3.567 7 2 5.433 2 3.5C2 1.567 3.567 0 5.5 0C7.433 0 9 1.567 9 3.5Z"
        fill={isDark ? '#e3e3e3' : '#999999'}
      />{' '}
      <path
        d="M23 7.5C23 9.433 21.433 11 19.5 11C17.567 11 16 9.433 16 7.5C16 5.567 17.567 4 19.5 4C21.433 4 23 5.567 23 7.5Z"
        fill={isDark ? '#e3e3e3' : '#999999'}
      />{' '}
      <path
        d="M0 15.25C0 11.7982 2.46243 9 5.5 9C8.53757 9 11 11.7982 11 15.25V24H0V15.25Z"
        fill={isDark ? '#e3e3e3' : '#999999'}
      />{' '}
      <path
        d="M14 19.1111C14 15.736 16.4624 13 19.5 13C22.5376 13 25 15.736 25 19.1111V24H14V19.1111Z"
        fill={isDark ? '#e3e3e3' : '#999999'}
      />{' '}
    </svg>
  );
};
export default Person;
