/* 
 * Javascript functions for NoGO website
 * @auth dpb
 * @date 10/24/2013
 */

 $(function() {

    //
    // TODO: When a selection is made for any category, AJAX call to server-side: request image
    // TODO: (don't wait for response, but switch image href when filename is returned.)
    //
    // TODO: Define click() of button: check if disabled. If so, alert warning about selection.
    // TODO: Otherwise, send AJAX to server-side with file request. Don't wait for response - server
    // TODO: side will send a mimetype file download thing.
    //

    // Get frontpage elements as jquery accessors, vars to reduce redundancy of hard coding
    var org_accessor = $("#f_organism");
    var branch_accessor = $("#f_branch");
    var term_accessor = $("#f_goterm");
    var algs_accessor = $(".f_algorithm");
    var button_accessor = $("#f_download");

    // Behavior on change of Organism select box (enable GO Branch select box)
    function setBranchField(e) {
        if (org_accessor.val() == "") {
            branch_accessor.attr("disabled", "disabled");
            return;
        }
        branch_accessor.removeAttr("disabled");
    }
    org_accessor.change(setBranchField);

    // Behavior on change of GO Branch select box (enable GO Term input)
    function setTermField(e) {
        if (branch_accessor.val() == "") {
            term_accessor.attr("disabled", "disabled");
            return;
        }
        term_accessor.removeAttr("disabled");
    }
    branch_accessor.change(setTermField);

    // Behavior on change of GO Term input box (enable Algorithm checkboxes)
    function setAlgorithmsField(e) {
        if (term_accessor.val() == "") {
            algs_accessor.attr("disabled", "disabled");
            return;
        }
        algs_accessor.removeAttr("disabled");
    }
    term_accessor.change(setAlgorithmsField);

    // Behavior on change of Algorithm checkboxes (enable download button if disabled)
    function setButtonField(e) {
        var rocc_selected = $("#alg_rocc").is(':checked');
        var netl_selected = $("#alg_netl").is(':checked');
        var snob_selected = $("#alg_snob").is(':checked');

        if (rocc_selected || netl_selected || snob_selected) {
            button_accessor.removeAttr("disabled");
        } else {
            button_accessor.attr("disabled", "disabled");
        }
    }
    algs_accessor.change(setButtonField);

    // On page load (here), call all functions to make sure of correct enable/disable scheme
    setBranchField(null);
    setTermField(null);
    setAlgorithmsField(null);
    setButtonField(null);

 })
