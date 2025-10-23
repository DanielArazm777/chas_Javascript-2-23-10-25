const months = ["Jon", "Feb", "Mar", "Apr", "Jun", "May", "Jul", "Aug", "Sep", "Oct", "Nov"]

console.log(months);

months[0] = "Jan"

console.log(months);

//uppgift 2//
let change = months[4];
months[4] = months[5];
months[5] = change;

//uppgift 3 //
console.log(months.length); /* med lenght så går datorn igenom listan och berättar hur många saker som finns i arrayen. */

//uppgift 4//

months.push("Dec"); // med .push så lägger vi till en nytt objekt i slutet av arrayen //
console.log(months);

// uppgift 5 //

months.pop(); // med pop tar vi bort sista elementen, hade vi viljat ta bort första hade vi skrivit .shit //
console.log(months);

//uppgift 6 //

months.splice(6, 1); // med splice(start, antal) tar man bort antal element från startindexen i array //
console.log(months);