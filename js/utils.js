const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$('#tableGenerate').click(function() {
    let rows = $('#rowsInput').val();
    let columns = $('#columnsInput').val();
    let url = `/table?rows=${rows}&columns=${columns}`
    let stateObj = { rows: rows, columns: columns };
    history.pushState(stateObj, "table", url);
    location.href = url;
});