//CE rules
var ce12_n_o_c = "if ( the person P lives in the country C ) and ( the country C1 cannot be the country C ) then ( the person P cannot live in the country C1 ). ";
var ce12_n_o_i = "if ( the person P lives in the country C ) and ( the country C1 is not the country C ) then ( the person P does not live in the country C1 ). ";
var ce12_n_o_d = "if ( the person P lives in the country C ) and ( there is a country named C1 that is different from the country C ) then ( the person P cannot live in the country C1 ). ";
var ce12_n_r_c = "if ( the country C1 cannot be the country C ) and ( the person P lives in the country C ) then ( the person P cannot live in the country C1 ). ";
var ce12_n_r_i = "if ( the country C1 is not the country C ) and ( the person P lives in the country C ) then ( the person P does not live in the country C1 ). ";
var ce12_n_r_d = "if ( there is a country named C1 that is different to the country C ) and ( the person P lives in the country C ) then ( the person P cannot live in the country C1 ). ";
var ce12_p_o_i = "if ( the person P lives in the country C ) and ( the person P lives in the country C1 ) then ( the country C1 is the country C ).";
var ce12_p_r_i = "if ( the person P lives in the country C1 ) and ( the person P lives in the country C ) then ( the country C1 is the country C ).";
var ce21_n_o_c = "if ( the person P lives in the country C ) and ( the person P1 cannot be the person P ) then ( the person P1 cannot live in the country C ). ";
var ce21_n_o_i = "if ( the person P lives in the country C ) and ( the person P1 is not the person P ) then ( the person P1 does not live in the country C ). ";
var ce21_n_o_d = "if ( the person P lives in the country C ) and ( there is a person named P1 that is different to the person P ) then ( the person P1 cannot live in the country C ). ";
var ce21_n_r_c = "if ( the person P1 cannot be the person P ) and ( the person P lives in the country C ) then ( the person P1 cannot live in the country C ). ";
var ce21_n_r_i = "if ( the person P1 is not be the person P ) and ( the person P lives in the country C ) then ( the person P1 does not live in the country C ). ";
var ce21_n_r_d = "if ( there is a person named P1 that is different to the person P ) and ( the person P lives in the country C ) then ( the person P1 cannot live in the country C ). ";
var ce21_p_o_i = "if ( the person P lives in the country C ) and ( the person P1 lives in the country C ) then ( the person P1 is the person P ).";
var ce21_p_r_i = "if ( the person P1 lives in the country C ) and ( the person P lives in the country C ) then ( the person P1 is the person P ).";
//CE rules as a list
var CErulesList = [
{type: "ce12_n_o_c", rule : "if ( the person P lives in the country C ) and ( the country C1 cannot be the country C ) then ( the person P cannot live in the country C1 ). "},
{type: "ce12_n_o_i", rule : "if ( the person P lives in the country C ) and ( the country C1 is not the country C ) then ( the person P does not live in the country C1 ). "},
{type: "ce12_n_o_d", rule : "if ( the person P lives in the country C ) and ( there is a country named C1 that is different from the country C ) then ( the person P cannot live in the country C1 ). "},
{type: "ce12_n_r_c", rule : "if ( the country C1 cannot be the country C ) and ( the person P lives in the country C ) then ( the person P cannot live in the country C1 ). "},
{type: "ce12_n_r_i", rule : "if ( the country C1 is not the country C ) and ( the person P lives in the country C ) then ( the person P does not live in the country C1 ). "},
{type: "ce12_n_r_d", rule : "if ( there is a country named C1 that is different to the country C ) and ( the person P lives in the country C ) then ( the person P cannot live in the country C1 ). "},
{type: "ce12_p_o_i", rule : "if ( the person P lives in the country C ) and ( the person P lives in the country C1 ) then ( the country C1 is the country C )."},
{type: "ce12_p_r_i", rule : "if ( the person P lives in the country C1 ) and ( the person P lives in the country C ) then ( the country C1 is the country C )."},
{type: "ce21_n_o_c", rule : "if ( the person P lives in the country C ) and ( the person P1 cannot be the person P ) then ( the person P1 cannot live in the country C ). "},
{type: "ce21_n_o_i", rule : "if ( the person P lives in the country C ) and ( the person P1 is not the person P ) then ( the person P1 does not live in the country C ). "},
{type: "ce21_n_o_d", rule : "if ( the person P lives in the country C ) and ( there is a person named P1 that is different to the person P ) then ( the person P1 cannot live in the country C ). "},
{type: "ce21_n_r_c", rule : "if ( the person P1 cannot be the person P ) and ( the person P lives in the country C ) then ( the person P1 cannot live in the country C ). "},
{type: "ce21_n_r_i", rule : "if ( the person P1 is not be the person P ) and ( the person P lives in the country C ) then ( the person P1 does not live in the country C ). "},
{type: "ce21_n_r_d", rule : "if ( there is a person named P1 that is different to the person P ) and ( the person P lives in the country C ) then ( the person P1 cannot live in the country C ). "},
{type: "ce21_p_o_i", rule : "if ( the person P lives in the country C ) and ( the person P1 lives in the country C ) then ( the person P1 is the person P )."},
{type: "ce21_p_r_i", rule : "if ( the person P1 lives in the country C ) and ( the person P lives in the country C ) then ( the person P1 is the person P )."}
];
//FE riles (do, can, only, more)
var fe12_o_p_c = "A given person can only live in one country." ;
var fe12_m_n_c = "It's not the case that a given person can live in more than one country.";
var fe21_o_p_c = "Only one person can live in a given country.";
var fe21_m_n_c = "It's not the case that more than one person can live in a given country.";
var fe12_o_p_i = "A given person only lives in one country.";
var fe12_m_n_i = "It's not the case that a given person lives in more than one country.";
var fe21_o_p_i = "Only one person lives in a given country.";
var fe21_m_n_i = "It's not the case that more than one person lives in a given country.";
//FE rules as a list
var FErulesList = [
{type: "fe12_o_p_c", rule : "A given person can only live in one country."},
{type: "fe12_m_n_c", rule : "It's not the case that a given person can live in more than one country."},
{type: "fe21_o_p_c", rule : "Only one person can live in a given country."},
{type: "fe21_m_n_c", rule : "It's not the case that more than one person can live in a given country."},
{type: "fe12_o_p_i", rule : "A given person only lives in one country."},
{type: "fe12_m_n_i", rule : "It's not the case that a given person lives in more than one country."},
{type: "fe21_o_p_i", rule : "Only one person lives in a given country."},
{type: "fe21_m_n_i", rule : "It's not the case that more than one person lives in a given country."},
];
var ceCanList = [ce12_n_o_c, ce12_n_o_d, ce12_n_r_c, ce12_n_r_d, ce21_n_o_c, ce21_n_o_d, ce21_n_r_c, ce21_n_r_d ];
var ceIsList = [ce12_n_o_i, ce12_n_r_i, ce12_p_o_i, ce12_p_r_i, ce21_n_o_i, ce21_n_r_i, ce21_p_o_i, ce21_p_r_i ];
var feCanList = [fe12_o_p_c, fe12_m_n_c, fe21_o_p_c, fe21_m_n_c ];
var feIsList = [fe12_o_p_i, fe12_m_n_i, fe21_o_p_i, fe21_m_n_i ];
//var feList = ["a","b","c"];
//var ceList = ["1","2","3"];
//function to pair them up
//only want to pair ones with matching suffixes
function pairRules(feList, ceList)
{
    counter = 1;
    output = "";
    outputList = [];
    for (i=0; i<feList.length; i++){
        for (j=0; j<ceList.length; j++){
            output+=counter+". <br><br>"+feList[i]+"<br><br>"+ceList[j]+"<br><br>---<br><br>";
            outputList.push(feList[i]+"<br><br>"+ceList[j]+"<br><br>---<br><br>");
            counter+=1;
        }
    }
    return output;
    //return outputList;
}

var testCECanList = ["ce12_n_o_c", "ce12_n_o_d", "ce12_n_r_c", "ce12_n_r_d", "ce21_n_o_c", "ce21_n_o_d", "ce21_n_r_c", "ce21_n_r_d"];
var testFECanList = ["fe12_o_p_c", "fe12_m_n_c", "fe21_o_p_c", "fe21_m_n_c" ];
testFErule = FErulesList[1];
testCErule = CErulesList[1];
function ibexItem(FErule,CErule){
    var type = FErule.type+"-"+CErule.type;
    var quest = "Do the following rules CORRESPOND?<br><br>"+FErule.rule+"<br><br>"+CErule.rule+"<br>";
    var ans = ["Yes","No"];
    ////testing
    //alert(quest);
    return [ [type, "Question", {"q": quest, "as": ans } ] ];
}

function ibexItemsList(FErulesList,CErulesList){
    output = [];
    for (f=0;f<FErulesList.length;f++){
        for (c=0;c<CErulesList.length;c++){
            //alert(FErulesList[f].type+FErulesList[f].rule);
            output = output.concat(ibexItem(FErulesList[f],CErulesList[c]));
            //alert(output);
        }
    }
    //alert(output);
    return output;
}

function wrapper(){
    return ibexItem(testFErule,testCErule);
    //return ibexItemsList(FErulesList,CErulesList);
}

var canRules = pairRules(feCanList,ceCanList);
var isRules = pairRules(feIsList,ceIsList);
var rules = canRules+isRules;
//function randOrd(){return (Math.round(Math.random())-0.5);}
//var randRules = rules.sort(randOrd);
//Math.floor(Math.random()*)
//for testing in browser
document.getElementById("test").innerHTML = "running...";
document.getElementById("textDiv1").innerHTML = pairRules(feCanList,ceCanList);
//document.getElementById("textDiv1").innerHTML = randRules;
document.getElementById("textDiv2").innerHTML = pairRules(feIsList, ceIsList);
document.getElementById("textDiv3").innerHTML = ibexItem(testFErule,testCErule);
document.getElementById("textDiv4").innerHTML = ibexItemsList(FErulesList,CErulesList);

