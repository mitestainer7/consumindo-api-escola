import styled from 'styled-components';

export const AlunoContainer = styled.div`
  margin-top: 25px;

  div {
    display: flex;
    align-items: center;
    padding: 5px 0;
  }

  span {
    padding: 0px 10px;
  }
  span + span {
    padding: 0 15px;
  }

  div + div {
    border-top: 1px solid #ccc;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
