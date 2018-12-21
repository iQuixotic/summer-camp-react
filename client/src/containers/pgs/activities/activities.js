import * as React from "react";

import { 
  LakeStarePic, CampfireCirclePic
} from "../../../assets";
import { Layout } from "../../../containers";


import './style.css';

class ActivitiesPage extends React.Component {
    state = {
        headLine: 'Excon Page'
    }

  render() {
    return (
      <Layout>
        {/* <div className='row'> */}
          <p className='paragraph' >Here are some of our activities !!</p>
        {/* </div>         */}
        <div className='row flex'>
          <LakeStarePic cn='activity-pic'/>        
          <CampfireCirclePic cn='activity-pic'/>
          <LakeStarePic cn='activity-pic'/>   
        </div>
          
        <div className='row flex'>
          <CampfireCirclePic cn='activity-pic'/>
          <LakeStarePic cn='activity-pic'/>        
          <CampfireCirclePic cn='activity-pic'/>
        </div>

        <div className='row flex'>
          <LakeStarePic cn='activity-pic'/>        
          <CampfireCirclePic cn='activity-pic'/>
          <LakeStarePic cn='activity-pic'/>  
        </div>      

        <div className='row flex'>
          <CampfireCirclePic cn='activity-pic'/>
          <LakeStarePic cn='activity-pic'/>        
          <CampfireCirclePic cn='activity-pic'/>
        </div>

      </Layout>
    );
  }
}

export default ActivitiesPage;