import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from '../firebase'
import { uid } from 'uid';

function CreatePetitionCard() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let walletId = window.localStorage.getItem('walletId')
    if(!walletId){
      alert("Connect to the wallet first!")
    }else{
      const petitionId = uid();
      set(ref(db, `${walletId}/${petitionId}/`), {
        title,
        desc,
        walletId,
        petitionId,
        count: 0,
      });
      alert(`uploaded in ${walletId}`);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <>
      <div class="petition-box">
        <form>
          <div className="d-flex justify-content-center align-items-start flex-column">
          <label htmlFor="petitionTitle" style={{fontSize:'x-large'}}>Title of your petition:</label>
          <input type="text" id="petitionTitle" className="petitionInput" placeholder="Title of your Petition" value={title} onChange={e => setTitle(e.target.value)}/>
          </div>
          <div className="d-flex justify-content-center align-items-start flex-column mt-4">
          <label for="petitionDesc" style={{fontSize:'large'}}>Describe the cause of your petition (in 20-25 words):</label>
          <textarea id="petitionDesc"rows="4" cols="50" className="petitionDesc" placeholder="Describe your petition and its cause..." value={desc} onChange={e => setDesc(e.target.value)}></textarea>
          </div>
          <div className="d-flex justify-content-center align-items-start flex-column mt-5">
            <button className="petitionBtn" onClick={handleSubmit}>Create Petition</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreatePetitionCard;
