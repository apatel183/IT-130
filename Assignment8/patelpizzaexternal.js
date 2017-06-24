function readForm()
		{
		var FirstName, LastName, USaddress, USPhonenumber, City, State, Zipcode, Email, TodayDate, CurrentTime, Size, Drink, Dessert, Totalcost;
		var d = new Date();
		TodayDate = d.toLocaleDateString();
		CurrentTime = d.toLocaleTimeString();
		
		
		var txttops = " ";
		var toppings = 0;
		var comments = document.Pizza. txttarComments.value;

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
			txttops = txttops + " Olives"
			toppings = toppings + 0.50;
		}

		if (document.Pizza.chksausage.checked)
		{
			txttops = txttops + " Sausage"
			toppings = toppings + 0.50;
		}

		Totalcost=(Size+Drink+Dessert+toppings);
		
		if(document.Pizza.radTerms[0].checked)
		{
			document.write("You have been added to our e-mailing list as you requested and we have your email as "+ Email + "." );
		}
		else if (document.Pizza.radTerms[1].checked)
		{
			document.write("Your email address will not be added to our e-mailing list.");			
		}
		
		
		if(Size=="6")
		document.write("You have selected PERSONAL ($6) pizza. ");
	
		else if(Size=="9")
		document.write("You have selected MEDIUM ($9) pizza. ");
	
		else if(Size=="12")
		document.write("You have selected LARGE ($12) pizza. ");
	
		else if(Size=="16")
		document.write("You have selected EXTRA LARGE ($16) pizza. ");
	
		if (txttops ==" ")
			document.write("You have not selected any toppings. ");
			else document.write(" You have selected " + txttops + ".");
		
		if(Drink==" ")
			document.write(" You have not selected any drink(s). ");
			else document.write(" You have selected " + Drink + " drink(s).");
			
		if(Dessert==" ")
			document.write(" You have not selected any dessert(s). ");
			else document.write(" You have selected $" + Dessert + " dessert(s).");
		
		if(Totalcost>=25)
		{
			document.write(" Congratulations, You have earned yourself a free medium pizza. Enter the following code on your next purchase to get a free medium pizza. Code: Q1358. ");
	
		}
		document.write("Thank you for ording at Patel's Pizza " + FirstName + " " + LastName + "! We have your address as " + USaddress + ", "+ City + " " + State + " " + Zipcode + ". Your phone number is " 
		+ USPhonenumber + ". Your special requests for this order: " + comments + ". Your total cost for your order is &#36;" + Totalcost + ". Today's date is " + TodayDate + " and current time is " + CurrentTime + ".");
		}