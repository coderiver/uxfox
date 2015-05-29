head.ready(function() {
	val = $('.form__input input').val();
	fi = $('.form__input');
	inp = $('.form__input input');
	but = $('.form__button');


	inp.keyup(function(event) {
		fi.removeClass('is-error');
		if(isvalid()){
			ok();
		}else{
			but.prop("disabled", true)
		}
	});
	inp.blur(function(event) {
		if(isvalid()){
			ok();
		}else{
			but.prop("disabled", true);
			fi.addClass('is-error').removeClass('is-ok');
		}
	});
	// $('form').submit(function(event) {
	// 	if(!validateme()){
	// 		return false;
	// 	}
	// });
	function ok(){
		fi.removeClass('is-error').addClass('is-ok');
		but.prop("disabled", false);
	}
	function validateme(){
		
		if(isvalid()){
			fi.addClass('is-ok');
		}
		else{
			fi.addClass('is-error').removeClass('is-ok')
		}
	}
	function isvalid(){
		b = validateEmail(inp.val()) && !checkBlackList(inp.val());
		return b;
	}




	blackList    = [
	                'sharklasers.com',
	                'guerrillamailblock.com',
	                'guerrillamail.com',
	                'guerrillamail.net',
	                'guerrillamail.biz',
	                'guerrillamail.org',
	                'guerrillamail.de',
	                'spam4.me',
	                'mailspeed.ru',
	                'mqkr.net',
	                '12minutemail.com',
	                'mytempemail.com',
	                'spamobox.com',
	                'vipmail.pw',
	                'shitmail.me',
	                'disposableinbox.com',
	                'filzmail.com',
	                'freemail.msuroid.com',
	                'anonymbox.com',
	                'yopmail.com',
	                'TempEMail.net',
	                'spambog.com',
	                'spambog.de',
	                'mfsa.ru',
	                'spam.su',
	                'nospam.ws',
	                'mailinator.com',
	                'safetymail.info',
	                'trashcanmail.com',
	                'mintemail.com',
	                'jetable.org',
	                'dispostable.com',
	                'spamgourmet.com',
	                'mailforspam.com'
	            ];

	        function validateEmail(email) {
	            var check;
	            var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	            if (re.test(email)) {
	                check = true;
	            } else {
	                check = false;
	            }
	            return check;
	        }

	        function checkBlackList(email) {
	            var check = false,
	                i     = 0,
	                max   = blackList.length - 1;
	            while( check === false ){
	                var domain = new RegExp(blackList[i]);
	                if ( domain.test(email) ) {
	                    console.log(email, domain);
	                    check = true;
	                    return check;
	                } else if ( i < max ) {
	                    i++;
	                } else {
	                    check = false;
	                    return check;
	                }
	            }
	        }
});