function readForm()
			{
			var homework, midterm, finals, total;
			
			homework= document.convert.Homewrok.value;
			midterm= document.convert.Midterm.value;
			finals= document.convert.Final.value;
			total = ((homework/200*50) + (midterm/100*20) + (finals/100*30));
			document.write("Your total percentage is "+ total + "%.");
			
			}