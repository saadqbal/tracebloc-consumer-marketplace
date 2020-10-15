import React, { useContext, useEffect } from 'react';
import Web3 from 'web3'
import { ConsumerContext } from '../../context/CunsumerContext';

let web3 = null;
if (window.web3) {
  web3 = new Web3(window.web3.currentProvider)
  window.ethereum.enable()
}

const Web3Connect = () => {
    const { state, setWeb3Connect } = useContext(ConsumerContext);
    console.log("STATE", state);

    useEffect(() => {
        if (web3) {
            setWeb3Connect(web3)
        }
    }, []);

  return (
    !web3 && <div class="alert alert-danger" role="alert">No Web3 Browser!</div>
  );
}



export default Web3Connect;
