
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Marcelle Weaver</title>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
    <link href="./css/styles.css" rel="stylesheet"/> 
    <link href="./css/font.css" rel="stylesheet"/>
    <link href="./css/header_footer.css" rel="stylesheet"/>
    <meta name="description" content="Hi, Marcelle Weaver's portfolio site! It shows my most recent visual art and links to my itch.io page where you can find my game projects."/>


    
    <meta property="og:Title" content="Marcelle Weaver Portfolio" />
    <meta property="og:type" content="website" />
    <meta property="og:image:type" content="image/png"/>
    <meta property="og:image" content="https://marcelleweaver.github.io/images/mech.png"/>


</head>

import React from 'react';
import ReactDOM from 'react-dom/client';
import Gallery from './App';
import './css/header_footer.css';
import './css/styles.css';
import './css/font.css';



const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <section>
    <React.StrictMode>
      <Gallery />
    </React.StrictMode>,
    </section>
  );
}
