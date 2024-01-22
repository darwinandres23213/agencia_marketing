import Layout from '../../hocs/layouts/Layout';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/navigation/Footer';
import { useEffect } from 'react';
import IndexCareers from 'components/Careers/IndexCareers';
import Testimonial from 'components/Careers/Testimonial';
import LogoCarrers from 'components/Careers/LogoCarrers';
import FeatureCareers from 'components/Careers/FeatureCareers';
import PositionList from 'components/Careers/PositionList';
function Careers(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <div className='pt-28' >
                <IndexCareers/>
                <Testimonial/>
                <LogoCarrers/>
                <FeatureCareers/>
                <PositionList/>
            </div>
                <Footer/>
        </Layout>
    )
}

export default Careers