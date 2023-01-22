$(document).ready(function(){
  $('.single-item').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
	$('.multiple-items').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $('.one-time').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    touchMove: false,
    slidesToScroll: 1
  });
  $('.uneven').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4
  });
  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.autoplay').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });


//	$("#carousel6").on
//		(
//			'click',
//			function (event)
//			{
//				//alert('event::'+event);
//				alert('this.id::'+this.id);
////				console.log('slidesToScroll::'+$(".slick").css('slidesToScroll'));
////				console.log('dots::'+$('.autoplay').slick({'dots'}));
////$('.autoplay').slick({dots: true,infinite: true,speed: 300,slidesToShow: 3,slidesToScroll: 1,autoplay: true,autoplaySpeed: 2000});
////				var getName = $(this).data ('name');
////				var tableName = 'tableActive' + getName;
////
////				$('table[class*="tableActive"]').removeClass
////					(
////						function (index, css)
////						{
////							return (css.match (/\btableActive\S+/g) || []).join (' ');
////						}
////					);
////
////				$('#tblCharges').addClass (tableName);
//			}
//		);


  $('.test1').slick({//only autoscroll on desktop
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.test2').slick({//autoscroll on both desktop and mobile
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    	{
    		breakpoint: 1024,
    		settings: {
    			slidesToShow: 3
    		}
    	},
    	{
    		breakpoint: 683,
    		settings: {
    			slidesToShow: 2
    		}
    	},
    	{
    		breakpoint: 585,
    		settings: {
    			slidesToShow: 2
    		}
    	},
    	{
    		breakpoint: 536,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 410,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 320,
    		settings: {
    			slidesToShow: 1
    		}
    	}
    ]
  });

  $('.riedl').slick({//autoscroll on both desktop and mobile
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    	{
    		breakpoint: 1024,
    		settings: {
    			slidesToShow: 3
    		}
    	},
    	{
    		breakpoint: 683,
    		settings: {
    			slidesToShow: 2
    		}
    	},
    	{
    		breakpoint: 585,
    		settings: {
    			slidesToShow: 2
    		}
    	},
    	{
    		breakpoint: 536,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 410,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 320,
    		settings: {
    			slidesToShow: 1
    		}
    	}
    ]
  });

  $('.mekapharm').slick({//autoscroll on both desktop and mobile
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    	{
    		breakpoint: 1024,
    		settings: {
    			slidesToShow: 3
    		}
    	},
    	{
    		breakpoint: 683,
    		settings: {
    			slidesToShow: 2
    		}
    	},
    	{
    		breakpoint: 585,
    		settings: {
    			slidesToShow: 2
    		}
    	},
    	{
    		breakpoint: 536,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 410,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 320,
    		settings: {
    			slidesToShow: 1
    		}
    	}
    ]
  });

  $('.software').slick({//autoscroll on both desktop and mobile
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    	{
    		breakpoint: 1024,
    		settings: {
    			slidesToShow: 3
    		}
    	},
    	{
    		breakpoint: 683,
    		settings: {
    			slidesToShow: 2
    		}
    	},
    	{
    		breakpoint: 585,
    		settings: {
    			slidesToShow: 2
    		}
    	},
    	{
    		breakpoint: 536,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 410,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 320,
    		settings: {
    			slidesToShow: 1
    		}
    	}
    ]
  });

  $('.conveying').slick({//autoscroll on both desktop and mobile
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    	{
    		breakpoint: 1024,
    		settings: {
    			slidesToShow: 3
    		}
    	},
    	{
    		breakpoint: 683,
    		settings: {
    			slidesToShow: 2
    		}
    	},
    	{
    		breakpoint: 585,
    		settings: {
    			slidesToShow: 2
    		}
    	},
    	{
    		breakpoint: 536,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 410,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 320,
    		settings: {
    			slidesToShow: 1
    		}
    	}
    ]
  });

  $('.projects').slick({//autoscroll on both desktop and mobile
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    	{
    		breakpoint: 1024,
    		settings: {
    			slidesToShow: 3
    		}
    	},
    	{
    		breakpoint: 683,
    		settings: {
    			slidesToShow: 2
    		}
    	},
    	{
    		breakpoint: 585,
    		settings: {
    			slidesToShow: 2
    		}
    	},
    	{
    		breakpoint: 536,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 410,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 320,
    		settings: {
    			slidesToShow: 1
    		}
    	}
    ]
  });

  $('.articles').slick({//autoscroll on both desktop and mobile
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    	{
    		breakpoint: 1024,
    		settings: {
    			slidesToShow: 4
    		}
    	},
    	{
    		breakpoint: 683,
    		settings: {
    			slidesToShow: 2
    		}
    	},
    	{
    		breakpoint: 585,
    		settings: {
    			slidesToShow: 2
    		}
    	},
    	{
    		breakpoint: 536,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 410,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 320,
    		settings: {
    			slidesToShow: 1
    		}
    	}
    ]
  });

});