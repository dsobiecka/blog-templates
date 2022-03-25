import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 4.5px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  position: relative;
`;

export const WhiteBox = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 4.5px;
  box-shadow: 0 3.75rem 5rem -1.875rem rgb(0 0 0 / 5%);
  display: flex;
  flex-direction: column;
  padding: 35px;
  cursor: pointer;
  width: 70%;
  position: absolute;
  bottom: -30px;
  left: 30px;
`;

export const DateAdded = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 18px;
  font-size: 12px;
`;

export const BoxTitle = styled.h2`
  font-size: 40px;
  position: relative;
`;

export const ShortDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSize.sd};
  line-height: 1.8;
`;
