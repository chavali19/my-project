 function display()
    {
      var getamount=document.getElementById("amount").value;
     
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - getamount;
      if(getamount>17000)
      {
      alert("Insufficient Balance.");
      }
      if(isNaN(getamount))
     {
      alert("Enter Correct Amount");
     }
      else if(!isNAN(getamount)){
      document.getElementById("result").innerHTML="You have done transaction of amount "+getamount+"to  "+document.getElementById("names").value+" <br> Your Account Balance is   "+myAccountBalance;
       document.getElementById("myAccountBalance").innerText = myAccountBalance;
           var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`${getamount} is sent to recepient with Email-id ${document.getElementById("names").value}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
      }
      
      
     
      return false;
    }
