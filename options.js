const cellNamePlaceholder = document.querySelector('.active-cell');
const fontSizeInput = document.querySelector('#fontsize');
const fontFamilyInput = document.querySelector("#fontfamily"); 

let activeElement = null;

const state={};

const defaultProperties ={

    fontFamily:'sans',
    fontSize:16,
    color:"#000",
    textAlign: 'left', 
    backgroundColor: 'white',
    isBold:false,
    isItalic:false,
    isUnderlined:false,


};

function onCellFocus(event){
    const elementId = event.target.id;
    cellNamePlaceholder.innerText = elementId;
    activeElement = event.target;

    if(state[elementId]){
        //already selected
        // fill the options wiht the state of that cell

        resetOptions(state[elementId]);
    }

    else{

        //selected for the first time
        // fill the options with default state

        resetOptions(defaultProperties);
    }
    

}

function resetOptions(optionsState){

    // this function verifies whether this cell is already selected or not by lookin ginto state object

    // updates the ui based on the state 

    /**
     * optiosstate={
     *  fontsize,
     * fontfamily,
     * color,
     *  
     * }
     */

    fontSizeInput.value = optionsState.fontSize;
    fontFamilyInput.value = optionsState.fontFamily;
    
}

function onChangeFontSize(){


}

