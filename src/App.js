import React, { Component } from 'react';
import { Router, Link } from "@reach/router"

const Home = () => (
    <div>
        <h1>Homepage</h1>
        <nav role="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
        <main role="main">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat
            tellus in neque viverra, blandit venenatis nisl scelerisque. Sed tempor molestie
            nisl in ornare. In non ultricies dolor. Quisque in massa at massa tincidunt dapibus
            ac ac nunc. Sed convallis arcu eleifend porta bibendum. Ut quis magna cursus,
            condimentum nunc vitae, egestas tellus. Praesent hendrerit suscipit sem in accumsan.</p>

            <p>Nullam molestie felis eget magna commodo, ornare auctor sapien congue. Vivamus
            tristique massa nec porttitor luctus. Nullam vitae tellus id augue condimentum lacinia
            dignissim vel nunc. Praesent in justo luctus, consequat ipsum at, porta tortor. Cras
            ut metus at sapien dictum lacinia. In augue ligula, fermentum sed tempor id, malesuada
            ac magna. In vitae sem eget mi blandit consectetur. Morbi ultrices, mi viverra venenatis
            semper, neque dui viverra mi, in laoreet ante odio id enim. Vivamus imperdiet augue
            tempus venenatis tincidunt. Phasellus quis nunc ut purus tempor placerat in in enim.
            Praesent maximus aliquet velit, ut condimentum dui rutrum nec</p>
        </main>
    </div>
);

const Dash = () => (
    <div>
        <h1>Dashboard</h1>
        <nav role="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
        <main role="main">
            <p>Suspendisse interdum non leo nec lobortis. Vivamus vel risus odio. Aliquam
            auctor mauris et accumsan varius. Vestibulum pretium tellus et tellus porta,
            vitae tempor elit lacinia. Nam in turpis cursus, semper tellus sit amet, dictum
            dui. Nunc ultrices lectus ut felis ultrices, eget cursus lorem tristique.
            Quisque sit amet blandit turpis, non vulputate orci. Vivamus at blandit nibh,
            eu consectetur felis. Praesent fermentum ipsum in fringilla placerat. Phasellus
            pellentesque, lorem ac tincidunt rhoncus, ante orci porta velit, quis posuere
            nunc odio vitae enim. Nam cursus luctus lacus sed dignissim. Maecenas viverra
            blandit mauris, ac pellentesque metus dapibus in. Sed sit amet lectus dapibus,
            ornare tellus at, auctor massa. Donec faucibus venenatis nibh in vulputate.
            Phasellus et risus a nisi volutpat iaculis.</p>
        </main>
    </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Home path="/" />
            <Dash path="dashboard" />
        </Router>
      </div>
    );
  }
}

export default App;
