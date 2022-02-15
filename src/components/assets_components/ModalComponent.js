import styled from 'styled-components';
import { Box, Modal } from '@mui/material';
import { constantsText } from '../../constants/constants';

//styles for modal-content wrapper
const style = {
  boxSizing: 'border-box',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '31.3vw',
  minWidth: '300px',
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 3,
  outline: 'none',
};

//styles for button
const ButtonStyled = styled.button`
  display: block;
  width: 171px;
  height: 49px;
  margin: 0 auto;
  background: #2196f3;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: max(20px, 16px);
  font-weight: 400;
  line-height: 1.166;
`;

const ModalComponent = ({ openModal, closeModal, children }) => {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby='modal-country-title'
        aria-describedby='modal-country-Covid_data'
      >
        <Box sx={style}>
          {children}
          <ButtonStyled type='button' onClick={closeModal}>
            {constantsText.buttonModalText}
          </ButtonStyled>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
