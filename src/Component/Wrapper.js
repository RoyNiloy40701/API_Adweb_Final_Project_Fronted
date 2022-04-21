import Content_Wrapper from "./Content_Wrapper"
import Sidebar from "./Sidebar"

const Wrapper=()=>{
     return (
          <div id="wrapper">
               <Sidebar></Sidebar>
               <Content_Wrapper></Content_Wrapper>

          </div>

     )
};
export default Wrapper;