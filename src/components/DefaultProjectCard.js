import { set } from "firebase/database";
import { Col } from "react-bootstrap";
import VoteModal from "./VoteModal";
import React,{ useState } from "react";
import img from "../assets/img/img.jpg";



export const DefaultProjectCard = ({ title, desc, imgUrl, wid , pid}) => {
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
          <h4>{title}</h4>
          <button className="vote-now-btn">Vote Now!</button>
        </div>
      </div>
    {vote?(<VoteModal title={title} desc={desc} imgUrl={imgUrl} wid={wid} pid={pid} />):(<></>)}
    </Col>
    </>
  )
}
