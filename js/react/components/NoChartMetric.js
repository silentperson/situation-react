import React from 'react';
import {render} from 'react-dom';

export default class NoChartMetric extends React.Component {
   render () {
    return (
    	<div className="col-sm-6 cf-item" style={{paddingBottom:20}}>
			<header>
				<p><span></span>{this.props.charttitle}</p>
			</header>
			<div className="content">
				<div className="cf-svmc-sparkline">
					<div className="cf-svmc">
						<div className="row">
							<div className="col-sm-12">
								<h3>Likes</h3>
								<div className="metric">1,403,500</div>						
								<div className="change m-green metric-small" style={{display:'inline-block'}}>							
									<div className="arrow-up"></div>
									<span className="large">32<span className="small">.45%</span></span>
								</div>					
							</div>	
							<div className="col-sm-12">
								<h3>Comments</h3>
								<div className="metric">3333</div>						
								<div className="change m-green metric-small" style={{display:'inline-block'}}>							
									<div className="arrow-up"></div>
									<span className="large">32<span className="small">.45%</span></span>
								</div>		
							</div>
						</div>				
						<div className="row">
							<div className="col-sm-6">
								<h3>Shares</h3>
								<div className="metric">3333</div>						
								<div className="change m-green metric-small" style={{display:'inline-block'}}>							
									<div className="arrow-up"></div>
									<span className="large">32<span className="small">.45%</span></span>
								</div>				
							</div>
						</div>		
					</div>					
				</div>
			</div>
		</div>
    );
    	

  }	
}
