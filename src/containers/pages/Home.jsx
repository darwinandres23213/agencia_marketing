import Layout from '../../hocs/layouts/Layout';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/navigation/Footer';
import Index from '../../components/home/Index';
import Incentives from '../../components/home/Incentive';
import Blog from '../../components/home/BlogSection';
import Feature from '../../components/home/Feature';
import CTA from '../../components/home/CTA';
import Logo from '../../components/home/LogoCloud';
import BlogList from '../../components/home/BlogList';
import { useEffect } from 'react';


function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
        },[])
    return(
        <Layout>
            <Navbar/>
            <div className='pt-28' >
                 <Index/>
                 <Incentives/>
                 <Blog/>
                 <Feature/>
                 <CTA/>
                 <Logo/>
                 <BlogList/>
            </div>
                <Footer/>
        </Layout>
    )
}

export default Home