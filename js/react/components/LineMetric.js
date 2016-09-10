import React from 'react';
import {render} from 'react-dom';

export default class LineMetric extends React.Component {
   render () {
    return (
    	<div className="col-sm-6 cf-item">
			<header>
				<p><span></span>Line chart</p>
			</header>
			<div className="content cf-line" id="cf-line-1">
				<canvas id="cf-line-1-c" width="0" height="0"></canvas>
			</div>
		</div> 
    );
    	

  }	
}
