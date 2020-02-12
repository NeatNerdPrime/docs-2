(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{176:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p"),t._m(2),a("p"),t._v(" "),t._m(3),t._v(" "),t._m(4),a("p",[t._v("After making changes to your mail configuration you'll need to run the following command within your Pixelfed installation directory.")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("Create an account with "),a("a",{attrs:{href:"https://mailgun.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mailgun"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v('If you are not using the "US" '),a("a",{attrs:{href:"https://documentation.mailgun.com/en/latest/api-intro.html#mailgun-regions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mailgun region"),a("OutboundLink")],1),t._v(", you may define your region's endpoint in the "),a("code",[t._v("services")]),t._v(" configuration file located in the "),a("code",[t._v("config/")]),t._v(" directory:")]),t._v(" "),t._m(11),t._m(12),t._v(" "),a("p",[t._v("Create an account with Amazon AWS.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("To use the Postmark driver, install Postmark's SwiftMailer transport via Composer:")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"configuring-mail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-mail","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring Mail")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Pixelfed currently supports SMTP, Mailgun, Postmark, Amazon SES, and "),s("code",[this._v("sendmail")]),this._v(" for sending emails to users.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#mailgun"}},[this._v("Mailgun")])]),s("li",[s("a",{attrs:{href:"#aws-ses"}},[this._v("AWS SES")])]),s("li",[s("a",{attrs:{href:"#postmark"}},[this._v("Postmark")])]),s("li",[s("a",{attrs:{href:"#smtp"}},[this._v("SMTP")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Your "),s("code",[this._v(".env")]),this._v(" file will need to include the following setting keys depending on which "),s("code",[this._v("MAIL_DRIVER")]),this._v(" you use.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("MAIL_DRIVER"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("smtp\nMAIL_HOST"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("mailtrap.io\nMAIL_PORT"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("587\nMAIL_USERNAME"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("null\nMAIL_PASSWORD"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("null\nMAIL_ADDRESS"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("null\nMAIL_NAME"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("null\nMAIL_ENCRYPTION"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("tls\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ php artisan config:cache\n\n"),s("span",{attrs:{class:"token comment"}},[this._v("# If you experience any issues after running this command, run this too:")]),this._v("\n$ "),s("span",{attrs:{class:"token function"}},[this._v("rm")]),this._v(" -rf bootstrap/cache/*\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"mailgun"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mailgun","aria-hidden":"true"}},[this._v("#")]),this._v(" Mailgun")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("MAIL_USERNAME")]),t._v(" should be Mailgun "),a("strong",[t._v("domain")]),t._v("."),a("br"),t._v(" "),a("code",[t._v("MAIL_PASSWORD")]),t._v(" should be Mailgun "),a("strong",[t._v("API Key")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Edit your "),s("code",[this._v(".env")]),this._v(" file with the following variables.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("MAIL_DRIVER"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"mailgun"')]),t._v("\nMAIL_HOST"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"smtp.mailgun.org"')]),t._v("\nMAIL_PORT"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"587"')]),t._v("\nMAIL_USERNAME"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"example.org"')]),t._v("\nMAIL_PASSWORD"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"xxxx"')]),t._v("\nMAIL_ADDRESS"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"support@example.org"')]),t._v("\nMAIL_NAME"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Pixelfed"')]),t._v("\nMAIL_ENCRYPTION"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"tls"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("tls")]),this._v(" encryption setting is required to have e-mails be properly delivered.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'mailgun'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'domain'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'your-mailgun-domain'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'secret'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'your-mailgun-key'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'endpoint'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'api.eu.mailgun.net'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"aws-ses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws-ses","aria-hidden":"true"}},[this._v("#")]),this._v(" AWS SES")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Then set the "),a("code",[t._v("MAIL_DRIVER")]),t._v(" option in your "),a("code",[t._v(".env")]),t._v(" configuration file to "),a("code",[t._v("ses")]),t._v(" and verify that your "),a("code",[t._v("config/services.php")]),t._v(" configuration file contains the following options:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'ses'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'key'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'your-ses-key'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'secret'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'your-ses-secret'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'region'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'ses-region'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// e.g. us-east-1")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"postmark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postmark","aria-hidden":"true"}},[this._v("#")]),this._v(" Postmark")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("composer require wildbit/swiftmailer-postmark\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Next, install Guzzle and set the "),a("code",[t._v("driver")]),t._v(" option in your "),a("code",[t._v("config/mail.php")]),t._v(" configuration file to "),a("code",[t._v("postmark")]),t._v(". Finally, verify that your "),a("code",[t._v("config/services.php")]),t._v(" configuration file contains the following options:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'postmark'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'token'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'your-postmark-token'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"smtp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#smtp","aria-hidden":"true"}},[this._v("#")]),this._v(" SMTP")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To use SMTP driver, set the following "),s("code",[this._v(".env")]),this._v(" variables accordingly.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("MAIL_DRIVER"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("smtp\nMAIL_HOST"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("mailtrap.io\nMAIL_PORT"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("587\nMAIL_USERNAME"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("null\nMAIL_PASSWORD"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("null\nMAIL_ADDRESS"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("null\nMAIL_NAME"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("null\nMAIL_ENCRYPTION"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("tls\n")])])])}],!1,null,null,null);e.options.__file="configuring-mail.md";s.default=e.exports}}]);