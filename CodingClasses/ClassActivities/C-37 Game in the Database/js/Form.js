class Form {
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("PLAY!");
        this.greeting = createElement('h3');
    }

    hide(){
        this.input.hide();
        this.button.hide();
    }

   display(){
       var title = createElement('h2');
       title.html("Car Racing Game");
       title.position(130,0);

       this.input.position(130,200);
       this.button.position(200,300);
       

       this.button.mousePressed(()=> {
        this.input.hide();
        this.button.hide(); 

        player.name=this.input.value();
         //var name = this.input.value();

         playerCount +=1;
         player.index = playerCount;
         player.update();
         player.updateCount(playerCount);
        
         this.greeting.html("Hello "+ player.name);
         this.greeting.position(100,500);
       });
   } 
   
}
