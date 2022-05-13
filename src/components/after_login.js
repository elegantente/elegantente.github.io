import React, { useState } from "react";
import axios from "axios";






var config = {
  method: 'get',
  url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=6bba403051b76af0cbe8fa3816db1c9b&language=en-US&page=1',
  headers: { }
};

axios(config)
.then(function (response) {
  const relace_place = document.querySelector('.relase-place');



  for(let i = 0; i < response.data.results.length; i++){
   (relace_place.innerHTML += response.data.results[i].title + "  | " + response.data.results[i].video   + '<br>')
   console.log(response.data.results[i].title)
  }
})
.catch(function (error) {
  console.log(error);
});

  

class After_Login extends React.Component{


  

    render(){
        return(
        <header className="App-header">
      </header>
      )
    }

}


export default After_Login