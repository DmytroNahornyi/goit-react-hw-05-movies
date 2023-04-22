const { TailSpin } = require('react-loader-spinner');

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50px',
      }}
    >
      <TailSpin
        visible={true}
        height="60"
        width="60"
        color={'#0170ca'}
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
        wrapperClass="rotating-triangels-wrapper"
      />
    </div>
  );
};

export default Loader;
