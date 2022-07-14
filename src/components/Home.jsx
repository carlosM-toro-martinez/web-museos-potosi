import React  from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col, Placeholder } from 'react-bootstrap';
import AppContext from '../context/AppContext';
import Museo from '../containers/Museo'
import Header from './Header';
import Footer from './Footer';

function Home (){
  // const state = useInitialState();
  // const museos = state.museos;
  // const loading = state.loading;

  const {museos, loading} = React.useContext(AppContext);
  return (
    <div>
      <Header/>
      <Container  >
      {!loading ? (<Row className='row'>
        {museos.map(museo => (
          <Col className='colu' key={museo.id} >
              <Museo museo={museo.attributes} id={museo.id} />
          </Col>
        ))}
      </Row>) : 
      <><Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
        </Placeholder>
        <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder><Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></>}
      </Container>
      <Footer/>
    </div>
  );
}

export default Home;