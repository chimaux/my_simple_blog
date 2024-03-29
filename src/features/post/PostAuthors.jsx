import React from "react";
import {selectAllusers} from "../users/usersSlice"
import {useSelector} from "react-redux"



const PostAuthors = (props) => {

  const users = useSelector(selectAllusers)
//  console.log(users)

  return (
    <select
      value={props.Author}
      name="author"
      className="userSelect"
      onChange={props.UserIdFunction}
    >
      {/* <option className="userOption" >visitor name</option> */}
      {
        users.map((item,index)=>(
<option className="userOption" key={index.toString()}>{item.name}</option>

        ))
      }
    </select>
  );
};

export default PostAuthors;
