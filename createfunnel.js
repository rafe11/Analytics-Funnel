$(document).ready(function () {
    // initUsers('divPeoplePicker');
    //fnGetUserProps();
    initializePeoplePicker('peoplePickerDiv');
    $('#txtStartDate').datepicker({
        dateFormat: "dd-mm-yy"
    });
    $('#txtExpectedClosure').datepicker({
        dateFormat: "dd-mm-yy"
    });
    $('#txtPOQuarter').datepicker({
        dateFormat: "dd-mm-yy"
    });
    $('#txtExpectedBilling').datepicker({
        dateFormat: "dd-mm-yy"
    });
});

$(function () { $("#btnInsert").click(function (event) { InsertListItem(event); }); });
function InsertListItem(event) {
    event.preventDefault();

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
    var salesManager = $("#peoplePickerDiv .ms-entity-resolved").text();
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

    $.ajax
        ({
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('AnalyticsFunnel')/items",
            type: "POST",
            data: JSON.stringify
                ({
                    __metadata:
                    {
                        type: "SP.Data.AnalyticsFunnelListItem"
                    },
                    Title: country,
                    S_x0020_No_x002e_: sno,
                    Region: region,
                    Vertical: vertical,
                    CRM_x0020_ID: crmID,
                    Customer_x0020_Name: customerName,
                    Opportunity_x0020_name: oppName,
                    Type1: type,
                    Funnel: funnel,
                    Status_x000a__x0028_Active_x002f: status,//
                    Engagement_x000a__x0028_Reactive: engagment,//
                    Final_x0020_OEM: finalOEM,
                    Remarks: remarks,
                    Reason_x0020_for_x0020_losing_x0: reasonForLosing,
                    Sales_x002f__x0020_Account_x0020: salesManager,
                    Presales: preSales,
                    Approx_x002e__x000a_Value_x0020_: approxValue,
                    Start_x0020_Date: startDate,
                    Expected_x0020_Closure: expectedclosure,
                    PO_x0020__x000a_Quarter: poQuarter,
                    Expected_x0020_Billing_x0020_Sta: expectedBillingStartQuarter,
                    Software_x000a_Value: softwareValue,
                    Services_x000a_Value: serviceValue,//
                    Current_x0020_Year_x0020_Billing: currentYearBillingSoftware,//
                    Current_x0020_Year_x0020_Billing0: currentYearBillingService,//
                    Next_x0020_Year_x0020_: nextyear//
                }),
            headers:
            {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                "X-HTTP-Method": "POST"
            },
            success: function (data, status, xhr) {
                //createitem();
                alert("Funnel Created Sucessfully");
            },
            error: function (xhr, status, error) {
                console.log(xhr);
                alert(JSON.stringify(error));
            }
        });
}



// Render and initialize the client-side People Picker.
function initializePeoplePicker(peoplePickerElementId) {

    // Create a schema to store picker properties, and set the properties.
    var schema = {};
    schema['PrincipalAccountType'] = 'User,DL,SecGroup,SPGroup';
    schema['SearchPrincipalSource'] = 15;
    schema['ResolvePrincipalSource'] = 15;
    schema['AllowMultipleValues'] = false;
    schema['MaximumEntitySuggestions'] = 50;
    schema['Width'] = '277px';

    // Render and initialize the picker. 
    // Pass the ID of the DOM element that contains the picker, an array of initial
    // PickerEntity objects to set the picker value, and a schema that defines
    // picker properties.
    this.SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, null, schema);
}

// Query the picker for user information.
function getUserInfo() {

    // Get the people picker object from the page.
    var peoplePicker = this.SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerDiv_TopSpan;

    // Get information about all users.
    var users = peoplePicker.GetAllUserInfo();
    var userInfo = '';
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        for (var userProperty in user) {
            userInfo += userProperty + ':  ' + user[userProperty] + '';
        }
    }
    $('#resolvedUsers').html(userInfo);

    // Get user keys.
    var keys = peoplePicker.GetAllUserKeys();
    $('#userKeys').html(keys);

    // Get the first user's ID by using the login name.
    getUserId(users[0].Key);
}

// Get the user ID.
function getUserId(loginName) {
    var context = new SP.ClientContext.get_current();
    this.user = context.get_web().ensureUser(loginName);
    context.load(this.user);
    context.executeQueryAsync(
        Function.createDelegate(null, ensureUserSuccess),
        Function.createDelegate(null, onFail)
    );
}

function ensureUserSuccess() {
    createitem(this.user.get_id());
    $('#userId').html(this.user.get_id());
}

function onFail(sender, args) {
    alert('Query failed. Error: ' + args.get_message());
}