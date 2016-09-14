import React from 'react';
import {render} from 'react-dom';

export default class SocialFeed extends React.Component {
	componentDidMount() {
		$('.social-feed-container').socialfeed({		    
		    facebook:{
		        accounts: ['@malaysia.travel'],  //Array: Specify a list of accounts from which to pull wall posts
		        limit: 2,                                   //Integer: max number of posts to load
		        access_token: '438094802901450|rVxUCX9FrILNjsvpo17pijbsQX8'  //String: "APP_ID|APP_SECRET"
		    },
		    show_media:true, 
        length:400,           
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
   		height:1000,
   		margin:'auto'
   	};

    return (
    	<div className="col-sm-6" style={{height:1000}}>
			<header style={headerStyle}>
				<p style={pStyle}><span style={spanStyle}></span>Latest Posts</p>
			</header>
			<div className="content cf-rss">
				<div id="cf-rss-5" className="carousel slide" data-ride="carousel" style={carouselStyle}>
					<div className="carousel-inner social-feed-container" style={{height:"auto"}}>							
					</div>						
				</div>
			</div>				
		</div> 
    );
    	

  }	
}
