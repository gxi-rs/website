use crate::*;

gxi! {
    pub Home {}
    render {
        Body [
            Head [
                Title ( inner_html = "gxi-rs" ),
                Meta ( name = "viewport", content = "width=device-width, initial-scale=1.0" ),
                Meta ( name = "description", content = "Cross-Platform Native Widget based Component System in Rust" ),
                Link ( rel = "stylesheet", href = "/assets/styles/home.css" )
            ],
            NavBar,
            Div ( id = "come-later" ) [
                Img ( height = 200, width = 200, src = "https://rustacean.net/assets/cuddlyferris.svg", alt = "Cuddly Ferris" ),
                H2 ( inner_html = "Site under development. Please come back later." )
            ]
        ]
    }
}
