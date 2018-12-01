var app = new Vue({
    el: '#container',
    data: {
        divGames: "",
        divHome: "",
        divteam: "",
        divtoparti: "",
        divfecha: "",
        divredparti: "",
        divubication: "",
        games: [],
        gamesOne: [],
        uOne: [],
        nTeam: [],
        ubicacion: [],
        teams: [],
        //        element.style.display = 'block'; // Show
        //        element.style.display = 'inline'; // Show
        //        element.style.display = 'inline-block'; // Show
        //        hide(document.getElementById('games'));
        //        hide(document.getElementById('team'));
        //        hide(document.getElementById('fecha'));
    },
    created: function () {
        this.callAjax();
        this.getPosts();
    },
    methods: {
        callAjax: function () {
            fetch("https://api.myjson.com/bins/1cwhvy", {
                method: "GET",
            }).then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            }).then(function (json) {
                app.data = json;
                console.log(app.data)
                app.games = json.games;
                console.log(app.games)
                app.uOne = json.ubicacion;
                app.nTeam = json.teams;
                console.log(app.nTeam)

            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            });
        },
        hidePage: function () {
            this.divHome = document.getElementById("home");
            this.divHome.style.display = 'none';

            this.divGames = document.getElementById("games");
            this.divGames.style.display = 'block';

            this.divteam = document.getElementById("team");
            this.divteam.style.display = 'none';

            this.divtoparti = document.getElementById("informa");
            this.divtoparti.style.display = 'none';

            this.divtoparti = document.getElementById("dateone");
            this.divtoparti.style.display = 'none';

            this.divfecha = document.getElementById("fecha");
            this.divfecha.style.display = 'none';

            this.divredparti = document.getElementById("redparti");
            this.divredparti.style.display = 'none';

            this.divubication = document.getElementById("ubication");
            this.divubication.style.display = 'none';

            this.divubication = document.getElementById("loginpage");
            this.divubication.style.display = 'none';
        },
        hideUbi: function () {
            this.divHome = document.getElementById("home");
            this.divHome.style.display = 'none';

            this.divGames = document.getElementById("games");
            this.divGames.style.display = 'none';

            this.divteam = document.getElementById("team");
            this.divteam.style.display = 'none';

            this.divtoparti = document.getElementById("informa");
            this.divtoparti.style.display = 'none';

            this.divtoparti = document.getElementById("dateone");
            this.divtoparti.style.display = 'none';

            this.divfecha = document.getElementById("fecha");
            this.divfecha.style.display = 'none';

            this.divredparti = document.getElementById("redparti");
            this.divredparti.style.display = 'none';

            this.divubication = document.getElementById("ubication");
            this.divubication.style.display = 'block';

            this.divubication = document.getElementById("loginpage");
            this.divubication.style.display = 'none';

        },
        hideTeam: function () {
            this.divHome = document.getElementById("home");
            this.divHome.style.display = 'none';

            this.divGames = document.getElementById("games");
            this.divGames.style.display = 'none';

            this.divteam = document.getElementById("team");
            this.divteam.style.display = 'block';

            this.divtoparti = document.getElementById("informa");
            this.divtoparti.style.display = 'none';

            this.divtoparti = document.getElementById("dateone");
            this.divtoparti.style.display = 'none';

            this.divfecha = document.getElementById("fecha");
            this.divfecha.style.display = 'none';

            this.divredparti = document.getElementById("redparti");
            this.divredparti.style.display = 'none';

            this.divubication = document.getElementById("ubication");
            this.divubication.style.display = 'none';

            this.divubication = document.getElementById("loginpage");
            this.divubication.style.display = 'none';

        },
        hideFecha: function () {
            this.divHome = document.getElementById("home");
            this.divHome.style.display = 'none';

            this.divGames = document.getElementById("games");
            this.divGames.style.display = 'none';

            this.divteam = document.getElementById("team");
            this.divteam.style.display = 'none';

            this.divtoparti = document.getElementById("informa");
            this.divtoparti.style.display = 'none';

            this.divtoparti = document.getElementById("dateone");
            this.divtoparti.style.display = 'none';

            this.divfecha = document.getElementById("fecha");
            this.divfecha.style.display = 'block';

            this.divredparti = document.getElementById("redparti");
            this.divredparti.style.display = 'none';

            this.divubication = document.getElementById("ubication");
            this.divubication.style.display = 'none';

            this.divubication = document.getElementById("loginpage");
            this.divubication.style.display = 'none';
        },
        hideCaro: function () {
            this.divHome = document.getElementById("home");
            this.divHome.style.display = 'none';

            this.divGames = document.getElementById("games");
            this.divGames.style.display = 'none';

            this.divteam = document.getElementById("team");
            this.divteam.style.display = 'none';

            this.divtoparti = document.getElementById("informa");
            this.divtoparti.style.display = 'none';

            this.divtoparti = document.getElementById("dateone");
            this.divtoparti.style.display = 'none';

            this.divfecha = document.getElementById("fecha");
            this.divfecha.style.display = 'none';

            this.divredparti = document.getElementById("redparti");
            this.divredparti.style.display = 'block';

            this.divubication = document.getElementById("ubication");
            this.divubication.style.display = 'none';

            this.divubication = document.getElementById("loginpage");
            this.divubication.style.display = 'none';

            var ev = event.target.getAttribute("data-id");
            console.log(ev);

            this.ubicacion = this.uOne[ev];
            console.log(this.ubicacion)
        },
        hidePart: function () {
            this.divHome = document.getElementById("home");
            this.divHome.style.display = 'none';

            this.divGames = document.getElementById("games");
            this.divGames.style.display = 'none';

            this.divteam = document.getElementById("team");
            this.divteam.style.display = 'none';

            this.divtoparti = document.getElementById("informa");
            this.divtoparti.style.display = 'none';

            this.divtoparti = document.getElementById("dateone");
            this.divtoparti.style.display = 'block';

            this.divfecha = document.getElementById("fecha");
            this.divfecha.style.display = 'none';

            this.divredparti = document.getElementById("redparti");
            this.divredparti.style.display = 'none';

            this.divubication = document.getElementById("ubication");
            this.divubication.style.display = 'none';

            this.divubication = document.getElementById("loginpage");
            this.divubication.style.display = 'none';

            var ev = event.target.getAttribute("data-id");
            console.log(ev);
            this.gamesOne = this.games[ev].partidos;


        },
        hideInfo: function () {
            this.divHome = document.getElementById("home");
            this.divHome.style.display = 'none';

            this.divGames = document.getElementById("games");
            this.divGames.style.display = 'none';

            this.divteam = document.getElementById("team");
            this.divteam.style.display = 'none';

            this.divtoparti = document.getElementById("informa");
            this.divtoparti.style.display = 'block';

            this.divtoparti = document.getElementById("dateone");
            this.divtoparti.style.display = 'none';

            this.divfecha = document.getElementById("fecha");
            this.divfecha.style.display = 'none';

            this.divredparti = document.getElementById("redparti");
            this.divredparti.style.display = 'none';

            this.divubication = document.getElementById("ubication");
            this.divubication.style.display = 'none';

            this.divubication = document.getElementById("loginpage");
            this.divubication.style.display = 'none';

            var ev = event.target.getAttribute("data-id");
            console.log(ev);
            this.gamesOne = this.games[ev].partidos;

//            var nam = [];
//            for (var i = 0; i < this.games.length; i++) {
//                if ((this.games[i].partidos[0].E1 == ev) && (this.games[i].partidos[0].E2 == ev)) {
//                    app.games[indexOfItem] = nam;
//                }
//                console.log(this.games);
//            }
        },  
        login: function () {
            // https://firebase.google.com/docs/auth/web/google-signin
            // Provider
            var provider = new firebase.auth.GoogleAuthProvider();
            // How to Log In
            firebase.auth().signInWithPopup(provider)
                .then(function () {
                    console.log(firebase.auth());
                })
                .catch(function () {
                    alert("Something went wrong");
                });
            this.divHome = document.getElementById("home");
            this.divHome.style.display = 'none';

            this.divGames = document.getElementById("games");
            this.divGames.style.display = 'none';

            this.divteam = document.getElementById("team");
            this.divteam.style.display = 'none';

            this.divtoparti = document.getElementById("informa");
            this.divtoparti.style.display = 'none';

            this.divtoparti = document.getElementById("dateone");
            this.divtoparti.style.display = 'none';

            this.divfecha = document.getElementById("fecha");
            this.divfecha.style.display = 'none';

            this.divredparti = document.getElementById("redparti");
            this.divredparti.style.display = 'none';

            this.divubication = document.getElementById("ubication");
            this.divubication.style.display = 'none';

            this.divubication = document.getElementById("loginpage");
            this.divubication.style.display = 'block';
        },
        logout: function () {
            firebase.auth().signOut().then(function () {
                // Sign-out successful.
            }, function (error) {
                // An error happened.
            });
            this.divHome = document.getElementById("home");
            this.divHome.style.display = 'block';

            this.divGames = document.getElementById("games");
            this.divGames.style.display = 'none';

            this.divteam = document.getElementById("team");
            this.divteam.style.display = 'none';

            this.divtoparti = document.getElementById("informa");
            this.divtoparti.style.display = 'none';

            this.divtoparti = document.getElementById("dateone");
            this.divtoparti.style.display = 'none';

            this.divfecha = document.getElementById("fecha");
            this.divfecha.style.display = 'none';

            this.divredparti = document.getElementById("redparti");
            this.divredparti.style.display = 'none';

            this.divubication = document.getElementById("ubication");
            this.divubication.style.display = 'none';

            this.divubication = document.getElementById("loginpage");
            this.divubication.style.display = 'none';
        },
        chatpage: function () {
            this.divHome = document.getElementById("home");
            this.divHome.style.display = 'none';

            this.divGames = document.getElementById("games");
            this.divGames.style.display = 'none';

            this.divteam = document.getElementById("team");
            this.divteam.style.display = 'none';

            this.divtoparti = document.getElementById("informa");
            this.divtoparti.style.display = 'none';

            this.divtoparti = document.getElementById("dateone");
            this.divtoparti.style.display = 'none';

            this.divfecha = document.getElementById("fecha");
            this.divfecha.style.display = 'none';

            this.divredparti = document.getElementById("redparti");
            this.divredparti.style.display = 'none';

            this.divubication = document.getElementById("ubication");
            this.divubication.style.display = 'none';

            this.divubication = document.getElementById("loginpage");
            this.divubication.style.display = 'block';
        },
        sendMess: function () {
            // https://firebase.google.com/docs/database/web/read-and-write
            // Values
            var txtMensaje = document.getElementById("mensaje");
            var btnEnviar = document.getElementById("btnEnviar");
            var chatUl = document.getElementById("chatUl");

            var nombre = firebase.auth().currentUser.displayName;
            var mensaje = txtMensaje.value;

            txtMensaje.value = ""

            var post = {
                name: nombre,
                message: mensaje
            };

            var key = firebase.database().ref("chat").push().key;

            var updates = {};
            updates[key] = post;

            return firebase.database().ref("chat").update(updates);
        },
        getPosts: function () {
            firebase.database().ref("chat").on('value', function (data) {
                var posts = document.getElementById("chatUl");

                var nombre = firebase.auth().currentUser.displayName;

                posts.scrollTop = posts.scrollHeight;
                posts.innerHTML = "";
                var messages = data.val();
                for (var key in messages) {
                    var text = document.createElement("div");
                    var element = messages[key];
                    text.append(element.name, ":", " ", element.message);
                    posts.append(text);
                    posts.scrollTop = posts.scrollHeight;

                    if (nombre == element.name) {
                        text.style.background = "#2CC93E";
                        text.style.marginLeft = "50%";

                    } else
                    if (nombre != element.name) {
                        text.style.background = "236F90";
                        text.style.marginRight = "50%";

                    }
                }
                //                for (var key in messages) {
                //                    var text = document.createElement("b");
                //                    var element = messages[key];
                //
                //                    text.append(element.name, "///");
                //                    posts.append(text);
                //                }
            })
            console.log("getting posts");

        },
        //        goBack: function () {
        //            history.go(number|URL)
        //        },
    },
});
