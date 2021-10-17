$(function() {
    getSum();
    $(".checkall").change(function() {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            $(".car-middle").addClass("car-middlecolor");
        } else {
            $(".car-middle").removeClass("car-middlecolor");
        }
        getSum();
    });
    $(".j-checkbox").change(function() {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        if ($(this).prop("checked")) {
            $(this).parents(".car-middle").addClass("car-middlecolor");
        } else {
            $(this).parents(".car-middle").removeClass("car-middlecolor");
        }
        getSum();
    });
    $(".plus").click(function() {
        var n = $(this).siblings(".txt").val();
        n++;
        $(this).siblings(".txt").val(n);
        $(this).siblings(".txt").change();
        var p = $(this).parent().siblings(".p-price").html();
        p = p.trim().replace("￥", " ")
        $(this).parent().siblings(".p-sum").html("￥" + (p * n).toFixed(2));
    });
    $(".reduce").click(function() {
        var n = $(this).siblings(".txt").val();
        if (n > 1) {
            n--;
        } else {
            return false;
        }
        $(this).siblings(".txt").val(n);
        $(this).siblings(".txt").change();
        var p = $(this).parent().siblings(".p-price").html();
        p = p.trim().replace("￥", " ")
        $(this).parent().siblings(".p-sum").html("￥" + (p * n).toFixed(2));
    });
    $(".txt").change(function() {
        var n = $(this).val();
        var p = $(this).parent().siblings(".p-price").html();
        p = p.trim().replace("￥", " ")
        $(this).parent().siblings(".p-sum").html("￥" + (p * n).toFixed(2));
        getSum();
    });

    function getSum() {
        var count = 0;
        var money = 0;

        $(".txt").each(function(i, ele) {
            if ($(ele).parents(".car-middle").find("input").prop("checked")) {
                count += parseInt($(ele).val());
            }
        });

        $(".amount-sum em").text(count);
        $(".p-sum").each(function(i, ele) {
            if ($(ele).siblings(".p-check").find("input").prop("checked")) {
                money += parseFloat($(ele).text().trim().replace("￥", " "));
            }
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    }
    $(".p-action a").click(function() {
        $(this).parents(".car-middle").remove();
        getSum()
    });
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".car-middle").remove();
        getSum()
    });
    $(".clear-all").click(function() {
        $(".car-middle").remove();
        getSum()
    });
})