//genData.js makes all the test/filler items that are added via genWrapper()
var manualSendResults = true;
//var shuffleSequence = seq("intro","inst",rshuffle(rshuffle("test.itv","test.cre","filler")),"sr","done");
var shuffleSequence = seq(wrapperShuffleSeq());//seq("fe12_o_p_c-ce12_n_o_c");
var defaults = [
"Separator", {
transfer: 1000,
normalMessage: "Please wait for the next statement.",
errorMessage: "Wrong. Please wait for the next statement."
},
"DashedSentence", {
mode: "self-paced reading",
display: "dashed"
},
"AcceptabilityJudgment", {
as: ["1", "2", "3", "4", "5", "6", "7"],
presentAsScale: true,
instructions: "Use number keys or click boxes to answer.",
leftComment: "(bad)", rightComment: "(good)"
},
"Question", {
hasCorrect: false,
randomOrder: true
},
"Message", {
hideProgressBar: true
},
"Form", {
hideProgressBar: false,
countsForProgressBar: true,
continueOnReturn: true,
}
];
var items = [];
items = items.concat(wrapper());

//alert(items);
