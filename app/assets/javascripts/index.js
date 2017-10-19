$(function() {
  $(".js-more").on("click", function() {
    let id = $(this).data("id");
    $.get("/products/" + id + ".json", function(data) {
        let inventoryText = "<strong>Available</strong>";
        if(data["inventory"] === 0){
          inventoryText = "<strong>Sold Out</strong>";
        }
        let ordersText = "<ul>" + data["orders"].map(order => {
          return `<li>ID: ${order.id}, Created: ${order.created_at}</li>`
        }).join("") + "</ul>"
        let descriptionText = "<p>" + data["description"] + "</p><p>" + inventoryText + "</p>" + ordersText;
        $("#product-" + id).html(descriptionText);
    });
  });
});
