

import "../components/ProjectDiv"
import { ProjectDiv, projectDesc} from "../components/ProjectDiv"
const concurrentProxy: projectDesc = {
    name: "Concurrent web proxy (C)",
    githubLink: "(Can't post this code; it was for school :))",
    description: "A concurrent HTTP proxy built from scratch in pure C using sockets and threads."+
    " Capable of handling hundreds of concurrent HTTP 1.0/1.1 GET requests."
    
}

const CHIP8: projectDesc = {
    name: "CHIP8 interpreter/ emulator (Go)",
    githubLink: "[placeholderlink]",
    description: "CHIP8 is a small, interpreted language developed for the" +
    " 1802 microprocessor. This emulator, written in Go, serves as a bytecode interpreter for the language," +
    " allowing users to run select programs."
}

const Torrent: projectDesc = {
    name: "BitTorrent Client (Go)",
    githubLink: "[placeholder]",
    description: "A minimalist, multithreaded bitTorrent client written in Go that runs as a CLI app in the terminal."
}
export function Projects(props: any) {

    return (
        <div>
            <ProjectDiv {...Torrent} />
            <ProjectDiv {...CHIP8} />
            <ProjectDiv {...concurrentProxy}/>
        </div>
    )
}