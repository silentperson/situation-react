import React from 'react';
import {render} from 'react-dom';

export default class SocialFeed extends React.Component {
	componentDidMount() {
		$('.social-feed-container').socialfeed({		    
		    facebook:{
		        accounts: ['@malaysia.travel'],  //Array: Specify a list of accounts from which to pull wall posts
		        limit: 5,                                   //Integer: max number of posts to load
		        access_token: '438094802901450|rVxUCX9FrILNjsvpo17pijbsQX8'  //String: "APP_ID|APP_SECRET"
		    },
        // TWITTER
        twitter:{
            accounts: ['@tourismmalaysia'],                      //Array: Specify a list of accounts from which to pull tweets
            limit: 5,                                   //Integer: max number of tweets to load
            consumer_key: 'bHpN7fxBkwJ2zxaktbRUQ2yCV',          //String: consumer key. make sure to have your app read-only
            consumer_secret: 'dveS8wRMTFaKLUAbeoNIKtYPE7pI6TEznB5SWMyEtl4lQq54WO',//String: consumer secret key. make sure to have your app read-only
         },
        instagram:{
          accounts: ['@malaysia.truly.asia'],  //Array: Specify a list of accounts from which to pull posts
          limit: 5,                                   //Integer: max number of posts to load
          access_token: '430971923.d4bfcd8.51d1bbb0da5b415a9ecb9d825aef67af' //String: Instagram access token
        },
		    show_media:true, 
        length:900,           
		});
	}

   render () {
   	var headerStyle = {
   		borderBottomColor:'#4f4f4f',
   		textTransform:'uppercase',
   		borderBottom:'solid 1px'
   	};

   	var pStyle = {
   		margin:'5px 0 5px 0',
   		whiteSpace:'nowrap'
   	};

   	var spanStyle = {
   		backgroundColor:'#4f4f4f',
   		display:'inline-block',
   		width:5,
   		height:2,
   		marginBottom:2,
   		marginRight:5
   	};

    var carouselStyle = {
          height:900,
          margin:'auto',
          background: 'white' 
      };
    return (
    	<div className="col-sm-6" style={{height:900,paddingTop:25}}>
			<header style={headerStyle}>

				<p style={pStyle}><span style={spanStyle}></span>Latests Posts</p>
			</header>
			<div className="content cf-rss">
				<div id="cf-rss-5" className="carousel slide" data-ride="carousel" data-interval="20000" style={carouselStyle}>
					<div className="carousel-inner social-feed-container" style={{height:"auto"}}>							
					</div>						
				</div>      
			</div>	
      
		</div> 
    );
    	

  }	
}
