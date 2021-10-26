use gxi::*;

pub fn nav_bar() -> StrongNodeType {
    return gxi! {
        nav [
            a ( href = "/" ) [
                span ( style = "white-space: nowrap" ) [
                    h1 [
                        Text ( value = "Gxi-rs" )
                    ]
                ]
            ],
            div ( class = "spacer" ),
            a ( href = "https://github.com/gxi-rs/gxi" ) [
                img ( height = "30", width = "30", src = "/assets/github-logo.svg", alt = "github" )
            ]
        ]
    };
}
