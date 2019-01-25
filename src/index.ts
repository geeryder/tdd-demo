//combine firstname and lastname together
//3 tests green
//Handle a single name
//Capitalise all names, apart from 'de'

export class NameCombiner {
    name: String;
    firstName:string;
    lastName:string;
    
    combiner( firstname:string, lastname:string){
        return this.name = firstname + ' ' + lastname;
    }

    splitName(name:string){
        let parts = name.split(' ');
        this.firstName = parts[0]

        this.lastName = parts[1]
        if( parts.length === 3){
        this.lastName = this.lastName + ' ' + parts[2];
        }

        else if (parts.length ===1 ){
            this.name = parts[0];
        }
    }

    toTitleCase(name:string[]){
        for (let part = 0; part < name.length; part++) {
            if(name[part].length < 3){
                name[part].toLowerCase();
            }
            else{name[part]= name[part].charAt(0).toUpperCase() + name[part].slice(1)}
        }
        return name;
    }


}
/*
Create functions that return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

export class Ts3 {

    minDateableAge(age:number){
        return (age / 2 + 7);
    }

    hasFever = (temp:number):boolean => temp >=37.5;

    tvHeight = (width:number):number => width / 16 * 9;

    canDate(age1:number, age2:number): boolean {
        return (age1 < this.minDateableAge(age2) || age2 < this.minDateableAge(age1)) ? false : true;
    }
     
    darkenArray(colors: number[], amount: number): number[] {
        for (let index = 0; index < colors.length; index++) {
            if (colors[index] - amount < 0) {
                colors[index] = 0
            } else if (colors[index] - amount > 255) {
                colors[index] = 255;
            } else {
                colors[index] = colors[index] - amount;
            }
        }
        return colors;
    }


}

/*
The data file contains information for 7 people, along with an interface declaration for person

Create functions that take a person object and return the following

-- Whether they are vegetarian :boolean
-- Whether their name is too long to write on a name tag :boolean
-- Life expectancy :number
-- years before they die :number
-- Whether they can ride on a rollercoaster :boolean
-- Should already be dead :boolean
-- Can buy beer in the UK :boolean
-- Show a friendly summary of the person :string

Life expectancy of a Vegetarian: 90
Life expectancy of a Meat Eater: 95
Minimum height to ride on a rollercoaster: 1.2m
Name tag length ( Up to 6 characters)

Example friendly summaries:                    
- Steven is a vegetarian, is 100cm tall and has 12 years to live
- Fred likes meat, is 153cm tall and has 7 years to live

*/
             