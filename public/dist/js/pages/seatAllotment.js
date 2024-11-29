    $(function () {
      var apiBaseUrl= '<%= process.env.apiBaseUrl %>';
      getData();
      $('#frmupdateseat').validate({
        rules: {
          examtype: {
            required: true
          },
          school: {
            required: true
          }
        },
        messages: {
          examtype: {
            required: "Please select exam type"
          },
          school: {
            required: "Please select school name"
          }
        },
        errorElement: 'span',
        errorPlacement: function (error, element) {
          error.addClass('invalid-feedback');
          element.closest('.form-group').append(error);
        },
        highlight: function (element, errorClass, validClass) {
          $(element).addClass('is-invalid');
        },
        unhighlight: function (element, errorClass, validClass) {
          $(element).removeClass('is-invalid');
        }
      });
    function getData() {
      var apiBaseUrl= '<%= process.env.apiBaseUrl %>';
      $.ajax({
        url: apiBaseUrl+"v1/auth/view-data",
        type: "get",
        headers: {
        'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijc4Nzg3ODc3ODciLCJ1c2VyTmFtZSI6Im1hbmFnZXIiLCJlbWFpbCI6Im1hbmFnZXJAcHJvZC5jb20iLCJ1c2VySWQiOiIxNWY0ZGQyYi02ZjUzLTQ1YjUtOTdjOC05YTBlOTFkYjVkNDYiLCJ1c2VyVHlwZSI6IklOVkVOVE9SWSBNQU5BR0VSIiwiaWF0IjoxNjkzMzAwNzMxfQ.9R4LQ0IYePpvVysu17bDXnlO3zqy_AiUTfEqRnfP1lM',
        'Content-Type':'application/json'
        },
        dataType: "json",
        success: function (res) {
          var html = '';
          if(res.status=="success") {
              for (var count = 0; count < res.data.examType.length; count++) {
              html += `
                    <option value="`+res.data.examType[count].id+`">`+res.data.examType[count].type+`</option>`;
              }
              $('#examtype').html(html);
              html = '';
              for (var count = 0; count < res.data.schools.length; count++) {
              html += `
                    <option value="`+res.data.schools[count].schoolId+`">`+res.data.schools[count].name+`</option>`;
              }
              $('#school').html(html);
          }
        },
        error: function(err) {
          alert('error');
        }
      });
    }
    $('#frmupdateseat').on('submit', function (event) {
        event.preventDefault();
        var apiBaseUrl= '<%= process.env.apiBaseUrl %>';
        var reqdata = {
          "serviceType": "SEATDATA",
            "examType": $('#examtype').val(),
            "school": $('#school').val(),
            "formDetails": {
                "ur": $('#ur').val(),
                "ur_f": $('#ur_f').val(),
                "ews": $('#ews').val(),
                "ews_f": $('#ews_f').val(),
                "bc": $('#bc').val(),
                "bc_f": $('#bc_f').val(),
                "ebc": $('#ebc').val(),
                "ebc_f": $('#ebc_f').val(),
                "sc": $('#sc').val(),
                "sc_f": $('#sc_f').val(),
                "st": $('#st').val(),
                "st_f": $('#st_f').val(),
                "wbc": $('#wbc').val(),
                "total": $('#total').val(),
                "bc": $('#bc').val(),
                "bc_f": $('#bc_f').val(),
                "ebc": $('#ebc').val(),
                "ebc_f": $('#ebc_f').val(),
                "vi": $('#vi').val(),
                "dd": $('#dd').val(),
                "oh": $('#oh').val(),
                "md": $('#md').val(),
                "ff": $('#ff').val()
            }
        };
        console.log(JSON.stringify(reqdata));
        console.log(json);
        // $.ajax({
        //     url: apiBaseUrl+"save-seats",
        //     method: "POST",
        //     data: $('#frmupdateseat').serialize(),
        //     dataType: "JSON",
        //     beforeSend: function () {
        //         $('#btnsubmit').attr('disabled', 'disabled');
        //     },
        //     success: function (data) {
        //         $('#btnsubmit').attr('disabled', false);
        //         if(data.status=="success"){
        //             $(document).Toasts('create', {
        //                 class: 'bg-success',
        //                 autohide: true,
        //                 delay: 2000,
        //                 title: 'Information',
        //                 body: 'Seat Allotment saved successfully.'
        //             });
        //         } else {
        //             $(document).Toasts('create', {
        //                 class: 'bg-danger',
        //                 autohide: true,
        //                 delay: 2000,
        //                 title: 'Error',
        //                 body: 'Unable to save seat allotment.'
        //             });
        //         }
        //     },
        //     error: function (data) {
        //         $('#btnsubmit').attr('disabled', false);
        //         $(document).Toasts('create', {
        //                 class: 'bg-danger',
        //                 autohide: true,
        //                 delay: 2000,
        //                 title: 'Error',
        //                 body: 'Unable to save seat allotment'
        //             });
        //     }
        // });
    });
    $('.seat').on('change',function(event){
        var total = parseInt($('#ur').val()) + parseInt($('#ur_f').val())+ parseInt($('#ews').val())+ parseInt($('#ews_f').val())+ parseInt($('#bc').val())+ parseInt($('#bc_f').val())+ parseInt($('#ebc').val())+ parseInt($('#ebc_f').val())+ parseInt($('#sc').val())+ parseInt($('#sc_f').val())+ parseInt($('#st').val())+parseInt($('#st_f').val())+ parseInt($('#wbc').val());
        $('#total').val(total);
    });
      //Initialize Select2 Elements
      $('.select2').select2()
    });