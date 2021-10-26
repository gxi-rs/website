pub use components::*;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

mod home;
mod components;

fn main() {
    gxi::run(crate::home::home());
}
