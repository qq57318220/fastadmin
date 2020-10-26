define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'city/index' + location.search,
                    add_url: 'city/add',
                    edit_url: 'city/edit',
                    del_url: 'city/del',
                    multi_url: 'city/multi',
                    import_url: 'city/import',
                    table: 'city',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'area_id',
                sortName: 'area_id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'area_id', title: __('Area_id')},
                        {field: 'area_code', title: __('Area_code'), operate: 'LIKE'},
                        {field: 'area_name', title: __('Area_name'), operate: 'LIKE'},
                        {field: 'level', title: __('Level')},
                        {field: 'city_code', title: __('City_code'), operate: 'LIKE'},
                        {field: 'center', title: __('Center'), operate: 'LIKE'},
                        {field: 'parent_id', title: __('Parent_id')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});