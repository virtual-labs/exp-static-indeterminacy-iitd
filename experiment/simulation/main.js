
 function displayText1() {
      const input1 = document.getElementById("input1").value;
      const input2 = document.getElementById("input2").value;

      // Check if input1 is 4 and input2 is 1
      if (input1 == 4 && input2 == 1) { 
        // Slowly display the text after 2 seconds
        setTimeout(function() {
          document.getElementById("output1a").textContent = "(1) Reaction (R)= 4 " ;
          document.getElementById("output1b").textContent = "(2) Cond. of construction(C)=1 (Internal Hinge)" ;
          document.getElementById("output1c").textContent = "(3) R = C+3" ;
          document.getElementById("output1d").textContent = "(4) Structure is Determinate" ;
          document.getElementById("output1e").textContent = "(5) At pt. of hinge Bending Moment=0" ;
          document.getElementById("output1f").textContent = "Structure is unstable due to internal instability" ;
          document.getElementById("nextButton1").style.visibility="visible";
          document.getElementById("addspecimen1").style.visibility="hidden";

        }, 1000);
        function showSlowly1a() {
          var img = document.getElementById("blink-image1");
          img.style.opacity = 0;
          img.style.display = "block";
          var tick = function() {
            img.style.opacity = +img.style.opacity + 0.01;
            if (+img.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
          };
          tick();
        }
        showSlowly1a();
        document.getElementById("output1a").style.display = "block"; 
        document.getElementById("output1b").style.display = "block"; 
        document.getElementById("output1c").style.display = "block"; 
        document.getElementById("output1d").style.display = "block"; 
        document.getElementById("output1e").style.display = "block"; 
        document.getElementById("output1f").style.display = "block"; }

        if (input1 == "" && input2 == "") { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("output1a").textContent = "Please Fill the Required Fields.";
  
            
          }, 1000);
          document.getElementById("output1a").style.display = "block";

      } else {
        // Display an error message
       document.getElementById("output1a").textContent = "Wrong Input R = 4 & C = 1 ";
       document.getElementById("blink-image1").style.visibility="visible";
       document.getElementById("addspecimen1").style.visibility="hidden";
       document.getElementById("output1a").style.display = "block";

      }

    }

    
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    
    function displayText2() {
      const input1b = document.getElementById("input1b").value;
      const input2b = document.getElementById("input2b").value;

      // Check if input1 is 3 and input2 is 2
      if (input1b == 3 && input2b == 2) { 
        // Slowly display the text after 2 seconds
        setTimeout(function() {
          document.getElementById("output2a").textContent = "(1) Reaction (R)=3 " ;
          document.getElementById("output2b").textContent = "(2) R < C+3" ;
        }, 800);
          setTimeout(function() {
          document.getElementById("output2c").textContent = "(3) Structure is unstable" ;
          document.getElementById("output2d").textContent = "(4) Supports are inadequate" ;
        }, 1100);
        setTimeout(function() {
          document.getElementById("output2e").textContent = "(5) Hinge will undergo rotation" ;
          document.getElementById("output2f").innerHTML = " <strong><u>Conditions. of construction</u></strong> (C)= 2 <br>1. Cannot transfer moment accross the link <br>2. Cannot transfer axial force accross the link." ;
          document.getElementById("addspecimen2").style.visibility="hidden";
          document.getElementById("nextButton2").style.visibility="visible";
        }, 1400);
        function showSlowly2a() {
          var img = document.getElementById("blink-image2");
          img.style.opacity = 0;
          img.style.display = "block";
          var tick = function() {
            img.style.opacity = +img.style.opacity + 0.01;
            if (+img.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
          };
          tick();
        }
        showSlowly2a();
        document.getElementById("output2a").style.display = "block";
        document.getElementById("output2a").style.display = "block"; 
        document.getElementById("output2b").style.display = "block"; 
        document.getElementById("output2c").style.display = "block"; 
        document.getElementById("output2d").style.display = "block"; 
        document.getElementById("output2e").style.display = "block"; 
        document.getElementById("output2f").style.display = "block"; }

        if (input1b == "" && input2b == "") { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("output2a").textContent = "Please Fill the Required Fields.";
  
            
          }, 1000);
          document.getElementById("output2a").style.display = "block";

      } else {
        // Display an error message
       document.getElementById("output2a").textContent = "Wrong Input, R = 3 & C = 2 }";
       document.getElementById("blink-image2").style.visibility="visible";
       document.getElementById("addspecimen2").style.visibility="hidden";

      document.getElementById("output2a").style.display = "block";

      }

    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////
  
    
    function displayText3() {
      const input1c = document.getElementById("input1c").value;
      const input2c = document.getElementById("input2c").value;

      // Check if input1 is 6 and input2 is 2
      if (input1c == 6 && input2c == 2) { 
        // Slowly display the text after 2 seconds
        setTimeout(function() {
          document.getElementById("output3a").textContent = "(1) Reaction (R)=6 " ;
          document.getElementById("output3b").textContent = "(2) Conditions of construction(C) = 2 (2 Hinges)" ;
          document.getElementById("output3c").textContent = "(3) R > C+3" ;
          document.getElementById("output3d").textContent = "(4) Structure is Indeterminate" ;
          document.getElementById("output3e").textContent = "(5) 2 Internal Hinges" ;
          document.getElementById("output3f").textContent = "(6) Geometrically stable" ;
          document.getElementById("addspecimen3").style.visibility="hidden";
          document.getElementById("nextButton3").style.visibility="visible";
        }, 1000);
        function showSlowly3a() {
          var img = document.getElementById("blink-image3");
          img.style.opacity = 0;
          img.style.display = "block";
          var tick = function() {
            img.style.opacity = +img.style.opacity + 0.01;
            if (+img.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
          };
          tick();
        }
        showSlowly3a();
        document.getElementById("output3a").style.display = "block"; 
        document.getElementById("output3b").style.display = "block"; 
        document.getElementById("output3c").style.display = "block"; 
        document.getElementById("output3d").style.display = "block"; 
        document.getElementById("output3e").style.display = "block"; 
        document.getElementById("output3f").style.display = "block"; } 

        if (input1c == "" && input2c == "") { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("output3a").textContent = "Please Fill the Required Fields.";
  
            
          }, 1000);
          document.getElementById("output3a").style.display = "block";

      } else {
        // Display an error message
       document.getElementById("output3a").textContent = "Wrong Input R = 6 & C = 2 }";
       document.getElementById("blink-image3").style.visibility="visible";
       document.getElementById("addspecimen3").style.visibility="hidden";
      document.getElementById("output3a").style.display = "block";

      }

    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////// 
    
  
    
    function displayText4() {
      const input1d = document.getElementById("input1d").value;
      const input2d = document.getElementById("input2d").value;
      const input3d = document.getElementById("input3d").value;


      // Check if input1 is 3 and input2 is 8 input3 is 5
      if (input1d == 3 && input2d == 8 && input3d == 5) { 
        // Slowly display the text after 2 seconds
        setTimeout(function() {
          document.getElementById("output4a").textContent = "(1) No. of Bars (B) = 6 & No. of Joints (J) = 5 " ;
          document.getElementById("output4b").textContent = "(2) No of reactions (R)= 3" ;
          document.getElementById("output4c").textContent = "(3) B + R > 2 x J" ;
          document.getElementById("output4d").textContent = "(4) Statically Indeterminate to 1st degree. " ;
          document.getElementById("output4e").textContent = "(5) No geometrical instability." ;
          document.getElementById("output4f").textContent = "(6) To convert it into determinate struct, remove 1 bar such that the truss will not get disturbed. " ;
          document.getElementById("addspecimen4").style.visibility="hidden";
          document.getElementById("nextButton4").style.visibility="visible";
        }, 1000);
        function showSlowly4a() {
          var img = document.getElementById("blink-image4");
          img.style.opacity = 0;
          img.style.display = "block";
          var tick = function() {
            img.style.opacity = +img.style.opacity + 0.01;
            if (+img.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
          };
          tick();
        }
        showSlowly4a();
        document.getElementById("output4a").style.display = "block"; 
        document.getElementById("output4b").style.display = "block"; 
        document.getElementById("output4c").style.display = "block"; 
        document.getElementById("output4d").style.display = "block"; 
        document.getElementById("output4e").style.display = "block"; 
        document.getElementById("output4f").style.display = "block"; } 
        if (input1d == "" && input2d == "" && input3d == "") { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("output4a").textContent = "Please Fill the Required Fields.";
  
            
          }, 1000);
          document.getElementById("output4a").style.display = "block";

      } else {
        // Display an error message
       document.getElementById("output4a").textContent = "Wrong Input, R = 3, B = 8 & C = 5";
       document.getElementById("blink-image4").style.visibility="visible";
       document.getElementById("addspecimen4").style.visibility="hidden";
      document.getElementById("output4a").style.display = "block";

      }

    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////  
     
    
  
    
    function displayText5() {
      const input1e = document.getElementById("input1e").value;
      const input2e = document.getElementById("input2e").value;
      const input3e = document.getElementById("input3e").value;

      // Check if input1 is 4 and input2 is 7 & input2 is 5
      if (input1e == 4 && input2e == 7 && input3e == 5) { 
        // Slowly display the text after 2 seconds
        setTimeout(function() {
          document.getElementById("woutput5a").style.visibility="hidden";
        }, 1);
        setTimeout(function() {
          document.getElementById("output5a").textContent = "(1) No. of Bars (B) = 7 & No. of Joints (J) = 5 " ;
          document.getElementById("output5b").textContent = "(2) No of reactions (R)= 4" ;
        }, 800);
        setTimeout(function() {
          document.getElementById("output5c").textContent = "(3) B + R > 2 x J" ;
          document.getElementById("output5d").innerHTML = "(4) The structure is statically indeterminate to 1<sup>st</sup> degree  " ;
        }, 1100);
        setTimeout(function() {
          document.getElementById("output5e").textContent = "(5) Geometricaly unstable." ;
          document.getElementById("addspecimen5").style.visibility="hidden";
          document.getElementById("nextButton5").style.visibility="visible";

        }, 1300);
        function showSlowly5a() {
          var img = document.getElementById("blink-image5");
          img.style.opacity = 0;
          img.style.display = "block";
          var tick = function() {
            img.style.opacity = +img.style.opacity + 0.01;
            if (+img.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
          };
          tick();
        }
        showSlowly5a();
        document.getElementById("output5a").style.display = "block"; 
        document.getElementById("output5b").style.display = "block"; 
        document.getElementById("output5c").style.display = "block"; 
        document.getElementById("output5d").style.display = "block"; 
        document.getElementById("output5e").style.display = "block"; 
       }
        if (input1e == "" && input2e == "" && input3e == "") { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("woutput5a").textContent = "Please Fill the Required Fields.";
  
            
          }, 1);
          document.getElementById("woutput5a").style.display = "block";

      } else {
        // Display an error message
       document.getElementById("woutput5a").textContent = "Wrong Input, R = 4, M = 7 & J = 5";
       document.getElementById("blink-image5").style.visibility="visible";
       document.getElementById("addspecimen5").style.visibility="hidden";
      document.getElementById("woutput5a").style.display = "block";

      }

    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////
     
    
  
    
    function displayText6() {
      const input1f = document.getElementById("input1f").value;
      const input2f = document.getElementById("input2f").value;
      const input3f = document.getElementById("input3f").value;
      const input4f = document.getElementById("input4f").value;



      // Check if input1 is 6 and input2 is 6 input3 is 6 input4 is 2
      if (input1f == 6 && input2f == 6 && input3f == 6 && input4f == 2) { 
        // Slowly display the text after 2 seconds 
        setTimeout(function() {
          document.getElementById("output6a").textContent = "(1) No. of Elements (B) = 6 & No. of Joints (J) = 6 " ;
          document.getElementById("output6b").textContent = "(2) No of reactions(R)= 6 & cond. of const. (C)= 2"  ;
          document.getElementById("output6c").textContent = "(3) 3B + R > 3J + C " ;
          document.getElementById("output6d").textContent = "(4) Structure is Statically Indeterminate  " ;
          document.getElementById("output6e").textContent = "(5) No Geometrical instablity ." ;
          document.getElementById("output6f").textContent = "(6)  Conclusion: Structure is stable & indeterminate to 4th degree " ;           
          document.getElementById("addspecimen6").style.visibility="hidden";
          document.getElementById("nextButton6").style.visibility="visible";
        }, 1000);
        function showSlowly6a() {
          var img = document.getElementById("blink-image6");
          img.style.opacity = 0;
          img.style.display = "block";
          var tick = function() {
            img.style.opacity = +img.style.opacity + 0.01;
            if (+img.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
          };
          tick();
        }
        showSlowly6a();
        document.getElementById("output6a").style.display = "block"; 
        document.getElementById("output6b").style.display = "block"; 
        document.getElementById("output6c").style.display = "block"; 
        document.getElementById("output6d").style.display = "block"; 
        document.getElementById("output6e").style.display = "block"; 
        document.getElementById("output6f").style.display = "block"; }
        if (input1f == "" && input2f == "" && input3f == "") { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("output6a").textContent = "Please Fill the Required Fields.";
  
            
          }, 1000);
          document.getElementById("output6a").style.display = "block";

      } else {
        // Display an error message
       document.getElementById("output6a").textContent = "Wrong Input, R = 6, B = 6, J = 6, C = 2";
       document.getElementById("blink-image6").style.visibility="visible";
       document.getElementById("addspecimen6").style.visibility="hidden";
      document.getElementById("output6a").style.display = "block";

      }

    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////



function restart()
{
    location.reload();
}
//////////////////////navnext start here////////////////////////////////////

function navNext0()
{
document.getElementById("canvas0").style.visibility="hidden";
document.getElementById("canvas1a").style.visibility="hidden";
document.getElementById("blink-image1").style.visibility="hidden";
document.getElementById("canvas1b").style.visibility="hidden";
document.getElementById("blink-image2").style.visibility="hidden";
document.getElementById("canvas1c").style.visibility="hidden";
document.getElementById("blink-image3").style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="hidden";
document.getElementById("blink-image4").style.visibility="hidden";
document.getElementById("canvas1e").style.visibility="hidden";
document.getElementById("blink-image5").style.visibility="hidden";
document.getElementById("canvas1f").style.visibility="hidden";
document.getElementById("blink-image6").style.visibility="hidden";
document.getElementById('s1_1').style.visibility="visible";
document.getElementById("canvas1").style.visibility="visible";

}
function navNext0a()
{
document.getElementById("canvas0").style.visibility="hidden";
document.getElementById("canvas1a").style.visibility="hidden";
document.getElementById("blink-image1").style.visibility="hidden";
document.getElementById("canvas1b").style.visibility="hidden";
document.getElementById("blink-image2").style.visibility="hidden";
document.getElementById("canvas1c").style.visibility="hidden";
document.getElementById("blink-image3").style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="hidden";
document.getElementById("blink-image4").style.visibility="hidden";
document.getElementById("canvas1e").style.visibility="hidden";
document.getElementById("blink-image5").style.visibility="hidden";
document.getElementById("canvas1f").style.visibility="hidden";
document.getElementById("blink-image6").style.visibility="hidden";
document.getElementById('s1_1').style.visibility="hidden";
document.getElementById("nextButton1").style.visibility="hidden";
document.getElementById("nextButton2").style.visibility="hidden";
document.getElementById("nextButton3").style.visibility="hidden";
document.getElementById("nextButton4").style.visibility="hidden";
document.getElementById("nextButton5").style.visibility="hidden";
document.getElementById("nextButton6").style.visibility="hidden";
document.getElementById("canvas1").style.visibility="visible";

}

function navNext1a()
{
document.getElementById("canvas1").style.visibility="hidden";
document.getElementById("canvas1a").style.visibility="visible";
document.getElementById("nextButton1").style.visibility="hidden";
document.getElementById('addspecimen1').style.visibility="visible";
document.getElementById('addspecimen1').style.animation="addspecimen1 2s forwards";
}

function navNext1b()
{
document.getElementById("canvas1a").style.visibility="hidden";
document.getElementById("canvas1b").style.visibility="visible";
document.getElementById("nextButton2").style.visibility="hidden";
document.getElementById('addspecimen2').style.visibility="visible";
document.getElementById('addspecimen2').style.animation="addspecimen2 2s forwards";
}


function navNext1c()
{
document.getElementById("canvas1b").style.visibility="hidden";
document.getElementById("canvas1c").style.visibility="visible";
document.getElementById("nextButton3").style.visibility="hidden";
document.getElementById('addspecimen3').style.visibility="visible";
document.getElementById('addspecimen3').style.animation="addspecimen3 2s forwards";
}


function navNext1d()
{
document.getElementById("canvas1c").style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="visible";
document.getElementById("nextButton4").style.visibility="hidden";
document.getElementById('addspecimen4').style.visibility="visible";
document.getElementById('addspecimen4').style.animation="addspecimen4 2s forwards";
}


function navNext1e()
{
document.getElementById("canvas1d").style.visibility="hidden";
document.getElementById("canvas1e").style.visibility="visible";
document.getElementById("nextButton5").style.visibility="hidden";
document.getElementById('addspecimen5').style.visibility="visible";
document.getElementById('addspecimen5').style.animation="addspecimen5 2s forwards";
}


function navNext1f()
{
document.getElementById("canvas1e").style.visibility="hidden";
document.getElementById("canvas1f").style.visibility="visible";
document.getElementById("nextButton6").style.visibility="hidden";
document.getElementById('addspecimen6').style.visibility="visible";
document.getElementById('addspecimen6').style.animation="addspecimen6 2s forwards";
}




function add_stand()
{

document.getElementById('arw1').style.visibility="hidden";
document.getElementById('add_stand').style.visibility="hidden";
document.getElementById('specimen1').style.visibility="visible";
document.getElementById('specimen1').style.animation="specimen1 2s forwards";
document.getElementById('specimen2').style.visibility="visible";
document.getElementById('specimen2').style.animation="specimen2 1s forwards";
document.getElementById('specimen3').style.visibility="visible";
document.getElementById('specimen3').style.animation="specimen3 1s forwards";
document.getElementById('specimen4').style.visibility="visible";
document.getElementById('specimen4').style.animation="specimen4 1s forwards";
document.getElementById('specimen5').style.visibility="visible";
document.getElementById('specimen5').style.animation="specimen5 1s forwards";
document.getElementById('specimen6').style.visibility="visible";
document.getElementById('specimen6').style.animation="specimen6 1s forwards";

  setTimeout(function()

	{
document.getElementById('s1_1').style.visibility="hidden";
document.getElementById('s1_2').style.visibility="visible";
document.getElementById('arw2').style.visibility="visible";
document.getElementById('add_aluminium_bar').style.visibility="visible";

	},2000);

}







function start_analysis()
{
document.getElementById('start_analysis'). style.visibility="hidden";}
document.getElementById('start_Analysis1').style.visibility="hidden";
function add_aluminium_bar()
{
document.getElementById('arw2').style.visibility="hidden";
document.getElementById('add_aluminium_bar').style.visibility="hidden";
document.getElementById('aluminium_canvas1').style.visibility="visible";
document.getElementById('aluminium_canvas1').style.animation="aluminium_canvas1 1s forwards";
document.getElementById('start_Analysis1').style.visibility="hidden";
  setTimeout(function()

	{
document.getElementById('s1_2').style.visibility="hidden";
document.getElementById('s1_3').style.visibility="visible";
document.getElementById('arw3').style.visibility="visible";
document.getElementById('add_cellotap').style.visibility="visible";
document.getElementById('start_Analysis1').style.visibility="hidden";


	},1000);

}

function start_Analysis()
{
  document.getElementById('arw5').style.visibility="hidden";
  document.getElementById('start_Analysis').style.visibility="hidden"; 
  

}
