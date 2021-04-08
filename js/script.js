/*
Attraverso una chiamata ajax all’API di boolean
https://flynn.boolean.careers/exercises/api/array/music
stampiamo a schermo una card per ogni album.
BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
BONUS 2: Ordinare i dischi per anno di uscita.*/

const app = new Vue ({
  el: "#app",
  data: {
    prova: "ciao",
    albumList: ""
  },
  mounted: function(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then( (response) =>{
        this.albumList = response.data.response;
    });
  }
});
