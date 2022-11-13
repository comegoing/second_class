function Ca(number1,dot,number2){
    this.number1 = number1;
    this.dot = dot;
    this.number2 = number2;
    this.ca = function(){
        switch(this.dot){
            case '+':
                console.log(number1+number2);
                break;
            case '-':
                console.log(number1-number2);
                break;
            case '*':
                console.log(number1*number2);
                break;
            case '/':
                console.log(number1/number2);
                break;
        }
    }
}
var a = new Ca(1,'-',2);
var b = new Ca(1,'+',2);
var c = new Ca(1,'*',2);
var d = new Ca(1,'/',2);

a.ca();
b.ca();
c.ca();
d.ca();