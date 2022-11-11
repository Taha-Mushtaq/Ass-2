class Employee
        {
            #salary;
            #workingHours;

          
        set salarry(v)
        {
            this.salary =v;
        } 
        set hours(v)
        {
            this.workingHours =v;
        }
        get getInfo()
        {
            console.log("The salary is "+this.salary);
            console.log("The working hours are "+this.workingHours);
        }
        AddSal() 
        {
            if(this.salary > 500)
            {
             let updatedSalary = this.salary +addSalary;
             console.log("After adding 10$ the new salary is "+ updatedSalary);
            }
            else
            {
                console.log("No need to add more");
            }
        }
        AddWork(hour)
        {
            if(hour>6)
            {
               let hoursSalry= this.salary+5;
                console.log("Working hours is more than 6 $5 is added into salary ");
                console.log(hoursSalry+this.salary);
            }else
            {
                console.log("Basic 6 Hours salary is " + this.salary);
            }

        }

        }
        const emp1 = new Employee();
        emp1.salarry=100;
        emp1.AddSal();
        emp1.hours=6;
        emp1.AddWork(10);
        emp1.getInfo;

