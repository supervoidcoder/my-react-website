import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./card";
// proof i'm not ai: six seven
// what do you mean a single comment isn't enough to prove that?!!
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <h1 className="start">supervoidcoder</h1>
            <div className="main">
              <h1> my super coolio website </h1>
      <p>yo yo yo it's my coolio website i made in react + vite becase i forgor regular html :skull emojey:
        pardon me for the cringe :/
      </p>
                <p>Who am I?</p>
            </div>
            
            <p className="zoom yap">
                Hi! I am <a href="https://github.com/supervoidcoder/">supervoidcoder</a>, known as <a href="https://youtube.com/@greencuby">Green Cube</a> and <a href="https://scratch.mit.edu/users/scratchcode1_2_3">scratchcode1_2_3</a> on other platforms. I love programming, making games (and playing them too, heh), making animations, writing stories, and other fun tech stuff! I like to do both software and hardware-related things, though I have much more experience with software. I know my fair share of programming languages too, from Scratch, Python, JavaScript (+ React framework), to quite a bit of C++! I’ve also played around a bit in C# and Kotlin, but not that much.
            </p>
            <p className="zoom yap">
                On the hardware side of things, I’ve used Raspberry Pi's quite a bit. I own 3 Raspberry Pi’s: one Raspberry Pi 4B and two Raspberry Pi Zero 2W's. I’ve used them for stuff like a plane, a mini server, playing games with Batocera. I've also tried out micro:bit once (it was uh...) and even fixed my laptop once!
            </p>
            <p className="zoom yap">
                My first and main website is <a href="https://greencuby.com">https://greencuby.com</a>, where I post most of my tools, games, and helpful stuff, although since I wrote it when I was really young and I just keep adding stuff onto it, it's practically just an amalgamation of w3schools tutorials, inconsistencies, under construction pages, and dead links XD
                It's also cool because it has a custom domain, and isn't the default github domain ;)
                Check out all my websites and socials below!
            </p>
            <p className="zoom yap">
                If you want to contact me, the fastest way is through Scratch. I check it almost every day, so I will probably respond quickly. You can also contact me through GitHub or YouTube, but I might not respond as fast.
            </p>
            <h1 className="start">My Socials</h1>
            <div className="cards-grid">
                <Card
                    title="GitHub"
                    link="https://github.com/supervoidcoder"
                    image="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    /* wow hahahahahahah it's flaticon who would've thoguht it was hosted there */
                    description="My GitHub profile! Here I post most of my code-related things. "
                />
                <Card
                    title="YouTube"
                    link="https://youtube.com/@greencuby"
                    image="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                    /* flaticon again.... */
                    description="My YouTube channel! I make silly animations, cool programming tutorials, and even math and science videos!"
                />
                <Card
                    title="Scratch"
                    link="https://scratch.mit.edu/users/scratchcode1_2_3"
                    image="https://cdn2.scratch.mit.edu/get_image/user/67594247_60x60.png"
                    description="My Scratch profile! Check out the stuff I have made there! I'm still active! (probably the fastest way to contact me)"
                />
                { /* WHY THE HECK IS THE SCRATCH CARD NOT IN THE SAME ROW AS THE OTHERS ON MY END GRR 
                IF IT DOESN'T WORK IM GONNA PUSH NODE MODULES TO MAIN 😈😈😈😈😈😈😈*/}
            </div>
            <h1 className="start">My Websites</h1>
            <br />
            <div className="cards-grid">
                <Card
                    title="Green Cube"
                    link="https://greencuby.com"
                    image="https://greencuby.com/Green%20cube%20logo.png"
                    description="My main website. This is where I put my tools, some games, and other cool stuff. It's stuck in a maintained-but-literally-the-worst-codebase-you-can-think-of limbo."
                />
                <Card
                    title="OmniBlocks"
                    link="https://omniblocks.github.io"
                    image="https://omniblocks.github.io/images/apple-touch-icon.png"
                    description="OmniBlocks is an open-source, cross-platform, and free tech-related website. Unlike the Green Cube website, which aims to make useful tools for the average tech user/student, OmniBlocks is more focused on programming and development-related things. It's main attraction at the moment (and the most worked on feature) is the OmniBlocks IDE, a multilanguage IDE. Learn more on the website itself. There's actually not much info there yet, but there will be. (p.s) it's just a turbowarp mod for now" />
            </div>

    </>
  )
}

export default App
