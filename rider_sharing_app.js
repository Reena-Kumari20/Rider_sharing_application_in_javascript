/////////////////////// uber sharing application ////////////////////////////////////
const input=require('readline-sync')
console.log('\n*******************🛺🚗🚘Happy Uber Ride🛺🚗🚘**********************')
let place_list=['Huskur','Electronic city','Sarjapura','D-Mart',]
console.log('Places where Riders are stand:-')
for (let value of place_list){
    console.log(value)
}
let count1=0
let count2=0
let count3=0
let kilometers1=0
let kilometers2=0
let kilometers3=0
function riders_and_places(){ // this function where are riders are stand
    console.log('********************Your Riders🤵🤵🤵**********************')
    var rider1_place=place_list[Math.floor(Math.random() * place_list.length)];
    var rider2_place=place_list[Math.floor(Math.random() * place_list.length)];
    var rider3_place=place_list[Math.floor(Math.random() * place_list.length)];
    console.log(`🤵 Rider_1 is stand in ${rider1_place} \n🤵 Rider_2 is stand in ${rider2_place} \n🤵 Rider_3 is stand in ${rider3_place}\n`)
}
function chose_rider(){ // for boking choice
    riders_and_places()
    console.log('You have to chose any one option😊')
    console.log('1.Boking\n2.Cancel')
    let chose=input.question('Enter your option 1 or 2: ')
    if (chose=='1'){
        let Rider_option=Number(input.question("Enter your rider_choice for Boking  who is near by you:=> 1 or 2 or 3: "))
    
        if (Rider_option==1){
            count1=count1+1
            km1=Number(input.question('Enter how much kilometers for rider_1 : '))
            kilometers1+=km1
        }
        else if (Rider_option==2){
            count2=count2+1
            km2=Number(input.question('Enter how much kilometers for rider_2 : '))
            kilometers2+=km2
        }
        else if (Rider_option==3){
            count3=count3+1
            km3=Number(input.question('Enter how much kilometers for rider_3 : '))
            kilometers3+=km3
        }
        console.log('If you want to again boking')
        chose_rider()
    }
    else if (chose=='2'){
        console.log('\n')
    }    
}
chose_rider()
function owner_choice(){
    let owner_choice=input.question("Enter Owner choice: 1 or 2 or 3: ")
    let rupee_per_km=20
    if (owner_choice=='1'){
        if (count1>=1){
            console.log('*****************************************************************************')
            console.log(`Today Rider_1 did ${count1} rides\nThe Rider_1 did ${count1} rides for ${kilometers1}km\nTotal Amount for Ride_1 =>${rupee_per_km*kilometers1} Rs.💸`)
        }
        else{
            console.log('*****************************************************************************')
            console.log(`Today Rider_1 did ${0} rides\nThe Rider_1 rode ${0}km\nTotal Amount Earned Rider_1=> ${0} Rs.💸`)
        }
    }
    else if (owner_choice=='2'){
        if (count2>=1){
            console.log('*****************************************************************************')
            console.log(`Today Rider_2 did ${count2} rides\nThe Rider_2 did ${count2} rides for ${kilometers2}km\nTotal Amount for Rider_2 => ${rupee_per_km*kilometers2} Rs.💸`)

        }
        else{
            console.log('*****************************************************************************')
            console.log(`Today Rider_2 did ${0} rides\nThe Rider_2 rode ${0}km\nTotal Amount Earned Rider_2 => ${0} Rs.💸`)
        }

    }
    else if (owner_choice=='3'){
        if (count3>=1){
            console.log('\n*****************************************************************************')
            console.log(`Today Rider_3 did ${count3} rides\nThe Rider_3 did ${count3} rides for ${kilometers3}km\nTotal Amount for Rider_3 =>${rupee_per_km*kilometers3} Rs.💸`)
        }
        else{
            console.log('\n*****************************************************************************')
            console.log(`Today Rider_3 did ${0} rides\nThe Rider_3 rode ${0}km\nTotal Amount Earned Rider_3 => ${0} Rs.💸`)
        }
    }
}
function again(){
    option=input.question('Enter yes OR no if you want to again book: y/n:  ')
    if (option=='y'){
        chose_rider()
        again()
    }
    if (option=='n'){
        console.log('\n')
    }
}
again()
function owner_choice2(){
    console.log('\n*****************************************************************************')
    let owner_choice_again=input.question('If owner wants to know details of riders: y/n:')
    if (owner_choice_again=='y'){
        owner_choice()
        owner_choice2()
    }
    else{
        console.log('😊😊😊😊😊😊😊😊 THANK YOU 😊😊😊😊😊😊😊😊')
        console.log('\n')
    }
}
owner_choice2()
