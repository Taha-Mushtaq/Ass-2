class Player
{
    PlayerId;
    PlayerName;
    PlayerRuns;
    PlayerDateofBirth;
    PlayerShirtNumber;
    constructor(PlayerId,PlayerName,PlayerRuns,PlayerDateofBirth,PlayerShirtNumber)
    {
        this.id=PlayerId;
        this.name=PlayerName;
        this.run=PlayerRuns;
        this.dob=PlayerDateofBirth;
        this.shirt=PlayerShirtNumber;
    }
    DisplayInfo()
    {
        console.log(this.id);
        console.log(this.name);
        console.log(this.run);
        console.log(this.dob);
        console.log(this.shirt);
    }
     GetRuns()
    {
        console.log("Runs of the players are :" + this.run)
    }
    AddRuns(newRun)
    {
        this.run = newRun + this.run ;
        console.log(this.run);
    }
}

const player1 = new Player(1,"Taha",52,1998,10);
player1.DisplayInfo();
player1.GetRuns();
player1.AddRuns(9);
