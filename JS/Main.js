function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "Metal " + localStorage.clickcount + " clicked";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
  
  
   
  </script>
  
    
  
          
    function worker() {
              timer = setInterval(function() {
                  if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "Metal " + localStorage.clickcount + " clicked";
              }, 1000);
          }
  
  
  </script>
  
  <!--Workerworking-->
     
     <!--farm-->
    
          
          function farm() {
              timer = setInterval(function() {
                  if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+5;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "Metal " + localStorage.clickcount + " clicked";
              }, 3000); 
          }
  
     <!--Endfarm-->
   
    function b() {
              timer = setInterval(function() {
                  if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+5;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "Metal " + localStorage.clickcount + " clicked";
              }, 3000);
          }
         
          
          <!--Mine-->
          
          <script>
          
          function mine() {
              timer = setInterval(function() {
                  if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+20;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "Metal " + localStorage.clickcount + " clicked";
              }, 3000);
          }
  
     <!--Endfarm-->
   
    function b() {
              timer = setInterval(function() {
                  if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+5;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "Metal " + localStorage.clickcount + " clicked";
              }, 5000);
          
      
      
          
  
  <!--Steel trader-->
          <script>
    function Trade() {
              timer = setInterval(function() {
                  if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+20;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "Metal " + localStorage.clickcount + " clicked";
              }, 9000);
          
      
      
       
    
  
  <!--Steel market->
          <
    function market() {
              timer = setInterval(function() {
                  if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+50;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "Metal " + localStorage.clickcount + " clicked";
              }, 1000);
          
      
      
      
  <!--Unload--!>
  
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>  
      
    $(document).ready(function(){
      $(window).on('beforeunload',function(){
        return '';
      });
    });