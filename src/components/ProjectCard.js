import { set } from "firebase/database";
import { Col } from "react-bootstrap";
import VoteModal from "./VoteModal";
import React,{ useState } from "react";
import img from "../assets/img/img.jpg";



export const ProjectCard = ({ title, desc, imgUrl, wid , pid,count}) => {
  const [vote, setVote] = useState(false)
  const voteModal=()=>{
    console.log("modal")
    setVote(!vote)
  }
  return (
    <>
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl?imgUrl:img} />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <button onClick={voteModal} className="vote-now-btn">Vote Now!</button>
          <h6 style={{marginTop:'15px'}}>{count} votes so far.</h6>
        </div>
      </div>
    {vote?(<VoteModal title={title} desc={desc} imgUrl={imgUrl} wid={wid} pid={pid} />):(<></>)}
    </Col>
    </>
  )
}
