import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {

    return (

        <>

            Hello

            <div id="preloader">
                <div class="line"></div>
            </div>

            <Helmet>
                <script src="./hello.js" type="text/javascript" />
            </Helmet>

        </>

    );

}

export default App;