$(document).ready(function () {
    debugger;
    viewFunnel();   
});

// $('#editFunnel').click(function() {
//     //window.open = "https://inspiraeipl.sharepoint.com/sites/IntranetUAT/SitePages/edit_funnel.aspx"+"?UniqueId="+itemId;
//     window.open ("https://www.google.com/");
//  });

 function redirectToEdit(){
    var ItemUniId = getParameterByName('UniqueId'); 
     window.open("https://inspiraeipl.sharepoint.com/sites/IntranetUAT/SitePages/edit_funnel.aspx"+"?UniqueId="+ItemUniId);
    //window.open ("https://www.google.com/");
 }

/*$(function () {
    var listname = "AnalyticsFunnel";
    console.log("ItemID:" + getNewItemID(listname));
    //$("#lblCountry").val(Title);
});*/

function viewFunnel(){
    var listname = "AnalyticsFunnel";
    var ItemUniqueId = getParameterByName('UniqueId'); 
    console.log('*********************************    '+ItemUniqueId)
    console.log("ItemID:" + getNewItemID(listname,ItemUniqueId));
}


function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getNewItemID(listname,ItemUniqueId) {

    $('#lblSno').attr('readonly', true);
    $('#lblCountry').attr('readonly', true);
    $('#lblRegion').attr('readonly', true);
    $('#lblVertical').attr('readonly', true);
    $('#lblCrmId').attr('readonly', true);
    $('#lblCustomerName').attr('readonly', true);
    $('#lblOppName').attr('readonly', true);
    $('#lblType').attr('readonly', true);
    $('#lblFunnel').attr('readonly', true);
    $('#lblStatus').attr('readonly', true);
    $('#lblEngagement').attr('readonly', true);
    $('#lblFinalOem').attr('readonly', true);
    $('#lblRemarks').attr('readonly', true);
    $('#lblReason').attr('readonly', true);
    $('#lblSalesManager').attr('readonly', true);
    $('#lblPresales').attr('readonly', true);
    $('#lblApproxValue').attr('readonly', true);
    $('#lblStartDate').attr('readonly', true);
    $('#lblExpectedClosure').attr('readonly', true);
    $('#lblPOQuarter').attr('readonly', true);
    $('#lblExpectedBilling').attr('readonly', true);
    $('#lblSoftwareValue').attr('readonly', true);
    $('#lblServiceValue').attr('readonly', true);
    $('#lblBillingSoftware').attr('readonly', true);
    $('#lblBillingService').attr('readonly', true);
    $('#lblNextYear').attr('readonly', true);
    //var ItemID = 0;
    var siteURL = _spPageContextInfo.webAbsoluteUrl;
    

    var url = siteURL + "/_api/web/lists/getbytitle('" + listname + "')/items("+ItemUniqueId+")";
    $.ajax({
        url: url,
        method: "GET",
        async: false,
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {

            console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
            document.getElementsByName('lblSno').value = 'qwerty';

            console.log(data.d.S_x0020_No_x002e_);
                ItemUniqueId = data.d.ID;
                //itemID = data.d.Title;
                $("#lblSno").val(data.d.S_x0020_No_x002e_);
                $("#lblCountry").val(data.d.Title);
                $("#lblRegion").val(data.d.Region);
                $("#lblVertical").val(data.d.Vertical);
                $("#lblCrmId").val(data.d.CRM_x0020_ID);
                $("#lblCustomerName").val(data.d.Customer_x0020_Name);
                $("#lblOppName").val(data.d.Opportunity_x0020_name);
                $("#lblType").val(data.d.Type1);
                $("#lblFunnel").val(data.d.Funnel);
                $("#lblStatus").val(data.d.Status_x000a__x0028_Active_x002f);
                $("#lblEngagement").val(data.d.Engagement_x000a__x0028_Reactive);
                $("#lblFinalOem").val(data.d.Final_x0020_OEM);
                $("#lblRemarks").val(data.d.Remarks);
                $("#lblReason").val(data.d.Reason_x0020_for_x0020_losing_x0);
                $("#lblSalesManager").val(data.d.Sales_x002f__x0020_Account_x0020);
                $("#lblPresales").val(data.d.Presales);
                $("#lblApproxValue").val(data.d.Approx_x002e__x000a_Value_x0020_);
                $("#lblStartDate").val(data.d.Start_x0020_Date);
                $("#lblExpectedClosure").val(data.d.Expected_x0020_Closure);
                $("#lblPOQuarter").val(data.d.PO_x0020__x000a_Quarter);
                $("#lblExpectedBilling").val(data.d.Expected_x0020_Billing_x0020_Sta);
                $("#lblSoftwareValue").val(data.d.Software_x000a_Value);
                $("#lblServiceValue").val(data.d.Services_x000a_Value);
                $("#lblBillingSoftware").val(data.d.Current_x0020_Year_x0020_Billing);
                $("#lblBillingService").val(data.d.Current_x0020_Year_x0020_Billing0);
                $("#lblNextYear").val(data.d.Next_x0020_Year_x0020_);
            
        },
        error: function (data) {
        }
    });
    return ItemUniqueId;
    
}

