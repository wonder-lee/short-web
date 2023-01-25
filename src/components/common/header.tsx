import styled, { css } from "styled-components";
import Image from "next/image";
import logoBlack from "../../../public/logo_black.png";

const Header = () => {
  return (
    <HeaderWrap>
      <Image src={logoBlack} alt="logoBlack" width="60" />
      {/* 자동으로 이모지 랜덤 변경하기 */}
      <span>😝</span>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.h1`
  ${({ theme }) => {
    const { width, colors } = theme;
    return css`
      position: fixed;
      top: 0px;
      display: flex;
      min-width: ${width.default};
      background-color: ${colors.black.default};
      align-items: center;
      gap: 5px;
      z-index: 5;
      padding-top: 25px;
      span {
        font-size: 20px;
      }
    `;
  }}
`;
