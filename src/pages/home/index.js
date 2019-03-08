import React from 'react';
import { Link } from "@reach/router"

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

export default Home;
