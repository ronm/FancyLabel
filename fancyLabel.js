(function($){
	$.fn.fancyLabel = function(options) {
  	
  		var settings = $.extend( {
	  		"label": "label", 
	  		"input": 'input[type="text"]',
	  		"before": null,
	  		"after": null
	  	}, options);

	  	return this.each(function(){
	  		var $wrapper = $(this),
	  			$label = $wrapper.find(settings.label),
	  			$input = $wrapper.find(settings.input),
	  			inputProp = {"height" : $input.outerHeight(), "width" : $input.outerWidth()};
	  		  		
	  		$wrapper.addClass("fancy-label").css(inputProp)
	  		    	.hover(function() { $wrapper.addClass("hover"); 
	  		    	}, 	   function() { $wrapper.removeClass("hover"); 
	  		});
	  		    	
	  		$input.css({"width": "100%"})
	  			  .focus(function() { 
		  			$wrapper.addClass("focus"); 

	  		            if (typeof settings.before === "function") {
		  		        	settings.before.apply($wrapper);		  		      
	  		            }
		  			
	  			}).blur(function() { 
		  			$wrapper.removeClass("focus");
		  			
		  			if (typeof settings.after === "function") {
		  		       	settings.after.apply($wrapper);
		  		    }
		  		    
	  			}).keyup(function() {
	  				if ($input.val() && !$wrapper.hasClass("has-text")) {
		  				$wrapper.addClass("has-text");
	  		              
	  		        } else if (!$input.val() && $wrapper.hasClass("has-text")) {
	  		        	$wrapper.removeClass("has-text");	  		              
	  		        }
	  		});
	  		
	  		
	  		if ($input.val()) {
	  			$input.trigger("keyup");
	  			if (settings.before && typeof settings.before === "function" ) {
		  			settings.before.call();
	  			}
	  		}
	  		
	  	});// this.each
	};
})(jQuery);