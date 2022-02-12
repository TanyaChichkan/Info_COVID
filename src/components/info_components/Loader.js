import { CircularProgress } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';

const Loader = ({ open }) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: 'flex',
        flexDirection: 'column',
      }}
      open={open}
    >
      <CircularProgress color='inherit' />
      <p>...loading</p>
    </Backdrop>
  );
};

export default Loader;
