class Parent
        {
          info()
          {
            console.log("I love game and sports");
          }
        }
        class Circket extends Parent
        {
            info()
          {
            console.log("I love Cricket");
          }
        }
        class Football extends Parent
        {
            info()
          {
            console.log("I love Football");
          }
        }

        const obj = new Parent();
        obj.info();
        const crickett = new Circket();
        crickett.info();
        const football = new Football();
        football.info();