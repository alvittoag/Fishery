import ReactLoading from "react-loading";

const LoadingBar = ({ height, width }: { height: number; width: number }) => {
  return (
    <ReactLoading type="bars" color="#4DC7A0" height={height} width={width} />
  );
};

export default LoadingBar;
