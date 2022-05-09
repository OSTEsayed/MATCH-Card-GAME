class Start_play {
  constructor(card_list,time_remaining){
    this.time_remaining=time_remaining
    this.time=document.querySelector(".time-left-timer");;
    this.cards=card_list;    
    console.log("1",this.time)
  }
begin(){
  this.time_remaining=10;
  this.unflip_all();
  console.log("game Start",this.cards)
  this.timer_alert =this.start_the_timer()
  this.mix_the_cards();
  
}
start_the_timer(){
  return setInterval(() => {
    this.time_remaining--;
  let time_r_m=Math.floor(this.time_remaining/60)
  let time_r_s=this.time_remaining%60
  this.time.innerHTML=String(time_r_m)+":"+String(time_r_s)
  if (this.time_remaining<=0){
    this.stop_the_timer()
  }
  },1000)
}
stop_the_timer(){

  this.lose();
  
}
lose(){
  clearInterval(this.timer_alert);
  let start = document.querySelector("header");
  let main =document.querySelector("main")

  start.style.display="flex"
  start.childNodes[1].style.display="none";
  start.childNodes[3].style.display="block";
  start.childNodes[5].style.display="none";
  main.style.opacity="0.1";

  console.log("ak khsarti nikomok");
}
unflip_all(){
for (let i = 0; i < this.cards.length; i++) {
  this.cards[i].classList="flip";
}
}
mix_the_cards(){ 
  // var cards_son =[] 
  // this.cards.forEach(element => {
    //   cards_son.push(element.childNodes[3])
    // cards_son.splice(x-1,1)
    // });
    for (let i = 0; i < this.cards.length; i++) {
      let x=Math.floor(Math.random() *15);
      let sp1=this.cards[x].childNodes[3];
      let sp2= this.cards[i].childNodes[3].cloneNode(true);

      this.cards[x].replaceChild(sp2,this.cards[x].childNodes[3])
      
      this.cards[i].replaceChild(sp1,this.cards[i].childNodes[3])
}


}

flip_the_card(card){
      //  card.classList.add('is-flipped');
console.log("card_pressed")


}
// method_1() { ... }
// method_2() { ... }
// method_3() { ... }
};



document.addEventListener('DOMContentLoaded', () => {
  var cards = document.querySelectorAll('.flip');
  var time_time_left= document.querySelector(".time-left-timer");
  var start = document.querySelector("header");
  var main =document.querySelector("main")
  var the_game = new Start_play(cards,2)
  
  start.childNodes.forEach((m3alm)=>{

    
    m3alm.addEventListener("click",()=>{
      m3alm.style.display="none";
      start.style.display="none";
      main.style.opacity="1";
       the_game.begin()
      
    });
    
  })

  cards.forEach((card)=>{
    card.addEventListener( 'click', () => {
      if (card.classList[1]!="is-flipped"){

        card.classList="flip is-flipped";
      }
      else{
        card.classList="flip";
      }

    // the_game.flip_the_card(card)
    });
  });
  
});


