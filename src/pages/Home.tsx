// * IMPORTS
// Components
import Nav          from '../components/interfaces/Nav';
import Footer       from '../components/containers/Footer';
import Header       from '../components/containers/Header';
import InputForm    from '../components/containers/InputForm';
import Instructions from '../components/containers/Instructions';
import Warning      from '../components/containers/Warning';

// * HOME
export default function Home() {
  // Render Home
  return (
    <div>

      {/* Basic Navigation */}
      <Nav/>

      {/* Header, Warning & Instructions */}
      <Header/>
      <Warning/>
      <Instructions/>

      {/* Interactive Elements */}
      <InputForm/>

      {/* Info */}
      <Footer/>

    </div>
  );
}