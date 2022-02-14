import { useContext } from 'react';
import { InfoContext } from '../../context/InfoContext';
import { ModalContext } from '../../context/ModalContext';
import { constantsText } from '../../constants/constants';
import Loader from '../info_components/Loader';
import Error from '../info_components/Error';
import Header from '../structure_components/Header';
import Section from '../assets_components/Section';
import Container from '../assets_components/Container';
import Table from './Table';
import ModalComponent from '../assets_components/ModalComponent';
import List from '../assets_components/List';

const InfoTracker = () => {
  const {
    loadingInfo: { isLoading, error, success },
  } = useContext(InfoContext);

  const { modalOpen, setModalOpen } = useContext(ModalContext);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      {isLoading && <Loader open={isLoading ? true : false} />}
      {error && <Error errorState={error} message={constantsText.errorMsg} />}

      {success && (
        <>
          <Header />
          <main>
            <Container>
              <Section>
                <Table />
              </Section>
            </Container>
          </main>
        </>
      )}

      {modalOpen && (
        <ModalComponent openModal={modalOpen} closeModal={handleCloseModal}>
          <List />
        </ModalComponent>
      )}
    </>
  );
};

export default InfoTracker;
