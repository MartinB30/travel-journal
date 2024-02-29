import React from "react";
import Header from "./Header";
import Card from "./Card";
import Data from "./data";

export default function App() {

    const card = Data.map(item => {
        return (
            <Card {...item} />
        )
    });

    return (
        <div>
            <Header />
            <section className="cards-list">
                {card}
            </section>
        </div>
    )
}