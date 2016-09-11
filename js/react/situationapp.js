import React from 'react';
import {render} from 'react-dom';
import ChartMetric from './components/ChartMetric';
import NoChartMetric from './components/NoChartMetric';
import TimeMetric from './components/TimeMetric';
import LineMetric from './components/LineMetric';
import SocialFeed from './components/SocialFeed';

class SituationApp extends React.Component {
   render () {
    return (    
		<div className="row">																								
			<SocialFeed/>				
			<div className="col-sm-6 cf-item">
				<div className="row">					
			    	<div className="col-sm-12">
				    	<div className="row" style={{paddingBottom:20}}>
					    	<NoChartMetric compid={1} charttitle="FACEBOOK"/>
					    	<NoChartMetric compid={2} charttitle="TWITTER"/>
					    </div>
					    <div className="row"  style={{paddingBottom:20}}>
					    	<NoChartMetric compid={3} charttitle="INSTAGRAM"/>
					    	<NoChartMetric compid={4} charttitle="YOUTUBE"/>
					    </div>
					</div>
				</div> 
			</div>
		</div>
    );
    	
  }	
}

render(<SituationApp/>, document.getElementById('app'));