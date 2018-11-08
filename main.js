var app = new Vue({
    el: '#app',
    data: {

    },
    created: function () {
        this.callAjax();
    },
    methods: {
        callAjax: function () {
            fetch("mainjson.json", {
                method: "GET",
            }).then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            }).then(function (json) {
                app.data = json;
                console.log(app.data)
            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            });
        },
    }
});
