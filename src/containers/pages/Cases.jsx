import Layout from '../../hocs/layouts/Layout';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/navigation/Footer';
import IndexCases from '../../components/Cases/IndexCases';
import CasesList from '../../components/Cases/CasesList';
import { useEffect } from 'react';

function Cases(){
    useEffect(()=>{
      window.scrollTo(0,0)
         },[])
    return(
        <Layout>
            <Navbar/>
            <div className='pt-28' >
                <IndexCases/>
                <CasesList/>
            </div>
                <Footer/>
        </Layout>
    )
}

export default Cases