$("#exampleModal").on("show.bs.modal",(function(a){"use strict";var e=$(a.relatedTarget).data("whatever"),t=$(this);t.find(".modal-title").text("Telegram message to "+e),t.find(".modal-body input").val(e)}));