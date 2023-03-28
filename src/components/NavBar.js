import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { TempleWallet } from "@temple-wallet/dapp";
import { TezosToolkit } from '@taquito/taquito'
import { ChevronDoubleRight } from "react-bootstrap-icons";
import { connectWallet } from "./wallet";

export const NavBar = () => {

  // Wallet Connection
  // const [Walletaddress, setWalletaddress] = useState("")
  const [walletAddress, setwalletaddress] = useState("");
  // const [walletconnection, setwalletconnection] = useState("");
  // const [isconnected, setisconnected] = useState("");
  //   window.localStorage.getItem("walletId")
  // );
 const Tezos = new TezosToolkit('https://testnet-tezos.giganode.io');
 const handle_connect = ()=>{

   TempleWallet.isAvailable()
   .then(() => {
     const mywallet = new TempleWallet('MyAwesomeDapp');
     mywallet
       .connect('ghostnet')
       .then(() => {
         Tezos.setWalletProvider(mywallet);
         return mywallet.getPKH();
       })
       .then((pkh) => {
         console.log(`Your address: ${pkh}`);
       });
   })
   .catch((err) => console.log(err));
 }
  
 
  // const handle_connect = async () => {
  //   try {
  //     await connectWallet();
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  // const handle_connect = async () => {
  //   const wallet = new TempleWallet("My AwesomeDapp");
  //   await wallet.connect("ghostnet");
  //   const useraddress = wallet.pkh || (await wallet.getpkh());
  // };


  // const checkIfWalletIsConnected = async () => {
  //   try {
  //     const { solana } = window;

  //     if (solana) {
  //       if (solana.isPhantom) {
  //         console.log("Wallet Found");
  //         const response = await solana.connect({ onlyIfTrusted: true });
  //         console.log(
  //           "connected with publickey:",
  //           response.publicKey.toString()
  //         );
  //         window.localStorage.setItem(
  //           "walletId",
  //           response.publicKey.toString()
  //         );
  //         setWalletAddress(response.publicKey.toString());
  //       }
  //     } else {
  //       alert("Get a phantom wallet");
  //       console.log("Get a phantom wallet");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const connectWallet = async () => {
  //   checkIfWalletIsConnected();
  //   const { solana } = window;
  //   if (solana) {
  //     const response = await solana.connect();
  //     console.log("connected with public key", response.publicKey);
  //     setWalletAddress(response.publicKey.toString());
  //     window.localStorage.setItem("walletId", response.publicKey.toString());
  //     alert("Connected to " + response.publicKey.toString())
  //   }

  // };

  // const disconnectWallet = async () => {
  //   const { solana } = window;
  //   if (solana) {
  //     await solana.disconnect();
  //     setWalletAddress(null);
  //     window.localStorage.removeItem("walletId");
  //     alert("Wallet Disconnected")
  //   }
  // };

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h1 style={{color:'white'}}>HelpingHands</h1>
            {/* <img src={logo} alt="Logo" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Petitions
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              {/* <HashLink to='#connect'> */}
              {walletAddress ? (
                <></>
                // <button className="vvd" onClick={disconnectWallet}>
                //   <span>Disconnect Wallet</span>
                // </button>
              ) : (
                <button className="vvd" onClick={handle_connect}>
                  <span>Connect Wallet</span>
                </button>
              )}
              {/* </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
