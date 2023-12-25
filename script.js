// Function to add a new to-do item
function addTodo() {
    let inputBox = document.getElementById("newTodo");
    let todoList = document.getElementById("todoList");

    // Get the text from the input box
    let todoText = inputBox.value;

    if (todoText.trim() !== "") {
      // Create a new list item
      let listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(todoText));

      // Add click event to remove or cross out the item
      listItem.addEventListener("click", function () {
          // Cross out the item
          listItem.classList.add("completed");

          // Remove the item after 1 second
          setTimeout(function () {
            todoList.removeChild(listItem);
          }, 1000);
      });

      // Add the new list item to the bottom of the list
      todoList.appendChild(listItem);

      // Clear the text from the input box
      inputBox.value = "";
    }
  }