import React from 'react'
import FacebookLogin from 'react-facebook-login';

const Facebook = () => {



    const responseFacebook = (response) => {
        console.log(response);
      }


const componentClicked = () =>{
    alert('evento onClick');
}



  return (
    <div><FacebookLogin
    appId="415931527485808"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook}
    
    /></div>
  )
}

export default Facebook