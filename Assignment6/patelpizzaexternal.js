function readForm()
		{
		var FirstName, LastName, USaddress, USPhonenumber, TodayDate, CurrentTime, Size, Drink, Dessert, Totalcost;
		var d = new Date();
		TodayDate = d.toLocaleDateString();
		CurrentTime = d.toLocaleTimeString();

		FirstName = document.Pizza.Fname.value;
		LastName = document.Pizza.Lname.value;
		USaddress = document.Pizza.usaddress.value;
		USPhonenumber = document.Pizza.usPhone.value;

	
		Size=document.getElementById("choicesize").value;
		Drink=document.getElementById("choicedrink").value;
		Dessert=document.getElementById("choicedessert").value;

		
		Size=parseInt(Size)
		Drink=parseInt(Drink)
		Dessert=parseInt(Dessert)
		

		Totalcost=(Size+Drink+Dessert)

		document.write("Thank you " + FirstName + " " + LastName + "! We have your address as " + USaddress + ", your phone number is " 
		+ USPhonenumber + ". Your total cost for your order is &#36;" + Totalcost + ". Today's date is " + TodayDate + " and current time is " + CurrentTime + ".");
		}