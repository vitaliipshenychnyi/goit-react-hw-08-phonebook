import styled from 'styled-components';

export const WrapperUserMenu = styled.div`
  background-color: #edf3fb;

  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Text = styled.p`
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
`;

export const Button = styled.button`
  width: fit-content;
  border-radius: 5px;
  border-color: #879cb7;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  background-color: #edf3fb;
  outline: none;
  &:hover {
    background-color: #879cb7;
    color: #edf3fb;
  }
`;
