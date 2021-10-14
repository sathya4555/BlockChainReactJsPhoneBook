import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
// import './app.css'
import "./fresh.css";
import "./button.css";
import "./closebutton.css";
import "./search.css";
import "./header.css";
import "./popup.css";
export const Home = () => {
  const [account1, setaccount] = useState("");
  const [Contract1, setContract1] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [methodaAdd, setmethodaAdd] = useState("");
  const [methodviewAddress, setmethodviewAddress] = useState("");
  const [address1, setaddress] = useState("");
  const [classname, setclassname] = useState("formdiv");
  const [resultDiv, setresultDiv] = useState("resultDiv");
const [name, setname] = useState('')
  const [phone, setphone] = useState(0);
  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  const ABI = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_phone",
          type: "uint256",
        },
      ],
      name: "Add_Phone",
      outputs: [
        {
          internalType: "uint256",
          name: "__phone",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_address",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_address",
          type: "address",
        },
      ],
      name: "ViewPhone",
      outputs: [
        {
          internalType: "uint256",
          name: "_phone",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_phone",
          type: "uint256",
        },
      ],
      name: "View_Address",
      outputs: [
        {
          internalType: "address",
          name: "_address",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "phone",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "phoneAddress",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  var web3;
  var accounts;
  var Contract;
  const loadBlockchainData = async () => {
    web3 = window.web3;
    accounts = await web3.eth.getAccounts();
    setaccount(accounts[0]);
    // this.setState({ account: accounts[0] })
    // console.log(account1);
    console.log(accounts[0]);
    const networkId = await web3.eth.net.getId();
    console.log(networkId);
    // this.setState({ loading: false })
    Contract = new web3.eth.Contract(
      ABI,
      "0x549d720f606a4af30531eb75d8f98665fc167924"
    );
    setContract1(Contract);
    console.log("contract", Contract);
  };
  const [catchFlag, setcatchFlag] = useState(false);
  const [Errormessage, setErrormessage] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let ss = await Contract1.methods
        .Add_Phone(phone)
        .send({ from: `${account1}` })
        .then(function (receipt) {
          console.log("receipt", receipt);
        });
      console.log("ss", ss);
    } catch (err) {
      setcatchFlag(true);
      setErrormessage("can't perform operation");
      // alert(err);
    }
  };

  var errormenu = (
    <div>
     <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    </div>
  );

  const [flag, setflag] = useState(false);
  const [flag1, setflag1] = useState(false);

  const ViewPhone = async (e) => {
    e.preventDefault();
    let method1 = await Contract1.methods.ViewPhone(`${address1}`).call();
    console.log("METHOD11111 inside function view Phone", method1);
    setmethodviewAddress(method1);
    setclassname("afterformdiv");
    setflag1(true);
    if( method1 == 0){
      alert("NotFound")
      setflag1(false);
    setclassname("formdiv");

    }
  };
  const [flag3, setflag3] = useState(false);
  const [ViewMethodPhone, setViewMethodPhone] = useState("");
  const ViewAddress = async (e) => {
    e.preventDefault();
    let method2 = await Contract1.methods.View_Address(phone).call();
    setViewMethodPhone(method2);
    setclassname("afterformdiv");
    setflag3(true);
    if( method2 == 0){
      alert("NotFound")
      setflag3(false);
      setclassname("formdiv");
    }
  };

  function close() {
    setflag1(false);
    setclassname("formdiv");
    setflag3(false);
  }
  const [addFlag, setaddFlag] = useState(false);
  const [addphone, setaddphone] = useState("");
  const Add = async (e) => {
    setaddFlag(true);
    let ss = await Contract1.methods
      .Add_Phone(addphone)
      .send({ from: `${account1}` })
      .then(function (receipt) {
        // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
        console.log("receipt", receipt);
      });
  };

  var menu = (
    <div>
      <table>
        <tr>
          <td>Phone Number</td>
          <td>{methodaAdd[0]}</td>
          <td></td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{methodaAdd[1]}</td>
        </tr>
      </table>
    </div>
  );

  var menu1 = (
    <div className={resultDiv}>
      <div class="outer">
        <div class="inner">
          <label>
            {" "}
            <button className="closebutton" onClick={(e) => close(e)}>
              {" "}
              Close{" "}
            </button>
          </label>
        </div>
      </div>
      <table>
        <tr>
          <td>Phone Number</td>
          <td>
            {methodviewAddress}
            {/* address */}
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Address</td>
          <td>
            {/* {methodviewAddress} */}
            {address1}
          </td>
        </tr>
      </table>
    </div>
  );

  var menu2 = (
    <div>
      {/* <table>
        <tr>
          <td>Phone Number</td>
          <td>{phone}</td>
          <td></td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{ViewMethodPhone}</td>
        </tr>
      </table> */}

      <div className={resultDiv}>
        <div class="outer">
          <div class="inner">
            <label>
              {" "}
              <button className="closebutton" onClick={(e) => close(e)}>
                {" "}
                Close{" "}
              </button>
            </label>
          </div>
        </div>
        <table>
          <tr>
            <td>Phone Number</td>
            <td>
              {phone}
              {/* address */}
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              {/* {methodviewAddress} */}
              {ViewMethodPhone}
            </td>
          </tr>
        </table>
      </div>
    </div>

    //
  );

  return (
    <>
      {/* {catchFlag && errormenu} */}
      <div className="header">
        <div class="words word-1">
          <span>P</span>
          <span>H</span>
          <span>O</span>
          <span>N</span>
          <span>E</span>
          <span>L</span>
          <span>O</span>
          <span>G</span>

          <div>
            {/* <button  onClick={(e) => Add(e)}>
        Add
    </button> */}
          </div>
        </div>
      </div>

      {/* {addFlag && addMenu} */}
      <div className={classname}>
        <form className="form">
          <tr><input
            onChange={(event) => setaddphone(event.target.value)}
            placeholder="Enter Phone Number to add new entry"
          ></input></tr>
           {/* <td>  <input
            onChange={(event) => setname(event.target.value)}
            placeholder="Enter Phone Number to add new entry"
          ></input></td> */}
          <button type="button" onClick={(e) => onSubmit(e)}>
            <h2>
              <span></span>
              <span>Add</span>
            </h2>
          </button>
        </form>
      </div>

      <div className={classname}>
        <form className="form">
          <input
            onChange={(event) => setaddress(event.target.value)}
            placeholder="Enter Address"
          ></input>
          <button type="button" onClick={(e) => ViewPhone(e)}>
            <h1>
              <span></span>
              <span>Address</span>
            </h1>
          </button>
        </form>
        <form className="form">
          <input
            onChange={(event) => setphone(event.target.value)}
            placeholder="Enter Phone"
          ></input>
          <button type="button" onClick={(e) => ViewAddress(e)}>
            <h1>
              <span></span>
              <span>Phone</span>
            </h1>
          </button>
        </form>
      </div>
      {/* <div className={resultDiv}>{flag1 && menu1}</div>
      <div className={resultDiv}>{flag3 && menu2}</div> */}
      {flag1 && menu1}
      {flag3 && menu2}
      <div className="footer">&copy; sathyakrishna</div>
    </>
  );
};
