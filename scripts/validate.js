//HTML読み込み時に実行
$(document).ready(function () {
    // フォーカスアウト時に実行
    $(":text, textarea").blur(function () {
        // 入力チェック
        if ($(this).attr("validate").match("required")) {
            if ($(this).val() == "") {
                // エラーメッセージがなければエラーメッセージを表示
                if ($(this).next().text() === "") {
                    $(this).after(
                        "<div class='error-message'>" +
                            $(this).attr("placeholder") +
                            "を入力ください。</div>"
                    );
                }
                return true;
            } else {
                if ($(this).next().text() !== "") {
                    $(this).next().remove();
                }
            }
        }
        // メールアドレスチェック
        if ($(this).attr("validate").match("mail")) {
            if (
                !$(this)
                    .val()
                    .match(
                        /^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/g
                    )
            ) {
                if ($(this).next().text() === "") {
                    $(this).after(
                        "<div class='error-message'>メールアドレスの形式で入力してください</div>"
                    );
                }
                return true;
            } else {
                if ($(this).next().text() !== "") $(this).next().remove();
            }
        }

        // 文字数チェック
        if ($(this).attr("validate").match("text-length")) {
            if ($(this).val().length < 20) {
                if ($(this).next().text() === "") {
                    $(this).after(
                        "<div class='error-message'>20文字以上入力ください。</div>"
                    );
                }
                return true;
            } else {
                if ($(this).next().text() !== "") {
                    $(this).next().remove();
                }
            }
        }
    });

    // エラーがあれば表示する
    $("form").submit(function (e) {
        if ($("div").hasClass("error-message") == true) {
            e.preventDefault();
            alert("入力内容をご確認ください。");
        }
    });
});
