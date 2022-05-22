import ImageDisplay from './reusableComponents/ImageDisplay'

const About = () => {
  return (
    <div className="aboutPage">
      <div className="containerAbout">
        <div className="container__left">
          <ImageDisplay />
        </div>
        <div className="container__right">
          <h1>Some random text</h1>
          <p>Some more random text</p>
        </div>
      </div>
      <div className="containerAbout">
        <div className="container__left">
          <h1>Even more random text</h1>
          <p>"Hello there!" -Obi Wan Kenobi</p>
        </div>
        <div className="container__right">
          <ImageDisplay />
        </div>
      </div>
    </div>
  )
}

export default About