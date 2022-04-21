import ContentRowChart from "./ContentRowChart"
import ContentRowProject from "./ContentRowProject"
import ContentRowStatus from "./ContentRowStatus"
import PageHeading from "./PageHeading"

const PageContent=()=>{
     return(
          <div class="container-fluid">
               <PageHeading></PageHeading>
              <ContentRowStatus></ContentRowStatus>
              <ContentRowChart></ContentRowChart>
              <ContentRowProject></ContentRowProject>

          </div>
     )
};
export default PageContent;