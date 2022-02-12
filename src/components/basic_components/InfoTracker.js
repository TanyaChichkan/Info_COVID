import { useContext } from 'react';
import { InfoContext } from '../../context/InfoContext';
import { constantsText } from '../../constants/constants';
import Loader from '../info_components/Loader';
import Error from '../info_components/Error';
import Header from '../structure_components/Header';
import Section from '../structure_components/Section';
import Container from '../structure_components/Container';

const InfoTracker = () => {
  const {
    loadingInfo: { isLoading, error, success },
  } = useContext(InfoContext);

  return (
    <>
      {isLoading && <Loader open={isLoading ? true : false} />}
      {error && <Error errorState={error} message={constantsText.errorMsg} />}

      {success && (
        <>
          <Header />
          <main>
            <Container>
              <Section></Section>
            </Container>
          </main>
        </>
      )}
    </>
  );
};

export default InfoTracker;
