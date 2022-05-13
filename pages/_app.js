<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (

    <div className="wrapper">
     
      <Component {...pageProps} />
      
    </div>

  );
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
>>>>>>> remotes/origin/master
}

export default MyApp
