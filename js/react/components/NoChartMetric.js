import React from 'react';
import {render} from 'react-dom';

export default class NoChartMetric extends React.Component {
	addCommas(nStr)
	{
	    nStr += '';
	    let x = nStr.split('.');
	    let x1 = x[0];
	    let x2 = x.length > 1 ? '.' + x[1] : '';
	    let rgx = /(\d+)(\d{3})/;
	    while (rgx.test(x1)) {
	        x1 = x1.replace(rgx, '$1' + ',' + '$2');
	    }
	    return x1 + x2;
	}

   render () {
   	var numrows=3;
   	var rows = [];
   	var itemslist = [];

   	switch(this.props.charttitle)
   	{
   		case "facebook":
   			itemslist = [
   				{
   					name:"Likes",
   					value:1500000
   				},
   				{
   					name:"Posts",
   					value:560
   				},
   				{
   					name:"Comments",
   					value:4500
   				},
   			];
   			break;
   		case "twitter":
   			itemslist = [
   				{
   					name:"Tweets",
   					value:300000
   				},
   				{
   					name:"Retweets",
   					value:500
   				},
   			];
   			break;
   		case "youtube":
   		   	itemslist = [
   				{
   					name:"Views",
   					value:45000000
   				},
   				{
   					name:"Subscribers",
   					value:567
   				},

   			];
   			break;
   		case "instagram":
    		   	itemslist = [
   				{
   					name:"Content",
   					value:5678
   				},
   				{
   					name:"Likes",
   					value:250000
   				},
   				{
   					name:"Comments",
   					value:4568
   				},

   			];
   			break;

   	}

	for (var i=0; i < itemslist.length; i++) {
	    rows.push(
	    	<div className="col-sm-12">
				<h3 style={{marginTop:10}}>{itemslist[i].name}</h3>
				<div className="metric">{this.addCommas(itemslist[i].value)}</div>						
				<div className="change m-green metric-small" style={{display:'inline-block'}}>							
					<div className="arrow-up"></div>
					<span className="large">32<span className="small">.45%</span></span>
				</div>					
			</div>
	    );
	}

    return (
    	<div className="col-sm-6 cf-item" style={{paddingBottom:20}}>
			<header>
				<p><span></span>{this.props.charttitle}</p>
			</header>
			<div className="content">
				<div className="cf-svmc-sparkline">
					<div className="cf-svmc">
						<img src={"img/"+this.props.charttitle+".svg"} className="hidden-xs hidden-sm img-responsive img-logo" width="80px" height="80px"/>
						<div className="row">
							{rows}						
						</div>		
					</div>					
				</div>
			</div>
		</div>
    );
    	

  }	
}
