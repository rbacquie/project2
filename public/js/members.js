$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user").then(function(err, data) {
        var location = data.address_id + " City: " + data.city + " State: " + data.state + " Zip Code: " + data.zip_code;
      $("#companyname").append("Company Name: " + data.company + "<br>");
      $("#location").append("Address: " + location + "<br>");
      $("#foodType").append("Food Type: " + data.foodType + "<br>");
      $("#locationType").append("Location Type: " + data.locationType + "<br>");
    });


//need to fix this so that the member can add. update and delete info


    $.get("/api/items").then(function(req, res) {
        res.json(items)
    })
        // this function allows the member to add items
        var newStuff = function (results) {

            var newItems = $("#newitems");
            var tRow = $("<tr>");
            var AddItem = $(
                '<button class="btn" input="submit" type="submit" name="action" id="additem">ADD ITEM</button>'
            );

            //this will allow member to input the details so it can be stored in the database
            var itemName = $('<td> <input="text" name="product />');
            var price = $('<td> <input="text" name="price" />');
            var addon = $('<td> <input="text" name="addon" />');
            var addonPrice = $('<td> <input="text" name="addon_price" />');

            //here we append the 
            tRow.append(product, price, addon, addonPrice);

            newItems.append(tRow, AddItem);
            $("#additem").on('click', addProducts())
        };


        // this function creates a table of products form the data base and list them on the members page
        var listProducts = function (data) {
            // Get reference to existing tbody element, create a new table row element and buttons foe updating or deleting items
            var products = $("#productlist");
            var tRow = $("<tr>");
            var update = $(
                '<button class="btn" input="submit" type="submit" name="action" id="update">UPDATE</button>');
            var remove = $(
                '<button class="btn" input="submit" type="submit" name="action" id="delete">DELETE</button>');

            // Methods run on jQuery selectors return the selector they we run on
            // This is why we can create and save a reference to a td in the same statement we update its text
            var itemName = $('<td> <input="text" name="product" />').text(data.product);
            var price = $('<td> <input="text" name="price" />').text(data.price);
            var addon = $('<td> <input="text" name="addon" />').text(data.addon);
            var price = $('<td> <input="text" name="addon_price" />').text(data.addonPrice);
            // Append the newly created table data to the table row
            tRow.append(product, price, addon, addonPrice);
            // Append the table row to the table body
            products.append(tRow, update, remove);
        };

    });