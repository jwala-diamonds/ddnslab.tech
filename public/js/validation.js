/*

NOTE: 

*/

(function($) {
  "use strict";
  $(document).ready(function() {
    $.validator.addMethod("fqdn", function(value, element) {
      return this.optional(element) || /^.+\...+\...+/.test(value);
    }, "Invalid FQDN format");
    $("#apiTestForm").validate({
      rules: {
        apitoken: {
          required: true,
          minlength: 40
        },
        rname: {
          required: true,
          fqdn: true
        }
      },
      messages: {
        apitoken: {
          required: "Please enter your API Token",
          minlength: "Invalid API Token"
        },
        rname: {
          required: "Please enter a valid FQDN"
        }
      },
      errorElement: "em",
      errorPlacement: function(error, element) {
        // Add the `help-block` class to the error element
        error.addClass("help-block");

        if (element.prop("type") === "checkbox") {
          error.insertAfter(element.parent("label"));
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function(element, errorClass, validClass) {
        $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
      }
    });
  });

})(jQuery);