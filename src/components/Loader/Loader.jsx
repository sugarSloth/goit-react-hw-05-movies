import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="var(--active-color)"
      ariaLabel="circles-loading"
      wrapperStyle={{
        justifyContent: 'center',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
