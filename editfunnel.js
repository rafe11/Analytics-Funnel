$(document).ready(function () {
    debugger;
    viewFunnel();    
});

/*$(function () {
    var listname = "AnalyticsFunnel";
    console.log("ItemID:" + getNewItemID(listname));
    //$("#txtCountry").val(Title);
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
            //document.getElementsByName('txtSno').value = 'qwerty';

            console.log(data.d.S_x0020_No_x002e_);
                ItemUniqueId = data.d.ID;
                //itemID = data.d.Title;
                $("#txtSno").val(data.d.S_x0020_No_x002e_);
                $("#txtCountry").val(data.d.Title);
                $("#txtRegion").val(data.d.Region);
                $("#txtVertical").val(data.d.Vertical);
                $("#txtCrmId").val(data.d.CRM_x0020_ID);
                $("#txtCustomerName").val(data.d.Customer_x0020_Name);
                $("#txtOppName").val(data.d.Opportunity_x0020_name);
                $("#txtType").val(data.d.Type1);
                $("#txtFunnel").val(data.d.Funnel);
                $("#txtStatus").val(data.d.Status_x000a__x0028_Active_x002f);
                $("#txtEngagement").val(data.d.Engagement_x000a__x0028_Reactive);
                $("#txtFinalOem").val(data.d.Final_x0020_OEM);
                $("#txtRemarks").val(data.d.Remarks);
                $("#txtReason").val(data.d.Reason_x0020_for_x0020_losing_x0);
                $("#txtSalesManager").val(data.d.Sales_x002f__x0020_Account_x0020);
                $("#txtPresales").val(data.d.Presales);
                $("#txtApproxValue").val(data.d.Approx_x002e__x000a_Value_x0020_);
                $("#txtStartDate").val(data.d.Start_x0020_Date);
                $("#txtExpectedClosure").val(data.d.Expected_x0020_Closure);
                $("#txtPOQuarter").val(data.d.PO_x0020__x000a_Quarter);
                $("#txtExpectedBilling").val(data.d.Expected_x0020_Billing_x0020_Sta);
                $("#txtSoftwareValue").val(data.d.Software_x000a_Value);
                $("#txtServiceValue").val(data.d.Services_x000a_Value);
                $("#txtBillingSoftware").val(data.d.Current_x0020_Year_x0020_Billing);
                $("#txtBillingService").val(data.d.Current_x0020_Year_x0020_Billing0);
                $("#txtNextYear").val(data.d.Next_x0020_Year_x0020_);
            
        },
        error: function (data) {
        }
    });
    return ItemUniqueId;  
}


function update(listname,ItemUniqueId) {  
    //event.preventDefault();
    var listname = "AnalyticsFunnel";
    var ItemUniqueId = getParameterByName('UniqueId');
    //Fetch the values from the input elements
    var sno = $("#txtSno").val();
    var country = $("#txtCountry").val();
    var region = $("#txtRegion").val();
    var vertical = $("#txtVertical").val();
    var crmID = $("#txtCrmId").val();
    var customerName = $("#txtCustomerName").val();
    var oppName = $("#txtOppName").val();
    var type = $("#txtType").val();
    var funnel = $("#txtFunnel").val();
    var status = $("#txtStatus").val();
    var engagment = $("#txtEngagement").val();
    var finalOEM = $("#txtFinalOem").val();
    var remarks = $("#txtRemarks").val();
    var reasonForLosing = $("#txtReason").val();
    var salesManager = $("#txtSalesManager").val();
    var preSales = $("#txtPresales").val();
    var approxValue = $("#txtApproxValue").val();
    var startDate = $("#txtStartDate").val();
    var expectedclosure = $("#txtExpectedClosure").val();
    var poQuarter = $("#txtPOQuarter").val();
    var expectedBillingStartQuarter = $("#txtExpectedBilling").val();
    var softwareValue = $("#txtSoftwareValue").val();
    var serviceValue = $("#txtServiceValue").val();
    var currentYearBillingSoftware = $("#txtBillingSoftware").val();
    var currentYearBillingService = $("#txtBillingService").val();
    var nextyear = $("#txtNextYear").val();  
      
        $.ajax({  
      
         
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('" + listname + "')/items("+ItemUniqueId+")",  
            method: "POST",  
            data: JSON.stringify({  
                '__metadata': {  
                    'type': 'SP.Data.AnalyticsFunnelListItem'  
                },  
                'Title': country,  
                'S_x0020_No_x002e_': sno,
                'Region': region,  
                'Vertical': vertical,  
                'CRM_x0020_ID': crmID,  
                'Customer_x0020_Name': customerName, 
                'Opportunity_x0020_name': oppName,
                'Type1':type,
                'Funnel':funnel,
                'Status_x000a__x0028_Active_x002f':status,
                'Engagement_x000a__x0028_Reactive'
                'Final_x0020_OEM'
                'Remarks'
                'Reason_x0020_for_x0020_losing_x0'
                'Sales_x002f__x0020_Account_x0020'
                'Presales'
                'Approx_x002e__x000a_Value_x0020_'
                'Start_x0020_Date'
                'Expected_x0020_Closure'
                'PO_x0020__x000a_Quarter'
                'Expected_x0020_Billing_x0020_Sta'
                'Software_x000a_Value'
                'Services_x000a_Value'
                'Current_x0020_Year_x0020_Billing'
                'Next_x0020_Year_x0020_'
                  
            }),  
            headers: {  
                "accept": "application/json;odata=verbose",  
                "content-type": "application/json;odata=verbose",  
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
                "IF-MATCH": "*",             //Overrite the changes in the sharepoint list item
                "X-HTTP-Method": "MERGE"      // Specifies the update operation in sharepoint list
            },  
            success: function(data) {  
                swal( "Item Updated successfully", "success"); 
      
          //Bind the data into datatable
                viewFunnel();  
            },  
            error: function(error) {  
                console.log(JSON.stringify(error));  
      
            }  
      
        })  
      
      
    }  
