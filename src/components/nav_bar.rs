use gxi::*;

gxi! {
    pub NavBar {}
    render {
        Nav [
            A ( href = "/" ) [
                Span ( style = "white-space: nowrap" ) [
                    H1 ( inner_html = "Gxi-rs" )
                ]
            ],
            Div ( class = "spacer" ),
            A ( href = "https://github.com/gxi-rs/gxi" ) [
                Img ( height = 30, width = 30, src = "/assets/images/github-logo.svg", alt = "github" )
            ]
        ]
    }
}
