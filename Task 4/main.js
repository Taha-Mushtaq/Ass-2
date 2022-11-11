class Bank {
    constructor(BankID, BankTitle, Balance, EmailID, BankShirtNum) {
      this.BankID = BankID;
      this.BankTitle = BankTitle;
      this.Balance = Balance;
      this.EmailID = EmailID;
      this.BankShirtNum = BankShirtNum;
    }
  
    display() {
      let date = new Date();



      console.log("Bank ID : " + this.BankID);
      console.log("Bank Title : " + this.BankTitle);
    }
  
    Deposit(x)
    {

      // console.log( "\nBank Runs 111: " +  this.Balance);
      return x  + this.Balance;
  }

  WithDraw(count)
    {

      // let total = this.Balance + this.Balance

      // console.log( "\nBank Runs : " +  count);
      return count;
  }
  
  
  }
  
  let myBank = new Bank(1, "Sufain", 6, "29-Aug-1999", 1);
  let myBank1 = new Bank(2, "Sufain", 7, "29-Aug-1999", 1);
  let myBank2 = new Bank(3, "Sufain", 8, "29-Aug-1999", 1);
  
  
  myBank.display()
  myBank.Deposit(4)
  myBank.WithDraw()

let x1 = myBank1.Deposit(4)
console.log("\nBank Total : " + x1);
let x2 = myBank1.Deposit(7)
console.log("Bank2 Total : " + x2);


  let count = x1 + x2;

console.log("\nTotal Run : " + myBank2.WithDraw(count));

  // console.log(count);