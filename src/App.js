import logo from './logo.svg';
import Navbarcomp from './Components/Navbar';
import Firstcontainer from './Components/Firstcontainer';
import SecondContainer from './Components/SecondContainer';
import Whatyoulearn from './Components/Whatyoulearn';
import './App.css';
import Review from './Components/Review';
import Secoondlast from './Components/Secondlast';
import Lastpage from './Components/Lastpage';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function App() {
  
  
 
  // function myfunction(){
  //   this.style.display = "block"
  // }

  const idd=document.getElementById("scroll")
  console.log(idd);
  // idd[0].addEventListener("click",myfunction)
 
  // function myfunction(){
  //    const move=document.getElementsByClassName("back")[0].style.display="block";
  //    console.log(move)

  // }

  return (
    <div className="App">
      
      <Navbarcomp />
      <Firstcontainer/>
      <header className="header">NEXT BATCH: 27 July | Apply Now</header>
      <SecondContainer/>
      <div className="about"></div>
      <Whatyoulearn/>
      {/* <Review/> */}
      {/* <div className="patner">Patner</div> */}
      {/* <Secoondlast/> */}
      {/* <Lastpage/> */}
<button className="back" id="scroll">
  <ExpandLessIcon/>
</button>
    </div>
  );




}

export default App;
