import { tours } from '../data'
import Title from './Title'
import Tour from './Tour'

const Tours = () => {
 return (
  <section className='section tours' id='tours'>
    <Title title='fetured' subTitle='tours' />
    <div classNeme='section-center tours-center'>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} />
      })}
      </div>
    </section>  
 )
}    


export default Tours;
