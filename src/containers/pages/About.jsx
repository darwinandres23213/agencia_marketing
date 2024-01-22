import Layout from '../../hocs/layouts/Layout';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/navigation/Footer';
import IndexAbout from  '../../components/About/IndexAbout';
import TestimonialStats from 'components/About/TestimonialStats';
import { useEffect } from 'react';
import Images from 'components/About/Images';
import Clients from 'components/About/Clients';
import LogoAbout from 'components/About/LogoAbout';
import FeatureAbout from 'components/About/FeatureAbout';
import Team from 'components/About/Team';
import CtaAbout from 'components/About/CtaAbout';


function About(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
        <div className='pt-28' >
            <IndexAbout/>
            <TestimonialStats/>
            <Images/>
            <Clients/>
            <LogoAbout/>
            <FeatureAbout/>
            <Team/>
            <CtaAbout/>
        </div>
                <Footer/>
        </Layout>
    )
}

export default About