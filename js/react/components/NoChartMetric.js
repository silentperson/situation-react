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

   percentdiff(item1,item2)
   {
      if (item2!==undefined)
      {
         return (item1/item2*100).toFixed(2);
      }
      return 0;
   }

   render () {
   	var numrows=3;
   	var rows = [];
   	var itemsdata = this.props.jsondata;
      var itemslist = [];

      var d = new Date();
      var n = d.getFullYear();

   	switch(this.props.charttitle)
   	{
   		case "facebook":
            if (itemsdata!=false)
            {
               console.log(itemsdata[2015]);
               console.log(itemsdata[2016]);
               for (var i=0;i<itemsdata[n].length;i++)               
               {
                  if (itemsdata[n][i].network == 'facebook')
                  {
                     itemslist = [
                        {
                           name:"Fans",
                           value:itemsdata[n][i].maxlikes,                           
                           previousamt: -1
                        },                        
                        {
                           name:"Likes",
                           value:itemsdata[n][i].totallikes,
                           percentdiff: this.percentdiff(itemsdata[n][i].totallikes,itemsdata[n-1][i].totallikes),
                           previousamt: itemsdata[n-1][i].totallikes
                        },
                        {
                           name:"Comments",
                           value:itemsdata[n][i].totalfacebookcomments,
                           percentdiff: this.percentdiff(itemsdata[n][i].totalfacebookcomments,itemsdata[n-1][i].totalfacebookcomments),
                           previousamt: itemsdata[n-1][i].totalfacebookcomments
                        },
                        {
                           name:"Posts",
                           value:itemsdata[n][i].totalposts,
                           percentdiff: this.percentdiff(itemsdata[n][i].totalposts,itemsdata[n-1][i].totalposts),
                           previousamt: itemsdata[n-1][i].totalposts                        
                        },                                                
                     ];
                  }
               }
            }   			
   			break;
   		case "twitter":
            if (itemsdata!=false)
            {
               for (var i=0;i<itemsdata[n].length;i++)               
                  {
                     if (itemsdata[n][i].network == 'twitter')
                     {
                        itemslist = [
                           {
                              name:"Followers",
                              value:itemsdata[n][i].contributorfollowersmax,                              
                              previousamt: -1                           
                           },
                           {
                              name:"Tweets",
                              value:itemsdata[n][i].totalposts,
                              percentdiff: this.percentdiff(itemsdata[n][i].totalposts,itemsdata[n-1][i].totalposts),
                              previousamt: itemsdata[n-1][i].totalposts                           
                           },
                           {
                              name:"Retweets",
                              value:itemsdata[n][i].totalretweet,
                              percentdiff: this.percentdiff(itemsdata[n][i].totalretweet,itemsdata[n-1][i].totalretweet),
                              previousamt: itemsdata[n-1][i].totalretweet
                           },
                        ];
                     }
                  }         
            }
   			
   			break;
   		case "youtube":
            if (itemsdata!=false)
            {
               for (var i=0;i<itemsdata[n].length;i++)               
                  {
                     if (itemsdata[n][i].network == 'youTube')
                     {
                        itemslist = [
                           {
                              name:"Videos",
                              value:itemsdata[n][i].maxstatus,           
                              percentdiff: this.percentdiff(itemsdata[n][i].maxstatus,itemsdata[n-1][i].maxstatus),
                              previousamt: itemsdata[n-1][i].maxstatus                                              
                           },
                           {
                              name:"Views",
                              value:itemsdata[n][i].maxviews,
                              percentdiff: this.percentdiff(itemsdata[n][i].maxviews,itemsdata[n-1][i].maxviews),
                              previousamt: itemsdata[n-1][i].maxviews                                              
                           },
                           {
                              name:"Comments",
                              value:itemsdata[n][i].maxcomments,
                              percentdiff: this.percentdiff(itemsdata[n][i].maxcomments,itemsdata[n-1][i].maxcomments),
                              previousamt: itemsdata[n-1][i].maxcomments                                              
                           },
                        ];
                     }
                  }         
            }   		   	   			
   			break;
   		case "instagram":
            if (itemsdata!=false)
            {
               for (var i=0;i<itemsdata[n].length;i++)               
                  {
                     if (itemsdata[n][i].network == 'instagram')
                     {                                       
                        itemslist = [
                           {
                              name:"Followers",
                              value:itemsdata[n][i].maxlikes,                              
                              previousamt: -1
                           },                           
                           {
                              name:"Likes",
                              value:itemsdata[n][i].totallikes,                              
                              previousamt: -1
                           },
                           {
                              name:"Comments",
                              value:itemsdata[n][i].totalfacebookcomments,                              
                              previousamt: -1

                           },
                           {
                              name:"Posts",
                              value:itemsdata[n][i].totalposts,
                              percentdiff: this.percentdiff(itemsdata[n][i].totalposts,itemsdata[n-1][i].totalposts),
                              previousamt: itemsdata[n-1][i].totalposts
                           },                           
                        ];
                     }
                  }         
            }        
   			break;

   	}

	for (var i=0; i < itemslist.length; i++) {
      if ((this.props.charttitle=='youtube')||(itemslist[i].previousamt==-1))
      {
        rows.push(      
         <div className="col-sm-12" key={'mykey'+i} style={{padding:15}}>
            <div className="metric">{this.addCommas(itemslist[i].value)} {itemslist[i].name}</div>                              
            <div className="change metric-small" style={{display:'inline-block'}}>                   
               <div className="arrow-"></div>
               <span className="large"></span>
            </div>   
         </div>
       );
      }
      else
      {
	    rows.push(      
	    	<div className="col-sm-12" key={'mykey'+i} style={{padding:15}}>
				<div className="metric">{this.addCommas(itemslist[i].value)} {itemslist[i].name}</div>						
				<div className={"change metric-small"} style={{display:'inline-block'}}>												
					<span className="large">{this.addCommas(itemslist[i].previousamt)} {itemslist[i].name} last year</span>
				</div>					
			</div>
	    );
      }
	}

    return (
    	<div className="col-sm-6 cf-item" style={{paddingBottom:20,paddingTop:25}}>
			<header>
				<p><span></span>{this.props.charttitle}</p>
            <img src={"img/"+this.props.charttitle+".svg"} className="hidden-xs hidden-sm img-responsive img-logo" width="80px" height="80px" style={{paddingRight:15}}/>
			</header>

			<div className="content">
				<div className="cf-svmc-sparkline">
					<div className="cf-svmc">						
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
