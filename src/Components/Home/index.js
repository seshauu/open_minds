import Header from '../Header'
import AboutPage from '../AboutPage'
import './index.css'

const Home = () => {
    return (
        <>
        <section id = "home">
        <div className='home_bg'>
            <div>
               <Header />
            </div>
            <div className='name_con' data-aos="fade-right" data-aos-duration="3000">
                 <h1 className='heading2'> Loading 1% of your FUTURE</h1>
                <p className = "heading1">Welcome To <br/> Tea Talks</p>
                <p className='heading3'>For Our Generation</p>
               
                <div className='chase_con'>
                    <h1 className='chase_heading'>
                        Chase Purpose.. Not Money</h1>
                </div>
              
            </div>

             
        </div>
        </section>
     
        </>
    )
}

 export default Home