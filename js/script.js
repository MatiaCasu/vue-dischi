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
    albumList: [
      {
      poster:"https:\/\/www.onstageweb.com\/wp-content\/uploads\/2018\/09\/bon-jovi-new-jersey.jpg",
      title:"New Jersey",
      author:"Bon Jovi",
      genre:"Rock",
      year:"1988"
      },
      {
      poster:"https:\/\/www.onstageweb.com\/wp-content\/uploads\/2018\/09\/bon-jovi-new-jersey.jpg",
      title:"New Jersey",
      author:"Bon Jovi",
      genre:"Rock",
      year:"1988"
      },
    ]
  }
});
