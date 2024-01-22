import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import store  from './store';
import { Helmet,HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';
import About from './containers/pages/About';
import Blog from './containers/pages/Blog';
import Careers from './containers/pages/Careers';
import Cases from './containers/pages/Cases';
import Services from './containers/pages/Services';
import Contact from './containers/pages/Contact';



function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hacker app</title>
        <meta name="description" content="Web site created using create-react-app for hacking etical"/>
        <meta name="keywords" content="hacking, hacking etico, learn hacking"/>
        <meta name="robots" content="all"/>
        <link rel='cannonical' href='https://www.murkiva.com/' />
        <meta name="author" content="Murkiva"/>
        <meta name="publisher" content="Murkiva"/>


        <meta name="og:title" content="Hacker app"/>
        <meta name="og:description" content="Web site created using create-react-app for hacking etical"/>
        <meta name="og:url" content="https://www.murkiva.com/"/>
        <meta name="og:image" content="https://bafybeiczl4dcxupma2zeyilkukfl4yge64axnhajd722wxgin62mtts6uy.ipfs.w3s.link/murkivamarketing.png"/>

        <meta name="og:title" content="Hacker app"/>
        
      </Helmet>
    <Provider store={store}>
    <Router>
      <Routes>
          <Route path="*" element={<Error404 />}/>

          <Route path="/" element={<Home />}/>

          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/careers" element={<Careers />}/>
          <Route path="/cases" element={<Cases />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
    </Provider>

    </HelmetProvider>

  );
}

export default App;
