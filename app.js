
var restuarent;
var item = prompt('What you want; 1-Pizza 2-Burger 3-Rool')
if (item == "Pizza") {
    var flavour = prompt('Which flavour do you want to eat; 1-Tikka 2-BBQ 3-Fajita')
    if (flavour == "Tikka" || flavour == "BBQ" || flavour == "Fajita") {
        var size = prompt('Which size do you want; * Small * Medium * Large')
        if (size == "Small") {
            alert("The price Of small pizza is 550rs")
            var quantity = +prompt('what quantity do yo want of small pizza')
            var totalSmall = quantity * 550
            alert("Your total Bill is " + totalSmall + "rs")
            var cashOrCard = prompt('what mathod do you Pay your bill 1-Cash 2-Card')
            if (cashOrCard == "Cash") {
                alert('ok sir this is your bill')
            } else if (cashOrCard == "Card") {
                alert("Ok sir plz give your Card for Payment")
                var pin = prompt('Plz Sir inter your Pin')
                alert('We hope you will enjoy the food of our Restuarent.')
            } else {
                alert('Sorry Sir! There is no other method for pay your Bill')
            }
            var remark = prompt('Plz give your remarks on our services * Good * Excellent * etc')
            if (remark == "Good") {
                alert("Thanks Sir For Your Remarks")
            } else if (remark == "Excellent") {
                alert("Thanks Sir For Your Remarks")
            } else if (remark == "etc") {
                alert("Thanks Sir For Your Remarks")
            } else {
                alert('Thanks sir for our coming')
            }
        } else if (size == "Medium") {
            alert("The price Of Medium pizza is 850rs")
            var quantity = +prompt('what quantity do yo want of Medium pizza')
            var totalSmall = quantity * 850
            alert("Your total Bill is " + totalSmall + "rs")
            var cashOrCard = prompt('what mathod do you Pay your bill 1-Cash 2-Card')
            if (cashOrCard == "Cash") {
                alert('ok sir this is your bill')
            } else if (cashOrCard == "Card") {
                alert("Ok sir plz give your Card for Payment")
                var pin = prompt('Plz Sir inter your Pin')
                alert('We hope you will enjoy the food of our Restuarent.')
            } else {
                alert('Sorry Sir! There is no other method for pay your Bill')
            }
            var remark = prompt('Plz give your remarks on our services * Good * Excellent * etc')
            if (remark == "Good") {
                alert("Thanks Sir For Your Remarks")
            } else if (remark == "Excellent") {
                alert("Thanks Sir For Your Remarks")
            } else if (remark == "etc") {
                alert("Thanks Sir For Your Remarks")
            } else {
                alert('Thanks sir for our coming')
            }

        }

        else if (size == "Large") {
            alert("The price Of Large pizza is 1150rs")
            var quantity = +prompt('what quantity do yo want of Large pizza')
            var totalSmall = quantity * 1150
            alert("Your total Bill is " + totalSmall + "rs")
            var cashOrCard = prompt('what mathod do you Pay your bill 1-Cash 2-Card')
            if (cashOrCard == "Cash") {
                alert('ok sir this is your bill')
            } else if (cashOrCard == "Card") {
                alert("Ok sir plz give your Card for Payment")
                var pin = prompt('Plz Sir inter your Pin')
                alert('We hope you will enjoy the food of our Restuarent.')

            } else {
                alert('Sorry Sir! There is no other method for pay your Bill')
            }
            var remark = prompt('Plz give your remarks on our services * Good * Excellent * etc')
            if (remark == "Good") {
                alert("Thanks Sir For Your Remarks")
            } else if (remark == "Excellent") {
                alert("Thanks Sir For Your Remarks")
            } else if (remark == "etc") {
                alert("Thanks Sir For Your Remarks")
            } else {
                alert('Thanks sir for our coming')
            }
        } else {
            alert("Sorry! we have no this Flavour")
        }

    }
} else if (item == 'Burger') {
    var burger = prompt('Which Burger do you want to eat; 1-Zinger 2-Chicken 3-Cheeze')
    if (burger == "Zinger") {

        alert("The price Of Zinger burger is 350rs")
        var quantity = +prompt('what quantity do yo want of  Zinger Burger')
        var totalSmall = quantity * 350
        alert("Your total Bill is " + totalSmall + "rs")
        var cashOrCard = prompt('what mathod do you Pay your bill 1-Cash 2-Card')
        if (cashOrCard == "Cash") {
            alert('ok sir this is your bill')
        } else if (cashOrCard == "Card") {
            alert("Ok sir plz give your Card for Payment")
            var pin = prompt('Plz Sir inter your Pin')
            alert('We hope you will enjoy the food of our Restuarent.')

        } else {
            alert('Sorry Sir! There is no other method for pay your Bill')
        }
        var remark = prompt('Plz give your remarks on our services * Good * Excellent * etc')
        if (remark == "Good") {
            alert("Thanks Sir For Your Remarks")
        } else if (remark == "Excellent") {
            alert("Thanks Sir For Your Remarks")
        } else if (remark == "etc") {
            alert("Thanks Sir For Your Remarks")
        } else {
            alert('Thanks sir for our coming')
        }
    } else if (burger == "Chicken") {
        alert("The price Of Chicken burger is 300rs")
        var quantity = +prompt('what quantity do yo want of  Chicken Burger')
        var totalSmall = quantity * 300
        alert("Your total Bill is " + totalSmall + "rs")
        var cashOrCard = prompt('what mathod do you Pay your bill 1-Cash 2-Card')
        if (cashOrCard == "Cash") {
            alert('ok sir this is your bill')
        } else if (cashOrCard == "Card") {
            alert("Ok sir plz give your Card for Payment")
            var pin = prompt('Plz Sir inter your Pin')
            alert('We hope you will enjoy the food of our Restuarent.')

        } else {
            alert('Sorry Sir! There is no other method for pay your Bill')
        }
        var remark = prompt('Plz give your remarks on our services * Good * Excellent * etc')
        if (remark == "Good") {
            alert("Thanks Sir For Your Remarks")
        } else if (remark == "Excellent") {
            alert("Thanks Sir For Your Remarks")
        } else if (remark == "etc") {
            alert("Thanks Sir For Your Remarks")
        } else {
            alert('Thanks sir for our coming')
        }
    } else if (burger == "Cheez") {
        alert("The price Of Cheez burger is 380rs")
        var quantity = +prompt('what quantity do yo want of  Chicken Burger')
        var totalSmall = quantity * 380
        alert("Your total Bill is " + totalSmall + "rs")
        var cashOrCard = prompt('what mathod do you Pay your bill 1-Cash 2-Card')
        if (cashOrCard == "Cash") {
            alert('ok sir this is your bill')
        } else if (cashOrCard == "Card") {
            alert("Ok sir plz give your Card for Payment")
            var pin = prompt('Plz Sir inter your Pin')
            alert('We hope you will enjoy the food of our Restuarent.')

        } else {
            alert('Sorry Sir! There is no other method for pay your Bill')
        }
        var remark = prompt('Plz give your remarks on our services * Good * Excellent * etc')
        if (remark == "Good") {
            alert("Thanks Sir For Your Remarks")
        } else if (remark == "Excellent") {
            alert("Thanks Sir For Your Remarks")
        } else if (remark == "etc") {
            alert("Thanks Sir For Your Remarks")
        } else {
            alert('Thanks sir for our coming')
        }
    }
    else {
        alert("Sorry! we have no this Flavour")
    }
} else if (item == "Rolls") {
    var rool = prompt('Which Burger do you want to eat; 1-Beaf 2-Chicken 3-Mutton 4-Butter chicken roll')
    if (rool == "Beaf") {

        alert("The price Of Beaf Roll is 150rs")
        var quantity = +prompt('what quantity do yo want of Baef Roll')
        var totalSmall = quantity * 150
        alert("Your total Bill is " + totalSmall + "rs")
        var cashOrCard = prompt('what mathod do you Pay your bill 1-Cash 2-Card')
        if (cashOrCard == "Cash") {
            alert('ok sir this is your bill')
        } else if (cashOrCard == "Card") {
            alert("Ok sir plz give your Card for Payment")
            var pin = prompt('Plz Sir inter your Pin')
            alert('We hope you will enjoy the food of our Restuarent.')

        } else {
            alert('Sorry Sir! There is no other method for pay your Bill')
        }
        var remark = prompt('Plz give your remarks on our services * Good * Excellent * etc')
        if (remark == "Good") {
            alert("Thanks Sir For Your Remarks")
        } else if (remark == "Excellent") {
            alert("Thanks Sir For Your Remarks")
        } else if (remark == "etc") {
            alert("Thanks Sir For Your Remarks")
        } else {
            alert('Thanks sir for our coming')
        }
    } else if (rool == "Chicken") {
        alert("The price Of Chicken Roll is 250rs")
        var quantity = +prompt('what quantity do yo want of Chicken Roll')
        var totalSmall = quantity * 250
        alert("Your total Bill is " + totalSmall + "rs")
        var cashOrCard = prompt('what mathod do you Pay your bill 1-Cash 2-Card')
        if (cashOrCard == "Cash") {
            alert('ok sir this is your bill')
        } else if (cashOrCard == "Card") {
            alert("Ok sir plz give your Card for Payment")
            var pin = prompt('Plz Sir inter your Pin')
            alert('We hope you will enjoy the food of our Restuarent.')

        } else {
            alert('Sorry Sir! There is no other method for pay your Bill')
        }
        var remark = prompt('Plz give your remarks on our services * Good * Excellent * etc')
        if (remark == "Good") {
            alert("Thanks Sir For Your Remarks")
        } else if (remark == "Excellent") {
            alert("Thanks Sir For Your Remarks")
        } else if (remark == "etc") {
            alert("Thanks Sir For Your Remarks")
        } else {
            alert('Thanks sir for our coming')
        }
    } else if(rool == "Mutton"){
        alert("The price Of Mutton Roll is 200rs")
        var quantity = +prompt('what quantity do yo want of Mutton Roll')
        var totalSmall = quantity * 200
        alert("Your total Bill is " + totalSmall + "rs")
        var cashOrCard = prompt('what mathod do you Pay your bill 1-Cash 2-Card')
        if (cashOrCard == "Cash") {
            alert('ok sir this is your bill')
        } else if (cashOrCard == "Card") {
            alert("Ok sir plz give your Card for Payment")
            var pin = prompt('Plz Sir inter your Pin')
            alert('We hope you will enjoy the food of our Restuarent.')

        } else {
            alert('Sorry Sir! There is no other method for pay your Bill')
        }
        var remark = prompt('Plz give your remarks on our services * Good * Excellent * etc')
        if (remark == "Good") {
            alert("Thanks Sir For Your Remarks")
        } else if (remark == "Excellent") {
            alert("Thanks Sir For Your Remarks")
        } else if (remark == "etc") {
            alert("Thanks Sir For Your Remarks")
        } else {
            alert('Thanks sir for our coming')
        }
    }else if(rool == "Butter Chicken"){
        alert("The price Of Butter chicken roll  is 350rs")
        var quantity = +prompt('what quantity do yo want of Butter chicken roll')
        var totalSmall = quantity * 350
        alert("Your total Bill is " + totalSmall + "rs")
        var cashOrCard = prompt('what mathod do you Pay your bill 1-Cash 2-Card')
        if (cashOrCard == "Cash") {
            alert('ok sir this is your bill')
        } else if (cashOrCard == "Card") {
            alert("Ok sir plz give your Card for Payment")
            var pin = prompt('Plz Sir inter your Pin')
            alert('We hope you will enjoy the food of our Restuarent.')

        } else {
            alert('Sorry Sir! There is no other method for pay your Bill')
        }
        var remark = prompt('Plz give your remarks on our services * Good * Excellent * etc')
        if (remark == "Good") {
            alert("Thanks Sir For Your Remarks")
        } else if (remark == "Excellent") {
            alert("Thanks Sir For Your Remarks")
        } else if (remark == "etc") {
            alert("Thanks Sir For Your Remarks")
        } else {
            alert('Thanks sir for our coming')
        }
    }

}else {
    alert("The item is not here Sorry Sir!")
    alert('Thanks for your coming Have A nice DAY')
}
