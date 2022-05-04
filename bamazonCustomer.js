var mysql = require("mysql");
require("console.table")
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "tiennguyen",
    password: "HoaHong10",
    database: "bamazon"
});

connection.connect(function (error) {
    if (error) throw error;

    console.log("id", connection.threadId);
    tabledisplay();

});

function tabledisplay() {
    var query = "SELECT item_id, product_name, department_name, price,stock_quantity FROM products ";
    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);

        runSearch();
    });
}

function runSearch() {
    inquirer
        .prompt([{
            name: "itemwant",
            type: "input",
            message: "What would you like to buy? Type the product ID here: ",
            validate: function(value){
                if(isNaN(value)){
                    return false
                }
                else{
                    return true
                }
            }
        }, {
            name: "quantity",
            type: "input",
            message: "Enter the quantity:",
            validate: function(value){
                if(isNaN(value)){
                    return false
                }
                else{
                    return true
                }
            }
        }])
        .then(function (answer) {

            var query = "SELECT products.item_id, products.product_name, department_name, price, stock_quantity FROM products WHERE ?";
            connection.query(query, { item_id: answer.itemwant },
                function (err, res) {
                    if (err) throw err;
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].stock_quantity < answer.quantity) {
                            console.log("Insufficient quantity! Please enter the remaining quantity.")
                            runSearch();
                        }
                        else {
                            console.log("ID:", res[i].item_id, "\n",
                                "Product:", res[i].product_name, "\n",
                                "Price: $", res[i].price,"per item", "\n",
                                "Quantity:", answer.quantity)
                            console.log("Total: $", res[i].price * answer.quantity)
                            
                        }

                    }
                   
                })
            })

          
};
