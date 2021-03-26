// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;

  subTotal = (Number(price) * quantity).toString();

  const subtotal = (product.querySelector(
    ".subtotal span"
  ).innerText = subTotal);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll(".product");
  products.forEach((item) => updateSubtotal(item));

  // ITERATION 3
  //... your code goes here
  let total = 0;
  let subtotalp = document.querySelectorAll(".subtotal span");
  subtotalp.forEach((elem) => {
    let number = Number(elem.innerText);
    total += number;
  });
  let total_tag = (document.querySelector(
    "#total-value span"
  ).innerText = total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  let parent_tag = target.parentNode.parentNode;
  parent_tag.parentNode.removeChild(parent_tag);
  calculateAll();
}

// ITERATION 5

function createProduct(e) {
  //... your code goes here
  let textInput = document.querySelector(".create-product input[type=text]");
  let priceInput = document.querySelector(".create-product input[type=number]");
  let parentElem = document.querySelector(".product").parentNode;
  let newTr = document.createElement("tr");
  newTr.className = "product";
  let newItem = `   <td class="name">
                      <span>${textInput.value}</span>
                    </td>
                    <td class="price">$<span>${priceInput.value}</span></td>
                    <td class="quantity">
                      <input type="number" value="0" min="0" placeholder="Quantity" />
                    </td>
                    <td class="subtotal">$<span>0</span></td>
                    <td class="action">
                      <button class="btn btn-remove">Remove</button>
                    </td>`;
  newTr.innerHTML = newItem;
  parentElem.appendChild(newTr);

  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  // clean the fields
  textInput.value = "";
  priceInput.value = 0;
}

const calculatePricesBtn = document.getElementById("calculate");
calculatePricesBtn.addEventListener("click", calculateAll);

//... your code goes here
const removeButtons = document.querySelectorAll(".btn-remove");
removeButtons.forEach((button) => {
  button.addEventListener("click", removeProduct);
});

const createButton = document.getElementById("create");
createButton.addEventListener("click", createProduct);
