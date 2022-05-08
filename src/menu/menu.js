import MenuItem from "menu-item/MenuItem";
import Menu from "./menu.css";

import {useState} from 'react';

function Menu({startingItems}){
    return(
        <section>
            <h1>Pizzeria</h1>
            <div>
                <MenuItem 
                type={startingItems [0].type}
                price={startingItems [0].price}
                qty={startingItems [0].qty}
                />
                <MenuItem 
                type={startingItems [1].type}
                price={startingItems [1].price}
                qty={startingItems [1].qty}
                />
                <MenuItem 
                type={startingItems [2].type}
                price={startingItems [2].price}
                qty={startingItems [2].qty}
                />
            </div>
        </section>
    );
}

export default Menu;