import React, { useContext, useEffect, useState } from 'react';
import { ConsumerContext } from '../../context/CunsumerContext';
import './style.css';


const Datasets = () => {

    const { state: { ocean, web3, assets }, setAssets } = useContext(ConsumerContext);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("10 Monkey Species Small");
    // console.log("DATASETS", ocean, web3, assets);

    const searchAssets= async () =>{
        try {
            const search = await ocean.assets.search(
                searchTerm
            );
            // console.log(search);
            console.log("RESULT", search.results[0].service[0].attributes.main);
            setAssets(search);
            setLoading(false);
        } catch (error) {
            console.error(error.message);
        }
      }

    

    const consumeAsset =  async() => {
        try {
          // get all accounts
          const accounts = await ocean.accounts.list()
          // get our registered asset
          const consumeAsset = assets.results[0]
          // order service agreement
          const agreement = await ocean.assets.order(
            consumeAsset.id,
            accounts[0]
          )
          // consume it
          await ocean.assets.consume(
            agreement,
            consumeAsset.id,
            accounts[0],
            '',
            0
          )
        } catch (error) {
          console.error(error.message)
        }
      }

    // if (assets?.results?.length > 0 ) {
    //     consumeAsset();
        
    // }

    useEffect(() => {
        if (ocean) {
            searchAssets();
        }
    }, [ocean]);


    // .service[0].attributes.main
    const listAssets = assets?.results && assets.results.map((dataset, index) => {
        console.log("DATASET-SERVICE", dataset.service[0].attributes.additionalInformation);
        const { name, author } = dataset.service[0].attributes.main;
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{author}</td>
                
            </tr>
        )
    });

    
    return (
        <div className="table-responsive col-xs-6 mx-2 my-4 p-0">
        
            <h3 className="text-left">Data sets</h3>
            {
                loading ?
            (
               <section className="loading">
                   <div>
                       <p className="alert alert-info" role="alert">Loading Data sets. Please wait...</p>
                   </div>
               </section>
           ) :
           (
            <table className="table rounded border bg-white">
            <thead className="thead-light">
               <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                
                </tr>
            </thead>
            <tbody>
                { listAssets }
                
            </tbody>
            </table>
        
                )
            }
        
        </div>

    );
}

export default Datasets;