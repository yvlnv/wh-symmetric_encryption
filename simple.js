const msg = "Lets meet at midnight under the c1ock"
const tokens = msg.split("")
let blocks = []
let slice = 0
const blockSize = 8

while (slice < tokens.length) {
    blocks.push(tokens.slice(slice, slice += blockSize));
}

while (blocks[blocks.length - 1].length < 8) {
    blocks[blocks.length - 1].push("a")
}

blocks = blocks.map(block => block.map(char => char.charCodeAt()))

console.log(blocks)