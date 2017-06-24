function readForm()
		{
		var FirstName, LastName, USaddress, USPhonenumber, City, State, Zipcode, Email, TodayDate, CurrentTime, Size, Drink, Dessert, Totalcost;
		var d = new Date();
		TodayDate = d.toLocaleDateString();
		CurrentTime = d.toLocaleTimeString();
		
		
		var txttops = " ";
		var toppings = 0;

		FirstName = document.Pizza.Fname.value;
		LastName = document.Pizza.Lname.value;
		USaddress = document.Pizza.usaddress.value;
		USPhonenumber = document.Pizza.usPhone.value;
		City= document.Pizza.uscity.value;
		State= document.Pizza.ussate.value;
		Zipcode= document.Pizza.uszip.value;
		Email= document.Pizza.txtMail.value;

	
		Size=document.getElementById("choicesize").value;
		Drink=document.getElementById("choicedrink").value;
		Dessert=document.getElementById("choicedessert").value;

		
		Size=parseInt(Size)
		Drink=parseInt(Drink)
		Dessert=parseInt(Dessert)
		
		if (document.Pizza.chkmushrooms.checked)
		{
			txttops = txttops + "Mushrooms"
			toppings = toppings + 0.50;
		}

		if (document.Pizza.chkolives.checked)
		{
			txttops = txttops + "Olives"
			toppings = toppings + 0.50;
		}

		if (document.Pizza.chksausage.checked)
		{
			txttops = txttops + "Sausage"
			toppings = toppings + 0.50;
		}

		Totalcost=(Size+Drink+Dessert+toppings)

		document.write("Thank you for ording at Patel's Pizza " + FirstName + " " + LastName + "! We have your address as " + USaddress + ", "+ City + " " + State + " " + Zipcode + ". Your phone number is " 
		+ USPhonenumber + ". Your total cost for your order is &#36;" + Totalcost + ". Today's date is " + TodayDate + " and current time is " + CurrentTime + ".");
		}