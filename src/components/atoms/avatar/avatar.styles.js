import styled from "styled-components";

const avatarSizes = (size) => {
  switch (size) {
    case "small":
      return "50px";
    case "large":
      return "80px";
    default:
      return "60px";
  }
};

export const AvatarContianer = styled.img`
  width: ${({ size }) => size && avatarSizes(size)};
  height: ${({ size }) => size && avatarSizes(size)};
  object-fit: cover;
  border-radius: 100%;
`;
