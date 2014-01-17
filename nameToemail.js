$(document).ready(function(){
	var $person = $('#person');
	var $personName = $('#person').text();
	var nameLength = $personName.length;
	var letters = $personName.split("");
	var lettersLen = letters.length;
	var newName = '';
	var noSpaceName = $personName.replace(" ", "");


	var i = 0;
	function nameLoop(){
		setTimeout(function(){
				//check if letter is a space
				if(letters[i] != " "){
					//if a valid letter add span
					letters[i] = '<span class="red">' + letters[i] + '</span>';
					//join each array itme into a string
					newName = letters.join("");
					//add name back to the DOM one letter at a time
					$person.html(newName);
					i++;
					if(i < lettersLen){
						//check to see if loop needs to keep running
						nameLoop();
					}else{
						//if end of loop
						newName = letters.join("");
						//add href for mailto:
						var href = 'mailto:' + noSpaceName + '@gmail.com';
						//add email to end of persons name
						newName += '<span class="red">@gmail.com</span>';
						//wrap persons name in a tag
						$person.wrap(function(){
							return "<a href='" + href + "'></a>";

						});
						$person.html(newName);
						$('#trigger').attr("disabled", "disabled");
					}
				}else{
					//if there is a space remove it
					letters.splice(i, 1);
					//adjust length that the loop is expecting to offset removing an item
					lettersLen--;
					//call loop
					nameLoop();
				}

		},200)
	}
	

	$('#trigger').click(nameLoop);
	
	
});