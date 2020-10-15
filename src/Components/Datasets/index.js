import React, { useContext, useEffect } from 'react';
import { ConsumerContext } from '../../context/CunsumerContext';


const Datasets = () => {

    const { state: { ocean, web3, assets }, setAssets } = useContext(ConsumerContext);
    console.log("DATASETS", ocean, web3, assets);

    const searchAssets= async () =>{
        try {
            const search = await ocean.assets.search(
                '10 Monkey Species Small'
            );
            console.log(search);
            console.log("RESULT", search.results[0]);
            setAssets(search);
        } catch (error) {
            console.error(error.message);
        }
      }

    

    const consumeAsset =  async() => {
        try {
          // get all accounts
          const accounts = await ocean.accounts.list()
          // get our registered asset
          const consumeAsset = assets.ddo
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


    useEffect(() => {
        if (ocean) {
            searchAssets();
        }
    }, [ocean]);



    
    return (
        <div className="table-responsive col-xs-6 mx-2 my-4 p-0">
            <h3 className="text-left">Data sets</h3>
        <table className="table rounded border bg-white">
            <thead className="thead-light">
                <tr>
                <th scope="col">ID</th>
                <th scope="col">DMC</th>
                <th scope="col">Aluminium Temperature</th>
                <th scope="col">Product Flow</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>
        </div>

    );
}

export default Datasets;