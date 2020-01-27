function sum(table) {

        let counter = 0
        for (const tableRow of table) {
            counter++
            if (counter % 2 === 0){
                tableRow.valueOf()
            }
        }
}

console.log(sum("<table>\n" +
    "<tbody>\n" +
    "<tr><th>Product</th><th>Cost</th></tr>\n" +
    "<tr><td>Beer</td>   <td>2.88</td></tr>\n" +
    "<tr><td>Fries</td>  <td>2.15</td></tr>\n" +
    "<tr><td>Burger</td> <td>4.59</td></tr>\n" +
    "<tr><td>Total:</td> <td id=\"sum\"></td></tr>\n" +
    "</tbody>\n" +
    "</table>"));