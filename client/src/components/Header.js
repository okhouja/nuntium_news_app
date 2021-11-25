import {React} from 'react';

  
function Header ({theme}){

    console.log(theme);
  
   return(
     <div className={`${theme}`}>
        
        
                    <div  className="imgDivFather">                      
            <img id="img" className="logo" src="./img/Logo_lightmode.svg" alt="logo"></img>                
            </div>   
        </div>
        
    )
}
export default Header;
