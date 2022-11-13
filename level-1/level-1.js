function Cook(name,tools,cook_time){
    this.name=name;
    this.tools=tools;
    this.cook_time=cook_time;
    this.cooking = function(){
        console.log(this.name+'is cooking by '+this.tools);
    }
}
var Student = {
    id:2011,
    name:'tom',
    score:90
}
var obj ={}