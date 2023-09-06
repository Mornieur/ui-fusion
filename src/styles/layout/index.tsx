import Link from 'next/link';
import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  min-height: 100vh;
`;

export const View = styled.section`
  width: min(100%, 80rem);
  margin: 0 auto;
  border: 1px solid red;
`;

export const ComponentsList = styled.nav`
  width: min(100%, 12rem);
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  padding: 0.5rem;

  header {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ComponentItem = styled(Link)`
  cursor: pointer;
  padding: 0.3rem;
  border: 1px solid red;
  border-radius: 5px;
  color: #aaa;

  :hover {
    background-color: red;
  }
`;
