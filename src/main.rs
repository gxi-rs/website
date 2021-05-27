pub use gxi::*;

pub use components::*;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

mod home;
mod components;

fn main() {
    run::<home::Home>()
}
