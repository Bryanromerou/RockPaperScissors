$(document).ready(function(){   
    $(".rock").click(function(){
        reset();
        rock();
    });

    $(".paper").click(function(){
        reset();
        paper();
    });


    $(".scissors").click(function(){
        reset();
        scissors();
      });


    function pick(){
       let num = Math.floor(Math.random() * 3);
       if(num == 0){
        document.getElementsByClassName("rock")[0].style.color = "Blue";
       }
       else if(num ==1){
        document.getElementsByClassName("paper")[0].style.color = "Blue";
       }
       else{
        document.getElementsByClassName("scissors")[0].style.color = "Blue";
       }
       return num;//0 = Rock , 1 = Paper , 2  = Scissors
    }
      
    function checkWinner(myNum, computerNum){
      if(myNum == computerNum){
        alert("Tie");
        return 0;//0 Tie, 1 Lost, 2 Win
      } else if(((myNum+1)%4) === computerNum){
        alert("Lost");
        return 1;
      } else{
        alert("Won!");
        return 2;
      }
    }

    function rock(){
        document.getElementsByClassName("rock")[0].style.backgroundColor = "#f26f92";
        checkWinner(0,pick());
    };
    function paper(){
        document.getElementsByClassName("paper")[0].style.backgroundColor = "#f26f92";
        checkWinner(1,pick());
    };
    function scissors(){
        document.getElementsByClassName("scissors")[0].style.backgroundColor = "#f26f92";
        checkWinner(2,pick());
    };

    function reset(){
        document.getElementsByClassName("rock")[0].style.backgroundColor = "white";
        document.getElementsByClassName("paper")[0].style.backgroundColor = "white";
        document.getElementsByClassName("scissors")[0].style.backgroundColor = "white";
        document.getElementsByClassName("rock")[0].style.color = "black";
        document.getElementsByClassName("paper")[0].style.color = "black";
        document.getElementsByClassName("scissors")[0].style.color = "black";
    }
});
