let btnAdd = document.querySelector("#add");
let btnCal = document.querySelector("#calculate");
let table = document.querySelector("table");
let itemInput = document.querySelector("#item");
let quanInput = document.querySelector("#quan");
let codeInput = document.querySelector("#code");
let priceInput = document.querySelector("#price");

btnAdd.addEventListener("click", () => {
  let item = itemInput.value;
  let quan = quanInput.value;
  let code = codeInput.value;
  let price = priceInput.value;
  let template = `<tr>
    <td>${item}</td>
    <td>${quan}</td>
    <td>${code}</td>
    <td>${price}</td>
    </tr>`;
  table.innerHTML += template;
});

btnCal.addEventListener("click", () => {
  var mytab = document.getElementById("mytab");
  let total = 0;

  for (i = 1; i < mytab.rows.length; i++) {
    var obj = mytab.rows.item(i).cells;
    total += parseInt(obj.item(1).innerHTML) * parseInt(obj.item(3).innerHTML);
  }
  info.innerHTML = "<b>" + "Total price to be paid is Rs. " + total + ".</b>";
});
