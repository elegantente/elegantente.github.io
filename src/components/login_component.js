import {React,useEffect,useState} from "react";
import axios from 'axios'




const Login = () => {

  const [page,setPage] = useState(1)

console.log(page)

  useEffect(()=>{





    var config = {
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=6bba403051b76af0cbe8fa3816db1c9b&page='+page,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      const relace_place = document.querySelector('.relase-place');
    
    
    
      for(let i = 0; i < response.data.results.length; i++){
            var title =  response.data.results[i].title;
            var overview = response.data.results[i].overview;
          var image = response.data.results[i].poster_path;
          
          if(image == null){
            var image_url = "https://via.placeholder.com/300x450";
          }else{
            var image_url = 'https://image.tmdb.org/t/p/original' + image;
          }
         
          if(overview.length <= 5){
            var overview  = "Overview will be available soon !";
          }

  

          (relace_place.innerHTML +=  '<div class="box">' +'<div class="poster-holder">'  + title   + '<img class="posterimg" src=' + image_url +'>'    + '</div>'    + '<div class="overview">'  + overview + '</div>'  + '<br>'  +  '</div>'        )
       console.log(response.data.results[i].title)
      }
      
    })
    .catch(function (error) {
      console.log(error);
    });
    
  },[page])
    



        return(
          
        <header className="App-header" >
<div className="relase-holder">
        



        
          <div className="relase-place" >    
          </div> 
       

          </div>
          <button className="scroll_down" onClick={(_)=>{
            setPage(page+1)
          }}>
            <p className="down-s"><i class="arrow-down"></i></p>
          </button>
        </header>
      )    

}


export default Login