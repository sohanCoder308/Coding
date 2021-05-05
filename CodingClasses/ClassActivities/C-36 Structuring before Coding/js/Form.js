class Form {
    constructor(){

    }
   display(){
       var title = createElement('h2');
       title.html("Car Racing Game");
       title.position(130,0);

       var input = createInput("Name");
       input.position(130,200);

       var button = createButton("PLAY!");
       button.position(200,300);

       var greeting = createElement('h3');
       greeting.position(100,500);

       button.mousePressed(function() {
        input.hide();
        button.hide(); 
       
         var name = input.value();

         playerCount +=1;
         player.update(name);
         player.updateCount(playerCount);
        
         greeting.html("Hello "+name);
       });
   } 
   
}
