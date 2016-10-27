import React from 'react';
import {render} from 'react-dom';
import ChartMetric from './components/ChartMetric';
import NoChartMetric from './components/NoChartMetric';
import TimeMetric from './components/TimeMetric';
import LineMetric from './components/LineMetric';
import SocialFeed from './components/SocialFeed';

class SituationApp extends React.Component {
	constructor() {
		super();
		this.state = {
			items : false,
			url : 'http://madlabsalpha.tk/social/api/getYearDiff?territory=Tourism%20Malaysia'
		};
	}

	componentDidMount() {

		$.ajax({
		      url: this.state.url,
		      dataType: 'json',
		      cache: false,
		      success: function(data) {
		      	console.log("success");
		        this.setState({items: data});
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
	      });
		setTimeout(
			function()
			{
				$.ajax({
			      url: this.state.url,
			      dataType: 'json',
			      cache: false,
			      success: function(data) {
			      	console.log("success");
			        this.setState({items: data});
			      }.bind(this),
			      error: function(xhr, status, err) {
			        console.error(this.props.url, status, err.toString());
			      }.bind(this)
		      });
		     }.bind(this)
	    , 3600000);
	}

	render () {
	return (    
		<div className="row">																								
			<SocialFeed/>				
			<div className="col-sm-6 cf-item">
				<div className="row">					
			    	<div className="col-sm-12">
				    	<div className="row padding-down" >
					    	<NoChartMetric compid={1} charttitle="facebook" jsondata = {this.state.items}/>
					    	<NoChartMetric compid={2} charttitle="twitter" jsondata = {this.state.items}/>
					    </div>
					    <div className="row padding-down" >
					    	<NoChartMetric compid={3} charttitle="instagram" jsondata = {this.state.items}/>
					    	<NoChartMetric compid={4} charttitle="youtube" jsondata = {this.state.items}/>
					    </div>
					</div>
				</div> 
			</div>
		</div>
	);
		
	}	
}

render(<SituationApp/>, document.getElementById('app'));