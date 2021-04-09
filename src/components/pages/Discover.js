import React from "react";

// const style = {
//   backgroundImage: "url(https://i.imgur.com/qkdpN.jpg)"
// }

function Discover() {
    return (
        <div>
            <h1>Make New Friends</h1>
            <p>Thumbs up on any pups you'd like to meet!</p>

            <div class="card" >
                <button class="card-btn pass" data-value="pass"></button>
                <button class="card-btn pick" data-value="pick"></button>
            </div>

            <p>Made friends with { } pups so far!</p>
        </div>
    );
}

export default Discover;