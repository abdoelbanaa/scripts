        var blocked_html_code = "<!doctype html><html lang='ar' dir='rtl'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width,initial-scale=1'><title>خطاء...!!!</title><style>@import url(https://fonts.googleapis.com/css2?family=Tajawal:wght@700&display=swap);h4{background:#3d55ef5e;padding:10px}*{border-radius:15px;font-family:Tajawal,sans-serif}span.ID{color:#0e8500}.onwe{font:14px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;position:fixed;overflow-x:hidden;background:#f8f8f8;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:1;text-align:center}.nnvbada{position:relative;padding:2em;width:80%;max-width:600px;min-width:200px;margin:5em auto;background:#fff;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.iconcpby{color:#fff;position:absolute;margin:0 auto;left:0;right:0;top:-25px;width:50px;height:50px;line-height:50px;border-radius:50%;-webkit-border-radius:50%;z-index:9;background:#0033a9;padding:0;text-align:center;box-shadow:0 5px 15px rgba(0,0,0,.26);-webkit-box-shadow:0 5px 15px rgba(0,0,0,.26);font-size:2em;font-family:arial;text-decoration:none}.n1{text-align:center;font-size:26px;margin:30px 0 15px;line-height:normal}.n2{text-align:center;font-size:26px;margin:30px 0 15px;line-height:normal}.n3{text-align:center;overflow:hidden}.n4{color:#fff;background:#0033a9;text-decoration:none;display:block;max-width:180px;padding:10px 12px;margin:5px auto;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:0;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}</style></head><body><div class='onwe'><div class='nnvbada'><div><div class='iconcpby'><span>©</span></div><h4 class='n1'>عفواً..!!</h4></div><div style='position:relative;padding:5px;text-align:right;font-size:14px'><p>لا يمكنك إستخدام هذا القالب .. هذا التوقف يحدث تلقائياً بسبب مايلي ..</p><p><span style='font-size:17px;font-weight:700;color:#0033a9'>1</span>-العبث بحقوق ملكية التصميم!..كإخفاء توقيع المصمم</p><p><span style='font-size:17px;font-weight:700;color:#0033a9'>2</span>-لا تملك رخصة؟ .. للحصول على تفعيل القالب يرجى<a href='' style='color:#0033a9;font-size:14px;font-weight:400'>طلب رخصة</a></p><p><span style='font-size:17px;font-weight:700;color:#0033a9'>3</span>-تملك رخصة ومع ذلك لا تستطيع إستخدام هذا القالب .. يرجى التواصل بـ<a href='' style='color:#0033a9;font-size:14px;font-weight:400'>فريق الدعم</a></p></div><div class='n3'><a href='https://www.facebook.com/Abdelmgeedahmedelbanaa.official' class='n4'>الصفحة الرسمية</a></div></div></div></body></html>";


var danger_gradient = "linear-gradient(to right, #db4141, #c70024)";
var success_gradient = "linear-gradient(to right, #75db41, #00c73d)";
var warning_gradient = "linear-gradient(to right, #cbcf13, #c3cb0a)";
window.addEventListener('DOMContentLoaded', event => {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});

$(".ths_blog_name").text(ths_blog_name);

$(document).ready(function() {
    if ($(".table_name").length > 0) {
        $(".table_name").eq(0).click();
    } else {
        $(".no_tables_container").slideDown();
    }
});

        $("#BT_NEW_container").html(`<div aria-hidden='true' class='modal fade' id='new_activation_modal' tabindex='-1'>
  <div class='modal-dialog modal-dialog-centered'>
    <div class='modal-content'>
      <div class='modal-header'>
        <h5 class='modal-title' id='exampleModalCenterTitle'>تفعيل جديد للمشروع : <span class='project_name'/></h5>
        <button aria-label='Close' class='btn-close' data-bs-dismiss='modal' type='button'/>
      </div>
      <div class='modal-body'>
        
        <div class='input-group mb-3'>
          <span class='input-group-text'>الاسم</span>
          <input class='form-control' id='username_input' placeholder='ادخل اسم صاحب التفعيل' type='text'/>
        </div>
        <div class='input-group mb-3'>
          <span class='input-group-text'>ID المدونة</span>
          <input class='form-control' id='blog_id_input' placeholder='ادخل ID المدونة' type='text'/>
        </div>
        <div class='input-group mb-3'>
          <span class='input-group-text'>رابط الموقع</span>
          <input class='form-control' id='website_link_input' placeholder='https://example.blogspot.com/' type='text'/>
          <span class='input-group-text' id='get_website_domain'><i class='fas fa-sync'></i></span>
        </div>
        <div class='input-group mb-3'>
          <span class='input-group-text'>البريد الالكتروني</span>
          <input class='form-control' id='email_input' placeholder='example@gmail.com' type='text'/>
        </div>
        <div class='input-group mb-3'>
          <span class='input-group-text'>رابط التواصل</span>
          <input class='form-control' id='contact_input' placeholder='WhatsApp , Messenger, facebook , Phone Num' type='text'/>
        </div>
          <div class='input-group mb-3'>
<span class='input-group-text'>طريقة الشراء</span>
<select class='form-control' id='Pay' name='Pay'>
<option value='vodafone-cash'>vodafone cash</option>
<option value='orange-cash'>orange cash</option>
<option value='etisalat-cash'>etisalat cash</option>
<option value='Cash'>Cash</option>
</select>
</div>
<div class='input-group mb-3'>
<span class='input-group-text'>نسخة القالب</span>
<select class='form-control' id='templateV' name='Template Version'>
<option value='pro'>pro</option>
<option value='free'>free</option>
</select>
</div>
<div class='input-group mb-3'>
<span class='input-group-text'>حقوق المصمم</span>
<select class='form-control' id='copyicon' name='copyicon'>
<option value='1'>موجوده</option>
<option value='0'>غير موجوده</option>
</select>
</div>
      </div>
      <div class='modal-footer'>
        <button class='btn btn-secondary' data-bs-dismiss='modal' type='button'>الغاء</button>
        <button class='btn btn-primary' onclick='submit_new_activation()' type='button'>تفعيل الأن</button>
      </div>
    </div>
  </div>
</div>`);



$("#BT_NEW_codev2").html(`<div aria-hidden='true' class='modal fade' id='new_activation_code_v2' tabindex='-1'>
  <div class='modal-dialog modal-dialog-centered' style=" max-width: 98; max-width: 1000px !important ">
    <div class='modal-content'>
      <div class='modal-header'>
        <h5 class='modal-title' id='exampleModalCenterTitle'>توليد كود الحماية لمشروع : <span class='project_name'/></h5>
        <button aria-label='Close' class='btn-close' data-bs-dismiss='modal' type='button'/>
      </div>
      <div class='modal-header'>
<div class='tab'>
<button class='tablinks active' onclick='openTabs(event, &apos;tap1&apos;)'> الشكل الاول للحقوق </button>
<button class='tablinks' onclick='openTabs(event, &apos;tap2&apos;)'> الشكل الثانى للحقوق </button>
</div>
      </div>
<div class='tabcontent' id='tap1' style='display: block;'>
      <div class='modal-body'>
<div class='table-gn-agent'>
<label class='gn-table_label'>اسم المصمم<p>لكى يظهر حقوق التصميم فى لوحة console</p></label>
<input class='input-gn-table' id='name-agent2' type='text'/>
<label class='gn-table_label'>رابط موقعك<p>الموجود فى الحقوق عند الضغط عليه يوجه المستخدم لصفحة القالب الرسميه</p></label>
<input class='input-gn-table' id='link-agent1' type='text'/>
<label class='gn-table_label'>الايكونه الاولى</label>
<input class='input-gn-table' id='Blog_id-agent2' type='text'/>
<label class='gn-table_label'>الايكونة الثانية</label>
<input class='input-gn-table' id='page_id-agent1' type='text'/>
<label class='gn-table_label'>اللون <p>لون حقوق المصمم والرسالة التي تظهر</p></label>
<input class='input-gn-table' id='color-agent1' type='text'/>
<label class='gn-table_label'>رابط صفحة للتواصل وطلب ترخيص<p>تظهر في الرسالة بأن القالب غير مفعل</p></label>
<input class='input-gn-table' id='page-cnt2' type='text'/>
</div>
<div style=" padding: 0 15px; ">
<div class='contant' style=" margin: 10px 0px 10px 0px; ">
<span class="input-group-text">  ضع كود <var>HTML</var> فوق الوسم <samp>/body</samp> يجب أن تظهر بالاسفل و تكون فوق السكريبت التالي : </span>
  <textarea class='hideee' onclick='this.select();' readonly='readonly' style='display:none;'></textarea>
  </div>
<div class="contant" style=" margin: 10px 0px 10px 0px; ">
<span class="input-group-text">
ضع كود   <var>JQuery</var> فوق الوسم <samp>/body</samp> يجب أن تقوم بدمجه مع اسكريبتات قالبك وتقوم بتشفيره من <a href='https://zinothec.blogspot.com/2021/09/obfuscator-tool.html' target='_blank'> هنا </a> : </span>
<textarea class='hidee' onclick='this.select();' readonly='readonly' style='display:none;'></textarea>
</div>
<div class='contant' style=" margin: 10px 0px 10px 0px; ">
<span class="input-group-text">
قم بوضع كود مكتبة الجكوارى فوق منطقة <var><samp>head</samp></var> </span>
<textarea class='jquareeee' onclick='this.select();' readonly='readonly' style='display:none;'></textarea>
</div>
<div class='contant' style=" margin: 10px 0px 10px 0px; ">
<span class="input-group-text">
قم بوضع هذا فى منطقة الحقوق التى تريد ان تظهر بها الحقوق </span>
<textarea class='copycode' onclick='this.select();' readonly='readonly' style='display:none;'></textarea>
</div>
</div>
      </div>
    </div>
<div class='tabcontent' id='tap2' style='display: none;'>
      <div class='modal-body'>
<div class='table-gn-agent'>
<label class='gn-table_label'>اسم المصمم<p>لكى يظهر فى الحقوق من تصميم</p></label>
<input class='input-gn-table' id='name-agent3' type='text'/>
<label class='gn-table_label'>رابط المصمم<p>ليوجه المستخدم لصفحة المصمم</p></label>
<input class='input-gn-table' id='linkprofile' type='text'/>
</div>
<div style=" padding: 0 15px; ">
<div class="contant" style=" margin: 10px 0px 10px 0px; ">
<span class="input-group-text">
ضع كود   <var>JQuery</var> فوق الوسم <samp>/body</samp> يجب أن تقوم بدمجه مع اسكريبتات قالبك وتقوم بتشفيره من <a href='https://zinothec.blogspot.com/2021/09/obfuscator-tool.html' target='_blank'> هنا </a> : </span>
<textarea class='hidee1' onclick='this.select();' readonly='readonly' style='display:none;'></textarea>
</div>
<div class='contant' style=" margin: 10px 0px 10px 0px; ">
<span class="input-group-text">
قم بوضع كود مكتبة الجكوارى فوق منطقة <var><samp>head</samp></var> </span>
<textarea class='jquareeee' onclick='this.select();' readonly='readonly' style='display:none;'></textarea>
</div>
<div class='contant' style=" margin: 10px 0px 10px 0px; ">
<span class="input-group-text">
قم بوضع هذا فى منطقة الحقوق التى تريد ان تظهر بها الحقوق </span>
<textarea class='copycode' onclick='this.select();' readonly='readonly' style='display:none;'></textarea>
</div>
</div>
      </div>
    </div>
<div class='modal-footer'>
        <button class='btn btn-secondary' data-bs-dismiss='modal' type='button'>الغاء</button>
		<button id='gn-code-actv'>توليد الكود</button>
      </div>
  </div>
</div>`);

var new_activation_code_v2 = new bootstrap.Modal(document.getElementById('new_activation_code_v2'));

function openTabs(t, e) {
    var n, i, o;
    for (i = document.getElementsByClassName("tabcontent"), n = 0; n < i.length; n++) i[n].style.display = "none";
    for (o = document.getElementsByClassName("tablinks"), n = 0; n < o.length; n++) o[n].className = o[n].className.replace(" active", "");
    document.getElementById(e).style.display = "block", t.currentTarget.className += " active"
}

var selected_table = false;
var selected_table_id = false;
var custom_ids_table = false;
var loading_table = false;

function load_table(table_id) {
    if (loading_table == false) {
        loading_table = true;

        $("#tabel_container").slideUp(100);

        if (custom_ids_table !== false) {
            custom_ids_table.destroy();
        }

        selected_table_id = table_id;
        selected_table = $(".table_name[data-table_id='" + table_id + "']").text();
        $(".project_name").text(selected_table);
        $('.table_name').removeClass("active");
        $("[data-table_id='" + selected_table_id + "']").addClass("active");


        Toastify({
            text: `<i class="fas fa-circle-notch fa-spin fa-lg"></i> جاري تحميل - ${selected_table}`,
            escapeMarkup: false,
            className: 'bg-dark bg-gradient',
            duration: 800,
            newWindow: true,
            close: false,
            gravity: "bottom",
            position: "left",
            stopOnFocus: true,
        }).showToast();
        $("#BT_table_container").html(`<table class='table table-striped dt-responsive display nowrap' id='blogids' style='width:100%'>
                        <thead>
                            <tr>
                                <th>م</th>
                                <th>الإسم</th>
                                <th>المعرف الخاص</th>
                                <th>رابط المدونة</th>
                                <th>البريد الاكتروني</th>
                                <th>رابط التواصل</th>
                                <th>حالة التفعيل</th>
                                <th>وقت التفعيل</th>
                                <th>الاوامر</th>
                                <th>كود التفعيل</th>
                                <th>حقوق المصمم</th>
                            </tr>
                        </thead>
                    </table>`);
        $.ajax({
            dataType: "json",
            url: `https://www.blogger.com/feeds/${blog_id}/posts/default/${selected_table_id}?alt=json-in-script`,
            method: "GET",
            dataType: "jsonp",
            success: function(data) {
                try {
                    now_post_ids_array = JSON.parse(system_decode(data.entry.content.$t));
                } catch (e) {
                    now_post_ids_array = [];
                }
                custom_ids_table = $('#blogids').DataTable({
                    responsive: true,
                    "info": false,
                    aaData: now_post_ids_array,
                    dom: "Bfrtip",
                    deferRender: true,
                    "columns": [{
                            "data": null,
                            "render": function(data, type, full, meta) {
                                return meta.row + 1;
                            }
                        },
                        {
                            "data": "username",
                        },
                        {
                            "data": "custom_id",
                        },
                        {
                            "data": "domain",
                        },
                        {
                            "data": "email",
                        },
                        {
                            "data": "contact",
                        },
                        {
                            "data": "active_status",
                            "render": function(data, type, row, meta) {
                                if (data == 0) {
                                    fafa_class = "text-danger";
                                    text = `غير مفعل`;
                                } else if (data == 1) {
                                    fafa_class = "text-success";
                                    text = `مفعل`;
                                }
                                return `<p class="${fafa_class}" data-status_of_id="${row.custom_id}">${text}</p>`;
                            }
                        },{
                            "data": "activated_at",
                            "render": function(data) {
                                return moment(data * 1000).local().format('YYYY-MM-DD hh:mm A');
                            }
                        }, {
                            "data": null,
                            "render": function(data, type, row, meta) {
                                if (row.active_status == true) {
                                    fafa_class = " text-danger";
                                } else {
                                    fafa_class = " text-success";
                                }
                                html = `<button type="button" class="btn btn-dark${fafa_class}" onclick="toggle_activation('${row.custom_id}',this)"><i style="margin: 4px;" class="fas fa-circle" aria-hidden="true"></i></button>
                        <button type="button" class="btn btn-danger" onclick="delete_activation('${row.custom_id}',${meta.row})"><i style="margin: 4px;" class="fas fa-trash-alt" aria-hidden="true"></i></button>`;
                                return html;
                            }
                        },{
                            data: "key",
							"render": function(data, type, row, meta) {
								copy = `<button type="button" style=" float: left; " class="btn btn-success" onclick="copy_activation_code(\`${system_encode(row.key)}\`)"><i style="margin: 4px;" class="fas fa-copy" aria-hidden="true" ></i></button>`
                                return (system_encode(data))+copy
                            }
                        },{
                            "data": "copyicon",
                            "render": function(data, type, row, meta) {
                                if (row.copyicon == 1) {
                                    fafa_class = " text-success";
									new_status_text = "موجوده";
                                } else {
                                    fafa_class = " text-danger";
									new_status_text = "غير موجوده";
                                }
                                html = `<button type="button" class="btn btn-dark${fafa_class}" onclick="toggle_copyicon('${row.custom_id}',this)" style=" float: left; "><i style="margin: 4px;" class="fas fa-circle" aria-hidden="true"></i></button>`;
                             return `<span class="${fafa_class}" data-status_of_id="${row.copyicon}">${new_status_text}</span>` +   html ;
                            }
                        }
							
                    ],
                    select: false,
                    buttons: [{
                        text: 'تفعيل جديد',
                        action: function(e, dt, node, config) {
                            add_new_activation();
                        }
                    }]
                });

                $(document).ready(function() {
                    custom_ids_table.columns.adjust().responsive.recalc();
                });

                $("#tabel_container").slideDown();

                Toastify({
                    text: `<i class="fas fa-check fa-lg"></i> تم تحميل - ${selected_table} - بنجاح`,
                    escapeMarkup: false,
                    className: 'bg-success bg-gradient',
                    duration: 3000,
                    newWindow: true,
                    close: false,
                    gravity: "bottom",
                    position: "left",
                    stopOnFocus: true,
                }).showToast();

                loading_table = false;
            }
        });
    }
}
function copy_activation_code(code=false){
  if(code !== false){
    copy_text(code);
    Toastify({
        text: `<i class="fas fa-check fa-lg"></i> تم نسخ كود التفعيل بنجاح`,
        escapeMarkup: false,
        className: 'bg-success bg-gradient',
        duration: 1500,
        newWindow: true,
        close: false,
        gravity: "bottom",
        position: "left",
        stopOnFocus: true,
    }).showToast();
  }
}
var new_activation_modal = new bootstrap.Modal(document.getElementById('new_activation_modal'));
function add_new_activation(){
  $("#username_input").val("");
  $("#blog_id_input").val("");
  $("#website_link_input").val("");
  $("#email_input").val("");
  $("#contact_input").val("");
  $("#Pay").val("");
  $("#templateV").val("");
  $("#copyicon").val();
  new_activation_modal.show();
}
function submit_new_activation() {
    stop_add = false;
  
    custom_id_will_activated = $("#blog_id_input").val();
    username_input = $("#username_input").val();
    website_link_input = $("#website_link_input").val();
    email_input = $("#email_input").val();
    contact_input = $("#contact_input").val();
    Pay = $("#Pay").val();
    templateV = $("#templateV").val();
    copyicon = $("#copyicon").val();
    if (custom_id_will_activated == "" || username_input == "" || website_link_input == "" || email_input == "" ||contact_input == "" || Pay == "" || templateV == "") {
          alert("يرجي التحقق من ادخال جميع البيانات بشكل صحيح");
          stop_add = true;
    } 

    if(custom_id_will_activated !== ""){
      $.each(now_post_ids_array, function(i) {
          if (now_post_ids_array[i].custom_id === custom_id_will_activated) {
              stop_add = true;
              Toastify({
                  text: `<i class="fas fa-info-circle fa-lg"></i> المعرف الذي ادخلته موجود بالفعل`,
                  escapeMarkup: false,
                  className: 'bg-dark bg-gradient',
                  duration: 3000,
                  newWindow: true,
                  close: false,
                  gravity: "bottom",
                  position: "left",
                  stopOnFocus: true,
              }).showToast();
              return false;
          }
      });
    }

    if(stop_add == true){
      return;;
    }


   var GeCode = function () {
        return "Active-xxhx-hxx-xhx-xhxhx".replace(/[xh]/g, function (e) {
            var t = 0 | Math.random() * 16,
                n = "x" == e ? t : 9 | 5 & t,
                a = n.toString(16);
            return a.toUpperCase()
        })
	     }();
        new_array = now_post_ids_array;
        obj = {};
        obj["username"] = username_input;
        obj["custom_id"] = custom_id_will_activated;
        obj["domain"] = website_link_input;
        obj["email"] = email_input;
        obj["contact"] = contact_input;
        obj["pay"] = Pay;
        obj["version"] = templateV;
        obj["active_status"] = true;
        obj["key"] = GeCode;
        activated_at = Math.round(new Date().getTime() / 1000);
        obj["activated_at"] = activated_at;
        obj["copyicon"] = Math.round(copyicon);
        new_array.push(obj);
        json_data = {};
        json_data["content"] = system_encode(JSON.stringify(new_array));

        Toastify({
          text: `<i class="fas fa-circle-notch fa-spin"></i> جاري التفعيل للمعرف - ${custom_id_will_activated}`,
          escapeMarkup: false,
          className: 'bg-dark bg-gradient text-white',
          duration: 2000,
          newWindow: true,
          close: false,
          gravity: "bottom",
          position: "left",
          stopOnFocus: true,
        }).showToast();

        $.ajax({
            url: "https://www.googleapis.com/blogger/v3/blogs/" + blog_id + "/posts/" + selected_table_id + "?access_token=" + access_token,
            type: 'PATCH',
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(json_data),
            success: function(response) {
                now_post_ids_array = new_array;
                custom_ids_table.row.add(obj).draw(false);

                Toastify({
                    text: `<i class="fas fa-check fa-lg"></i> تم اضافة المعرف - ${custom_id_will_activated} - بنجاح`,
                    escapeMarkup: false,
                    className: 'bg-success bg-gradient',
                    duration: 3000,
                    newWindow: true,
                    close: false,
                    gravity: "bottom",
                    position: "left",
                    stopOnFocus: true,
                }).showToast();

                new_activation_modal.hide();

            }
        });
}

$("#get_website_domain").click(function(){
  this_blog_id = $("#blog_id_input").val();
  if(this_blog_id !== ""){
    $.ajax({
            dataType: "json",
            url: `https://www.blogger.com/feeds/${this_blog_id}/posts/default/?alt=json-in-script`,
            method: "GET",
            dataType: "jsonp",
            success: function(search_feed) {
              if(search_feed == "Invalid blog id specified"){
                show_no_blog_found_msg();
              } else {
                for(i=0;i<search_feed.feed.link.length;i++){
                  if(search_feed.feed.link[i].rel == "alternate"){
                    this_blog_domain = search_feed.feed.link[i].href;
                    if(this_blog_domain.slice(-1)== "/"){
                      this_blog_domain = this_blog_domain.slice(0, -1);
                    }
                    $("#website_link_input").val(this_blog_domain);


                    Toastify({
                      text: `<i class="fas fa-check fa-lg"></i> نجح`,
                      escapeMarkup: false,
                      className: 'bg-success bg-gradient',
                      duration: 2000,
                      newWindow: true,
                      close: false,
                      gravity: "bottom",
                      position: "left",
                      stopOnFocus: true,
                    }).showToast();
                  }
                }
              }
            }
    })
  }else {
    show_no_blog_found_msg();
  }
});
function show_no_blog_found_msg(){
  Toastify({
      text: `<i class="fas fa-info-circle fa-lg"></i> يرجي التحقق من ID المدونة`,
      escapeMarkup: false,
      className: 'bg-warning bg-gradient text-dark',
      duration: 2000,
      newWindow: true,
      close: false,
      gravity: "bottom",
      position: "left",
      stopOnFocus: true,
  }).showToast();
}
function create_new_table() {
    project_want_protect = prompt("ادخل اسم المشروع الذي تريد حمايته");
    if (project_want_protect !== null && project_want_protect !== "") {

        stop_create = false;
        $.ajax({
            dataType: "json",
            url: `https://www.blogger.com/feeds/${blog_id}/posts/default/?q='${project_want_protect}'&alt=json-in-script`,
            method: "GET",
            dataType: "jsonp",
            success: function(search_feed) {
                if (search_feed.feed.entry) {
                    if (search_feed.feed.entry.length > 0) {
                        stop_create = true;
                        Toastify({
                            text: `<i class="fas fa-info-circle fa-lg"></i> هذا المشروع موجود بالفعل`,
                            escapeMarkup: false,
                            className: 'bg-dark bg-gradient',
                            duration: 3000,
                            newWindow: true,
                            close: false,
                            gravity: "bottom",
                            position: "left",
                            stopOnFocus: true,
                        }).showToast();
                    }
                }

                if (stop_create == false) {
                    Toastify({
                        text: `<i class="fas fa-circle-notch fa-spin fa-lg"></i> جاري انشاء - ${project_want_protect}`,
                        escapeMarkup: false,
                        className: 'bg-dark bg-gradient',
                        duration: 1000,
                        newWindow: true,
                        close: false,
                        gravity: "bottom",
                        position: "left",
                        stopOnFocus: true,
                    }).showToast();
                    json_data = {};
                    json_data["title"] = project_want_protect;
                    json_data["content"] = system_encode('[]');
                    json_data["labels"] = ["SystemActivator"];
                    json_data["fetchBody"] = true;
                    json_data["isDraft"] = false;
                    $.ajax({
                        url: "https://www.googleapis.com/blogger/v3/blogs/" + blog_id + "/posts?access_token=" + access_token,
                        type: 'POST',
                        contentType: "application/json;charset=utf-8",
                        data: JSON.stringify(json_data),
                        success: function(response) {
                            if ($(".table_name").length == 0) {
                                $(".no_tables_container").slideUp();
                            }
                            $li_btn = `<li class="nav-item"><button data-table_id="${response.id}" onclick="load_table('${response.id}')" class="nav-link w-100 text-white table_name" aria-current="page">${project_want_protect}</button>`;
                            $(".projects_btn").prepend($li_btn);
                            $(".table_name[data-table_id='" + response.id + "']").click();

                            Toastify({
                                text: `<i class="fas fa-check fa-lg"></i> تم انشاء مشروع - ${project_want_protect} - بنجاح`,
                                escapeMarkup: false,
                                className: 'bg-success bg-gradient',
                                duration: 3000,
                                newWindow: true,
                                close: false,
                                gravity: "bottom",
                                position: "left",
                                stopOnFocus: true,
                            }).showToast();

                        }
                    });

                }

            }
        });



    }

}

var activation_code_modal = new bootstrap.Modal(document.getElementById('activation_code_modal'), {
    keyboard: false
});

function activation_code() {
    $("#selected_table_span").text(selected_table);
    $(`#user_text_area_container`).html(`<textarea id="user_text_area">${get_user_code()}</textarea>`);

    $(`#blogger_text_area_container`).html(`<textarea id="blogger_text_area">${get_blogger_code()}</textarea>`);
    $(`#js_text_area_container`).html(`<textarea id="js_text_area">${get_js_code()}</textarea>`);
    $(`#php_text_area_container`).html(`<textarea id="php_text_area"><?php\n${get_php_code()}\n?></textarea>`);


    var myCodeMirror = CodeMirror(function(elt) {
        $('#blogger_text_area').replaceWith(elt);
    }, {
        value: $('#blogger_text_area').val(),
        readOnly: true,
        autofocus: true,
        autoRefresh: true,
        lineNumbers: true,
        lineWrapping: true,
        mode: "htmlmixed",
        matchBrackets: true
    });
    var myCodeMirror = CodeMirror(function(elt) {
        $('#js_text_area').replaceWith(elt);
    }, {
        value: $('#js_text_area').val(),
        readOnly: true,
        autofocus: true,
        autoRefresh: true,
        lineNumbers: true,
        lineWrapping: true,
        mode: "htmlmixed",
        matchBrackets: true
    });

    var myCodeMirror = CodeMirror(function(elt) {
        $('#php_text_area').replaceWith(elt);
    }, {
        value: $('#php_text_area').val(),
        readOnly: true,
        autofocus: true,
        autoRefresh: true,
        lineNumbers: true,
        lineWrapping: true,
        mode: "application/x-httpd-php",
        matchBrackets: true
    });
    var myCodeMirror = CodeMirror(function(elt) {
        $('#user_text_area').replaceWith(elt);
    }, {
        value: $('#user_text_area').val(),
        readOnly: true,
        autofocus: true,
        autoRefresh: true,
        lineNumbers: true,
        lineWrapping: true,
        mode: "htmlmixed",
        matchBrackets: true
    });

    new bootstrap.Tab(document.querySelector('#blogger_code-tab')).show();
    activation_code_modal.show();
}

function activation_code_v2() {
  new_activation_code_v2.show();

}
function create_new_activation() {
    custom_id_will_activated = prompt("من فضلك ادخل معرف المدونة التي تريد تفعيلها");

    $.ajax({
        type: 'post',
        url: "api.php",
        data: {
            "action": "active_new",
            "table_name": selected_table,
            "custom_id": custom_id_will_activated,
			"key": key
        },
        success: function(res) {
            if (res.status_code == 201) {

            }
            alert(res.msg);
        }
    });

}

function delete_table() {
    if (!confirm(`هل انت متأكد من حذف جدول حماية مشروع : ${selected_table}`)) return;

    $.ajax({
        url: `https://www.googleapis.com/blogger/v3/blogs/${blog_id}/posts/${selected_table_id}?access_token=${access_token}`,
        type: 'DELETE',
        success: function(response) {
            $('.table_name:contains("' + selected_table + '")').remove();

            if ($(".table_name").length == 0) {
                $(".no_tables_container").slideDown();
                $("#tabel_container").slideUp();

            } else {
                $(".table_name").eq(0).click();
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            toastr.error("An error occurred while deleting this video" + response.error.errors[0].messeage);
        }
    });

}

function delete_activation(customm_id, row_num) {
    if (!confirm(`هل انت متأكد من حذف المعرف : ${customm_id} من جدول ${selected_table}`)) return;
    if (customm_id == "null") {
        customm_id = null;
    }

    new_array = now_post_ids_array;

    $.each(new_array, function(i) {
        if (new_array[i].custom_id === customm_id) {
            new_array.splice(i, 1);
            return false;
        }
    });

    json_data = {};
    json_data["content"] = system_encode(JSON.stringify(new_array));
    $.ajax({
        url: "https://www.googleapis.com/blogger/v3/blogs/" + blog_id + "/posts/" + selected_table_id + "?access_token=" + access_token,
        type: 'PATCH',
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(json_data),
        success: function(response) {
            now_post_ids_array = new_array;
            custom_ids_table.row(row_num).remove().draw();

        }
    });

}

function toggle_activation(customm_id, this_btn) {
    new_array = now_post_ids_array;

    $.each(new_array, function(i) {
        if (new_array[i].custom_id === customm_id) {
            if (new_array[i].active_status == true) {
                new_array[i].active_status = false;
                new_status_text = "غير مفعل";
                new_status_class = "text-danger";
                new_status_btn_class = "text-success";
                text_msg = `تم الغاء تفعيل المعرف : ${customm_id} بنجاح`;
                tostifyclassName = 'bg-warning bg-gradient text-dark';

            } else {
                new_array[i].active_status = true;
                new_status_text = "مفعل";
                new_status_class = "text-success";
                new_status_btn_class = "text-danger";
                text_msg = "";
                text_msg = `تم تفعيل المعرف : ${customm_id} بنجاح`;
                tostifyclassName = 'bg-success bg-gradient';

            }
            return false;
        }
    });

    json_data = {};
    json_data["content"] = system_encode(JSON.stringify(new_array));
    $.ajax({
        url: "https://www.googleapis.com/blogger/v3/blogs/" + blog_id + "/posts/" + selected_table_id + "?access_token=" + access_token,
        type: 'PATCH',
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(json_data),
        success: function(response) {
            now_post_ids_array = new_array;
            $("[data-status_of_id='" + customm_id + "']").text(new_status_text).removeAttr("class").addClass(new_status_class);
            $(this_btn).removeClass("text-danger text-success").addClass(new_status_btn_class);


            Toastify({
                text: `<i class="fas fa-check fa-lg"></i> ${text_msg}`,
                escapeMarkup: false,
                className: tostifyclassName,
                duration: 3000,
                newWindow: true,
                close: false,
                gravity: "bottom",
                position: "left",
                stopOnFocus: true,
            }).showToast();

        }
    });

}



function toggle_copyicon(customm_id, this_btn) {
    new_array = now_post_ids_array;

    $.each(new_array, function(i) {
        if (new_array[i].custom_id === customm_id) {
            if (new_array[i].copyicon == 1) {
                new_array[i].copyicon = 0;
                new_status_text = "غير موجوده";
                new_status_class = "text-danger";
                new_status_btn_class = "text-success";
                text_msg = `تم ازالة علامة الحقوق  : ${customm_id} بنجاح`;
                tostifyclassName = 'bg-warning bg-gradient text-dark';

            } else {
                new_array[i].copyicon = 1;
                new_status_text = "موجوده";
                new_status_class = "text-success";
                new_status_btn_class = "text-danger";
                text_msg = "";
                text_msg = `تم اضافة علامة الحقوق : ${customm_id} بنجاح`;
                tostifyclassName = 'bg-success bg-gradient';

            }
            return false;
        }
    });

    json_data = {};
    json_data["content"] = system_encode(JSON.stringify(new_array));
    $.ajax({
        url: "https://www.googleapis.com/blogger/v3/blogs/" + blog_id + "/posts/" + selected_table_id + "?access_token=" + access_token,
        type: 'PATCH',
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(json_data),
        success: function(response) {
            now_post_ids_array = new_array;
            $("[data-status_of_id='" + customm_id + "']").text(new_status_text).removeAttr("class").addClass(new_status_class);
            $(this_btn).removeClass("text-danger text-success").addClass(new_status_btn_class);


            Toastify({
                text: `<i class="fas fa-check fa-lg"></i> ${text_msg}`,
                escapeMarkup: false,
                className: tostifyclassName,
                duration: 3000,
                newWindow: true,
                close: false,
                gravity: "bottom",
                position: "left",
                stopOnFocus: true,
            }).showToast();

        }
    });

}



function get_user_code(a = "get") {
code = `    
/* create page and set this code */
<div id="get-data"/>

/* set in after <body> */
<b:section id='setting-login1' maxwidgets='1' name='setting-login' showaddelement='no'>
      <b:widget id='LinkList311' locked='true' title='setting-login' type='LinkList' version='2' visible='true'>
        <b:widget-settings>
          <b:widget-setting name='sorting'>NONE</b:widget-setting>
          <b:widget-setting name='text-1'>pageid</b:widget-setting>
          <b:widget-setting name='link-1'>${selected_table_id}</b:widget-setting>
          <b:widget-setting name='text-0'>blogid</b:widget-setting>
          <b:widget-setting name='link-2'>/p/asd.html</b:widget-setting>
          <b:widget-setting name='link-0'>${blog_id}</b:widget-setting>
          <b:widget-setting name='text-2'>page-name</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main'>
<b:if cond='data:view.isPage'>
<style> button.but-copy svg { vertical-align: bottom; }ul#info_agnt1 { padding-right: 0px; border: 1px solid #ddd; list-style: circle;width: 95%; margin: 0 auto; }ul#info_agnt1 p { padding-top: 8px; font-size: 20px; padding-bottom: 5px; border-bottom: 1px solid #ddd;text-align: center; width: 100%; }ul#info_agnt1:not(.pp) { padding-right: 10px; padding-left: 10px; padding-top: 5px; }li.itme-colm:last-child {border: none;} li.itme-colm { border-bottom: 1px solid #ddd;font-size: 14px; list-style: none;padding: 0.6rem!important; margin-bottom: 0 !important; }li.itme-colm span { background: #f2f2f2; width: auto; padding: 5px 20px; border-radius: 40px; color: #000;font-size: 14px; -webkit-user-select: all !important; -moz-user-select: all !important; user-select: all !important; margin-right: 4px; } .input-mail-lab { position: relative; width: 100%; display: block; margin: 0 auto; }#get-data { width: 95%; display: block; margin: 0 auto; background: #fff; -webkit-box-shadow: 0 2px 4px rgb(0 0 0 / 30%); box-shadow: 0 2px 4px rgb(0 0 0 / 30%); padding: 25px 5px; } .input-mail-lab lable { text-align: right; width: 80%; display: inline-block; font-size: 14px; color: #606060; }span#mail_message { font-size: 12px !important; color: #fe3231 !important; padding-right: 2px; } button.but-copy { background: #fff; border: none; margin: 2px 5px; -webkit-box-shadow: 0 2px 4px rgb(0 0 0 / 50%); box-shadow: 0 2px 4px rgb(0 0 0 / 50%); width: 35px; height: 35px; padding: 6px; border-radius: 50%; } input.input_mail { width: 100%; height: 31px; border-radius: 4px; outline: none; margin: 5px auto; display: block; border: 1px solid #d3d3d3; padding: 14px 15px; font-size: 14px; resize: none; text-align: right; z-index: 1; } .btn-submit p { background: #3d5afe; color: white; min-width: 46px; padding: 5px 24px; font-size: 13px; text-decoration: none; line-height: normal; border: none; border-radius: 3px; }.btn-submit { border: none; display: block; margin: 7px auto; border-radius: 2px; } button#get_data { position: relative; display: -ms-inline-flex; display: -webkit-inline-box; display: -ms-inline-flexbox; display: inline-flex;border: none; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; cursor: pointer;margin: 6px auto; display: block; } .shadow-rq-kit { -webkit-box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0px 1px 1px 0 rgb(0 0 0 / 14%), 0px 2px 1px -1px rgb(0 0 0 / 12%); -ms-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2),0px 1px 1px 0 rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12); -o-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2),0px 1px 1px 0 rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12); box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0px 1px 1px 0 rgb(0 0 0 / 14%), 0px 2px 1px -1px rgb(0 0 0 / 12%); -webkit-transition: border .3s, -webkit-box-shadow .3s; transition: border .3s, -webkit-box-shadow .3s; -o-transition: box-shadow .3s, border .3s; transition: box-shadow .3s, border .3s; transition: box-shadow .3s, border .3s, -webkit-box-shadow .3s; } @-webkit-keyframes button-spin {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}to {-webkit-transform: rotate(1turn);transform: rotate(1turn);}} @keyframes button-spin {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}to {-webkit-transform: rotate(1turn);transform: rotate(1turn);}} .lading ,.lading p { position: relative; cursor: default!important; text-shadow: none!important; /*color: transparent!important;*/ opacity: 1;background: #fff; pointer-events: none; }.loooading p{ background: white; border: 1px solid #3d5afe;opacity: 0; } .lading:after, .lading:before { position: absolute; content: &quot;&quot;; width: 20px; height: 20px; border-radius: 100%; top: 16%; right: 40%; } .lading:before{ border: 2px solid #eeeeee; } .lading:after { -webkit-animation: button-spin .6s infinite linear; animation: button-spin .6s infinite linear; border-color: #3d5afe transparent transparent; border-style: solid; border-width: 2px; }.activee_agn { display: inline-block; }input.active_agn { background: #f2f2f2; width: auto; padding: 5px 20px; border-radius: 40px; color: #000; font-size: 14px; -webkit-user-select: all !important; -moz-user-select: all !important; user-select: all !important; margin-right: 4px; border: none; text-align: center; }#get-data span.wrng-msg { width: -webkit-max-content; width: -moz-max-content; width: max-content; padding: 0 11px; font-size: 12px; text-align: center; background: #fbc0bf85; color: #f55352; border-radius: 30px; display: none; } /*shadowpulse*/ @-webkit-keyframes shadow-pulse{0%{-webkit-box-shadow:0 0 0 0 rgba(255, 0, 0, 0.2);box-shadow:0 0 0 0 rgba(255, 0, 0, 0.2);}100%{-webkit-box-shadow:0 0 0 10px rgba(68,139,212,0);box-shadow:0 0 0 10px rgba(68,139,212,0);}} @keyframes shadow-pulse{0%{-webkit-box-shadow:0 0 0 0 rgba(255, 0, 0, 0.2);box-shadow:0 0 0 0 rgba(255, 0, 0, 0.2);}100%{-webkit-box-shadow:0 0 0 10px rgba(68,139,212,0);box-shadow:0 0 0 10px rgba(68,139,212,0);}} .Animat-shadowPulse,  .wrg:not(p) { -webkit-animation: shadow-pulse 1s infinite; animation: shadow-pulse 1s infinite; } 
  </style>
  <style>@import url(https://fonts.googleapis.com/css2?family=Tajawal);h4{background:#3d55ef5e;padding:10px}*{border-radius:15px;font-family:Tajawal,sans-serif}span.ID{color:#0e8500}.onwe{font:14px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;overflow-x:hidden;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:1;text-align:center}.nnvbada{position:relative;padding:2em;width:80%;max-width:600px;min-width:200px;margin:5em auto;background:#fff;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.iconcpby{color:#fff;position:absolute;margin:0 auto;left:0;right:0;top:-25px;width:50px;height:50px;line-height:50px;border-radius:50%;-webkit-border-radius:50%;z-index:9;background:#0033a9;padding:0;text-align:center;box-shadow:0 5px 15px rgba(0,0,0,.26);-webkit-box-shadow:0 5px 15px rgba(0,0,0,.26);font-size:2em;font-family:arial;text-decoration:none}.n1{text-align:center;font-size:26px;margin:30px 0 15px;line-height:normal}.n2{text-align:center;font-size:26px;margin:30px 0 15px;line-height:normal}.n3{text-align:center;overflow:hidden}.n4{color:#fff;background:#0033a9;text-decoration:none;display:block;max-width:180px;padding:10px 12px;margin:5px auto;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:0;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.info span {
    background: #f1efef;
    padding: 5px 10px 5px 10px;
    

}.info data {
    background: #f1efef;
    padding: 5px 10px 5px 10px;
}
.info {
    margin-bottom: 25px;
    display: flex;
    justify-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}.info span .inf {
    padding: 0;
}</style>
<scr` + `ipt type='text/javascript'>
var Settings_lgbd={<b:loop values='data:links' var='link'>&quot;<data:link.name/>&quot; : <b:if cond='data:link.target in {&quot;true&quot;,&quot;false&quot;}'><data:link.target/><b:else/>&quot;<data:link.target.jsEscaped/>&quot;</b:if>,</b:loop>};
${decodeURIComponent("%2F%2F%3C!%5BCDATA%5B")} 
$(function(){ 
var page$name = Settings_lgbd["page-name"],
    url_data = "https://www.blogger.com/feeds/"+Settings_lgbd.blogid+"/posts/default/"+Settings_lgbd.pageid+"?alt=json-in-script",
    elemnt = "#get-data",
    htmll= '<div class="input-mail-lab"> <div class="onwe"> <div class="nnvbada"> <div> <div class="iconcpby"> <span> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;width: 35px;margin-top: 7px;" xml:space="preserve"> <g> <path style="fill:#BDCCD4;" d="M157.223,150.805c0-23.476,9.116-44.819,23.997-60.695c-5.667-1.238-11.546-1.909-17.583-1.909c-45.296,0-82.016,36.719-82.016,82.016c0,45.296,36.719,82.016,82.016,82.016c19.497,0,37.393-6.815,51.468-18.177C181.307,221.506,157.223,188.969,157.223,150.805z"/> <path style="fill:#BDCCD4;" d="M379.405,306.726c12.547-8.531,27.697-13.521,44.014-13.521c3.396,0,6.736,0.241,10.018,0.659c-27.456-25.813-64.414-41.634-105.073-41.634c-5.609,0-11.145,0.305-16.597,0.891C338.776,264.783,362.077,283.402,379.405,306.726z"/> <path style="fill:#BDCCD4;" d="M180.233,253.122c-5.452-0.586-10.989-0.891-16.597-0.891c-84.741,0-153.437,68.697-153.437,153.438h69.714C79.913,337.305,121.221,278.599,180.233,253.122z"/> <path style="fill:#BDCCD4;" d="M276.894,234.054c14.075,11.362,31.971,18.177,51.468,18.177c45.296,0,82.016-36.719,82.016-82.016c0-45.296-36.719-82.016-82.016-82.016c-6.038,0-11.917,0.671-17.583,1.909c14.881,15.875,23.997,37.219,23.997,60.695C334.777,188.969,310.692,221.506,276.894,234.054z"/> </g> <g> <path style="fill:#29ABE2;" d="M379.405,306.726c-17.328-23.326-40.629-41.943-67.639-53.604c-20.169-8.707-42.401-13.54-65.766-13.54s-45.597,4.833-65.765,13.54c-59.013,25.477-100.32,84.183-100.32,152.545h95.013h142.148h35.741c-4.983-10.305-7.779-21.865-7.779-34.08C345.035,344.615,358.663,320.829,379.405,306.726z"/> <path style="fill:#29ABE2;" d="M334.777,150.805c0-23.476-9.116-44.819-23.997-60.695C294.583,72.829,271.554,62.028,246,62.028s-48.582,10.801-64.78,28.081c-14.881,15.875-23.997,37.219-23.997,60.695c0,38.164,24.084,70.701,57.882,83.249c9.622,3.573,20.029,5.528,30.895,5.528c10.866,0,21.272-1.955,30.895-5.528C310.692,221.506,334.777,188.969,334.777,150.805z"/> </g> <path style="fill:#FF931E;" d="M433.436,293.865c-3.283-0.419-6.621-0.659-10.018-0.659c-16.317,0-31.466,4.989-44.014,13.521c-20.742,14.102-34.369,37.889-34.369,64.862c0,12.215,2.796,23.774,7.779,34.08c12.679,26.218,39.528,44.303,70.603,44.303c43.29,0,78.383-35.093,78.383-78.383C501.801,331.696,471.991,298.787,433.436,293.865z"/> <path d="M120.381,382.472c-0.788,0-1.59-0.092-2.392-0.285c-5.476-1.317-8.85-6.822-7.534-12.3c8.683-36.128,32.034-67.825,64.067-86.962c4.836-2.889,11.098-1.311,13.987,3.525c2.888,4.835,1.311,11.098-3.525,13.986c-27.352,16.341-47.289,43.393-54.695,74.218C129.167,379.329,124.988,382.472,120.381,382.472z"/> <path d="M215.916,287.185c-4.617,0-8.802-3.158-9.915-7.846c-1.3-5.481,2.088-10.978,7.568-12.279c10.511-2.495,21.365-3.76,32.265-3.76c5.632,0,10.199,4.566,10.199,10.199s-4.567,10.199-10.199,10.199c-9.315,0-18.585,1.08-27.554,3.209C217.489,287.095,216.696,287.185,215.916,287.185z"/> <path d="M437.881,284.194c-17.589-15.873-38.628-27.987-61.844-35.07c26.677-16.178,44.54-45.496,44.54-78.908c0-50.847-41.368-92.215-92.215-92.215c-4.832,0-9.577,0.375-14.211,1.095C296.391,62.209,272.385,51.829,246,51.829s-50.391,10.379-68.152,27.268c-4.633-0.72-9.379-1.095-14.212-1.095c-50.847,0-92.214,41.368-92.214,92.215c0,33.412,17.863,62.729,44.539,78.907C48.914,269.582,0,332.016,0,405.669c0,5.633,4.567,10.199,10.199,10.199h69.714h266.808c15.338,26.464,43.973,44.303,76.697,44.303c48.844,0,88.582-39.737,88.582-88.582C512,327.669,479.869,291.119,437.881,284.194z M405.276,284.878c-8.304,1.735-16.182,4.639-23.459,8.527c-9.022-10.897-19.328-20.692-30.684-29.155C370.793,267.402,389.132,274.563,405.276,284.878z M400.179,170.216c0,39.599-32.217,71.817-71.817,71.817c-10.953,0-21.336-2.474-30.634-6.878c28.322-17.434,47.248-48.721,47.248-84.348c0-19.216-5.511-37.167-15.025-52.366C368.818,99.29,400.179,131.148,400.179,170.216z M246,72.227c16.528,0,31.871,5.141,44.54,13.891c6.269,4.331,11.878,9.547,16.65,15.469c10.864,13.48,17.387,30.598,17.387,49.217c0,31.604-18.764,58.892-45.729,71.355c-6.807,3.146-14.132,5.347-21.816,6.433c-3.607,0.509-7.287,0.79-11.032,0.79c-3.746,0-7.426-0.28-11.033-0.79c-7.683-1.085-15.009-3.286-21.816-6.433c-26.964-12.463-45.728-39.751-45.728-71.355c0-18.62,6.523-35.737,17.387-49.217c4.772-5.922,10.381-11.138,16.65-15.469C214.128,77.369,229.472,72.227,246,72.227z M91.82,170.216c0-39.068,31.362-70.926,70.229-71.777c-9.515,15.199-15.025,33.149-15.025,52.366c0,35.628,18.925,66.915,47.247,84.348c-9.299,4.404-19.681,6.878-30.634,6.878C124.037,242.032,91.82,209.815,91.82,170.216z M140.868,264.249c-40.6,30.26-67.776,77.564-70.853,131.221H20.758C25.465,328.84,75.951,274.661,140.868,264.249z M90.441,395.47c3.81-58.73,40.297-108.693,91.412-131.863c11.944-5.415,24.685-9.37,37.997-11.627c8.505-1.442,17.24-2.197,26.149-2.197c8.909,0,17.644,0.755,26.148,2.197c13.312,2.258,26.053,6.212,37.998,11.627c21.239,9.628,39.953,23.875,54.845,41.463c-18.474,16.246-30.154,40.043-30.154,66.521c0,8.272,1.143,16.28,3.273,23.88H90.441V395.47z M423.418,439.772c-20.705,0-39.271-9.289-51.785-23.905c-5.133-5.994-9.251-12.88-12.072-20.398c-2.79-7.436-4.327-15.481-4.327-23.88c0-19.765,8.46-37.584,21.942-50.049c4.992-4.616,10.669-8.502,16.867-11.473c8.901-4.267,18.862-6.662,29.375-6.662c1.811,0,3.601,0.093,5.377,0.232c14.69,1.153,28.08,6.972,38.693,15.984c14.737,12.517,24.114,31.164,24.114,51.969c0,4.116-0.387,8.141-1.089,12.059c-2.18,12.157-7.586,23.203-15.308,32.22C462.689,430.483,444.123,439.772,423.418,439.772z"/> <path style="fill:#BDCCD4;" d="M427.406,330.885l2.874,8.846c3.17,9.757,12.261,16.362,22.52,16.362h9.302c3.756,0,5.318,4.806,2.28,7.014l-7.525,5.467c-8.299,6.03-11.772,16.717-8.602,26.474l2.874,8.846c1.161,3.572-2.928,6.543-5.967,4.335l-7.525-5.467c-8.299-6.03-19.538-6.03-27.837,0l-7.525,5.467c-3.038,2.208-7.127-0.763-5.967-4.335l2.874-8.846c3.17-9.757-0.303-20.444-8.602-26.474l-7.525-5.467c-3.038-2.208-1.477-7.014,2.28-7.014h9.302c10.258,0,19.35-6.606,22.52-16.362l2.874-8.846C421.191,327.313,426.245,327.313,427.406,330.885z"/> <path d="M447.44,419.178c-2.9,0-5.798-0.899-8.273-2.697l-7.526-5.468c-4.739-3.442-11.108-3.442-15.846,0l-7.525,5.467c-4.95,3.595-11.601,3.596-16.549-0.001c-4.949-3.595-7.003-9.921-5.112-15.737l2.873-8.846c1.81-5.572-0.158-11.628-4.897-15.071l-7.525-5.467c-4.95-3.596-7.004-9.922-5.113-15.739c1.891-5.817,7.27-9.725,13.387-9.725h9.302c5.858,0,11.01-3.743,12.819-9.314l2.874-8.847c1.89-5.818,7.269-9.726,13.386-9.726c6.117-0.001,11.498,3.907,13.389,9.725v0.001l2.874,8.847c1.81,5.571,6.962,9.314,12.82,9.314h9.302c6.117,0,11.497,3.908,13.387,9.726c1.891,5.818-0.164,12.142-5.113,15.738l-7.525,5.467c-4.739,3.443-6.707,9.5-4.897,15.07l2.874,8.848c1.89,5.816-0.164,12.14-5.112,15.736C453.241,418.278,450.341,419.178,447.44,419.178z M402.193,365.448c6.089,6.955,9.06,16.099,8.222,25.305c8.495-3.641,18.11-3.641,26.607,0c-0.838-9.206,2.132-18.349,8.223-25.305c-9.014-2.048-16.793-7.698-21.525-15.638C418.985,357.751,411.208,363.401,402.193,365.448z"/> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg> </span> </div><h4 class="n1">مرحبا بك</h4> </div><div style="position:relative;padding:5px;text-align:right;font-size:14px"> <h4 class="n1" style=" font-size: 15px;">الرجاء ادخل البريد الالكترونى الذى اشتريت به</h4> <div class="info"> <span class="inf" for="mail" >البريد الالكترونى</span> <input class="input_mail" style=" border-radius: 25px; width: 50%; height: 10px; outline: none; margin: 0px auto; display: block; border: 1px solid #f1efef; padding: 11px 48px; font-size: 14px; resize: none; text-align: right; z-index: 1; background: #f1efef; margin-left: 0px; " type="email" name="mail"/>  </div>:<span id="mail_message"></span><span class="wrng-msg">خطأ بالبريد الالكتروني</span></div><div class="n3"><button class="n4" id="get_data">تسجيل الدخول</button></div></div></div></div>';
if (typeof(Storage) !== "undefined" && null !== localStorage.getItem('login_db')) {
  var db_lgn = JSON.parse(localStorage.getItem('login_db'));
     var tt = db_lgn.name;
if (window.location.pathname == page$name ){
$('head').find('title').text(tt);history.pushState(null, "page 2", "?type=account");
}
 $("#info_agnt2").css('display','none');
var cc ='<div class="onwe"> <div class="nnvbada"> <div> <div class="iconcpby"><span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;width: 35px;margin-top: 7px;" xml:space="preserve"><g><path style="fill:#BDCCD4;" d="M157.223,150.805c0-23.476,9.116-44.819,23.997-60.695c-5.667-1.238-11.546-1.909-17.583-1.909c-45.296,0-82.016,36.719-82.016,82.016c0,45.296,36.719,82.016,82.016,82.016c19.497,0,37.393-6.815,51.468-18.177C181.307,221.506,157.223,188.969,157.223,150.805z"/><path style="fill:#BDCCD4;" d="M379.405,306.726c12.547-8.531,27.697-13.521,44.014-13.521c3.396,0,6.736,0.241,10.018,0.659c-27.456-25.813-64.414-41.634-105.073-41.634c-5.609,0-11.145,0.305-16.597,0.891C338.776,264.783,362.077,283.402,379.405,306.726z"/><path style="fill:#BDCCD4;" d="M180.233,253.122c-5.452-0.586-10.989-0.891-16.597-0.891c-84.741,0-153.437,68.697-153.437,153.438h69.714C79.913,337.305,121.221,278.599,180.233,253.122z"/><path style="fill:#BDCCD4;" d="M276.894,234.054c14.075,11.362,31.971,18.177,51.468,18.177c45.296,0,82.016-36.719,82.016-82.016c0-45.296-36.719-82.016-82.016-82.016c-6.038,0-11.917,0.671-17.583,1.909c14.881,15.875,23.997,37.219,23.997,60.695C334.777,188.969,310.692,221.506,276.894,234.054z"/></g><g><path style="fill:#29ABE2;" d="M379.405,306.726c-17.328-23.326-40.629-41.943-67.639-53.604c-20.169-8.707-42.401-13.54-65.766-13.54s-45.597,4.833-65.765,13.54c-59.013,25.477-100.32,84.183-100.32,152.545h95.013h142.148h35.741c-4.983-10.305-7.779-21.865-7.779-34.08C345.035,344.615,358.663,320.829,379.405,306.726z"/><path style="fill:#29ABE2;" d="M334.777,150.805c0-23.476-9.116-44.819-23.997-60.695C294.583,72.829,271.554,62.028,246,62.028s-48.582,10.801-64.78,28.081c-14.881,15.875-23.997,37.219-23.997,60.695c0,38.164,24.084,70.701,57.882,83.249c9.622,3.573,20.029,5.528,30.895,5.528c10.866,0,21.272-1.955,30.895-5.528C310.692,221.506,334.777,188.969,334.777,150.805z"/></g><path style="fill:#FF931E;" d="M433.436,293.865c-3.283-0.419-6.621-0.659-10.018-0.659c-16.317,0-31.466,4.989-44.014,13.521c-20.742,14.102-34.369,37.889-34.369,64.862c0,12.215,2.796,23.774,7.779,34.08c12.679,26.218,39.528,44.303,70.603,44.303c43.29,0,78.383-35.093,78.383-78.383C501.801,331.696,471.991,298.787,433.436,293.865z"/><path d="M120.381,382.472c-0.788,0-1.59-0.092-2.392-0.285c-5.476-1.317-8.85-6.822-7.534-12.3c8.683-36.128,32.034-67.825,64.067-86.962c4.836-2.889,11.098-1.311,13.987,3.525c2.888,4.835,1.311,11.098-3.525,13.986c-27.352,16.341-47.289,43.393-54.695,74.218C129.167,379.329,124.988,382.472,120.381,382.472z"/><path d="M215.916,287.185c-4.617,0-8.802-3.158-9.915-7.846c-1.3-5.481,2.088-10.978,7.568-12.279c10.511-2.495,21.365-3.76,32.265-3.76c5.632,0,10.199,4.566,10.199,10.199s-4.567,10.199-10.199,10.199c-9.315,0-18.585,1.08-27.554,3.209C217.489,287.095,216.696,287.185,215.916,287.185z"/><path d="M437.881,284.194c-17.589-15.873-38.628-27.987-61.844-35.07c26.677-16.178,44.54-45.496,44.54-78.908c0-50.847-41.368-92.215-92.215-92.215c-4.832,0-9.577,0.375-14.211,1.095C296.391,62.209,272.385,51.829,246,51.829s-50.391,10.379-68.152,27.268c-4.633-0.72-9.379-1.095-14.212-1.095c-50.847,0-92.214,41.368-92.214,92.215c0,33.412,17.863,62.729,44.539,78.907C48.914,269.582,0,332.016,0,405.669c0,5.633,4.567,10.199,10.199,10.199h69.714h266.808c15.338,26.464,43.973,44.303,76.697,44.303c48.844,0,88.582-39.737,88.582-88.582C512,327.669,479.869,291.119,437.881,284.194z M405.276,284.878c-8.304,1.735-16.182,4.639-23.459,8.527c-9.022-10.897-19.328-20.692-30.684-29.155C370.793,267.402,389.132,274.563,405.276,284.878z M400.179,170.216c0,39.599-32.217,71.817-71.817,71.817c-10.953,0-21.336-2.474-30.634-6.878c28.322-17.434,47.248-48.721,47.248-84.348c0-19.216-5.511-37.167-15.025-52.366C368.818,99.29,400.179,131.148,400.179,170.216z M246,72.227c16.528,0,31.871,5.141,44.54,13.891c6.269,4.331,11.878,9.547,16.65,15.469c10.864,13.48,17.387,30.598,17.387,49.217c0,31.604-18.764,58.892-45.729,71.355c-6.807,3.146-14.132,5.347-21.816,6.433c-3.607,0.509-7.287,0.79-11.032,0.79c-3.746,0-7.426-0.28-11.033-0.79c-7.683-1.085-15.009-3.286-21.816-6.433c-26.964-12.463-45.728-39.751-45.728-71.355c0-18.62,6.523-35.737,17.387-49.217c4.772-5.922,10.381-11.138,16.65-15.469C214.128,77.369,229.472,72.227,246,72.227z M91.82,170.216c0-39.068,31.362-70.926,70.229-71.777c-9.515,15.199-15.025,33.149-15.025,52.366c0,35.628,18.925,66.915,47.247,84.348c-9.299,4.404-19.681,6.878-30.634,6.878C124.037,242.032,91.82,209.815,91.82,170.216z M140.868,264.249c-40.6,30.26-67.776,77.564-70.853,131.221H20.758C25.465,328.84,75.951,274.661,140.868,264.249z M90.441,395.47c3.81-58.73,40.297-108.693,91.412-131.863c11.944-5.415,24.685-9.37,37.997-11.627c8.505-1.442,17.24-2.197,26.149-2.197c8.909,0,17.644,0.755,26.148,2.197c13.312,2.258,26.053,6.212,37.998,11.627c21.239,9.628,39.953,23.875,54.845,41.463c-18.474,16.246-30.154,40.043-30.154,66.521c0,8.272,1.143,16.28,3.273,23.88H90.441V395.47z M423.418,439.772c-20.705,0-39.271-9.289-51.785-23.905c-5.133-5.994-9.251-12.88-12.072-20.398c-2.79-7.436-4.327-15.481-4.327-23.88c0-19.765,8.46-37.584,21.942-50.049c4.992-4.616,10.669-8.502,16.867-11.473c8.901-4.267,18.862-6.662,29.375-6.662c1.811,0,3.601,0.093,5.377,0.232c14.69,1.153,28.08,6.972,38.693,15.984c14.737,12.517,24.114,31.164,24.114,51.969c0,4.116-0.387,8.141-1.089,12.059c-2.18,12.157-7.586,23.203-15.308,32.22C462.689,430.483,444.123,439.772,423.418,439.772z"/><path style="fill:#BDCCD4;" d="M427.406,330.885l2.874,8.846c3.17,9.757,12.261,16.362,22.52,16.362h9.302c3.756,0,5.318,4.806,2.28,7.014l-7.525,5.467c-8.299,6.03-11.772,16.717-8.602,26.474l2.874,8.846c1.161,3.572-2.928,6.543-5.967,4.335l-7.525-5.467c-8.299-6.03-19.538-6.03-27.837,0l-7.525,5.467c-3.038,2.208-7.127-0.763-5.967-4.335l2.874-8.846c3.17-9.757-0.303-20.444-8.602-26.474l-7.525-5.467c-3.038-2.208-1.477-7.014,2.28-7.014h9.302c10.258,0,19.35-6.606,22.52-16.362l2.874-8.846C421.191,327.313,426.245,327.313,427.406,330.885z"/><path d="M447.44,419.178c-2.9,0-5.798-0.899-8.273-2.697l-7.526-5.468c-4.739-3.442-11.108-3.442-15.846,0l-7.525,5.467c-4.95,3.595-11.601,3.596-16.549-0.001c-4.949-3.595-7.003-9.921-5.112-15.737l2.873-8.846c1.81-5.572-0.158-11.628-4.897-15.071l-7.525-5.467c-4.95-3.596-7.004-9.922-5.113-15.739c1.891-5.817,7.27-9.725,13.387-9.725h9.302c5.858,0,11.01-3.743,12.819-9.314l2.874-8.847c1.89-5.818,7.269-9.726,13.386-9.726c6.117-0.001,11.498,3.907,13.389,9.725v0.001l2.874,8.847c1.81,5.571,6.962,9.314,12.82,9.314h9.302c6.117,0,11.497,3.908,13.387,9.726c1.891,5.818-0.164,12.142-5.113,15.738l-7.525,5.467c-4.739,3.443-6.707,9.5-4.897,15.07l2.874,8.848c1.89,5.816-0.164,12.14-5.112,15.736C453.241,418.278,450.341,419.178,447.44,419.178z M402.193,365.448c6.089,6.955,9.06,16.099,8.222,25.305c8.495-3.641,18.11-3.641,26.607,0c-0.838-9.206,2.132-18.349,8.223-25.305c-9.014-2.048-16.793-7.698-21.525-15.638C418.985,357.751,411.208,363.401,402.193,365.448z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></span></div><h4 class="n1">بياناتك</h4> </div><div style="position:relative;padding:5px;text-align:right;font-size:14px"><div class="info"><span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;width: 20px;height: 15px;margin-top: 5px;" xml:space="preserve"><g><circle style="fill:#29ABE2;" cx="236.805" cy="127.857" r="117.658"/><path style="fill:#29ABE2;" d="M400.386,318.357c-40.29-44.716-98.647-72.835-163.577-72.835c-121.571,0-220.125,98.553-220.125,220.125h313.895c-11.771-15.428-18.767-34.695-18.767-55.599C311.812,360.44,351.185,320.034,400.386,318.357z"/></g><path style="fill:#BDCCD4;" d="M403.564,318.297c-1.065,0-2.122,0.024-3.179,0.061c-49.201,1.676-88.574,42.083-88.574,91.692c0,20.903,6.996,40.171,18.767,55.599c16.763,21.97,43.217,36.152,72.987,36.152c50.674,0,91.752-41.078,91.752-91.752S454.238,318.297,403.564,318.297z"/><path d="M138.43,300.637c-44.199,26.405-76.418,70.135-88.394,119.975c-1.317,5.477,2.057,10.984,7.534,12.3c0.801,0.193,1.602,0.285,2.392,0.285c4.606,0,8.785-3.143,9.909-7.819c10.703-44.538,39.505-83.622,79.021-107.23c4.835-2.888,6.414-9.151,3.525-13.986C149.526,299.325,143.264,297.747,138.43,300.637z"/><path d="M236.809,273.563c-15.038,0-30.016,1.745-44.517,5.187c-5.481,1.3-8.869,6.798-7.568,12.279c1.113,4.69,5.296,7.846,9.915,7.846c0.78,0,1.572-0.09,2.363-0.278c12.961-3.076,26.354-4.636,39.807-4.636c5.633,0,10.199-4.566,10.199-10.199S242.442,273.563,236.809,273.563z"/><path d="M404.816,308.113c-1.685-1.797-3.393-3.579-5.143-5.329c-29.761-29.762-66.236-50.37-106.007-60.423c42.048-20.964,71.004-64.411,71.004-114.5C364.669,57.358,307.311,0,236.809,0S108.948,57.358,108.948,127.86c0,50.089,28.957,93.536,71.004,114.5c-39.771,10.053-76.245,30.661-106.007,60.423c-43.502,43.502-67.46,101.341-67.46,162.864c0,5.633,4.566,10.199,10.199,10.199h309.072C344.472,497.944,372.406,512,403.564,512c56.216,0,101.951-45.735,101.951-101.951C505.515,354.251,460.456,308.787,404.816,308.113z M129.346,127.86c0-59.254,48.208-107.462,107.463-107.462S344.271,68.606,344.271,127.86s-48.208,107.463-107.462,107.463S129.346,187.116,129.346,127.86z M27.128,455.448c5.338-111.036,97.347-199.727,209.681-199.727c54.695,0,104.564,21.035,141.963,55.431c-44.274,11.103-77.159,51.23-77.159,98.897c0,16.302,3.852,31.72,10.686,45.4H27.128z M403.564,491.602c-44.968,0-81.553-36.585-81.553-81.553s36.585-81.553,81.553-81.553s81.553,36.585,81.553,81.553S448.532,491.602,403.564,491.602z"/><path d="M424.115,371.689c-3.983-3.983-10.441-3.983-14.425,0c-3.983,3.983-3.983,10.441,0,14.425l15.584,15.584h-63.457c-5.633,0-10.199,4.566-10.199,10.199c0,5.633,4.566,10.199,10.199,10.199h63.231l-15.358,15.358c-3.983,3.983-3.984,10.441,0,14.424c1.992,1.992,4.602,2.987,7.212,2.987s5.221-0.996,7.212-2.987l32.882-32.882c1.912-1.912,2.987-4.507,2.987-7.212s-1.075-5.3-2.987-7.212L424.115,371.689z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg><span class="inf">الاسم</span></span><data>'+db_lgn.name+'</data></div><ht><div class="info"><span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 495 495" style="enable-background:new 0 0 512 512;width: 20px;height: 15px;margin-top: 5px;" xml:space="preserve"><g><path style="fill:#46F8FF;" d="M256.38,190.189l32.218,29.376c20.822-13.251,45.516-20.938,71.972-20.938c27.506,0,53.105,8.31,74.43,22.542V27.514L256.2,190.189H256.38z"/><polygon style="fill:#9BFBFF;" points="435,27.514 0,27.514 217.5,225.284 "/><path style="fill:#00E7F0;" d="M288.598,219.565l-32.218-29.376h-0.18l-38.7,35.095l-38.79-35.095L0,353.054h227.63c-0.978-6.526-1.489-13.203-1.489-19.998C226.141,285.389,251.083,243.44,288.598,219.565z"/><polygon style="fill:#46F8FF;" points="0,27.514 0,353.054 178.71,190.189 "/><path style="fill:#FFDA44;" d="M300.786,333.056l59.784-59.784v-74.645c-26.457,0-51.15,7.687-71.972,20.938c-37.515,23.875-62.457,65.823-62.457,113.491c0,6.795,0.511,13.471,1.489,19.998c9.687,64.674,65.61,114.432,132.94,114.432V392.84L300.786,333.056z"/><polygon style="fill:#FFDA44;" points="360.57,336.272 360.57,329.84 357.354,333.056 "/><path style="fill:#FFCD00;" d="M435,221.169c-21.325-14.232-46.924-22.542-74.43-22.542v74.645l9.358-9.358l28.284,28.284L360.57,329.84v6.432l37.642,37.642l-28.284,28.284l-9.358-9.358v74.646c74.125,0,134.43-60.305,134.43-134.43C495,286.438,471.143,245.291,435,221.169z"/><polygon style="fill:#2488FF;" points="300.786,333.056 369.928,402.198 398.212,373.914 357.354,333.056 398.212,292.198 369.928,263.914 "/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg><span class="inf">البريد الالكترونى</span></span><data>'+db_lgn.mail+'</data></div><div class="info"><span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;width: 20px;height: 15px;margin-top: 5px;" xml:space="preserve"><circle style="fill:#324A5E;" cx="256" cy="256" r="256"/><path style="fill:#2B3B4E;" d="M295.215,508.978c51.905-8.002,101.823-31.977,141.805-71.959s63.957-89.902,71.959-141.807L384.433,170.667l-37.004,25.057l-53.501-53.501l-60.911,47.12l46.195,46.196L127.571,341.333L295.215,508.978z"/><rect x="127.569" y="170.667" style="fill:#B5F1F4;" width="256.862" height="170.667"/><rect x="256" y="170.667" style="fill:#84DBFF;" width="128.431" height="170.667"/><rect x="218.074" y="142.222" style="fill:#FD8469;" width="75.852" height="56.889"/><rect x="256" y="142.222" style="fill:#FC6F58;" width="37.926" height="56.889"/><g><rect x="153.428" y="213.333" style="fill:#31BAFD;" width="56.889" height="85.333"/><rect x="235.313" y="265.051" style="fill:#31BAFD;" width="113.778" height="10.343"/><rect x="235.313" y="245.657" style="fill:#31BAFD;" width="113.778" height="10.343"/></g><g><rect x="256" y="265.051" style="fill:#2B9ED8;" width="93.091" height="10.343"/><rect x="256" y="245.657" style="fill:#2B9ED8;" width="93.091" height="10.343"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg><span class="inf">معرف المدونه</span></span><data>'+db_lgn.blog_id+'</data></div><div class="info"><span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 473.931 473.931" style="enable-background:new 0 0 512 512;width: 20px;height: 15px;margin-top: 5px;" xml:space="preserve"><circle style="fill:#D7DABA;" cx="236.966" cy="236.966" r="236.966"/><path style="fill:#6E4095;" d="M144.398,93.791c-8.827,0-15.981,7.154-15.981,15.981v255.757c0,8.827,7.154,15.981,15.981,15.981H328.22c8.827,0,15.981-7.154,15.981-15.981V167.814l-77.05-74.023H144.398z"/><g><path style="fill:#59337F;" d="M344.201,167.814h-61.066c-8.827,0-15.981-7.154-15.981-15.981V93.791L344.201,167.814z"/><path style="fill:#59337F;" d="M263.966,271.772c0,10.189-8.258,18.447-18.439,18.447H110.876c-10.189,0-18.439-8.258-18.439-18.447v-56.351c0-10.189,8.251-18.443,18.439-18.443h134.651c10.181,0,18.439,8.254,18.439,18.443V271.772z"/></g><g><path style="fill:#FFFFFF;" d="M135.774,230.736v13.149l14.911-15.551c0.715-0.752,1.325-1.306,1.83-1.661c0.501-0.359,1.171-0.539,2.006-0.539c1.093,0,1.972,0.318,2.649,0.958c0.674,0.64,1.01,1.418,1.01,2.339c0,1.108-0.569,2.208-1.714,3.3l-9.235,8.748l10.642,15.244c0.748,1.059,1.313,1.983,1.688,2.776s0.561,1.564,0.561,2.316c0,0.834-0.329,1.56-0.988,2.174c-0.655,0.614-1.545,0.921-2.672,0.921c-1.055,0-1.92-0.228-2.582-0.677c-0.662-0.449-1.227-1.051-1.688-1.804c-0.46-0.752-0.868-1.433-1.227-2.047l-8.976-13.811l-6.215,5.961v7.749c0,1.568-0.359,2.732-1.074,3.491c-0.715,0.76-1.639,1.138-2.761,1.138c-0.647,0-1.272-0.168-1.867-0.513c-0.595-0.344-1.055-0.801-1.381-1.381c-0.236-0.475-0.385-1.033-0.434-1.661c-0.049-0.629-0.079-1.545-0.079-2.735v-27.88c0-1.534,0.337-2.687,1.014-3.454c0.674-0.767,1.59-1.152,2.746-1.152c1.145,0,2.069,0.382,2.776,1.137C135.418,228.03,135.774,229.187,135.774,230.736z"/><path style="fill:#FFFFFF;" d="M191.612,232.629h-17.111v9.208h15.757c1.16,0,2.024,0.258,2.593,0.778c0.572,0.52,0.857,1.205,0.857,2.058c0,0.853-0.281,1.549-0.846,2.084c-0.565,0.535-1.433,0.804-2.608,0.804h-15.757v10.668h17.699c1.194,0,2.095,0.277,2.698,0.831c0.606,0.554,0.909,1.291,0.909,2.211c0,0.887-0.303,1.609-0.909,2.163c-0.602,0.554-1.5,0.831-2.698,0.831h-20.643c-1.654,0-2.844-0.367-3.57-1.1c-0.722-0.733-1.085-1.92-1.085-3.555v-28.183c0-1.093,0.161-1.983,0.486-2.672s0.834-1.194,1.519-1.508c0.696-0.314,1.575-0.471,2.649-0.471h20.052c1.209,0,2.107,0.269,2.702,0.804c0.584,0.539,0.879,1.242,0.879,2.11c0,0.887-0.296,1.598-0.879,2.137C193.718,232.36,192.82,232.629,191.612,232.629z"/><path style="fill:#FFFFFF;" d="M210.208,260.281v-11.895l-9.156-14.196c-0.801-1.28-1.366-2.275-1.703-2.993c-0.329-0.715-0.498-1.34-0.498-1.867c0-0.868,0.337-1.62,1.01-2.253c0.677-0.629,1.504-0.947,2.496-0.947c1.04,0,1.83,0.296,2.365,0.883c0.543,0.587,1.343,1.762,2.417,3.517l7.008,11.382l7.087-11.382c0.427-0.7,0.786-1.287,1.074-1.766c0.288-0.479,0.61-0.924,0.962-1.343c0.348-0.419,0.733-0.737,1.164-0.958c0.43-0.221,0.947-0.333,1.56-0.333c0.954,0,1.751,0.311,2.395,0.935c0.636,0.625,0.958,1.343,0.958,2.163c0,0.666-0.161,1.328-0.486,1.994c-0.326,0.666-0.876,1.587-1.661,2.761l-9.388,14.402v11.895c0,1.553-0.359,2.713-1.074,3.48c-0.715,0.767-1.631,1.152-2.735,1.152c-1.126,0-2.039-0.382-2.735-1.137C210.571,263.02,210.208,261.848,210.208,260.281z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg><span class="inf">كود التفعيل</span></span><data readonly="readonly">'+system_encode(db_lgn.key)+'</data></div><div class="info"><span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;width: 20px;height: 15px;margin-top: 5px;" xml:space="preserve"><g><circle style="fill:#29ABE2;" cx="236.805" cy="127.857" r="117.658"/><path style="fill:#29ABE2;" d="M400.386,318.357c-40.29-44.716-98.647-72.835-163.577-72.835c-121.571,0-220.125,98.553-220.125,220.125h313.895c-11.771-15.428-18.767-34.695-18.767-55.599C311.812,360.44,351.185,320.034,400.386,318.357z"/></g><path style="fill:#BDCCD4;" d="M403.564,318.297c-1.065,0-2.122,0.024-3.179,0.061c-49.201,1.676-88.574,42.083-88.574,91.692c0,20.903,6.996,40.171,18.767,55.599c16.763,21.97,43.217,36.152,72.987,36.152c50.674,0,91.752-41.078,91.752-91.752S454.238,318.297,403.564,318.297z"/><path d="M138.43,300.637c-44.199,26.405-76.418,70.135-88.394,119.975c-1.317,5.477,2.057,10.984,7.534,12.3c0.801,0.193,1.602,0.285,2.392,0.285c4.606,0,8.785-3.143,9.909-7.819c10.703-44.538,39.505-83.622,79.021-107.23c4.835-2.888,6.414-9.151,3.525-13.986C149.526,299.325,143.264,297.747,138.43,300.637z"/><path d="M236.809,273.563c-15.038,0-30.016,1.745-44.517,5.187c-5.481,1.3-8.869,6.798-7.568,12.279c1.113,4.69,5.296,7.846,9.915,7.846c0.78,0,1.572-0.09,2.363-0.278c12.961-3.076,26.354-4.636,39.807-4.636c5.633,0,10.199-4.566,10.199-10.199S242.442,273.563,236.809,273.563z"/><path d="M404.816,308.113c-1.685-1.797-3.393-3.579-5.143-5.329c-29.761-29.762-66.236-50.37-106.007-60.423c42.048-20.964,71.004-64.411,71.004-114.5C364.669,57.358,307.311,0,236.809,0S108.948,57.358,108.948,127.86c0,50.089,28.957,93.536,71.004,114.5c-39.771,10.053-76.245,30.661-106.007,60.423c-43.502,43.502-67.46,101.341-67.46,162.864c0,5.633,4.566,10.199,10.199,10.199h309.072C344.472,497.944,372.406,512,403.564,512c56.216,0,101.951-45.735,101.951-101.951C505.515,354.251,460.456,308.787,404.816,308.113z M129.346,127.86c0-59.254,48.208-107.462,107.463-107.462S344.271,68.606,344.271,127.86s-48.208,107.463-107.462,107.463S129.346,187.116,129.346,127.86z M27.128,455.448c5.338-111.036,97.347-199.727,209.681-199.727c54.695,0,104.564,21.035,141.963,55.431c-44.274,11.103-77.159,51.23-77.159,98.897c0,16.302,3.852,31.72,10.686,45.4H27.128z M403.564,491.602c-44.968,0-81.553-36.585-81.553-81.553s36.585-81.553,81.553-81.553s81.553,36.585,81.553,81.553S448.532,491.602,403.564,491.602z"/><path d="M424.115,371.689c-3.983-3.983-10.441-3.983-14.425,0c-3.983,3.983-3.983,10.441,0,14.425l15.584,15.584h-63.457c-5.633,0-10.199,4.566-10.199,10.199c0,5.633,4.566,10.199,10.199,10.199h63.231l-15.358,15.358c-3.983,3.983-3.984,10.441,0,14.424c1.992,1.992,4.602,2.987,7.212,2.987s5.221-0.996,7.212-2.987l32.882-32.882c1.912-1.912,2.987-4.507,2.987-7.212s-1.075-5.3-2.987-7.212L424.115,371.689z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg><span class="inf">طريقة الشراء</span></span><data>'+db_lgn.pay+'</data></div><h4 class="n2">حمل قالبك الان . كن امينا على القالب ولا تقوم بارساله لغيرك <hr> <span class="ID"> <data type="Blogid"> <div class="n3"><a href="'+db_lgn.version+'" class="n4">تحميل</a></div></data> </span> </h4> </div><div class="n3"><button class="n4" id="log-outt">تسجيل الخروج</button></div></div></div>';
  $('#get-data').append(cc); 
$("#log-outt").click(function(){
localStorage.removeItem('login_db');
$(elemnt).append(htmll);
$("#info_agnt2").css('display','none');
window.location.reload();
});
 }else {
$(elemnt).append(htmll);
/**/
if (window.location.pathname == page$name ){
history.pushState(null, "page 2", "?type=login");
}
$("#info_agnt2").css('display','none');

/**/
$("#get_data").click(function() {
var  input_mail =$(".input_mail").val();
/**/
if ($('input.input_mail').val().length <5){
 $("#get-data span.wrng-msg").css('display','block');
 $("input.input_mail").addClass("Animat-shadowPulse");
 setInterval(function () {
  $("#get-data span.wrng-msg").css('display','none');
},2500);
}
else{ $.ajax({dataType: "json",
        url: url_data,
        method: "GET",
        dataType: "jsonp",
        success: function (res) {
$("<div>"+res.entry.content.$t+"</div>").each(function () {
        var data = $(this).text(),
          	data_agent = JSON.parse(system_decode(data));
for (var o = 0;o < data_agent.length;o++){
     var info_id = data_agent[o].custom_id,
         info_cr =data_agent[o].active_status, 
         info_ky = data_agent[o].key ,
         info_mil = data_agent[o].email,
         info_pay = data_agent[o].pay,
         info_v = data_agent[o].version,
         info_nam = data_agent[o].username;
if (input_mail == info_mil){
var mydb = {"name":info_nam,"mail":info_mil,"crete":info_cr,"key":info_ky,"blog_id":info_id,"pay":info_pay,"version":info_v },
    $mydb = JSON.stringify(mydb);
localStorage.setItem('login_db',$mydb);
$("#get-data span.wrng-msg").css('display','none');
$("#get_data").addClass("lading"); 
setInterval(function () {
  $("#get_data").removeClass("lading");
  $(".input-mail-lab").css('display','none');
  $("#info_agnt2").css('display','block');
},800); 
var tt = info_nam;
var cc ='<div class="onwe"> <div class="nnvbada"> <div> <div class="iconcpby"> <span> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;width: 35px;margin-top: 7px;" xml:space="preserve"> <g> <path style="fill:#BDCCD4;" d="M157.223,150.805c0-23.476,9.116-44.819,23.997-60.695c-5.667-1.238-11.546-1.909-17.583-1.909c-45.296,0-82.016,36.719-82.016,82.016c0,45.296,36.719,82.016,82.016,82.016c19.497,0,37.393-6.815,51.468-18.177C181.307,221.506,157.223,188.969,157.223,150.805z"/> <path style="fill:#BDCCD4;" d="M379.405,306.726c12.547-8.531,27.697-13.521,44.014-13.521c3.396,0,6.736,0.241,10.018,0.659c-27.456-25.813-64.414-41.634-105.073-41.634c-5.609,0-11.145,0.305-16.597,0.891C338.776,264.783,362.077,283.402,379.405,306.726z"/> <path style="fill:#BDCCD4;" d="M180.233,253.122c-5.452-0.586-10.989-0.891-16.597-0.891c-84.741,0-153.437,68.697-153.437,153.438h69.714C79.913,337.305,121.221,278.599,180.233,253.122z"/> <path style="fill:#BDCCD4;" d="M276.894,234.054c14.075,11.362,31.971,18.177,51.468,18.177c45.296,0,82.016-36.719,82.016-82.016c0-45.296-36.719-82.016-82.016-82.016c-6.038,0-11.917,0.671-17.583,1.909c14.881,15.875,23.997,37.219,23.997,60.695C334.777,188.969,310.692,221.506,276.894,234.054z"/> </g> <g> <path style="fill:#29ABE2;" d="M379.405,306.726c-17.328-23.326-40.629-41.943-67.639-53.604c-20.169-8.707-42.401-13.54-65.766-13.54s-45.597,4.833-65.765,13.54c-59.013,25.477-100.32,84.183-100.32,152.545h95.013h142.148h35.741c-4.983-10.305-7.779-21.865-7.779-34.08C345.035,344.615,358.663,320.829,379.405,306.726z"/> <path style="fill:#29ABE2;" d="M334.777,150.805c0-23.476-9.116-44.819-23.997-60.695C294.583,72.829,271.554,62.028,246,62.028s-48.582,10.801-64.78,28.081c-14.881,15.875-23.997,37.219-23.997,60.695c0,38.164,24.084,70.701,57.882,83.249c9.622,3.573,20.029,5.528,30.895,5.528c10.866,0,21.272-1.955,30.895-5.528C310.692,221.506,334.777,188.969,334.777,150.805z"/> </g> <path style="fill:#FF931E;" d="M433.436,293.865c-3.283-0.419-6.621-0.659-10.018-0.659c-16.317,0-31.466,4.989-44.014,13.521c-20.742,14.102-34.369,37.889-34.369,64.862c0,12.215,2.796,23.774,7.779,34.08c12.679,26.218,39.528,44.303,70.603,44.303c43.29,0,78.383-35.093,78.383-78.383C501.801,331.696,471.991,298.787,433.436,293.865z"/> <path d="M120.381,382.472c-0.788,0-1.59-0.092-2.392-0.285c-5.476-1.317-8.85-6.822-7.534-12.3c8.683-36.128,32.034-67.825,64.067-86.962c4.836-2.889,11.098-1.311,13.987,3.525c2.888,4.835,1.311,11.098-3.525,13.986c-27.352,16.341-47.289,43.393-54.695,74.218C129.167,379.329,124.988,382.472,120.381,382.472z"/> <path d="M215.916,287.185c-4.617,0-8.802-3.158-9.915-7.846c-1.3-5.481,2.088-10.978,7.568-12.279c10.511-2.495,21.365-3.76,32.265-3.76c5.632,0,10.199,4.566,10.199,10.199s-4.567,10.199-10.199,10.199c-9.315,0-18.585,1.08-27.554,3.209C217.489,287.095,216.696,287.185,215.916,287.185z"/> <path d="M437.881,284.194c-17.589-15.873-38.628-27.987-61.844-35.07c26.677-16.178,44.54-45.496,44.54-78.908c0-50.847-41.368-92.215-92.215-92.215c-4.832,0-9.577,0.375-14.211,1.095C296.391,62.209,272.385,51.829,246,51.829s-50.391,10.379-68.152,27.268c-4.633-0.72-9.379-1.095-14.212-1.095c-50.847,0-92.214,41.368-92.214,92.215c0,33.412,17.863,62.729,44.539,78.907C48.914,269.582,0,332.016,0,405.669c0,5.633,4.567,10.199,10.199,10.199h69.714h266.808c15.338,26.464,43.973,44.303,76.697,44.303c48.844,0,88.582-39.737,88.582-88.582C512,327.669,479.869,291.119,437.881,284.194z M405.276,284.878c-8.304,1.735-16.182,4.639-23.459,8.527c-9.022-10.897-19.328-20.692-30.684-29.155C370.793,267.402,389.132,274.563,405.276,284.878z M400.179,170.216c0,39.599-32.217,71.817-71.817,71.817c-10.953,0-21.336-2.474-30.634-6.878c28.322-17.434,47.248-48.721,47.248-84.348c0-19.216-5.511-37.167-15.025-52.366C368.818,99.29,400.179,131.148,400.179,170.216z M246,72.227c16.528,0,31.871,5.141,44.54,13.891c6.269,4.331,11.878,9.547,16.65,15.469c10.864,13.48,17.387,30.598,17.387,49.217c0,31.604-18.764,58.892-45.729,71.355c-6.807,3.146-14.132,5.347-21.816,6.433c-3.607,0.509-7.287,0.79-11.032,0.79c-3.746,0-7.426-0.28-11.033-0.79c-7.683-1.085-15.009-3.286-21.816-6.433c-26.964-12.463-45.728-39.751-45.728-71.355c0-18.62,6.523-35.737,17.387-49.217c4.772-5.922,10.381-11.138,16.65-15.469C214.128,77.369,229.472,72.227,246,72.227z M91.82,170.216c0-39.068,31.362-70.926,70.229-71.777c-9.515,15.199-15.025,33.149-15.025,52.366c0,35.628,18.925,66.915,47.247,84.348c-9.299,4.404-19.681,6.878-30.634,6.878C124.037,242.032,91.82,209.815,91.82,170.216z M140.868,264.249c-40.6,30.26-67.776,77.564-70.853,131.221H20.758C25.465,328.84,75.951,274.661,140.868,264.249z M90.441,395.47c3.81-58.73,40.297-108.693,91.412-131.863c11.944-5.415,24.685-9.37,37.997-11.627c8.505-1.442,17.24-2.197,26.149-2.197c8.909,0,17.644,0.755,26.148,2.197c13.312,2.258,26.053,6.212,37.998,11.627c21.239,9.628,39.953,23.875,54.845,41.463c-18.474,16.246-30.154,40.043-30.154,66.521c0,8.272,1.143,16.28,3.273,23.88H90.441V395.47z M423.418,439.772c-20.705,0-39.271-9.289-51.785-23.905c-5.133-5.994-9.251-12.88-12.072-20.398c-2.79-7.436-4.327-15.481-4.327-23.88c0-19.765,8.46-37.584,21.942-50.049c4.992-4.616,10.669-8.502,16.867-11.473c8.901-4.267,18.862-6.662,29.375-6.662c1.811,0,3.601,0.093,5.377,0.232c14.69,1.153,28.08,6.972,38.693,15.984c14.737,12.517,24.114,31.164,24.114,51.969c0,4.116-0.387,8.141-1.089,12.059c-2.18,12.157-7.586,23.203-15.308,32.22C462.689,430.483,444.123,439.772,423.418,439.772z"/> <path style="fill:#BDCCD4;" d="M427.406,330.885l2.874,8.846c3.17,9.757,12.261,16.362,22.52,16.362h9.302c3.756,0,5.318,4.806,2.28,7.014l-7.525,5.467c-8.299,6.03-11.772,16.717-8.602,26.474l2.874,8.846c1.161,3.572-2.928,6.543-5.967,4.335l-7.525-5.467c-8.299-6.03-19.538-6.03-27.837,0l-7.525,5.467c-3.038,2.208-7.127-0.763-5.967-4.335l2.874-8.846c3.17-9.757-0.303-20.444-8.602-26.474l-7.525-5.467c-3.038-2.208-1.477-7.014,2.28-7.014h9.302c10.258,0,19.35-6.606,22.52-16.362l2.874-8.846C421.191,327.313,426.245,327.313,427.406,330.885z"/> <path d="M447.44,419.178c-2.9,0-5.798-0.899-8.273-2.697l-7.526-5.468c-4.739-3.442-11.108-3.442-15.846,0l-7.525,5.467c-4.95,3.595-11.601,3.596-16.549-0.001c-4.949-3.595-7.003-9.921-5.112-15.737l2.873-8.846c1.81-5.572-0.158-11.628-4.897-15.071l-7.525-5.467c-4.95-3.596-7.004-9.922-5.113-15.739c1.891-5.817,7.27-9.725,13.387-9.725h9.302c5.858,0,11.01-3.743,12.819-9.314l2.874-8.847c1.89-5.818,7.269-9.726,13.386-9.726c6.117-0.001,11.498,3.907,13.389,9.725v0.001l2.874,8.847c1.81,5.571,6.962,9.314,12.82,9.314h9.302c6.117,0,11.497,3.908,13.387,9.726c1.891,5.818-0.164,12.142-5.113,15.738l-7.525,5.467c-4.739,3.443-6.707,9.5-4.897,15.07l2.874,8.848c1.89,5.816-0.164,12.14-5.112,15.736C453.241,418.278,450.341,419.178,447.44,419.178z M402.193,365.448c6.089,6.955,9.06,16.099,8.222,25.305c8.495-3.641,18.11-3.641,26.607,0c-0.838-9.206,2.132-18.349,8.223-25.305c-9.014-2.048-16.793-7.698-21.525-15.638C418.985,357.751,411.208,363.401,402.193,365.448z"/> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg> </span> </div><h4 class="n1">بياناتك</h4> </div><div style="position:relative;padding:5px;text-align:right;font-size:14px"> <div class="info"> <span> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;width: 20px;height: 15px;margin-top: 5px;" xml:space="preserve"> <g> <circle style="fill:#29ABE2;" cx="236.805" cy="127.857" r="117.658"/> <path style="fill:#29ABE2;" d="M400.386,318.357c-40.29-44.716-98.647-72.835-163.577-72.835c-121.571,0-220.125,98.553-220.125,220.125h313.895c-11.771-15.428-18.767-34.695-18.767-55.599C311.812,360.44,351.185,320.034,400.386,318.357z"/> </g> <path style="fill:#BDCCD4;" d="M403.564,318.297c-1.065,0-2.122,0.024-3.179,0.061c-49.201,1.676-88.574,42.083-88.574,91.692c0,20.903,6.996,40.171,18.767,55.599c16.763,21.97,43.217,36.152,72.987,36.152c50.674,0,91.752-41.078,91.752-91.752S454.238,318.297,403.564,318.297z"/> <path d="M138.43,300.637c-44.199,26.405-76.418,70.135-88.394,119.975c-1.317,5.477,2.057,10.984,7.534,12.3c0.801,0.193,1.602,0.285,2.392,0.285c4.606,0,8.785-3.143,9.909-7.819c10.703-44.538,39.505-83.622,79.021-107.23c4.835-2.888,6.414-9.151,3.525-13.986C149.526,299.325,143.264,297.747,138.43,300.637z"/> <path d="M236.809,273.563c-15.038,0-30.016,1.745-44.517,5.187c-5.481,1.3-8.869,6.798-7.568,12.279c1.113,4.69,5.296,7.846,9.915,7.846c0.78,0,1.572-0.09,2.363-0.278c12.961-3.076,26.354-4.636,39.807-4.636c5.633,0,10.199-4.566,10.199-10.199S242.442,273.563,236.809,273.563z"/> <path d="M404.816,308.113c-1.685-1.797-3.393-3.579-5.143-5.329c-29.761-29.762-66.236-50.37-106.007-60.423c42.048-20.964,71.004-64.411,71.004-114.5C364.669,57.358,307.311,0,236.809,0S108.948,57.358,108.948,127.86c0,50.089,28.957,93.536,71.004,114.5c-39.771,10.053-76.245,30.661-106.007,60.423c-43.502,43.502-67.46,101.341-67.46,162.864c0,5.633,4.566,10.199,10.199,10.199h309.072C344.472,497.944,372.406,512,403.564,512c56.216,0,101.951-45.735,101.951-101.951C505.515,354.251,460.456,308.787,404.816,308.113z M129.346,127.86c0-59.254,48.208-107.462,107.463-107.462S344.271,68.606,344.271,127.86s-48.208,107.463-107.462,107.463S129.346,187.116,129.346,127.86z M27.128,455.448c5.338-111.036,97.347-199.727,209.681-199.727c54.695,0,104.564,21.035,141.963,55.431c-44.274,11.103-77.159,51.23-77.159,98.897c0,16.302,3.852,31.72,10.686,45.4H27.128z M403.564,491.602c-44.968,0-81.553-36.585-81.553-81.553s36.585-81.553,81.553-81.553s81.553,36.585,81.553,81.553S448.532,491.602,403.564,491.602z"/> <path d="M424.115,371.689c-3.983-3.983-10.441-3.983-14.425,0c-3.983,3.983-3.983,10.441,0,14.425l15.584,15.584h-63.457c-5.633,0-10.199,4.566-10.199,10.199c0,5.633,4.566,10.199,10.199,10.199h63.231l-15.358,15.358c-3.983,3.983-3.984,10.441,0,14.424c1.992,1.992,4.602,2.987,7.212,2.987s5.221-0.996,7.212-2.987l32.882-32.882c1.912-1.912,2.987-4.507,2.987-7.212s-1.075-5.3-2.987-7.212L424.115,371.689z"/> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg> <span class="inf">الاسم</span> </span> <data>'+info_nam+'</data> </div><ht> <div class="info"> <span> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 495 495" style="enable-background:new 0 0 512 512;width: 20px;height: 15px;margin-top: 5px;" xml:space="preserve"> <g> <path style="fill:#46F8FF;" d="M256.38,190.189l32.218,29.376c20.822-13.251,45.516-20.938,71.972-20.938c27.506,0,53.105,8.31,74.43,22.542V27.514L256.2,190.189H256.38z"/> <polygon style="fill:#9BFBFF;" points="435,27.514 0,27.514 217.5,225.284 "/> <path style="fill:#00E7F0;" d="M288.598,219.565l-32.218-29.376h-0.18l-38.7,35.095l-38.79-35.095L0,353.054h227.63c-0.978-6.526-1.489-13.203-1.489-19.998C226.141,285.389,251.083,243.44,288.598,219.565z"/> <polygon style="fill:#46F8FF;" points="0,27.514 0,353.054 178.71,190.189 "/> <path style="fill:#FFDA44;" d="M300.786,333.056l59.784-59.784v-74.645c-26.457,0-51.15,7.687-71.972,20.938c-37.515,23.875-62.457,65.823-62.457,113.491c0,6.795,0.511,13.471,1.489,19.998c9.687,64.674,65.61,114.432,132.94,114.432V392.84L300.786,333.056z"/> <polygon style="fill:#FFDA44;" points="360.57,336.272 360.57,329.84 357.354,333.056 "/> <path style="fill:#FFCD00;" d="M435,221.169c-21.325-14.232-46.924-22.542-74.43-22.542v74.645l9.358-9.358l28.284,28.284L360.57,329.84v6.432l37.642,37.642l-28.284,28.284l-9.358-9.358v74.646c74.125,0,134.43-60.305,134.43-134.43C495,286.438,471.143,245.291,435,221.169z"/> <polygon style="fill:#2488FF;" points="300.786,333.056 369.928,402.198 398.212,373.914 357.354,333.056 398.212,292.198 369.928,263.914 "/> </g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg> <span class="inf">البريد الالكترونى</span> </span> <data>'+info_mil+'</data> </div><div class="info"> <span> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;width: 20px;height: 15px;margin-top: 5px;" xml:space="preserve"> <circle style="fill:#324A5E;" cx="256" cy="256" r="256"/> <path style="fill:#2B3B4E;" d="M295.215,508.978c51.905-8.002,101.823-31.977,141.805-71.959s63.957-89.902,71.959-141.807L384.433,170.667l-37.004,25.057l-53.501-53.501l-60.911,47.12l46.195,46.196L127.571,341.333L295.215,508.978z"/> <rect x="127.569" y="170.667" style="fill:#B5F1F4;" width="256.862" height="170.667"/> <rect x="256" y="170.667" style="fill:#84DBFF;" width="128.431" height="170.667"/> <rect x="218.074" y="142.222" style="fill:#FD8469;" width="75.852" height="56.889"/> <rect x="256" y="142.222" style="fill:#FC6F58;" width="37.926" height="56.889"/> <g> <rect x="153.428" y="213.333" style="fill:#31BAFD;" width="56.889" height="85.333"/> <rect x="235.313" y="265.051" style="fill:#31BAFD;" width="113.778" height="10.343"/> <rect x="235.313" y="245.657" style="fill:#31BAFD;" width="113.778" height="10.343"/> </g> <g> <rect x="256" y="265.051" style="fill:#2B9ED8;" width="93.091" height="10.343"/> <rect x="256" y="245.657" style="fill:#2B9ED8;" width="93.091" height="10.343"/> </g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg> <span class="inf">معرف المدونه</span> </span> <data>'+info_id+'</data> </div><div class="info"> <span> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 473.931 473.931" style="enable-background:new 0 0 512 512;width: 20px;height: 15px;margin-top: 5px;" xml:space="preserve"> <circle style="fill:#D7DABA;" cx="236.966" cy="236.966" r="236.966"/> <path style="fill:#6E4095;" d="M144.398,93.791c-8.827,0-15.981,7.154-15.981,15.981v255.757c0,8.827,7.154,15.981,15.981,15.981H328.22c8.827,0,15.981-7.154,15.981-15.981V167.814l-77.05-74.023H144.398z"/> <g> <path style="fill:#59337F;" d="M344.201,167.814h-61.066c-8.827,0-15.981-7.154-15.981-15.981V93.791L344.201,167.814z"/> <path style="fill:#59337F;" d="M263.966,271.772c0,10.189-8.258,18.447-18.439,18.447H110.876c-10.189,0-18.439-8.258-18.439-18.447v-56.351c0-10.189,8.251-18.443,18.439-18.443h134.651c10.181,0,18.439,8.254,18.439,18.443V271.772z"/> </g> <g> <path style="fill:#FFFFFF;" d="M135.774,230.736v13.149l14.911-15.551c0.715-0.752,1.325-1.306,1.83-1.661c0.501-0.359,1.171-0.539,2.006-0.539c1.093,0,1.972,0.318,2.649,0.958c0.674,0.64,1.01,1.418,1.01,2.339c0,1.108-0.569,2.208-1.714,3.3l-9.235,8.748l10.642,15.244c0.748,1.059,1.313,1.983,1.688,2.776s0.561,1.564,0.561,2.316c0,0.834-0.329,1.56-0.988,2.174c-0.655,0.614-1.545,0.921-2.672,0.921c-1.055,0-1.92-0.228-2.582-0.677c-0.662-0.449-1.227-1.051-1.688-1.804c-0.46-0.752-0.868-1.433-1.227-2.047l-8.976-13.811l-6.215,5.961v7.749c0,1.568-0.359,2.732-1.074,3.491c-0.715,0.76-1.639,1.138-2.761,1.138c-0.647,0-1.272-0.168-1.867-0.513c-0.595-0.344-1.055-0.801-1.381-1.381c-0.236-0.475-0.385-1.033-0.434-1.661c-0.049-0.629-0.079-1.545-0.079-2.735v-27.88c0-1.534,0.337-2.687,1.014-3.454c0.674-0.767,1.59-1.152,2.746-1.152c1.145,0,2.069,0.382,2.776,1.137C135.418,228.03,135.774,229.187,135.774,230.736z"/> <path style="fill:#FFFFFF;" d="M191.612,232.629h-17.111v9.208h15.757c1.16,0,2.024,0.258,2.593,0.778c0.572,0.52,0.857,1.205,0.857,2.058c0,0.853-0.281,1.549-0.846,2.084c-0.565,0.535-1.433,0.804-2.608,0.804h-15.757v10.668h17.699c1.194,0,2.095,0.277,2.698,0.831c0.606,0.554,0.909,1.291,0.909,2.211c0,0.887-0.303,1.609-0.909,2.163c-0.602,0.554-1.5,0.831-2.698,0.831h-20.643c-1.654,0-2.844-0.367-3.57-1.1c-0.722-0.733-1.085-1.92-1.085-3.555v-28.183c0-1.093,0.161-1.983,0.486-2.672s0.834-1.194,1.519-1.508c0.696-0.314,1.575-0.471,2.649-0.471h20.052c1.209,0,2.107,0.269,2.702,0.804c0.584,0.539,0.879,1.242,0.879,2.11c0,0.887-0.296,1.598-0.879,2.137C193.718,232.36,192.82,232.629,191.612,232.629z"/> <path style="fill:#FFFFFF;" d="M210.208,260.281v-11.895l-9.156-14.196c-0.801-1.28-1.366-2.275-1.703-2.993c-0.329-0.715-0.498-1.34-0.498-1.867c0-0.868,0.337-1.62,1.01-2.253c0.677-0.629,1.504-0.947,2.496-0.947c1.04,0,1.83,0.296,2.365,0.883c0.543,0.587,1.343,1.762,2.417,3.517l7.008,11.382l7.087-11.382c0.427-0.7,0.786-1.287,1.074-1.766c0.288-0.479,0.61-0.924,0.962-1.343c0.348-0.419,0.733-0.737,1.164-0.958c0.43-0.221,0.947-0.333,1.56-0.333c0.954,0,1.751,0.311,2.395,0.935c0.636,0.625,0.958,1.343,0.958,2.163c0,0.666-0.161,1.328-0.486,1.994c-0.326,0.666-0.876,1.587-1.661,2.761l-9.388,14.402v11.895c0,1.553-0.359,2.713-1.074,3.48c-0.715,0.767-1.631,1.152-2.735,1.152c-1.126,0-2.039-0.382-2.735-1.137C210.571,263.02,210.208,261.848,210.208,260.281z"/> </g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg> <span class="inf">كود التفعيل</span> </span> <data readonly="readonly">'+system_encode(info_ky)+'</data> </div><div class="info"> <span> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;width: 20px;height: 15px;margin-top: 5px;" xml:space="preserve"> <g> <circle style="fill:#29ABE2;" cx="236.805" cy="127.857" r="117.658"/> <path style="fill:#29ABE2;" d="M400.386,318.357c-40.29-44.716-98.647-72.835-163.577-72.835c-121.571,0-220.125,98.553-220.125,220.125h313.895c-11.771-15.428-18.767-34.695-18.767-55.599C311.812,360.44,351.185,320.034,400.386,318.357z"/> </g> <path style="fill:#BDCCD4;" d="M403.564,318.297c-1.065,0-2.122,0.024-3.179,0.061c-49.201,1.676-88.574,42.083-88.574,91.692c0,20.903,6.996,40.171,18.767,55.599c16.763,21.97,43.217,36.152,72.987,36.152c50.674,0,91.752-41.078,91.752-91.752S454.238,318.297,403.564,318.297z"/> <path d="M138.43,300.637c-44.199,26.405-76.418,70.135-88.394,119.975c-1.317,5.477,2.057,10.984,7.534,12.3c0.801,0.193,1.602,0.285,2.392,0.285c4.606,0,8.785-3.143,9.909-7.819c10.703-44.538,39.505-83.622,79.021-107.23c4.835-2.888,6.414-9.151,3.525-13.986C149.526,299.325,143.264,297.747,138.43,300.637z"/> <path d="M236.809,273.563c-15.038,0-30.016,1.745-44.517,5.187c-5.481,1.3-8.869,6.798-7.568,12.279c1.113,4.69,5.296,7.846,9.915,7.846c0.78,0,1.572-0.09,2.363-0.278c12.961-3.076,26.354-4.636,39.807-4.636c5.633,0,10.199-4.566,10.199-10.199S242.442,273.563,236.809,273.563z"/> <path d="M404.816,308.113c-1.685-1.797-3.393-3.579-5.143-5.329c-29.761-29.762-66.236-50.37-106.007-60.423c42.048-20.964,71.004-64.411,71.004-114.5C364.669,57.358,307.311,0,236.809,0S108.948,57.358,108.948,127.86c0,50.089,28.957,93.536,71.004,114.5c-39.771,10.053-76.245,30.661-106.007,60.423c-43.502,43.502-67.46,101.341-67.46,162.864c0,5.633,4.566,10.199,10.199,10.199h309.072C344.472,497.944,372.406,512,403.564,512c56.216,0,101.951-45.735,101.951-101.951C505.515,354.251,460.456,308.787,404.816,308.113z M129.346,127.86c0-59.254,48.208-107.462,107.463-107.462S344.271,68.606,344.271,127.86s-48.208,107.463-107.462,107.463S129.346,187.116,129.346,127.86z M27.128,455.448c5.338-111.036,97.347-199.727,209.681-199.727c54.695,0,104.564,21.035,141.963,55.431c-44.274,11.103-77.159,51.23-77.159,98.897c0,16.302,3.852,31.72,10.686,45.4H27.128z M403.564,491.602c-44.968,0-81.553-36.585-81.553-81.553s36.585-81.553,81.553-81.553s81.553,36.585,81.553,81.553S448.532,491.602,403.564,491.602z"/> <path d="M424.115,371.689c-3.983-3.983-10.441-3.983-14.425,0c-3.983,3.983-3.983,10.441,0,14.425l15.584,15.584h-63.457c-5.633,0-10.199,4.566-10.199,10.199c0,5.633,4.566,10.199,10.199,10.199h63.231l-15.358,15.358c-3.983,3.983-3.984,10.441,0,14.424c1.992,1.992,4.602,2.987,7.212,2.987s5.221-0.996,7.212-2.987l32.882-32.882c1.912-1.912,2.987-4.507,2.987-7.212s-1.075-5.3-2.987-7.212L424.115,371.689z"/> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg> <span class="inf">طريقة الشراء</span> </span> <data>'+info_pay+'</data> </div><h4 class="n2"> حمل قالبك الان . كن امينا على القالب ولا تقوم بارساله لغيرك <hr> <span class="ID"> <data type="Blogid"> <div class="n3"><a href="'+info_v+'" class="n4">تحميل</a></div></data> </span> </h4> </div><div class="n3"><button class="n4" id="log-outt">تسجيل الخروج</button></div></div></div>';
if (window.location.pathname == page$name ){
$('head').find('title').text(tt);
}
$('#get-data').append(cc); 
history.pushState(null, "page 2", "?type=account");
}
else if(input_mail !== info_mil){
  $("#get_data").addClass("lading"); 
  setInterval(function () {
  $("#get_data").removeClass("lading");

},800); 
  $("#get-data span.wrng-msg").css('display','block');
  $("#get-data span.wrng-msg").text('البريد الالكتروني ( '+input_mail+' ) غير موجود');
}
}//for 
$("#log-outt").click(function(){
localStorage.removeItem('login_db');
$(elemnt).append(htmll);
$("#info_agnt2").css('display','none');
window.location.reload();
});
});
},//succ
 });//ajex  
} 
$( "input.input_mail" ).focus(function() {
$("input.input_mail").removeClass("Animat-shadowPulse");
});
});//click 
   }
});
function system_encode(e,t=1){for(encoded=escape(e),i=1;i<=t;i++)encoded=strtr(btoa(encoded));return encoded}function system_decode(e,t=1){for(decoded=e,i=1;i<=t;i++)decoded=atob(strtr(decoded));return unescape(decoded)}function strtr(e,t="ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210+/",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"){var o,n,i,s,c,d,f="",h=0,u=0,a=[],p=[],b="",g=!1;if("object"==typeof t){for(f in c=this.ini_set("phpjs.strictForIn",!1),t=this.krsort(t),this.ini_set("phpjs.strictForIn",c),t)t.hasOwnProperty(f)&&(a.push(f),p.push(t[f]));t=a,r=p}for(o=e.length,n=t.length,i="string"==typeof t,s="string"==typeof r,h=0;h<o;h++){if(g=!1,i){for(d=e.charAt(h),u=0;u<n;u++)if(d==t.charAt(u)){g=!0;break}}else for(u=0;u<n;u++)if(e.substr(h,t[u].length)==t[u]){g=!0,h=h+t[u].length-1;break}b+=g?s?r.charAt(u):r[u]:e.charAt(h)}return b}

${decodeURIComponent("%2F%2F%5D%5D%3E")}
</scr` + `ipt> </b:if></b:includable>
        <b:includable id='content'/>
      </b:widget>
    </b:section>
`;
    if (a == "get") {
        return code;
    } else {
        copy_text(code, "تم نسخ كود حماية اسكربت بلوجر بنجاح");
    }

}


function get_blogger_code(a = "get") {
code = `<script type='javascript/text' src='https://code.jquery.com/jquery-3.6.1.min.js'/>
<b:section class='license' id='منطقة التفعيل' showaddelement='no'>
 <b:widget id='HTML5' locked='true' title='كود التفعيل' type='HTML' visible='true'> 
<b:widget-settings>
 <b:widget-setting name='content'/> 
</b:widget-settings> 
<b:includable id='main'> 
<div class='widget-content'> 
<scr` + `ipt>    
var key = "<data:content/>" 
</scr` + `ipt> 
</div> 
<div id='my-right'/>
</b:includable> 
</b:widget> 
</b:section>
<scr` + `ipt>${decodeURIComponent("%2F%2F%3C!%5BCDATA%5B")} 
const blog_id  = false;
function get_blog_id_ajax() {
    returnn = false;
    $.ajax({
        dataType: "jsonp",
        url: '/feeds/posts/summary?max-results=0&amp;alt=json',
        async: false,
        method: "GET",
        dataType: "jsonp",
        success: function (data) {
            returnn = /blog-(.*)/gm.exec(data.feed.id.$t)[1];
        }
    });
    return returnn;
}
if (blog_id  == false) {
    if (document.readyState === "complete" || document.readyState === "loaded") {
        if (typeof _WidgetManager !== "undefined") {
            var blog_data = _WidgetManager._GetAllData();
            const blog_id = blog_data.blog.blogId;
            valid_website_with_id(blog_id);
        } else {
            const blog_id = get_blog_id_ajax();
            valid_website_with_id(blog_id);
        }
    } else {
        document.addEventListener("DOMContentLoaded", function () {
            if (typeof _WidgetManager !== "undefined") {
                var blog_data = _WidgetManager._GetAllData();
                const blog_id = blog_data.blog.blogId;
                valid_website_with_id(blog_id)
            } else {
                const blog_id = get_blog_id_ajax();
                valid_website_with_id(blog_id);
            }
        }, false);
    }
}
function valid_website_with_id(blog_id){
const blocked_html = \`${blocked_html_code.replace("fixed_token","blog_id")}\`;
console.group("%c${selected_table}", "font-weight:bold;color:#d24949;font-family:Tahoma;font-size:18px;");console.log("» Homepage      : ${blog_hostname}");console.log("» Designed by   : ${g_username}");console.log("» Language      : ${g_lang}");console.log("» Email         : ${g_email}");console.log("» Active Number : ${Math.floor(Math.random() * 12 * 10 * 34567654323456)}");console.groupEnd();
    $.ajax({
        dataType: "json",
        url: "https://www.blogger.com/feeds/${blog_id}/posts/default/${selected_table_id}?alt=json-in-script",
        method: "GET",
        dataType: "jsonp",
        success: function (data) {
            can_use_this_product = false;
            if (blog_id !== false) {
                try {
                    ids_array = JSON.parse(system_decode(data.entry.content.$t.replace(/(${decodeURIComponent('%5Cr%5Cn|%5Cn|%5Cr')})/gm,"")));
                } catch (e) {
                    document.querySelector('html').innerHTML = blocked_html;
                }
                if (Array.isArray(ids_array)) {
                    for (i = 0; i < ids_array.length; i++) {
                        if (ids_array[i].custom_id == blog_id) {
                            if (ids_array[i].active_status == true) {
							if (ids_array[i].copyicon == 1) {$("#my-right").prepend('<a rel="nofollow" class="c-cred" href="https://${blog_hostname}" target="_blank"><span>bt</span><span>bt</span></a><style type="text/css">a.c-cred{margin-top:-3px;border-radius:5px;background-color:rgba(0,0,0,0.1);width:30px;height:30px;position:relative;overflow:hidden;transition:.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)}.rtl a.c-cred{float:right;margin-left:15px;margin-right:0px}.ltr a.c-cred{float:left;margin-right:15px;margin-left:0px}a.c-cred span:first-child{position:absolute;font-size:26px;color:#0065cc;top:0px;transition: .8s cubic-bezier(0.68, -0.55, 0.27, 1.55);}a.c-cred span:last-child{position:absolute;font-size:30px;top:0px;color:#FFF;transition: .8s cubic-bezier(0.68, -0.55, 0.27, 1.55);}.rtl a.c-cred span:first-child{right:5px}.ltr a.c-cred span:first-child{left:2px}.rtl a.c-cred span:last-child{right:45px}.ltr a.c-cred span:last-child{left:45px}a.c-cred:hover{border-radius:100px;width:80px;background-color:#9e2f5e}.rtl a.c-cred:hover span:first-child{right:-35px}.rtl a.c-cred:hover span:last-child{right:25px}.ltr a.c-cred:hover span:first-child{left:-35px}.ltr a.c-cred:hover span:last-child{left:15px}</style>'), $("#my-right").addClass("copyright"), setInterval((function () {$(".copyright, .c-cred, a.c-cred, a.c-cred span, #my-right").each((function () {(!$("body").hasClass("error_page") && "visible" != $(this).css("visibility") || $(this).css("opacity") < 1 || $(this).css("z-index") < 1 || "block" != $(this).css("display") && "inline" != $(this).css("display") || 2 !== $(".c-cred span").length || -1 == $(".c-cred").attr("href").indexOf("https://${blog_hostname}") || -1 == $(".c-cred span:first-child").text().indexOf("bt") || -1 == $(".c-cred span:last-child").text().indexOf("bt")) && $("html").html(blocked_html)}))}), 10);}
                            if (ids_array[i].key == system_decode(key)) {
                                can_use_this_product = true;
                           		 }
                       		 }
                        }
                    }
                }
            }
            if (!can_use_this_product) {
                document.querySelector('html').innerHTML = blocked_html;
            }
        }, error: function (xhr, status) {
            document.querySelector('html').innerHTML = blocked_html;
        }
    });
}
function system_decode(e,t=1){for(decoded=e,i=1;i<=t;i++)decoded=atob(strtr(decoded));return unescape(decoded)}function strtr(e,t="ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210+/",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"){var o,n,i,s,c,d,f="",h=0,u=0,a=[],p=[],b="",g=!1;if("object"==typeof t){for(f in c=this.ini_set("phpjs.strictForIn",!1),t=this.krsort(t),this.ini_set("phpjs.strictForIn",c),t)t.hasOwnProperty(f)&&(a.push(f),p.push(t[f]));t=a,r=p}for(o=e.length,n=t.length,i="string"==typeof t,s="string"==typeof r,h=0;h<o;h++){if(g=!1,i){for(d=e.charAt(h),u=0;u<n;u++)if(d==t.charAt(u)){g=!0;break}}else for(u=0;u<n;u++)if(e.substr(h,t[u].length)==t[u]){g=!0,h=h+t[u].length-1;break}b+=g?s?r.charAt(u):r[u]:e.charAt(h)}return b};
${decodeURIComponent("%2F%2F%5D%5D%3E")}</scr` + `ipt>`;
    if (a == "get") {
        return code;
    } else {
        copy_text(code, "تم نسخ كود حماية اسكربت بلوجر بنجاح");
    }

}

function get_js_code(a = "get") {

    code = `<scr` + `ipt>
    var fixed_token = new URL(window.location.href).hostname;
    const blocked_html = \`${blocked_html_code}\`;
console.group("%c${selected_table}", "font-weight:bold;color:#d24949;font-family:Tahoma;font-size:18px;");console.log("» Homepage      : ${blog_hostname}");console.log("» Designed by   : ${g_username}");console.log("» Language      : ${g_lang}");console.log("» Email         : ${g_email}");console.log("» Active Number : ${Math.floor(Math.random() * 12 * 10 * 34567654323456)}");console.groupEnd();
    $.ajax({
        dataType: "json",
        url: "https://www.blogger.com/feeds/${blog_id}/posts/default/${selected_table_id}?alt=json-in-script",
        method: "GET",
        dataType: "jsonp",
        success: function (data) {
            can_use_this_product = false;
            if (fixed_token !== false) {
                try {
                    ids_array = JSON.parse(system_decode(data.entry.content.$t.replace(/(${decodeURIComponent('%5Cr%5Cn|%5Cn|%5Cr')})/gm, "")));
                } catch (e) {
                    document.write(blocked_html);
                }
                if (Array.isArray(ids_array)) {
                    for (i = 0; i < ids_array.length; i++) {
                        if (ids_array[i].custom_id == fixed_token) {
                            if (ids_array[i].active_status == true) {
                                can_use_this_product = true;
                            }
                        }
                    }
                }
            }
            if (!can_use_this_product) {
                document.write(blocked_html);
            }
        }, error: function (xhr, status) {
            document.write(blocked_html);
        }
    });
    function system_decode(e,t=1){for(decoded=e,i=1;i<=t;i++)decoded=atob(strtr(decoded));return unescape(decoded)}function strtr(e,t="ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210+/",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"){var o,n,i,s,c,d,f="",h=0,u=0,a=[],p=[],b="",g=!1;if("object"==typeof t){for(f in c=this.ini_set("phpjs.strictForIn",!1),t=this.krsort(t),this.ini_set("phpjs.strictForIn",c),t)t.hasOwnProperty(f)&&(a.push(f),p.push(t[f]));t=a,r=p}for(o=e.length,n=t.length,i="string"==typeof t,s="string"==typeof r,h=0;h<o;h++){if(g=!1,i){for(d=e.charAt(h),u=0;u<n;u++)if(d==t.charAt(u)){g=!0;break}}else for(u=0;u<n;u++)if(e.substr(h,t[u].length)==t[u]){g=!0,h=h+t[u].length-1;break}b+=g?s?r.charAt(u):r[u]:e.charAt(h)}return b}
</scr` + `ipt>`;
    if (a == "get") {
        return code;
    } else {
        copy_text(code, "تم نسخ كود حماية اسكربت الjavascript بنجاح");
    }
}

function get_php_code(a = "get") {
    code = `$fixed_token = $_SERVER['HTTP_HOST'];
$guard_file = @file_get_contents("https://www.blogger.com/feeds/${blog_id}/posts/default/${selected_table_id}?alt=json");
$can_use_this_product = false;
if (strlen($guard_file) > 0 && $guard_file !== "Invalid entry id specified") {
    $guard_file = json_decode($guard_file);
    if ($fixed_token !== false) {
        $ids_array = json_decode(system_decode(preg_replace('/(${decodeURIComponent('%5Cr%5Cn|%5Cn|%5Cr')})/m', "", $guard_file->entry->content->{'$t'})));
        if (is_array($ids_array)) {
            for ($i = 0; $i < count($ids_array); $i++) {
                if ($ids_array[$i]->custom_id == $fixed_token) {
                    if ($ids_array[$i]->active_status == true) {
                        $can_use_this_product = true;
                    } 
                } 
            }
        }
    }
}
if (!$can_use_this_product) {
    echo "${blocked_html_code.replaceAll("`+`",'')}";
console.group("%c${selected_table}", "font-weight:bold;color:#d24949;font-family:Tahoma;font-size:18px;");console.log("» Homepage      : ${blog_hostname}");console.log("» Designed by   : ${g_username}");console.log("» Language      : ${g_lang}");console.log("» Email         : ${g_email}");console.log("» Active Number : ${Math.floor(Math.random() * 12 * 10 * 34567654323456)}");console.groupEnd();
    exit();
}
function system_decode($txt,$num=1) {
    $default = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    $custom  = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210+/";
    $decoded = htmlspecialchars(urldecode($txt));
    for ($i = 1; $i <= $num; $i++) {
        $decoded = base64_decode(strtr($decoded, $custom, $default));
    }
    return urldecode($decoded);
}`;
    if (a == "get") {
        return code;
    } else {
        copy_text(code, "تم نسخ كود حماية اسكربت الphp بنجاح");
    }
}

function copy_text(text, msg = "") {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val(text);
    $temp.select();
    $temp[0].setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText($temp[0].value);
    $temp.remove();
    if (msg !== "") {

        Toastify({
            text: `<i class="fas fa-check fa-lg"></i> ${msg}`,
            escapeMarkup: false,
            className: 'bg-success bg-gradient',
            duration: 3000,
            newWindow: true,
            close: false,
            gravity: "bottom",
            position: "left",
            stopOnFocus: true,
        }).showToast();
    }

}


// CopyRight V2



$("button#gn-code-actv").click((() => {
        var e = document.querySelector(".table-gn-agent #name-agent2").value,
            n = document.querySelector(".table-gn-agent #link-agent1").value,
            i = document.querySelector(".table-gn-agent #Blog_id-agent2").value,
            o = document.querySelector(".table-gn-agent #page_id-agent1").value,
            a = document.querySelector(".table-gn-agent #page-cnt2").value,
            q = document.querySelector(".table-gn-agent #name-agent3").value,
            z = document.querySelector(".table-gn-agent #linkprofile").value,
            r = document.querySelector(".table-gn-agent #color-agent1").value;
    if(e == "" || n == "" || i == "" || o == "" || a == "" || r == ""){
        Toastify({
                text: `<i class="fas fa-info-circle fa-lg"></i> تاكد انك قد كتبت كل المعلومات المطلوبه`,
                escapeMarkup:false,
                className: 'bg-danger bg-gradient',
                duration: 6000,
                newWindow: true,
                close: false,
                gravity: "bottom",
                position: "left", 
                stopOnFocus: true,
                newWindow:false
            }).showToast();}
        var blocked_html_code_v2 = "<!doctype html><html lang='ar' dir='rtl'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width,initial-scale=1'><title>خطاء...!!!</title><style>@import url(https://fonts.googleapis.com/css2?family=Tajawal:wght@700&display=swap);h4{background:#3d55ef5e;padding:10px}*{border-radius:15px;font-family:Tajawal,sans-serif}span.ID{color:#0e8500}.onwe{font:14px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;position:fixed;overflow-x:hidden;background:#f8f8f8;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:1;text-align:center}.nnvbada{position:relative;padding:2em;width:80%;max-width:600px;min-width:200px;margin:5em auto;background:#fff;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.iconcpby{color:#fff;position:absolute;margin:0 auto;left:0;right:0;top:-25px;width:50px;height:50px;line-height:50px;border-radius:50%;-webkit-border-radius:50%;z-index:9;background:#0033a9;padding:0;text-align:center;box-shadow:0 5px 15px rgba(0,0,0,.26);-webkit-box-shadow:0 5px 15px rgba(0,0,0,.26);font-size:2em;font-family:arial;text-decoration:none}.n1{text-align:center;font-size:26px;margin:30px 0 15px;line-height:normal}.n2{text-align:center;font-size:26px;margin:30px 0 15px;line-height:normal}.n3{text-align:center;overflow:hidden}.n4{color:#fff;background:#0033a9;text-decoration:none;display:block;max-width:180px;padding:10px 12px;margin:5px auto;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:0;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}</style></head><body><div class='onwe'><div class='nnvbada'><div><div class='iconcpby'><span>©</span></div><h4 class='n1'>عفواً..!!</h4></div><div style='position:relative;padding:5px;text-align:right;font-size:14px'><p>لا يمكنك إستخدام هذا القالب .. هذا التوقف يحدث تلقائياً بسبب مايلي ..</p><p><span style='font-size:17px;font-weight:700;color:#0033a9'>1</span>-العبث بحقوق ملكية التصميم!..كإخفاء توقيع المصمم</p><p><span style='font-size:17px;font-weight:700;color:#0033a9'>2</span>-لا تملك رخصة؟ .. للحصول على تفعيل القالب يرجى<a href='"+n+"' style='color:#0033a9;font-size:14px;font-weight:400'>طلب رخصة</a></p><p><span style='font-size:17px;font-weight:700;color:#0033a9'>3</span>-تملك رخصة ومع ذلك لا تستطيع إستخدام هذا القالب .. يرجى التواصل بـ<a href='"+n+"' style='color:#0033a9;font-size:14px;font-weight:400'>فريق الدعم</a></p></div><div class='n3'><a href='"+n+"' class='n4'>الصفحة الرسمية</a></div></div></div></body></html>";


        $("textarea.hidee").css("display", "block"), 
        $("textarea.hidee1").css("display", "block"), 
		$("textarea.hideee").css("display", "block"), 
		$("textarea.jquareeee").css("display", "block"), 
		$("textarea.copycode").css("display", "block"); 
		$("textarea.hideee").text(`
<b:section class='license' id='license' name='تفعيل القالب' showaddelement='false'>
      <b:widget id='HTML54' locked='true' title='License' type='HTML' version='2' visible='true'>
        <b:widget-settings>
          <b:widget-setting name='content'></b:widget-setting>
        </b:widget-settings>
        <b:includable id='main'>
		<scr` + `ipt>    
			var key = "<data:content/>" 
		</scr` + `ipt>
		</b:includable>
      </b:widget>
   </b:section>`), 
  $("textarea.hidee").text(`<scr` + `ipt>${decodeURIComponent("%2F%2F%3C!%5BCDATA%5B")} 
const blog_id  = false;
function get_blog_id_ajax() {
    returnn = false;
    $.ajax({
        dataType: "jsonp",
        url: '/feeds/posts/summary?max-results=0&amp;alt=json',
        async: false,
        method: "GET",
        dataType: "jsonp",
        success: function (data) {
            returnn = /blog-(.*)/gm.exec(data.feed.id.$t)[1];
        }
    });
    return returnn;
}
if (blog_id  == false) {
    if (document.readyState === "complete" || document.readyState === "loaded") {
        if (typeof _WidgetManager !== "undefined") {
            var blog_data = _WidgetManager._GetAllData();
            const blog_id = blog_data.blog.blogId;
            valid_website_with_id(blog_id);
        } else {
            const blog_id = get_blog_id_ajax();
            valid_website_with_id(blog_id);
        }
    } else {
        document.addEventListener("DOMContentLoaded", function () {
            if (typeof _WidgetManager !== "undefined") {
                var blog_data = _WidgetManager._GetAllData();
                const blog_id = blog_data.blog.blogId;
                valid_website_with_id(blog_id)
            } else {
                const blog_id = get_blog_id_ajax();
                valid_website_with_id(blog_id);
            }
        }, false);
    }
}
function valid_website_with_id(blog_id){
const blocked_html = \`${blocked_html_code_v2.replace("fixed_token","blog_id")}\`;
console.group("%c${selected_table}", "font-weight:bold;color:#d24949;font-family:Tahoma;font-size:18px;");console.log("» Homepage      : ${n}");console.log("» Designed by   : ${e}");console.log("» Language      : ${g_lang}");console.log("» Email         : ${g_email}");console.log("» Active Number : ${Math.floor(Math.random() * 12 * 10 * 34567654323456)}");console.groupEnd();
    $.ajax({
        dataType: "json",
        url: "https://www.blogger.com/feeds/${blog_id}/posts/default/${selected_table_id}?alt=json-in-script",
        method: "GET",
        dataType: "jsonp",
        success: function (data) {
            can_use_this_product = false;
            if (blog_id !== false) {
                try {
                    ids_array = JSON.parse(system_decode(data.entry.content.$t.replace(/(${decodeURIComponent('%5Cr%5Cn|%5Cn|%5Cr')})/gm,"")));
                } catch (e) {
                    document.querySelector('html').innerHTML = blocked_html;
                }
                if (Array.isArray(ids_array)) {
                    for (i = 0; i < ids_array.length; i++) {
                        if (ids_array[i].custom_id == blog_id) {
                            if (ids_array[i].active_status == true) {
							if (ids_array[i].copyicon == 1) {$("#my-right").prepend('<a rel="nofollow" class="c-cred" href="${n}" target="_blank"><span>${i}</span><span>${o}</span></a><style type="text/css">a.c-cred{margin-top:-3px;border-radius:5px;background-color:rgba(0,0,0,0.1);width:30px;height:30px;position:relative;overflow:hidden;transition:.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)}.rtl a.c-cred{float:right;margin-left:15px;margin-right:0px}.ltr a.c-cred{float:left;margin-right:15px;margin-left:0px}a.c-cred span:first-child{position:absolute;font-size:26px;color:#0065cc;top:0px;transition: .8s cubic-bezier(0.68, -0.55, 0.27, 1.55);}a.c-cred span:last-child{position:absolute;font-size:30px;top:0px;color:#FFF;transition: .8s cubic-bezier(0.68, -0.55, 0.27, 1.55);}.rtl a.c-cred span:first-child{right:5px}.ltr a.c-cred span:first-child{left:2px}.rtl a.c-cred span:last-child{right:45px}.ltr a.c-cred span:last-child{left:45px}a.c-cred:hover{border-radius:100px;width:80px;background-color:#9e2f5e}.rtl a.c-cred:hover span:first-child{right:-35px}.rtl a.c-cred:hover span:last-child{right:25px}.ltr a.c-cred:hover span:first-child{left:-35px}.ltr a.c-cred:hover span:last-child{left:15px}</style>'), $("#my-right").addClass("copyright"), setInterval((function () {$(".copyright, .c-cred, a.c-cred, a.c-cred span, #my-right").each((function () {(!$("body").hasClass("error_page") && "visible" != $(this).css("visibility") || $(this).css("opacity") < 1 || $(this).css("z-index") < 1 || "block" != $(this).css("display") && "inline" != $(this).css("display") || 2 !== $(".c-cred span").length || -1 == $(".c-cred").attr("href").indexOf("${n}") || -1 == $(".c-cred span:first-child").text().indexOf("${i}") || -1 == $(".c-cred span:last-child").text().indexOf("${o}")) && $("html").html(blocked_html)}))}), 10);}
                            if (ids_array[i].key == system_decode(key)) {
                                can_use_this_product = true;
                           		 }
                       		 }
                        }
                    }
                }
            }
            if (!can_use_this_product) {
                document.querySelector('html').innerHTML = blocked_html;
            }
        }, error: function (xhr, status) {
            document.querySelector('html').innerHTML = blocked_html;
        }
    });
}
function system_decode(e,t=1){for(decoded=e,i=1;i<=t;i++)decoded=atob(strtr(decoded));return unescape(decoded)}function strtr(e,t="ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210+/",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"){var o,n,i,s,c,d,f="",h=0,u=0,a=[],p=[],b="",g=!1;if("object"==typeof t){for(f in c=this.ini_set("phpjs.strictForIn",!1),t=this.krsort(t),this.ini_set("phpjs.strictForIn",c),t)t.hasOwnProperty(f)&&(a.push(f),p.push(t[f]));t=a,r=p}for(o=e.length,n=t.length,i="string"==typeof t,s="string"==typeof r,h=0;h<o;h++){if(g=!1,i){for(d=e.charAt(h),u=0;u<n;u++)if(d==t.charAt(u)){g=!0;break}}else for(u=0;u<n;u++)if(e.substr(h,t[u].length)==t[u]){g=!0,h=h+t[u].length-1;break}b+=g?s?r.charAt(u):r[u]:e.charAt(h)}return b};
${decodeURIComponent("%2F%2F%5D%5D%3E")}</scr` + `ipt>`)
  $("textarea.hidee1").text(`<scr` + `ipt>${decodeURIComponent("%2F%2F%3C!%5BCDATA%5B")} 
const blog_id  = false;
function get_blog_id_ajax() {
    returnn = false;
    $.ajax({
        dataType: "jsonp",
        url: '/feeds/posts/summary?max-results=0&amp;alt=json',
        async: false,
        method: "GET",
        dataType: "jsonp",
        success: function (data) {
            returnn = /blog-(.*)/gm.exec(data.feed.id.$t)[1];
        }
    });
    return returnn;
}
if (blog_id  == false) {
    if (document.readyState === "complete" || document.readyState === "loaded") {
        if (typeof _WidgetManager !== "undefined") {
            var blog_data = _WidgetManager._GetAllData();
            const blog_id = blog_data.blog.blogId;
            valid_website_with_id(blog_id);
        } else {
            const blog_id = get_blog_id_ajax();
            valid_website_with_id(blog_id);
        }
    } else {
        document.addEventListener("DOMContentLoaded", function () {
            if (typeof _WidgetManager !== "undefined") {
                var blog_data = _WidgetManager._GetAllData();
                const blog_id = blog_data.blog.blogId;
                valid_website_with_id(blog_id)
            } else {
                const blog_id = get_blog_id_ajax();
                valid_website_with_id(blog_id);
            }
        }, false);
    }
}
function valid_website_with_id(blog_id){
const blocked_html = \`${blocked_html_code_v2.replace("fixed_token","blog_id")}\`;
console.group("%c${selected_table}", "font-weight:bold;color:#d24949;font-family:Tahoma;font-size:18px;");console.log("» Homepage      : ${n}");console.log("» Designed by   : ${e}");console.log("» Language      : ${g_lang}");console.log("» Email         : ${g_email}");console.log("» Active Number : ${Math.floor(Math.random() * 12 * 10 * 34567654323456)}");console.groupEnd();
    $.ajax({
        dataType: "json",
        url: "https://www.blogger.com/feeds/${blog_id}/posts/default/${selected_table_id}?alt=json-in-script",
        method: "GET",
        dataType: "jsonp",
        success: function (data) {
            can_use_this_product = false;
            if (blog_id !== false) {
                try {
                    ids_array = JSON.parse(system_decode(data.entry.content.$t.replace(/(${decodeURIComponent('%5Cr%5Cn|%5Cn|%5Cr')})/gm,"")));
                } catch (e) {
                    document.querySelector('html').innerHTML = blocked_html;
                }
                if (Array.isArray(ids_array)) {
                    for (i = 0; i < ids_array.length; i++) {
                        if (ids_array[i].custom_id == blog_id) {
                            if (ids_array[i].active_status == true) {
							if (ids_array[i].copyicon == 1) {var Cont='<span>تصميم :</span><a href="${z}" target="_blank" style="text-align: center;margin: 0 10px !important;font-size: 13px !important;display: inline-block !important;padding: 0px 7px;border-radius: 5px !important;text-decoration: none !important;visibility: visible !important;opacity: 1 !important;">${q}</a>';0!==$("#my-right").length?($("#my-right").addClass("impo").append(Cont),setInterval((function(){$(".impo").each((function(){($(this).css("opacity")<1||"hidden"==$(this).css("visibility")||$(this).is(":hidden"))&&blocked_html}))}),10)):blocked_html;}
                            if (ids_array[i].key == system_decode(key)) {
                                can_use_this_product = true;
                           		 }
                       		 }
                        }
                    }
                }
            }
            if (!can_use_this_product) {
                document.querySelector('html').innerHTML = blocked_html;
            }
        }, error: function (xhr, status) {
            document.querySelector('html').innerHTML = blocked_html;
        }
    });
}
function system_decode(e,t=1){for(decoded=e,i=1;i<=t;i++)decoded=atob(strtr(decoded));return unescape(decoded)}function strtr(e,t="ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210+/",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"){var o,n,i,s,c,d,f="",h=0,u=0,a=[],p=[],b="",g=!1;if("object"==typeof t){for(f in c=this.ini_set("phpjs.strictForIn",!1),t=this.krsort(t),this.ini_set("phpjs.strictForIn",c),t)t.hasOwnProperty(f)&&(a.push(f),p.push(t[f]));t=a,r=p}for(o=e.length,n=t.length,i="string"==typeof t,s="string"==typeof r,h=0;h<o;h++){if(g=!1,i){for(d=e.charAt(h),u=0;u<n;u++)if(d==t.charAt(u)){g=!0;break}}else for(u=0;u<n;u++)if(e.substr(h,t[u].length)==t[u]){g=!0,h=h+t[u].length-1;break}b+=g?s?r.charAt(u):r[u]:e.charAt(h)}return b};
${decodeURIComponent("%2F%2F%5D%5D%3E")}</scr` + `ipt>`)
  $("textarea.jquareeee").text(`<script type='javascript/text' src='https://code.jquery.com/jquery-3.6.1.min.js'/>`)
  $("textarea.copycode").text(`<div id='my-right'/>`)

    }));

// google_auth_codes

function log_in_with_google(redrict_to = false) {
    if (redrict_to == true) {
        this_page_url = new URL(window.location.href);
        if (window.location.pathname !== "/") {
            login_link = "/p/login.html" + "?red=" + encodeURIComponent(this_page_url.pathname + this_page_url.search);
        } else {
            login_link = "/p/login.html";
        }
    } else {
        login_link = "/p/login.html";
    }
    window.location.href = login_link;
}


function get_access_token_with_refresh(g_token) {
    returned_data = false;
    if(google_client_id == "" || google_clientSecret == "" || google_api_key == ""){
        Toastify({
                text: `<i class="fas fa-info-circle fa-lg"></i> يرجي التأكد من المعرفات الاساسية لAPI google`,
                escapeMarkup:false,
                className: 'bg-danger bg-gradient',
                duration: 60000,
                newWindow: true,
                close: false,
                gravity: "bottom",
                position: "left", 
                stopOnFocus: true,
                destination: "https://blogger.com/u/0/blog/layout/" + blog_id,
                newWindow:false
            }).showToast();
            returned_data = false;
    }else{

    
        returned_data = "";
    $.ajax({
        url: "https://www.googleapis.com/oauth2/v3/token",
        type: 'POST',
        async: false,
        data: {
            'client_id': google_client_id,
            'clientSecret': google_clientSecret,
            'grant_type': 'refresh_token',
            'refresh_token': g_token
        },
        success: function(data) {
            returned_data = data.access_token;
        }
    });
   
}
return returned_data;
}

function g_log_out() {
    $.removeCookie('g_refresh_token', {
        path: '/'
    });
    $.removeCookie('g_access_token', {
        path: '/'
    });
    loged_in_as_admin = false;
    loged_in_as_author = false;
    can_use_panel = false;
    g_auth();
}


function g_access_token() {
    if ($.cookie('g_access_token')) {
        return $.cookie('g_access_token');
    } else if ($.cookie('g_refresh_token')) {
        return get_access_token_with_refresh($.cookie('g_refresh_token'));
    } else {
        return false;
    }
}

var access_token = g_access_token();

var blogger_user_id = "";
if (access_token) {
    var g_user_data = get_user_data(access_token);
    var g_username = g_user_data.given_name;
    g_id = g_user_data.sub;
    g_picture = g_user_data.picture;
    g_picture_img_resized = g_picture.replace(/s(\d+)-c/g, "s40-c");
    g_email = g_user_data.email;
    g_lang = g_user_data.locale;
    g_loged_in = true;
    $.ajax({
        url: "https://www.googleapis.com/blogger/v3/users/self/blogs/" + blog_id,
        type: 'GET',
        async: false,
        data: {
            access_token: access_token,
            fetchUserInfo: "1"
        },
        success: function(user_blog) {
            blogger_user_id = user_blog.blog_user_info.userId;
            var num_of_posts = user_blog.blog.posts.totalItems;
            if (user_blog.blog_user_info.role == "ADMIN") {
                loged_in_as_admin = true;
                can_use_panel = true;

            } else if (user_blog.blog_user_info.role == "AUTHOR") {
                loged_in_as_author = true;
                can_use_panel = true;

            } else {
                loged_in_as_admin = false;
                loged_in_as_author = false;
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            can_use_panel = false;
        }
    });
}
if (can_use_panel == true) {
    $(".must_log_in_msg").remove();
    $(".google_user_name").text(g_username);
    $(".google_user_img").attr("src", g_picture_img_resized);
    $(".must_login").addClass("show");
    $(".can-use-panal").addClass("show");
    if (can_use_panel == true) {
        if ($(".must_admin_login").length > 0) {
            $(".must_admin_login")[0].style.setProperty('display', 'block', 'important');
        }
    }
    $(".no_has_access_msg").remove();
} else if (can_use_panel == false) {
    $(".can-use-panal").removeClass("show");
    $("#page_messages").prepend(`<div class="alert alert-danger d-flex align-items-center no_has_access_msg" role="alert"><i class="icon fas fa-ban bi flex-shrink-0 ml-2 mr-2"></i><div>ليس لدي حساب ( ${g_username} ) الصلاحية للتعديل علي هذة المدونة</div></div>`);
}


if (typeof view_is_homepage !== "undefined" && view_is_homepage == true) {
    g_auth();
}


function g_auth() {
    if (can_use_panel == false) {
        log_in_with_google(true);
    }
    access_token = g_access_token();

    if (access_token == false) {
        g_loged_in = false;
        if ($(".must_log_in_msg").length == 0) {
            $("#page_messages").prepend(`<div class="alert alert-danger d-flex align-items-center must_log_in_msg" role="alert"><i class="icon fas fa-ban bi flex-shrink-0 ml-2 mr-2"></i><div class="mou_trn">يجب عليك تسجيل الدخول بحساب جوجل المرتبط بمدونة الافلام</div></div>`);
        }
        $(".must_login").removeClass("show");
        $(".google_user_name").text("تسجيل الدخول");
        $(".google_user_img").attr("src", "https://image.flaticon.com/icons/png/128/2702/2702602.png");
        $(".can-use-panal").removeClass("show");
    } else {
        $(".must_log_in_msg").remove();
        $(".google_user_name").text(g_username);
        $(".google_user_img").attr("src", g_picture_img_resized);
        $(".must_login").addClass("show");
        if (can_use_panel == true) {
            $(".can-use-panal").addClass("show");
            if (can_use_panel == true) {
                if ($(".must_admin_login").length > 0) {
                    $(".must_admin_login")[0].style.setProperty('display', 'block', 'important');
                }
            }
            $(".no_has_access_msg").remove();
        } else if (can_use_panel == false) {
            $(".can-use-panal").removeClass("show");
            $("#page_messages").prepend(`<div class="alert alert-danger d-flex align-items-center no_has_access_msg" role="alert"><i class="icon fas fa-ban bi flex-shrink-0 ml-2 mr-2"></i><div>ليس لدي حساب ( ${g_username} ) الصلاحية للتعديل علي هذة المدونة</div></div>`);
        }
    }

    if (typeof view_is_mou_vid !== "undefined" && view_is_mou_vid == true) {
        post_actions_btns();
    }
}
// END google_auth_codes
function system_encode(e,t=1){for(encoded=escape(e),i=1;i<=t;i++)encoded=strtr(btoa(encoded));return encoded}function system_decode(e,t=1){for(decoded=e,i=1;i<=t;i++)decoded=atob(strtr(decoded));return unescape(decoded)}function strtr(e,t="ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210+/",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"){var o,n,i,s,c,d,f="",h=0,u=0,a=[],p=[],b="",g=!1;if("object"==typeof t){for(f in c=this.ini_set("phpjs.strictForIn",!1),t=this.krsort(t),this.ini_set("phpjs.strictForIn",c),t)t.hasOwnProperty(f)&&(a.push(f),p.push(t[f]));t=a,r=p}for(o=e.length,n=t.length,i="string"==typeof t,s="string"==typeof r,h=0;h<o;h++){if(g=!1,i){for(d=e.charAt(h),u=0;u<n;u++)if(d==t.charAt(u)){g=!0;break}}else for(u=0;u<n;u++)if(e.substr(h,t[u].length)==t[u]){g=!0,h=h+t[u].length-1;break}b+=g?s?r.charAt(u):r[u]:e.charAt(h)}return b}
