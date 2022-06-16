import {
  Loader,
  LoaderContainer,
  LoadingTextContainer,
} from "./StyledComponents";

const LoadingPage = () => {
  return (
    <LoaderContainer>
      <Loader />
      <LoadingTextContainer>Loading...</LoadingTextContainer>
    </LoaderContainer>
  );
};

export default LoadingPage;
