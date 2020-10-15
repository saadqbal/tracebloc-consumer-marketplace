import { Button } from 'bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import logo from '../../images/tracebloc.webp'
import Datasets from '../Datasets';
import ComputeRequests from '../ComputeRequests';
import { ConsumerContext } from '../../context/CunsumerContext';
import { Ocean } from '@oceanprotocol/squid';

const Main = () => {
    const { state, setOceanConfig } = useContext(ConsumerContext);
    const [loading, setLoading] = useState(true);

    console.log(state);

    const setupOcean = async () => {
        const ocean = await new Ocean.getInstance({
            web3Provider: state.web3,
            nodeUri: 'https://pacific.oceanprotocol.com',
            aquariusUri: 'https://aquarius.commons.oceanprotocol.com',
            brizoUri: 'https://brizo.commons.oceanprotocol.com',
            brizoAddress: '0x008c25ed3594e094db4592f4115d5fa74c4f41ea',
            secretStoreUri: 'https://secret-store.oceanprotocol.com',
        })
        console.log('Finished loading contracts.', ocean);
        setLoading(false);
        setOceanConfig(ocean);
    }

    useEffect(() => {
        setupOcean();
    }, []);

    return (
        <main>
            <aside>
                <i className="fa fa-home"><span>Dashboard</span></i>
                <i className="fa fa-search"></i>
                <i className="fa fa-user"></i>
                <i className="fa fa-spotify"></i>
                <i className="fa fa-cog"></i>
                <i className="fa fa-soundcloud"></i>
            </aside>
            
                {
                    loading ?
                     (
                        <section className="loading">
                            <div>
                                <p className="alert alert-info" role="alert">Configuring Ocean. Please wait...</p>
                            </div>
                      
                        </section>
                    ) :
                    (
                        <section className="content">
                            <Datasets />
                            <ComputeRequests />
                        </section>
                    )
                }
                
        </main>
    )
}

export default Main;