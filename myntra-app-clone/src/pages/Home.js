import carnival from '../assets/carnivalSD.jpg';
import { TiTick } from 'react-icons/ti';
import { BiRupee } from 'react-icons/bi';
import { BsShieldLockFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import data from '../data/data';
import { ProductCard } from "../components/index";

function Home() {

    const [omgDeals, setOmgDeals] = useState([]);

    useEffect(() => {
        sessionStorage.setItem('page', '');
        setOmgDeals(data.filter((product) => {
            return product.discount > 55
        }).slice(0, 18))
    }, [])

    let id = 1;

    return (
        <div className='home'>
            <section className="offerSection">
                <img draggable='false' src='https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/b7c96008-36cf-40ab-921d-33992f66b7d81680501693501-Main-Banner_Desktop_02.jpg' alt='' />
                <img draggable='false' src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/a9c2393a-99ac-457c-b92b-c0b993d62e3a1680501693685-Main-Banner_Desktop_03.jpg" alt='' />
                <img draggable='fasle' src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/bcdb5967-cb39-408e-bc52-1b5a42cbec401680501693721-Main-Banner_Desktop_04.jpg" alt="" />
                <img draggable="false" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/b7078b60-cc3a-4be1-b91b-22634a3daa401680501693418-Main-Banner_Desktop_05.jpg" alt="" />
                <img draggable="false" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/1f9d78ba-9368-4cfc-a69c-e2e92faebda91680501693572-Main-Banner_Desktop_06.jpg" alt="" />
                <img draggable="false" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/c6161279-8397-437c-9fe6-e8b8ecd59aab1680501693608-Main-Banner_Desktop_07.jpg" alt="" />
                <img draggable="false" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/3f0d9848-3c1d-46fb-8f49-cab5d8ee53021680501693646-Main-Banner_Desktop_08.jpg" alt="" />
                <img draggable="false" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/a6df5257-c259-4e2f-a9ca-1b59c61e6fb01680501693322-Main-Banner_Desktop_09.jpg" alt="" />
                <img draggable="false" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/0b37b32e-80ca-4e49-b47e-27db30505d0a1680501693461-Main-Banner_Desktop_10.jpg" alt="" />
                <img draggable="false" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/32a436fa-48b0-4ca7-941e-5b09d20e185a1680501693381-Main-Banner_Desktop_11.jpg" alt="" />
                <img draggable="false" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/1d427824-c1f8-43f1-a055-00ec75023e841680501693283-Main-Banner_Desktop_12.jpg" alt="" />
                <img draggable="false" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/035d7a4d-06f5-40aa-87a5-6ea939394ddd1680501693535-Main-Banner_Desktop_13.jpg" alt="" />
            </section>
            <div className="offerSectionSD">
                <img src={carnival} alt="" />
                <div className="assuredSection">
                    <div className="assured">
                        <span className="icon"><TiTick /></span>
                        <span>100% origional products</span>
                    </div>
                    <div className="assured">
                        <span className="icon"><BiRupee /></span>
                        <span>easy return & refunds</span>
                    </div>
                    <div className="assured">
                        <span className='icon'><BsShieldLockFill /></span>
                        <span>100% secure payments</span>
                    </div>
                </div>
            </div>

            <div className="omg-deals">
                <h1>Omg! Deals</h1>
                <div className="omg-deals-container">
                    {
                        omgDeals.map((product) => {
                            return <ProductCard data={product} key={id++} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;