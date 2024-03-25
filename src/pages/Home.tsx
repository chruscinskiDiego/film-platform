import { useEffect, useState } from "react"
import * as Styles from "../styles/pages/Home"
import api from "../services/api"
import { ITop10WeeklyMovies } from "../interfaces/Home";

export function Home() {

  const[top10WeeklyMovies, setTop10WeeklyMovies] = useState<ITop10WeeklyMovies[]>([]);

  useEffect( () => {

    api.get('/trending/movie/week').then( (response) => {

      setTop10WeeklyMovies(
        response.data.results.slice(0 , 10).map((movie:ITop10WeeklyMovies) => movie)
      )

    }).catch( (err) => {

      console.log(err)

    })
  }, [])

  useEffect( () => {
    console.log(top10WeeklyMovies)
  }, [top10WeeklyMovies])

 return (
   <Styles.Container>
     <section id="presentation">
       <div className="text-wrapper">
         <h2>Bem vindo à Film Plaftorm </h2>
         <h1>O lugar perfeito para ter sempre um filme na manga!</h1>

         <p>
           Veja o que as pessoas estão curtindo com a seleção do top 10 da
           semana e pesquise por filmes para saber um pouco mais sobre eles!
         </p>
       </div>
     </section>

     <section id="movies">
       <h3>Top 10 da semana</h3>
       <div className="cards">
       </div>
     </section>
   </Styles.Container>
 )
}
