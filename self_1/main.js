function enter()
			{
				var details={
					pic : "1.jpg",
					name : "sakshi"
				}
				document.getElementById('beforeLogin').style.display='none';
				document.getElementById('afterLogin').style.display='block';
				document.getElementById('box').style.height='110px';
				 document.getElementById('image').src=details.pic;
				 document.getElementById('caption').innerHTML=details.name;
			}