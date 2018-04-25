


//EDITABLE VARS:

    //Item variables
    var itemselector = ".item";
    var itemamountshown = 9;


    //Read more variables
    var readmoreselector = ".readmore";
    var itemamountadded = 3;



//SYSTEM VARS:
    var totalamountitems = 0;
    var currentamountitems = 0;



function Readmore_Reset(){
  $(readmoreselector).show();
  $(itemselector).hide();
  Readmore_Start();
}

//Reset the items
function Readmore_Start(settings){
  Readmore_SetVars(settings);
  currentamountitems = 0;
  totalamountitems = $(itemselector).length;

  $(itemselector).each(function(){
    if(currentamountitems >= itemamountshown){
      $(this).hide();
    }else{
      $(this).css('display', 'inline-block');
      currentamountitems++;
    }
  });
  if(currentamountitems >= totalamountitems){
    $(readmoreselector).hide();
  }


  $(readmoreselector).on('click', function(){ Readmore_Add(); });
}


function Readmore_Add(){
  //console.log("Add");
  for(x = 0; x < itemamountadded; x++){
    //console.log(  $(itemselector + ":eq("+ (currentamountitems + x) +")"));
    $(itemselector + ":eq("+ (currentamountitems + x) +")").css('display', 'inline-block');
  }
  currentamountitems += itemamountadded;
  if(currentamountitems >= totalamountitems){
    $(readmoreselector).hide();
  }
}

function Readmore_SetVars(settings){
  //console.log(settings['itemamountadded']);
  if(typeof settings !== 'undefined'){
    if(typeof settings['itemamountadded'] !== 'undefined'){
      itemamountadded = settings['itemamountadded'];
    }
    if(typeof settings['itemselector'] !== 'undefined'){
      itemselector = settings['itemselector'];
    }
    if(typeof settings['readmoreselector'] !== 'undefined'){
      readmoreselector = settings['readmoreselector'];
    }
    if(typeof settings['itemamountshown'] !== 'undefined'){
      itemamountshown = settings['itemamountshown'];
    }
  }
}


