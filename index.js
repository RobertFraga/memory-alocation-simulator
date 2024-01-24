/* Functions */
let push
let move
let moveHere
let add
let addHere

/* Memory */
let m1  
let m2  
let m3  
let m4  
let m5  

/* Register */
let r1 
let r2 
let r3 
let r4 
let r5 

document.getElementById('pushBotton').onclick = function(){ 
    push = document.getElementById('puhsValue').value 

    m4 = document.getElementById('memory4').value = push++
    m5 = document.getElementById('memory5').value = push++
    m2 = document.getElementById('memory2').value = push++
    m3 = document.getElementById('memory3').value = push++
    m1 = document.getElementById('memory1').value = push++
}

document.getElementById('moveBotton').onclick = function(){

    r1 = document.getElementById('register1')
    r2 = document.getElementById('register2')
    r3 = document.getElementById('register3')
    r4 = document.getElementById('register4')
    r5 = document.getElementById('register5')

    move = document.getElementById('origin1').value
    moveHere = document.getElementById('destination1').value

    if(move == 1){
        if(moveHere == 1){
            r1.value = m1
        }else if(moveHere == 2){
            r2.value = m1
        }else if(moveHere == 3){
            r3.value = m1
        }else if(moveHere == 4){
            r4.value = m1
        }else if(moveHere == 5){
            r5.value = m1
        }

    }else if(move == 2){
        if(moveHere == 1){
            r1.value = m2
        }else if(moveHere == 2){
            r2.value = m2
        }else if(moveHere == 3){
            r3.value = m2
        }else if(moveHere == 4){
            r4.value = m2
        }else if(moveHere == 5){
            r5.value = m2
        }
    }else if(move == 3){
        if(moveHere == 1){
            r1.value = m3
        }else if(moveHere == 2){
            r2.value = m3
        }else if(moveHere == 3){
            r3.value = m3
        }else if(moveHere == 4){
            r4.value = m3
        }else if(moveHere == 5){
            r5.value = m3
        }
    }else if(move == 4){
        if(moveHere == 1){
            r1.value = m4
        }else if(moveHere == 2){
            r2.value = m4
        }else if(moveHere == 3){
            r3.value = m4
        }else if(moveHere == 4){
            r4.value = m4
        }else if(moveHere == 5){
            r5.value = m4
        }
    }else if(move == 5){
        if(moveHere == 1){
            r1.value = m5
        }else if(moveHere == 2){
            r2.value = m5
        }else if(moveHere == 3){
            r3.value = m5
        }else if(moveHere == 4){
            r4.value = m5
        }else if(moveHere == 5){
            r5.value = m5
        }
    }
}


document.getElementById('addBotton').onclick = function(){
    add = document.getElementById('origin2').value
    addHere = document.getElementById('destination2').value

    /* Memory */
    m1 = Number(document.getElementById('memory1').value)
    m2 = Number(document.getElementById('memory2').value)
    m3 = Number(document.getElementById('memory3').value)
    m4 = Number(document.getElementById('memory4').value)
    m5 = Number(document.getElementById('memory5').value)
    /* Register */
    r1 = Number(document.getElementById('register1').value)
    r2 = Number(document.getElementById('register2').value)
    r3 = Number(document.getElementById('register3').value)
    r4 = Number(document.getElementById('register4').value)
    r5 = Number(document.getElementById('register5').value)


    if(add == 1){
       if(addHere == 1){
        let sum = r1 + m1
        document.getElementById('register1').value = String(sum)

        }else if(addHere == 2){
        let sum1 = r2 + m1
        document.getElementById('register2').value = String(sum1)

       }else if(addHere == 3){
        let sum1 = r3 + m1
        document.getElementById('register3').value = String(sum1)
        
       }else if(addHere == 4){
        let sum1 = r4 + m1
        document.getElementById('register4').value = String(sum1)

       }else if(addHere == 5){
        let sum1 = r5 + m1
        document.getElementById('register5').value = String(sum1)
       }

    }else if(add == 2){
        if(addHere == 1){
         let sum = r1 + m2
         document.getElementById('register1').value = String(sum)

        }else if (addHere == 2){
         let sum = r2 + m2
         document.getElementById('register2').value = String(sum)

        }else if (addHere == 3){
         let sum = r3 + m2
         document.getElementById('register3').value = String(sum)

        }else if (addHere == 4){
         let sum = r4 + m2
         document.getElementById('register4').value = String(sum)

        }else if (addHere == 5){
         let sum = r5 + m2
         document.getElementById('register5').value = String(sum)
        }
    }else if(add == 3){
        if(addHere == 1){
         let sum = r1 + m3
         document.getElementById('register1').value = String(sum)
         
        }else if (addHere == 2){
         let sum = r2 + m3
         document.getElementById('register2').value = String(sum)

        }else if (addHere == 3){
         let sum = r3 + m3
         document.getElementById('register3').value = String(sum)

        }else if (addHere == 4){
         let sum = r4 + m3
         document.getElementById('register4').value = String(sum)

        }else if (addHere == 5){
         let sum = r5 + m3
         document.getElementById('register5').value = String(sum)
        }

    }else if(add == 4){
        if(addHere == 1){
         let sum = r1 + m4
         document.getElementById('register1').value = String(sum)

        }else if (addHere == 2){
         let sum = r2 + m4
         document.getElementById('register2').value = String(sum)
         
        }else if (addHere == 3){
         let sum = r3 + m4
         document.getElementById('register3').value = String(sum)

        }else if (addHere == 4){
         let sum = r4 + m4
         document.getElementById('register4').value = String(sum)

        }else if (addHere == 5){
         let sum = r5 + m4
         document.getElementById('register5').value = String(sum)
        }

    }else if(add == 5){
        if(addHere == 1){
         let sum = r1 + m5
         document.getElementById('register1').value = String(sum)

        }else if (addHere == 2){
         let sum = r2 + m5
         document.getElementById('register2').value = String(sum)

        }else if (addHere == 3){
         let sum = r3 + m5
         document.getElementById('register3').value = String(sum)
         
        }else if (addHere == 4){
         let sum = r4 + m5
         document.getElementById('register4').value = String(sum)
         
        }else if (addHere == 5){
         let sum = r5 + m5
         document.getElementById('register5').value = String(sum)
        }
    }

}
