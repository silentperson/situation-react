import React from 'react';
import {render} from 'react-dom';
import ChartMetric from './components/ChartMetric';
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
				    	<div className="row">
					    	<ChartMetric compid={1}/>
					    	<ChartMetric compid={2}/>
					    </div>
					    <div className="row">
					    	<TimeMetric/>
					    	<LineMetric/>
					    </div>
					</div>
				</div> 
			</div>
		</div>
    );
    	
  }	
}

render(<SituationApp/>, document.getElementById('app'));