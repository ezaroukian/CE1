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
{itype: "ce12_n_o_c", rule : "if ( the person P lives in the country C ) and ( the country C1 cannot be the country C ) then ( the person P cannot live in the country C1 ). "},
{itype: "ce12_n_o_i", rule : "if ( the person P lives in the country C ) and ( the country C1 is not the country C ) then ( the person P does not live in the country C1 ). "},
{itype: "ce12_n_o_d", rule : "if ( the person P lives in the country C ) and ( there is a country named C1 that is different from the country C ) then ( the person P cannot live in the country C1 ). "},
{itype: "ce12_n_r_c", rule : "if ( the country C1 cannot be the country C ) and ( the person P lives in the country C ) then ( the person P cannot live in the country C1 ). "},
{itype: "ce12_n_r_i", rule : "if ( the country C1 is not the country C ) and ( the person P lives in the country C ) then ( the person P does not live in the country C1 ). "},
{itype: "ce12_n_r_d", rule : "if ( there is a country named C1 that is different to the country C ) and ( the person P lives in the country C ) then ( the person P cannot live in the country C1 ). "},
{itype: "ce12_p_o_i", rule : "if ( the person P lives in the country C ) and ( the person P lives in the country C1 ) then ( the country C1 is the country C )."},
{itype: "ce12_p_r_i", rule : "if ( the person P lives in the country C1 ) and ( the person P lives in the country C ) then ( the country C1 is the country C )."},
{itype: "ce21_n_o_c", rule : "if ( the person P lives in the country C ) and ( the person P1 cannot be the person P ) then ( the person P1 cannot live in the country C ). "},
{itype: "ce21_n_o_i", rule : "if ( the person P lives in the country C ) and ( the person P1 is not the person P ) then ( the person P1 does not live in the country C ). "},
{itype: "ce21_n_o_d", rule : "if ( the person P lives in the country C ) and ( there is a person named P1 that is different to the person P ) then ( the person P1 cannot live in the country C ). "},
{itype: "ce21_n_r_c", rule : "if ( the person P1 cannot be the person P ) and ( the person P lives in the country C ) then ( the person P1 cannot live in the country C ). "},
{itype: "ce21_n_r_i", rule : "if ( the person P1 is not be the person P ) and ( the person P lives in the country C ) then ( the person P1 does not live in the country C ). "},
{itype: "ce21_n_r_d", rule : "if ( there is a person named P1 that is different to the person P ) and ( the person P lives in the country C ) then ( the person P1 cannot live in the country C ). "},
{itype: "ce21_p_o_i", rule : "if ( the person P lives in the country C ) and ( the person P1 lives in the country C ) then ( the person P1 is the person P )."},
{itype: "ce21_p_r_i", rule : "if ( the person P1 lives in the country C ) and ( the person P lives in the country C ) then ( the person P1 is the person P )."},

{itype: "ce12_fn_o_c", rule: "if ( the person P lives in the country C ) and ( the country C1 cannot be the country C ) then ( the person P lives in the country C1 ). "},
{itype: "ce12_fn_o_d", rule: "if ( the person P lives in the country C ) and ( there is a country named C1 that is different to the country C ) then ( the person P lives in the country C1 ). "},
{itype: "ce12_fn_o_i", rule: "if ( the person P lives in the country C ) and ( the country C1 is not the country C ) then ( the person P lives in the country C1 ). "},
{itype: "ce12_fn_r_c", rule: "if ( the country C1 cannot be the country C ) and ( the person P lives in the country C ) then ( the person P lives in the country C1 ). "},
{itype: "ce12_fn_r_d", rule: "if ( there is a country named C1 that is different to the country C ) and ( the person P lives in the country C ) then ( the person P lives in the country C1 ). "},
{itype: "ce12_fn_r_i", rule: "if ( the country C1 is not the country C ) and ( the person P lives in the country C ) then ( the person P lives in the country C1 ). "},

//{itype: "ce12_fp_o_c", rule: "if ( the person P lives in the country C ) and ( the person P lives in the country C1 ) then ( the country C cannot be the country C1 ). "},
{itype: "ce12_fp_o_i", rule: "if ( the person P lives in the country C ) and ( the person P lives in the country C1 ) then ( the country C1 is not the country C ). "},
{itype: "ce12_fp_r_i", rule: "if ( the person P lives in the country C1 ) and ( the person P lives in the country C ) then ( the country C1 is not the country C ). "},


{itype: "ce21_fn_o_c", rule: "if ( the person P lives in the country C ) and ( the person P1 cannot be the person P ) then ( the person P1 lives in the country C ). "},
{itype: "ce21_fn_o_d", rule: "if ( the person P lives in the country C ) and ( there is a person named P1 that is different to the person P ) then ( the person P1 lives in the country C ). "},
{itype: "ce21_fn_o_i", rule: "if ( the person P lives in the country C ) and ( the person P1 is not the person P ) then ( the person P1 lives in the country C ). "},
{itype: "ce21_fn_r_c", rule: "if ( the person P1 cannot be the person P ) and ( the person P lives in the country C ) then ( the person P1 lives in the country C ). "},
{itype: "ce21_fn_r_d", rule: "if ( there is a person named P1 that is different to the person P ) and ( the person P lives in the country C ) then ( the person P1 lives in the country C ). "},
{itype: "ce21_fn_r_i", rule: "if ( the person P1 is not the person P ) and ( the person P lives in the country C ) then ( the person P1 lives in the country C ). "},

{itype: "ce21_fp_o_i", rule: "if ( the person P lives in the country C ) and ( the person P1 lives in the country C ) then ( the person P1 is not the person P ). "},
{itype: "ce21_fp_r_i", rule: "if ( the person P1 lives in the country C ) and ( the person P lives in the country C ) then ( the person P1 is not the person P ). "},


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
{itype: "fe12_o_p_c", rule : "A given person can only live in one country."},
{itype: "fe12_m_n_c", rule : "It's not the case that a given person can live in more than one country."},
{itype: "fe21_o_p_c", rule : "Only one person can live in a given country."},
{itype: "fe21_m_n_c", rule : "It's not the case that more than one person can live in a given country."},
{itype: "fe12_o_p_i", rule : "A given person only lives in one country."},
{itype: "fe12_m_n_i", rule : "It's not the case that a given person lives in more than one country."},
{itype: "fe21_o_p_i", rule : "Only one person lives in a given country."},
{itype: "fe21_m_n_i", rule : "It's not the case that more than one person lives in a given country."},

{itype: "fe12_e_pf_i", rule : "A given person lives in every country."},
{itype: "fe21_e_pf_i", rule : "Every person lives in a given country."},
{itype: "fe12_e_nf_c", rule : "It's not the case that a given person can live in every country."},
{itype: "fe21_e_nf_c", rule : "It's not the case that every person can live in a given country."},

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
testFErule = FErulesList[0];
testCErule = CErulesList[0];
function ibexItem(FErule,CErule){
    var type = FErule.itype+"-"+CErule.itype;
    var quest = "Do the following rules CORRESPOND?<br><br><br>"+FErule.rule+"<br><br>"+CErule.rule+"<br>";
    var ans = ["Yes","No"];
    var corr = 1;
    if (FErule.itype.substring(2,4)==CErule.itype.substring(2,4)){
        corr = 0;
    }
    ////testing
    //alert(FErule.type+"-"+CErule.type);
    return [ [type, "Question", {"q": quest, "as": ans, "hasCorrect": corr } ] ];
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
    //alert(ibexItem(testFErule,testCErule));
    //return ibexItem(testFErule,testCErule);
    return ibexItemsList(FErulesList,CErulesList);
}

function genShuffleSeq(FErulesList,CErulesList){
    //right now, mixing cans and ises
    var output = "";
    for (f=0;f<FErulesList.length;f++){
        for (c=0;c<CErulesList.length;c++){
            //if they're both 'is', pair them
            if(FErulesList[f].itype[9]=="i" && CErulesList[c].itype[9]=="i"){
                output=output+'"'+FErulesList[f].itype+"-"+CErulesList[c].itype+'", ';
            }
            //if neither is 'is' (i.e. both have 'can'), pair them
            else if (FErulesList[f].itype[9]!="i" && CErulesList[c].itype[9]!="i")
            {
                output=output+'"'+FErulesList[f].itype+"-"+CErulesList[c].itype+'", ';
            }
        }
    }

    alert(output);
    return output;
}
function wrapperShuffleSeq(){
    
    return genShuffleSeq(FErulesList,CErulesList);
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

