import logo from '../Images/FlagXpediaLogo4.PNG'

function Headers() {
    return (
    <div classname='main_body'>
      <h1 className='header' alt-text='logo'><img src={logo}/></h1>  
        <h2 className='slogan'>Do you know your flags? </h2>
    </div>
    );
  }

  export default Headers;