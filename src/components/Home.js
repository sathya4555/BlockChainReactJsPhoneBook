import React, { useState, useEffect } from 'react';
import Web3 from 'web3'
import { useWeb3React } from "@web3-react/core"

export const Home = () => {

    const [account1, setaccount] = useState('')
    const [Contract1, setContract1] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const { active, account, library, connector, activate, deactivate } = useWeb3React()
    const [methodaAdd, setmethodaAdd] = useState('')
    const [methodviewAddress, setmethodviewAddress] = useState('')
    const [address1, setaddress] = useState('')
    useEffect(() => {
        loadWeb3();
        loadBlockchainData();
    }, [])

const ABI=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_phone",
				"type": "uint256"
			}
		],
		"name": "Add_Phone",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "__phone",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "ViewPhone",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_phone",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_phone",
				"type": "uint256"
			}
		],
		"name": "View_Address",
		"outputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "phone",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "phoneAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
   const loadWeb3 = async ()=> {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
        }
        else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
      }

      var web3 
      var accounts 
      var Contract
     const loadBlockchainData = async ()=> {
        web3 = window.web3
        accounts = await web3.eth.getAccounts()
        setaccount(accounts[0])
        // this.setState({ account: accounts[0] })
        // console.log(account1);
        console.log(accounts[0]);
        const networkId = await web3.eth.net.getId()
        console.log(networkId);
        // this.setState({ loading: false })
        Contract = new web3.eth.Contract(ABI,'0x7a485c365ca98a0ab1c0c5eb56937a8688ea4d2c')
        setContract1(Contract)
        console.log("contract",Contract);
        let method = await Contract.methods.Add_Phone(999).call()
        console.log("METHOD",method);
        let method1 = await Contract.methods.ViewPhone("0xE772461212d7806ddDf465049568F92Cd070df8A").call()
        console.log("METHOD11111",method1);
        setphoneNumber(method1)
        let method2 = await Contract.methods.phoneAddress(999).call()
        console.log("METHOD2222",method2);
        // contract.methods.VARIABLENAME.call().call();
        let methodVar =Contract.methods.phoneAddress(9487515052).call().then(console.log("krishna"))
        console.log("Variable",methodVar);

        let methodVar1 =Contract.methods.phone("0xE772461212d7806ddDf465049568F92Cd070df8A").call().then(console.log("krishna"))
        console.log("Variable1",methodVar1);
    }

    const [flag, setflag] = useState(false)
   const addPhoneNumber = async (e)=>{
    web3 = window.web3
    accounts = await web3.eth.getAccounts()
    setaccount(accounts[0])
    // this.setState({ account: accounts[0] })
    console.log(account1);
    console.log(accounts[0]);
    const networkId = await web3.eth.net.getId()
    console.log(networkId);
    e.preventDefault();
    // Contract = new web3.eth.Contract(ABI,'0x7A485c365CA98A0AB1c0C5EB56937A8688ea4d2c')
    console.log("inside add phone number method",Contract1);
    let method = await Contract1.methods.Add_Phone(`${phoneNumber}`).call()
    console.log("METHOD",method);
    setmethodaAdd(method)
    setflag(true)
   }
const [flag1, setflag1] = useState(false)

const [phone, setphone] = useState('')
   const ViewPhone = async (e)=>{
    web3 = window.web3
    accounts = await web3.eth.getAccounts()
    setaccount(accounts[0])
    // this.setState({ account: accounts[0] })
    console.log(account1);
    console.log(accounts[0]);
    const networkId = await web3.eth.net.getId()
    console.log(networkId);
    e.preventDefault();
    // Contract = new web3.eth.Contract(ABI,'0x7A485c365CA98A0AB1c0C5EB56937A8688ea4d2c')
    console.log("inside add phone number method",Contract1);
    let method1 = await Contract1.methods.ViewPhone(`${address1}`).call()
    console.log("METHOD11111 inside function view Phone",method1);
    setmethodviewAddress(method1)
    setflag1(true)
   }
 const [flag3, setflag3] = useState(false)
 const [ViewMethodPhone, setViewMethodPhone] = useState('')
   const ViewAddress = async (e)=>{
    web3 = window.web3
    accounts = await web3.eth.getAccounts()
    setaccount(accounts[0])
    // this.setState({ account: accounts[0] })
    console.log(account1);
    console.log(accounts[0]);
    const networkId = await web3.eth.net.getId()
    console.log(networkId);
    e.preventDefault();
    // Contract = new web3.eth.Contract(ABI,'0x7A485c365CA98A0AB1c0C5EB56937A8688ea4d2c')
    console.log("inside ssss phone number method",Contract);
    let method2 = await Contract1.methods.View_Address(phone).call()
    console.log("METHOD2222",method2);
    setViewMethodPhone(method2)
    setflag3(true)
   }


   var menu=( 
       <div style={{backgroundColor:"teal"}}>
       <table>
                <tr>
                <td>
                      Phone Number
                    </td>
                    <td>
                        {methodaAdd[0]}
                    </td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>
                        Address
                    </td>
                    <td>
                        {methodaAdd[1]}
                    </td>
                </tr>
            </table>
       </div>
   )

   var menu1=( 
    <div style={{backgroundColor:"teal"}}>
    <table>
             <tr>
             <td>
                   Phone Number
                 </td>
                 <td>
                     {methodviewAddress}
                     {/* address */}
                 </td>
                 <td></td>
                 </tr>
                 <tr>
                 <td>
                     Address
                 </td>
                 <td>
                     {/* {methodviewAddress} */}
                     {address1}
                 </td>
             </tr>
         </table>
    </div>
)

var menu2=( 
    <div style={{backgroundColor:"teal"}}>
    <table>
             <tr>
             <td>
                   Phone Number
                 </td>
                 <td>
                     {phone}
                 </td>
                 <td></td>
                 </tr>
                 <tr>
                 <td>
                     Address
                 </td>
                 <td>
                     {ViewMethodPhone}
                 </td>
             </tr>
         </table>
    </div>
)

    return (
        <div style={{margin: "10rem",backgroundColor:"green"}}>
            <form style={{margin: "auto",backgroundColor:"green"}}>
            <table>
                <tr>
                    <td>
                        <input onChange={(event) => setphoneNumber(event.target.value)} placeholder="Enter phone number"></input>
                    </td>
                    <td></td>
                    <td>
                        <button type="button" onClick={(e) => addPhoneNumber(e)}>Sumbit Phone Number</button>
                    </td>
                </tr>
            </table>
            </form>
        {flag && menu}
       

        <form>
            <table>
                <tr>
                    <td>
                        <input onChange={(event) => setaddress(event.target.value)} placeholder="Enter Address"></input>
                    </td>
                    <td></td>
                    <td>
                        <button type="button" onClick={(e) => ViewPhone(e)}>Search Phone</button>
                    </td>
                </tr>
            </table>
            </form>
            {flag1 && menu1}

            <form>
            <table>
                <tr>
                    <td>
                        <input onChange={(event) => setphone(event.target.value)} placeholder="Enter Phone"></input>
                    </td>
                    <td></td>
                    <td>
                        <button type="button" onClick={(e) => ViewAddress(e)}>Search Address</button>
                    </td>
                </tr>
            </table>
            </form>
            {flag3 && menu2}
        </div>
    )
}
