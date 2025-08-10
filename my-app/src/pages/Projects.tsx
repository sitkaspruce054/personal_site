import "../components/ProjectDiv"
import { ProjectDiv, projectDesc} from "../components/ProjectDiv"
const concurrentProxy: projectDesc = {
    name: "Concurrent web proxy (C)",
    githubLink: "(Can't post this code; it was for school :))",
    description: "A concurrent HTTP proxy built from scratch in pure C using sockets and threads."+
    " Capable of handling hundreds of concurrent HTTP 1.0/1.1 GET requests."
    
}

const Yalnix: projectDesc = {
    name: "Yalnix",
    githubLink: "[link coming soon...]",
    description: "A simple Unix-like operating system written in C."
}

const CHIP8: projectDesc = {
    name: "CHIP8 interpreter/ emulator (Go)",
    githubLink: "[link coming soon...]",
    description: "CHIP8 is a small, interpreted language developed for the" +
    " 1802 microprocessor. This emulator, written in Go, serves as a bytecode interpreter for the language," +
    " allowing users to run select programs."
}

const Torrent: projectDesc = {
    name: "BitCask",
    githubLink: "[link coming soon...]",
    description: "A minimalist implementation of the bitcask protocol in Go."
}

const GB: projectDesc = {
    name: "Gameboy Emulator (C++) (in progress :))",
    githubLink: "[link coming soon...]",
    description: "An in-progress emulator for the SM83 chip, being used here to play gameboy games :). I'm working on this to learn C++."
}

const BeatLaner: projectDesc = {
    name: "Beatlaner",
    githubLink: "[link coming soon...]",
    description: "A fusion of League of Legends and OSU! Built with Godot."
}

const Mailroom: projectDesc = {
    name: "Mailroom",
    githubLink: "[link coming soon...]",
    description: "A unified interface for residential colleges at Rice to manage student deliveries. Built with Next.js and Supabase."
}
export function Projects(props: any) {
    
    return (
        <div className="aboutFadeIn">
            <div className="projectWrapper">
            <div>
                Here are some things I've done / currently working on.
            </div>
            <ProjectDiv {...BeatLaner}/>
            <ProjectDiv {...Torrent} />
            <ProjectDiv {...CHIP8} />
            <ProjectDiv {...Yalnix}/>
            <ProjectDiv {...GB} />
            <ProjectDiv {...Mailroom} />
            </div>
        </div>
    )
}