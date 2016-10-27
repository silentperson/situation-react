import React from 'react';
import {render} from 'react-dom';

export default class TimeMetric extends React.Component {
   render () {
    return (
    	<div className="col-sm-6 cf-item">
			<header>
				<p><span></span>Time &amp; date</p>
			</header>
			<div className="content">
				<div className="cf-td cf-td-12">
					<div className="cf-td-time metric">12:00</div>
					<div className="cf-td-dd">
						<p className="cf-td-day metric-small">Monday</p>
						<p className="cf-td-date metric-small">1st October, 2013</p>
					</div>
				</div>
			</div>
		</div> 
    );
    	

  }	
}
