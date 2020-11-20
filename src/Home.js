import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase4_Unrec_PC_Hero_1X_ENGLISH._CB416347023_.jpg" 
            alt="" />

            <div className="home_row">
                <Product 
                id="123"
                title="Decals Design 'Flowers Branch' Wall Sticker (PVC Vinyl, 60 cm x 90 cm),Multicolor"
                price={40}
                rating={5}
                img="https://images-na.ssl-images-amazon.com/images/I/51JfsR-upZL.jpg" 
                />
                 <Product 
                id="234"
                title="DesiDiya® 12 Stars 138 LED Curtain String Lights, Window Curtain Lights with 8 Flashing Modes Decoration for Christmas, Wedding, Party, Home, Patio Lawn Warm White (138 LED - Star)"
                price={30}
                rating={5}
                img="https://images-na.ssl-images-amazon.com/images/I/51M-0OzscIL.jpg" 
                />
            </div>
            <div className="home_row">
                <Product 
                id="312"
                title="Callas 8 Tiers Pots and Pans Organizer, Adjustable Pot Lid Holders & Pan Rack for Kitchen Counter and Cabinet, Lid Organizer for Pots and Pans with 3..."
                price={34}
                rating={5}
                img="https://images-na.ssl-images-amazon.com/images/I/61JeJUR%2B1cL._SL1188_.jpg" 
                />
                <Product 
                id="423"
                title="Callas 2-Tier Height Adjustable Microwave, Oven, Dish Rack Shelf with 4 Hooks, (Chrome | CA 1246 | 60 x 30 x 60 cm)"
                price={45}
                rating={5}
                img="https://images-na.ssl-images-amazon.com/images/I/71kyEswQayL._SL1500_.jpg" 
                />
                 <Product 
                id="543"
                title="DesiDiya® Warm White Diya/Diwali Light Curtain, String Lights with 12 Hanging Diyas, 8 Flashing Modes, Decoration Lighting, Festive Home Decor"
                price={27}
                rating={5}
                img="https://images-na.ssl-images-amazon.com/images/I/61cpsEgXqcL._SL1023_.jpg" 
                />
            </div>
            <div className="home_row">
                <Product 
                id="312"
                title="Bon Organik Disney Princess (OFFICIAL MERCHANDISE) 2 Ply Printed Cotton Cloth Face Mask Bundle For Kids (Set Of 3) (4-8Y)"
                price={34}
                rating={5}
                img="https://images-na.ssl-images-amazon.com/images/I/71o49xaJEpL._SL1500_.jpg" 
                />
            </div>
        </div>
    )
}

export default Home
