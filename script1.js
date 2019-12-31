//Solo cambian entre ellos
let cero = 1
let uno = 3
let dos = 0
let tres = 2

//solo cambian entre ellos 
let cuatro = 5
let cinco = 4

let zero = [0, 0, 0, 0], one = [0, 0, 0, 0], two = [0, 0, 0, 0],three = [0, 0, 0, 0]

for(let i =0; i<1; i++){
    //Verificacion del 0
    if(cero == 0 )fcero()   
    else if(cero == 1 )funo() 
    else if(cero == 2 ) fdos()
    else if( cero == 3) ftres()

 console.log(cero)       // resultado de la verificacion del 0  
        console.log(`     0 1 2 3`)
        console.log(`0 - [${zero}]`)    
        console.log(`1 - [${one}]`)
        console.log(`2 - [${two}]`)
        console.log(`3 - [${three}]`)
    //Verificacion del 1
    if(uno == 0 )fcero()   
    else if(uno == 1 )funo() 
    else if(uno == 2 ) fdos()
    else if(uno == 3) ftres()

 console.log(uno)       // resultado de la verificacion del 1
        console.log(`     0 1 2 3`)
        console.log(`0 - [${zero}]`)    
        console.log(`1 - [${one}]`)
        console.log(`2 - [${two}]`)
        console.log(`3 - [${three}]`)

    // Verificacion del 2
    if(dos == 0 )fcero()   
    else if(dos == 1 )funo() 
    else if(dos == 2 ) fdos()
    else if(dos == 3) ftres()

 console.log(dos)       // resultado de la verificacion del 2
        console.log(`     0 1 2 3`)
        console.log(`0 - [${zero}]`)    
        console.log(`1 - [${one}]`)
        console.log(`2 - [${two}]`)
        console.log(`3 - [${three}]`)
    //Verificacion del 3
    if(tres == 0 )fcero()   
    else if(tres == 1 )funo() 
    else if(tres == 2 ) fdos()
    else if(tres == 3) ftres()

  console.log(tres)      // resultado de la verificacion del 3
        console.log(`     0 1 2 3`)
        console.log(`0 - [${zero}]`)    
        console.log(`1 - [${one}]`)
        console.log(`2 - [${two}]`)
        console.log(`3 - [${three}]`)


    if(zero[0]==0 && zero[1] == 0 && zero[2]== 0 && zero[3]== 0 &&(cuatro==5 || cuatro ==4)){fcero()}
    else if(one[0]==0 && one[1] == 0 && one[2]== 0 && one[3]==0 &&(cuatro==5 || cuatro ==4)) funo()
    else if(two[0]==0 && two[1] == 0 && two[2]== 0 && two[3]==0 &&(cuatro==5 || cuatro ==4)) fdos()
    else if(three[0]==0 && three[1] == 0 && three[2]== 0 && three[3]==0 &&(cuatro==5 || cuatro ==4)) ftres()


    console.log(cuatro)      // resultado de la verificacion del 4

    console.log(`     0 1 2 3`)
    console.log(`0 - [${zero}]`)    
    console.log(`1 - [${one}]`)
    console.log(`2 - [${two}]`)
    console.log(`3 - [${three}]`)

    if(zero[0]==0 && zero[1] == 0 && zero[2]== 0 && zero[3]== 0 &&(cinco==5 || cinco==4)){fcero()}
    else if(one[0]==0 && one[1] == 0 && one[2]== 0 && one[3]==0 &&(cinco==5 || cinco==4)) funo()
    else if(two[0]==0 && two[1] == 0 && two[2]== 0 && two[3]==0 &&(cinco==5 || cinco==4)) fdos()
    else if(three[0]==0 && three[1] == 0 && three[2]== 0 && three[3]==0 &&(cinco==5 || cinco==4)) ftres()


    console.log(cinco)      // resultado de la verificacion del 5

    console.log(`     0 1 2 3`)
    console.log(`0 - [${zero}]`)    
    console.log(`1 - [${one}]`)
    console.log(`2 - [${two}]`)
    console.log(`3 - [${three}]`)
}
function fcero(){
    zero[0]=0
    zero[1] =1
    zero[2]=1
    zero[3]=1
    one[0]=0
    two[0]=0
    three[0]=0
}
function funo(){
    one[0]=1
    one[2]=1
    one[3]=1
    one[1]=0
    zero[1]= 0
    two[1]=0
    three[1]=0
}
function fdos(){
    two[0]=1
    two[2]=0
    two[3]=1
    two[1]=1
    zero[2]= 0
    one[2]=0
    three[2]=0
}
function ftres(){
    three[0]=1
    three[2]=1
    three[3]=0
    three[1]=1
    zero[3]= 0
    one[3]=0
    two[3]=0
}