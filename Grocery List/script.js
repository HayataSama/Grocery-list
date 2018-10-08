document.addEventListener('DOMContentLoaded', fn, false);
var items = new Array();
var current_item;

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
    document.getElementById('list-content').innerHTML += '<div class="table-data"' + ((priority_flag == 0) ? " style= \"background-color: #ecf0f1;\"" : " style= \"background-color: #e74c3c; color: #fff;\"") + '>\
        <div>' + item_obj.name + '</div>\
        <div>' + item_obj.count + ' ' + item_obj.weight + '</div>\
        <div>' + item_obj.category_name + '</div>\
        <div><button type="button" class="my-btn" data-toggle="modal" data-target="#myModal" onclick="edit_list(this);" id="' + (items.length - 1) + '"><i class="fas fa-cog"' + ((priority_flag == 1) ? " style=\"color: #FFF;\"" : " style=\"color: #2c3e50;\"") + '></i></button></div>\
      </div>';
  });


  // title-select


  document.getElementById('title-select').addEventListener('change', function() {
    var category = document.getElementById('title-select').value;
    document.getElementById('list-content').innerHTML = '';
    items = priority_sort(items);
    for (var i = 0; i < items.length; i++) {
      if (items[i].category == category || category == "all") {
        document.getElementById('list-content').innerHTML += '<div class="table-data"' + ((items[i].priority == 0) ? " style= \"background-color: #ecf0f1;\"" : " style= \"background-color: #e74c3c; color: #fff;\"") + '>\
              <div>' + items[i].name + '</div>\
              <div>' + items[i].count + ' ' + items[i].weight + '</div>\
              <div>' + items[i].category_name + '</div>\
              <div><button type="button" class="my-btn" data-toggle="modal" data-target="#myModal" onclick="edit_list(this);" id="' + i + '"><i class="fas fa-cog"' + ((items[i].priority == 1) ? " style=\"color: #FFF;\"" : " style=\"color: #2c3e50;\"") + '></i></button></div>\
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


  // Priority-edit


  var priority_flag_edit = 0;
  document.getElementById('priority-edit').addEventListener('click', function() {
    if (priority_flag_edit == 0) {
      this.style.color = "#e74c3c";
      priority_flag_edit = 1;
      return;
    }
    if (priority_flag_edit == "1") {
      this.style.color = "black";
      priority_flag_edit = 0;
    }
  });




  document.getElementById('delete').addEventListener('click', function() {
    document.getElementById(current_item).parentElement.parentElement.remove();
  });


  document.getElementById('save-changes').addEventListener('click', function() {
    items[current_item].priority = priority_flag_edit;
    items[current_item].count = document.getElementById('count-edit');
    items[current_item].weight = document.getElementById('weight-edit');



    document.getElementById('list-content').innerHTML = '';
    items = priority_sort(items);
    for (var i = 0; i < items.length; i++) {
      document.getElementById('list-content').innerHTML += '<div class="table-data"' + ((items[i].priority == 0) ? " style= \"background-color: #ecf0f1;\"" : " style= \"background-color: #e74c3c; color: #fff;\"") + '>\
              <div>' + items[i].name + '</div>\
              <div>' + items[i].count + ' ' + items[i].weight + '</div>\
              <div>' + items[i].category_name + '</div>\
              <div><button type="button" class="my-btn" data-toggle="modal" data-target="#myModal" onclick="edit_list(this);" id="' + i + '"><i class="fas fa-cog"' + ((items[i].priority == 1) ? " style=\"color: #FFF;\"" : " style=\"color: #2c3e50;\"") + '></i></button></div>\
            </div>';
    }


    $('#myModal').modal('hide');
  });

}


// Priority-Sort


function priority_sort(list) {
  list.sort(function(item) {
    if (item.priority == 1) {
      return 0;
    }
    if (item.priority == 0) {
      return 1;
    } else {
      return -1;
    }
  });
  return list;
}


// Edit-list


function edit_list(el) {
  document.getElementById('count-edit').value = items[el.id].count;
  document.getElementById('weight-edit').value = items[el.id].weight;
  if (items[el.id].priority == 1) {
    document.getElementById('priority-edit').style.color = '#e74c3c';
  }
  if (items[el.id].priority == 0) {
    document.getElementById('priority-edit').style.color = 'black';
  }
  current_item = el.id;

}