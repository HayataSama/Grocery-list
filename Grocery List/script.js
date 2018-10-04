document.addEventListener('DOMContentLoaded', fn, false);
var items = new Array();

function fn() {
  document.getElementById('add-item').addEventListener('click', function() {
    var item_obj = {};
    item_obj.name = document.getElementById('name').value;
    item_obj.count = document.getElementById('count').value;
    item_obj.weight = document.getElementById('weight').value;
    item_obj.priority = priority_flag;
    item_obj.category = document.getElementById('cat-select').value;
    var category = document.getElementById('cat-select').value;
    if (category == 'grocery') {
      item_obj.category_name = "سوپر مارکت"
    }
    if (category == 'fruit') {
      item_obj.category_name = "میوه فروشی"
    }
    if (category == 'drug-store') {
      item_obj.category_name = "دارو خانه"
    }
    if (category == 'other') {
      item_obj.category_name = "غیره"
    }
    items.push(item_obj);
    document.getElementById('list-content').innerHTML += '<div class="table-data"' + ((priority_flag == 0) ? " style= \"background-color: #ecf0f1;\"" : " style= \"background-color: #e74c3c;\"") + '>\
        <div>' + item_obj.name + '</div>\
        <div>' + item_obj.count + ' ' + item_obj.weight + '</div>\
        <div>' + item_obj.category_name + '</div>\
        <div><button type="button" class="my-btn" data-toggle="modal" data-target="#myModal"><i class="fas fa-cog"></i></button></div>\
      </div>';
  });


  // title-select


  document.getElementById('title-select').addEventListener('change', function() {
    var category = document.getElementById('title-select').value;
    document.getElementById('list-content').innerHTML = '';
    for (var i = 0; i < items.length; i++) {
      if (items[i].category == category || category == "all") {
        document.getElementById('list-content').innerHTML += '<div class="table-data"' + ((items[i].priority == 0) ? " style= \"background-color: #ecf0f1;\"" : " style= \"background-color: #e74c3c;\"") + '>\
              <div>' + items[i].name + '</div>\
              <div>' + items[i].count + ' ' + items[i].weight + '</div>\
              <div>' + items[i].category_name + '</div>\
              <div><button type="button" class="my-btn" data-toggle="modal" data-target="#myModal"><i class="fas fa-cog"></i></button></div>\
            </div>';
      }
    }
  });


  // priority


  var priority_flag = 0;
  document.getElementById('priority').addEventListener('click', function() {
    if (priority_flag == 0) {
      this.style.color = "#e74c3c";
      priority_flag = 1;
      return;
    }
    if (priority_flag == "1") {
      this.style.color = "black";
      priority_flag = 0;
    }
  });


}
