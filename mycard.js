class Start_play {
  constructor(card_list,time_remaining,timer_doc,attempt){
    this.counter=0;
    this.attempt=attempt
    this.total=time_remaining;
    this.time_remaining=time_remaining
    this.time=timer_doc
    this.cards=card_list;    
    console.log("1",this.time)
    this.checked=[]
    this.check_for=null;
  }
begin(){
  this.counter=0;
  this.stop_moving=true;
  this.checked=[]
  this.time_remaining=this.total;
  // this.unflip_all();
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
win(){
  clearInterval(this.timer_alert);
  this.unflip_all()
  let start = document.querySelector("header");
  let main =document.querySelector("main")

  start.style.display="flex"
  start.childNodes[1].style.display="block";
  start.childNodes[3].style.display="none";
  start.childNodes[5].style.display="none";
  main.style.opacity="0.1";

}
lose(){
  clearInterval(this.timer_alert);
  this.unflip_all()
  let start = document.querySelector("header");
  let main =document.querySelector("main")

  start.style.display="flex"
  start.childNodes[1].style.display="none";
  start.childNodes[3].style.display="block";
  start.childNodes[5].style.display="none";
  main.style.opacity="0.1";

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

check_cards(card1,card2){
  if(card1==card2){
    return
  }
if(card1.childNodes[3].childNodes[1].src==card2.childNodes[3].childNodes[1].src){
  console.log("ahna hna 2: ",card2.childNodes[3].childNodes[0].src)
  console.log("ahna hna 1: ",card1.childNodes[3].childNodes[0].src)

  card1.classList="flip is-flipped";
  card2.classList="flip is-flipped";
  this.checked.push(card1)
  this.checked.push(card2)
  if (this.checked.length==this.cards.length){
    this.win();
  }

}
else{
  card1.classList="flip";
  card2.classList="flip";
}
this.check_for=null

}

flip_the_card(card){
  if((this.checked.includes(card))||(!this.stop_moving) ){
    return
  }
  else{
    this.counter++
    this.attempt.innerHTML=this.counter
   if (this.check_for==null){
      card.classList="flip is-flipped";
      this.check_for=card;
  }
  else {
  this.stop_moving=false;
    let x=this
    card.classList="flip is-flipped";
    setTimeout(() =>{
      x.check_cards(card,this.check_for)
      this.stop_moving=true;   
    }, 1500);
    
  }
}

console.log("card_pressed")


}
// method_1() { ... }
// method_2() { ... }
// method_3() { ... }
};



document.addEventListener('DOMContentLoaded', () => {
  var cards = document.querySelectorAll('.flip');
  var time_time_left= document.querySelector(".time-left-timer");
  var attempts= document.querySelector(".attempts-timer");
  var start = document.querySelector("header");
  var main =document.querySelector("main")
  var the_game = new Start_play(cards,120,time_time_left,attempts)
  
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
      the_game.flip_the_card(card)  
        // card.classList="flip is-flipped";
      // }
      // else{
      //   card.classList="flip";
      // }

    // the_game.flip_the_card(card)
    });
  });
  
});


