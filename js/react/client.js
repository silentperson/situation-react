// tutorial1.js
var ChartMetric = React.createClass({
  render: function() {
    return (
      <div className="col-sm-6 cf-item">
		<header>
			<p><span></span>Comments</p>
		</header>
		<div className="content">
			<div className="cf-svmc-sparkline">
				<div className="cf-svmc">
					<div className="metric">3292</div>
					<div className="change m-green metric-small">
						<div className="arrow-up"></div>
						<span className="large">32<span className="small">.45%</span></span>
					</div>
				</div>
				<div className="cf-sparkline clearfix">
					<div id="spark-2" className="sparkline"></div>
					<div className="sparkline-value">
						<div className="metric-small">0</div>
					</div>
				</div>
			</div>
		</div>
	</div> 
    );
  }
});

ReactDOM.render(
  <ChartMetric />,
  document.getElementById('app')
);