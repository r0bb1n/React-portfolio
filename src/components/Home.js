import {Link} from 'react-router-dom'
import Button from './reusableComponents/Button'
import ImageDisplay from './reusableComponents/ImageDisplay'

const Home = () => {
    return (
      <div className="container">
          <div className="home__image">
              <ImageDisplay />
          </div>
          <div className="home__right">
              <div className="home__text">
                <h1>Welcome</h1>
                <p>Here is some info about me</p>
              </div>
              <Link to="/about">
              <Button children="Get to know more" />
              </Link>
              
          </div>
      </div>
    )
  }

export default Home