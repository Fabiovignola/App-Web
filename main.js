var app = new Vue({
    el: '#container',
    data: {
        divGames: "",
        divHome: "",
        divteam: "",
        divtoparti: "",
        divfecha: "",
        divredparti: "",
        divblueparti: "",
        divgreenparti: "",
        divubication: "",
        //        element.style.display = 'block'; // Show
        //        element.style.display = 'inline'; // Show
        //        element.style.display = 'inline-block'; // Show
        //        hide(document.getElementById('games'));
        //        hide(document.getElementById('team'));
        //        hide(document.getElementById('fecha'));
        //data-game//
        //targe// 
        //data-attribute
    },
    created: function () {
        //        this.callAjax();
        //        this.hidePage();
    },
    methods: {
        //        callAjax: function () {
        //            fetch("mainjson.json", {
        //                method: "GET",
        //            }).then(function (response) {
        //                if (response.ok) {
        //                    return response.json();
        //                }
        //            }).then(function (json) {
        //                app.data = json;
        //                console.log(app.data)
        //            }).catch(function (error) {
        //                console.log("Request failed:" + error.message);
        //            });
        //        },
        hidePage: function () {
            this.divHome = document.getElementById("home");
            this.divHome.style.display = 'none';

            this.divGames = document.getElementById("games");
            this.divGames.style.display = 'block';

            this.divteam = document.getElementById("team");
            this.divteam.style.display = 'none';

            this.divtoparti = document.getElementById("toparti");
            this.divtoparti.style.display = 'none';

            this.divfecha = document.getElementById("fecha");
            this.divfecha.style.display = 'none';

            this.divredparti = document.getElementById("redparti");
            this.divredparti.style.display = 'none';

            this.divblueparti = document.getElementById("blueparti");
            this.divblueparti.style.display = 'none';

            this.divgreenparti = document.getElementById("greenparti");
            this.divgreenparti.style.display = 'none';

            this.divubication = document.getElementById("ubication");
            this.divubication.style.display = 'none';
        },
    },
});
