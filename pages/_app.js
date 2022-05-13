import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (

    <div className="wrapper">
     
      <Component {...pageProps} />
      
    </div>

  );
}

export default MyApp
