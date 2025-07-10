
const StringFormatter = function(){
    const capitalizeFirst = function(str){
        if (!str) return ""; // handle empty string

        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
    const toSkewerCase = function(str){
        return str.replace(/\s+/g, "-");
    }



    return{
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase,
    };
}


// capitalizeFirst - receives a string and returns the string with the first letter uppercased, and the next ones lowercased
// toSkewerCase - receives a string and replaces any spaces with a dash

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should return Dorothy
formatter.toSkewerCase("blue box") //should return blue-box
console.log(formatter.capitalizeFirst("dorothy"));
console.log(formatter.toSkewerCase("blue box"));