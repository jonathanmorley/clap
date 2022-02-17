# NodeJS CLI parsing via WASM

## Usage

1. Install wasm-pack with `cargo install wasm-pack`
1. Compile clap with `wasm-pack build --target nodejs --features yaml`
1. Run the test with `npm test ...` (pass valid arguments to the CLI).
