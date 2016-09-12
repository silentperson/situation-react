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
				    	<div className="row padding-down" >
					    	<NoChartMetric compid={1} charttitle="facebook"/>
					    	<NoChartMetric compid={2} charttitle="twitter"/>
					    </div>
					    <div className="row padding-down" >
					    	<NoChartMetric compid={3} charttitle="instagram"/>
					    	<NoChartMetric compid={4} charttitle="youtube"/>
					    </div>
					</div>
				</div> 
			</div>
		</div>
    );
    	
  }	
}

render(<SituationApp/>, document.getElementById('app'));