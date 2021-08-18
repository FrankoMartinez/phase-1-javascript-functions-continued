// Your code here
function saturdayFun(activity) {
    if(activity) {
        return `This Saturday, I want to ${activity}!`;
    } else return "This Saturday, I want to roller-skate!";
}

function mondayWork(hobby) {
    if(hobby) {
        return `This Monday, I will ${hobby}.`;
    } else return "This Monday, I will go to the office.";
}

function wrapAdjective() {
    return function(adjective = "special") {
        return `You are ${adjective}`;
    } 
}