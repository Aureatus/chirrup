import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
`;

const Loader = styled.div`
  border: 16px solid #dedede;
  border-top: 16px solid #1d9bf0;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingTextContainer = styled.div`
  font-size: 35px;
  font-family: Libre Franklin;
  color: coral;
  text-align: center;
`;

export { Loader, LoaderContainer, LoadingTextContainer };
