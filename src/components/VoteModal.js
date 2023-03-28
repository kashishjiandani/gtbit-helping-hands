import React, { useState, useEffect } from "react";
import { ref, onValue, increment, update } from "firebase/database";
import { db } from "../firebase";
import { uid } from "uid";

function VoteModal({ title, desc, imgUrl, wid, pid }) {

  const [petition, setPetition] = useState("");
  const [modal, setModal] = useState(true)
  let walletId = window.localStorage.getItem("walletId");
  // console.log(walletId)
  const petitionId = uid();

  const handleVote = () => {
    update(ref(db, `${wid}/${pid}`), {
      count: increment(1),
    });
    alert("vote updated");
  };

  const closeModal =()=>{
    setModal(false)
  }

  return (
    <>
      <div class="vote-box" style={{display:modal?'flex':'none'}}>
        <div>
          <div style={{position:'absolute',top:'10%',right:'10%',cursor:'pointer'}} onClick={closeModal}>
           <h1 style={{color:'#6c6c6c'}}>x</h1>
          </div>
          <h1>{title}</h1>
          <h5>{desc}</h5>
          <button className="petitionBtn" onClick={handleVote}>
            Vote
          </button>
        </div>
      </div>
      {/* <div className='w-75 h-75' style={{backgroundColor:'red',zIndex:'2',position:'absolute'}}>
        
      </div> */}
    </>
  );
}

export default VoteModal;
