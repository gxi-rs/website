use crate::nav_bar;
use gxi::{gxi, Body, Head, StrongNodeType, Text};

pub fn home() -> StrongNodeType {
    return gxi! {
        Body [
            Head [
                title [
                   Text ( value = "gxi-rs" )
                ],
                meta ( name = "viewport", content = "width=device-width, initial-scale=1.0" ),
                meta ( name = "description", content = "Cross-Platform Native Widget based Component System in Rust" ),
                link ( rel = "stylesheet", href = "/assets/home.css" )
            ],
            nav_bar(),
            div ( id = "come-later" ) [
                img ( height = "200", width = "200", src = "https://rustacean.net/assets/cuddlyferris.svg", alt = "Cuddly Ferris" ),
                h2 [
                    Text ( value = "Site under development. Please come back later." )
                ]
            ]
        ]
    };
}
