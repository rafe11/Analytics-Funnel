$(document).ready(function () {
    debugger;
    loadAnalyticsContents();
});

function loadAnalyticsContents() {
    var siteUrl = _spPageContextInfo.siteAbsoluteUrl;
    var oDataUrl = siteUrl + "/_api/web/lists/getbytitle('AnalyticsFunnel')/items?$top=1000";
    $.ajax({
        url: oDataUrl,
        type: "GET",
        dataType: "json",
        headers: {
            "accept": "application/json;odata=verbose"
        },
        success: createAnalyticsTable,
        error: myErrHandler
    });
}

function createAnalyticsTable(data) {
    try {
        debugger;
        var dataTableExample = $('#table_id').DataTable();
        if (dataTableExample != 'undefined') {
            dataTableExample.destroy();
        }
        dataTableExample = $('#table_id').DataTable({
            scrollY: 300,
            "aaData": data.d.results,
            "aoColumns": [{
                "mData": "Title", 'render': renderUrlFn
            }, {
                "mData": "Region"
            }, {
                "mData": "Vertical"
            }, {
                "mData": "CRM_x0020_ID"
            }, {
                "mData": "Customer_x0020_Name"
            },{
                "mData": "Start_x0020_Date"
            }]
        });
    } catch (e) {
        /*alert(e.message);  */
    }
}

function myErrHandler(data, errCode, errMessage) {
    /*alert("Error: " + errMessage);*/
} 


function renderUrlFn (data, type, row, meta){
    var title = row['Title'];
    var itemId = row['ID'];
    var tagetURL = "";

    if(data !== ""){
        tagetURL = "https://inspiraeipl.sharepoint.com/sites/IntranetUAT/SitePages/view_Funnel.aspx"+"?UniqueId="+itemId;
    }

    return '<a href="'+tagetURL+'">'+title+'</a>';
}