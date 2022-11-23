// import the data from industry_data2.js
const tableData = ticker.industry;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear out and existing data
    tbody.html("");
    // loop through each object in the data
    // and append a row and cells for each value
    // in the row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");

        // loop through each field in the dataRow
        // and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}



// function make_pred(){
//     let industry = document.getElementById("Industry").value;
//     console.log("Industry",Industry)
//     fetch("/predict", {
//         method: "POST", 
//         body: JSON.stringify({
//             ticker: industry
//         }),
//         headers:{
//             "Content-type":"application/json;charset=UTF-8"

//         } 
//     }).then(resp=>{
//         return resp.json()
//     }).then(resp=>{
//         console.log(resp)
//         document.getElementById("prediction").innerHTML=resp.Prediction
//         console.log(resp.Prediction);
//         if (resp.Prediction=="Not a Conspiracy Theorist"){
//             document.getElementById("dummy").src= "/static/images/scully.gif" 
//         }
//         else if (resp.Prediction=="Government Malfeasance"){
//             document.getElementById("dummy").src="/static/images/washington.gif"
//         }
//         else if (resp.Prediction=="Malevolent Global Conspiracy"){
//             document.getElementById("dummy").src="/static/images/theyre_watching.gif"
//         }
//         else if (resp.Prediction=="Extraterrestrial Cover-up"){
//             document.getElementById("dummy").src="/static/images/aliens.gif"
//         }
//         else if (resp.Prediction=="Personal Well-being"){
//             document.getElementById("dummy").src="/static/images/mind_control.gif"
//         }
//         else if (resp.Prediction=="Control of Information"){
//             document.getElementById("dummy").src="/static/images/simpsons.gif"
//         }
//         else if (resp.Prediction){
//             document.getElementById("dummy").src="/static/images/jackets.gif"
//         }
//     })
// }