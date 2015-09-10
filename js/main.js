$(function() {
	
	var getDaysUntilRelease = function() {
		var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
		var releaseDate = new Date(2016,09,22);
		var today = new Date();

		var diffDays = Math.round(Math.abs((releaseDate.getTime() - today.getTime())/(oneDay)));
		return diffDays;
	};
	
	var days = getDaysUntilRelease();
	
	var progressFullWidth = 500;
	var totalDaysProgress = 835; // From 11-06-2014 to 22-09-2016 which is the release date
	var currentProgressWidth = (days * 100) / totalDaysProgress;
	$('.progress-bar .progress').animate({ width: currentProgressWidth + '%' }, 2000);
	
	var daysAllTestsRun = 62; 		// From 11-06-2014 to 11-08-2014
	var daysFeatureComplete = 548;	// From 11-06-2014 to 10-12-2015
	var daysAllTestsRun2 = 604;		// From 11-06-2014 to 04-02-2016
	var daysZeroBugs = 681;			// From 11-06-2014 to 21-04-2016
	var daysFinalRc = 772;			// From 11-06-2014 to 21-07-2016
	
	$('.divider.all-tests-run').css({ left: (daysAllTestsRun * 100 / totalDaysProgress) + '%' });
	$('.divider.feature-complete').css({ left: (daysFeatureComplete * 100 / totalDaysProgress) + '%' });
	$('.divider.all-tests-run2').css({ left: (daysAllTestsRun2 * 100 / totalDaysProgress) + '%' });
	$('.divider.zero-bug-bounce').css({ left: (daysZeroBugs * 100 / totalDaysProgress) + '%' });
	$('.divider.final-rc').css({ left: (daysFinalRc * 100 / totalDaysProgress) + '%' });
	
		
	$('a.twitter-share-button').attr('data-text', 'Only ' + days + ' days left until #Java9 is released!');
	$('.tweet-this').attr('href', 'https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A8082%2F&ref_src=twsrc%5Etfw&text=Only%20' + days + '%20days%20left%20until%20%23Java9%20is%20released!&tw_p=tweetbutton&url=http%3A%2F%2Fjava9.xyz&via=takipid')
	
	window.odometerOptions = {
		auto: false,
		format: '(ddd)',
		duration: 3000
	};
	
	var el = document.querySelector('.odometer');
	var odometer = new Odometer({
		el: el,
		value: 999
	});
	odometer.update(days);
	
	$('.subscribe-button').click(function() {
		var email = $('#subscribeEmail').val();
		var data = {
			"email_address": email,
			"status": "subscribed"
		}
		$.ajax({
			beforeSend: function(xhr) {
				xhr.setRequestHeader ("Authorization", "Basic XXXXXX");
			}
		})
	});

	
});
