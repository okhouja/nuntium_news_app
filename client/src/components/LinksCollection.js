import {React, useState} from 'react';
import {Link} from "react-router-dom";
 const LinksCollection = (props) => {
          
    const [linkArr, setLinkArr] = useState(props.location.state.value);
    console.log(linkArr);

    


    return (
        <div className="linkContainer">
            <div className="linkFather">
            
           <div className="linkInfo , linkTitle">{linkArr.title}</div> 
           <div className="linkPuplish">{linkArr.published_at}</div> 
          <div className="imgDiv">
        <img className="imgLink" src={linkArr.image} alt={linkArr.title} />
        <div className="linkmidFather"> 
           <div className="linkInfo"><p className="linkAuthorWord">Author:</p><p className="linkAuthor">{linkArr.author}</p></div> 
           <div className="linkInfo"><p className="linkAuthorWord">Source:</p><p className="linkAuthor">{linkArr.source}</p></div> 
           </div>
           </div>
        <div className="seemoreFather">
           <div className="linkDes">{linkArr.description} </div><div className="linkInfo"><a href={linkArr.url}>See more</a></div> 
           </div>
           <div className="backFather">

<Link className="backLink" to="/home"><p className="back">Back</p></Link>

 <div className="goUpRedirect"><a className="goUpanchor" href="#img">˄</a></div>
 <p className="goupwordRedirect">Go up</p>
 </div>
        
           </div>

          



        </div>
    )
}
export default LinksCollection;
