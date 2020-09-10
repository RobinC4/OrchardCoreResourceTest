function gridReadParams(e) {
    let sortName = "";
    let sortOrder = 0;
    let token = "";

    if (e.sort && e.sort.length > 0 && e.sort[0].field) {
        sortName = e.sort[0].field;
        sortOrder = e.sort[0].dir == "asc" ? 0 : 1;
    }
    
    let $tokenInput = $('input[name=__RequestVerificationToken]');
    if ($tokenInput)
        token = $tokenInput.val();

    return {
        "__RequestVerificationToken": token,
        Page: e.page,
        Limit: e.pageSize,
        SortName: sortName,
        SortOrder: sortOrder
    }
}