import React from 'react';
import { Link } from "@reach/router"

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

export default Dash;
